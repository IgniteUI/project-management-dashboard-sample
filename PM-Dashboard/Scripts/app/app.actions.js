(function ($, app) {

    'user strict';

    window.app = app || {};

    var actions = {
        filterTasks: function (columns, numColumns, tIndex) {
            var selectedElem = $('#resource-overview-table tr th'),
                taskElem = $('#project-tasks-table > tbody > tr'),
                selectedWkStart = selectedElem.eq(columns[0]).find('.igColHeader').attr('data-week-start'),
                selectedWkEnd = selectedElem.eq(columns[numColumns - 1]).find('.igColHeader').attr('data-week-end');

            tIndex = tIndex || 0;

            // FILTER TASKS BASED ON WEEK SELECTION
            taskElem.filter(function () {
                var start = $(this).find('.taskItem').attr('data-task-start'),
                    end = $(this).find('.taskItem').attr('data-task-end');

                // Show tasks that fall within the selected range of week(s)
                if ((start >= selectedWkStart && start <= selectedWkEnd) || (end >= selectedWkStart && end <= selectedWkEnd) || (selectedWkStart >= start && selectedWkStart <= end && selectedWkEnd <= end && selectedWkEnd >= start)) {
                    $(this).switchClass('hidden', 'show').show();
                } else {
                    if ($(this).prev().is(':visible') && $(this).attr('data-container') == 'true') {
                        $(this).removeClass('hidden');
                    } else {
                        // Else Hide Rows
                        $(this).switchClass('show', 'hidden').hide();
                    }
                }

                return $(this);
            }).promise().done(function () {
                // Remove Selected class from all rows and add to first visible row
                $('.task.item').removeClass('ui-iggrid-selectedcell ui-state-active');

                // If Index is 0, then collapse all rows and expand first visible row
                if (tIndex === 0) {
                    if ($('.task.item.show:eq(0)').attr('state') != 'e') {
                        $('#project-tasks-table').igHierarchicalGrid("collapse", $("#project-tasks-table tbody > tr[state=e]"));
                    }

                    $('.task.item.show:eq(0)').addClass('ui-iggrid-selectedcell ui-state-active');
                }
                // Make sure current is highlighted
                else {
                    $('.task.item:eq(' + tIndex + ')').addClass('ui-iggrid-selectedcell ui-state-active');
                }

                // Show/Hide No Task Message
                if ($("#project-tasks-table tbody > tr.task.item.show").length < 1) {
                    $('#tasklist-empty-msg').show();

                    $('#project-assignments .action.add-resource').addClass('disabled');
                } else {
                    $('#tasklist-empty-msg').hide();
                }
            });
        },
        updateProjectListDoughnutChart: function (chart, status, tasksComplete, tasksTotal, init) {
            init = init || false;
            var b;
            switch (status.toLowerCase()) {
                case 'danger':
                    b = "#FF5D43";
                    break;
                case 'warning':
                    b = "#FBA137";
                    break;
                default:
                    b = "#57d73a";
                    break;
            }
            if (!init) {
                chart.igDoughnutChart({
                    series: [{
                        name: "Project",
                        labelMemberPath: "category",
                        labelsPosition: "none",
                        valueMemberPath: "count",
                        brushes: [b, '#3d3d3d'],
                        dataSource: [
                          { "category": "Tasks Completed", "count": ~~tasksComplete },
                          { "category": "Total Tasks", "count": (~~tasksTotal - ~~tasksComplete) }
                        ]
                    }]
                });
            } else {
                chart.igDoughnutChart({
                    width: '100%',
                    height: '20px',
                    innerExtent: 60,
                    series: [{
                        isSurfaceInteractionDisabled: true,
                        name: "Project",
                        labelMemberPath: "category",
                        labelsPosition: "none",
                        valueMemberPath: "count",
                        outlines: ['#3d3d3d', '#3d3d3d'],
                        brushes: [b, '#3d3d3d'],
                        dataSource: [
                          { "category": "Tasks Completed", "count": ~~tasksComplete },
                          { "category": "Total Tasks", "count": (~~tasksTotal - ~~tasksComplete) }
                        ],
                        showTooltip: false,
                        radiusFactor: 1,
                        startAngle: 270
                    }]
                });
            }

        },
        updateResourceAssignmentDoughnutChart: function () {

            var curTaskAssignCount = $('#project-assignments-list li .hours.chart').length, a = 0, n,
                taskItem, taskAssign, hrsOnTask, hrsOnOther, hrsFree, statusBrush, selectedHrs,
                hrsOnTaskVal, hrsOnOtherVal, hrsFreeVal;

            for (a = 0; a < curTaskAssignCount; a += 1) {

                taskItem = $('#project-assignments-list li:eq(' + a + ')');
                taskAssign = $('#project-assignments-list li .hours.chart:eq(' + a + ')');
                selectedHrs = 40;

                // Check to see if current task is pending change, if so, then use changed value
                if (taskItem.attr('data-pending-changes') == 'true') {
                    hrsOnTask = ~~taskItem.find('.hrs-overview .hrs-on-task b').text();
                    hrsOnOther = ~~taskItem.find('.hrs-overview .hrs-on-other b').text();
                    hrsFree = ~~taskItem.find('.hrs-overview .hrs-free b').text();
                } else {
                    hrsOnTask = ~~taskAssign.attr('data-hrs-task');
                    hrsOnOther = Math.abs(~~taskAssign.attr('data-hrs') - hrsOnTask) + ~~taskAssign.attr('data-other');
                    hrsFree = selectedHrs - (hrsOnTask + hrsOnOther);
                }

                statusBrush = app.utils.getDisciplineBrush(taskItem.attr('data-discipline'));
                statusBrush = (hrsFree < 0) ? '#FBA137' : statusBrush;

                /*Set Initial Values for Chart*/
                hrsOnTaskVal = (hrsOnTask < 2) ? 2 : hrsOnTask;
                hrsOnOtherVal = ((selectedHrs - hrsOnTaskVal) - Math.max(0, hrsFree));
                hrsFreeVal = hrsFree;

                if ((selectedHrs - hrsOnTaskVal) < 0 || hrsOnOtherVal <= 2) {
                    hrsOnOtherVal = 2;
                    hrsFreeVal = hrsFreeVal - hrsOnOtherVal;
                    if ((selectedHrs - hrsOnTaskVal) <= 1) {
                        n = ((selectedHrs - hrsOnTaskVal) < 1) ? 2 : 0;
                        hrsOnOtherVal = hrsOnOtherVal - (Math.abs(selectedHrs - hrsOnTaskVal) + n);
                    }
                }

                // If Task Hours is 0 then disable subtract hours button
                if (~~taskItem.find('.hrs-on-task b').text() === 0) {
                    taskItem.find('.subtract-hrs').addClass('disabled');
                }

                taskAssign.igDoughnutChart({
                    width: '100%',
                    // height: '60px', // Might need to provide a height
                    innerExtent: 80,
                    series: [{
                        isSurfaceInteractionDisabled: true,
                        name: "Resource",
                        labelMemberPath: "category",
                        labelsPosition: "none",
                        valueMemberPath: "count",
                        outlines: [statusBrush, '#767676', '#dddddd'],
                        brushes: [statusBrush, '#767676', '#dddddd'],
                        dataSource: [
                          { "category": "Hrs On Project", "count": hrsOnTaskVal },
                          { "category": "Hrs On Other", "count": hrsOnOtherVal },
                          { "category": "Hrs Free", "count": hrsFreeVal }
                        ],
                        showTooltip: false,
                        radiusFactor: 1,
                        startAngle: 270
                    }]
                });
            }
        }
    };

    window.app.actions = actions;

}(jQuery, window.app || {}));
