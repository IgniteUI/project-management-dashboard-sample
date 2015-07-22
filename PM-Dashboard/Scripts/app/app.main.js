(function ($, app) {

    'use strict';
    if (!Modernizr.canvas) {
        $('#ie8-alert').fadeIn(1200);
    } else {
        $(window).resize(app.utils.debounce(function () {
            app.utils.resizeProjectOverview();
            app.utils.resizeResourceTaskAllocationLists(); // Resize Project Task List and Assigned Resources List Heights
        }, 500));

        $(function () {
            /* Initialize Custom Scrollbar on Navigation */
            $('#pm-navigation').mCustomScrollbar({
                theme: "dark",
                axis: 'y'
            });

            // var tempDate = new Date(); // Retrieve Today's Date
            var tempDate = app.utils.parseDate('2015-07-07 12:57:00'), // Set Fake Date for Today
                tempDateObj = new Date('07/07/2015 12:57:00');
            var projectCount = projects.length;

            var projectList = new app.viewmodels.projectViewModel(projects);
            ko.applyBindings(projectList, document.getElementById("pm-navigation"));

            var assignmentTaskList = new app.viewmodels.AssignmentResourceViewModel(employees, $('#pm-navigation .projects.current li:eq(0)').attr('data-projectid'));
            ko.applyBindings(assignmentTaskList, document.getElementById("project-assignments-list-container"));

            $('#pm-navigation .current.projects li:eq(0)').addClass('active');

            // Find Index of Current Project within Data
            var selectedProjected = ~~$('#pm-navigation .current.projects li:eq(0)').attr('data-projectid');
            var currentProject = $.map(projects, function (value, key) {
                if (value.project_id == selectedProjected) {
                    return key;
                }
            });

            var projectDetails = new app.viewmodels.projectDetailsViewModel(projects[currentProject]);
            ko.applyBindings(projectDetails, document.getElementById("headline"));
            ko.applyBindings(projectDetails, document.getElementById("details"));

            /* LOOPS THROUGH EACH PROJECT AND GENERATE CHART */
            var curProjectCount = $('.projects li .doughnut').length, p = 0,
                projectID, proj, tasksTtl, tasksComplete;

            for (p = 0; p < curProjectCount; p += 1) {

                proj = $('.projects li .doughnut:eq(' + p + ')');
                tasksTtl = proj.attr('data-task-total');
                tasksComplete = proj.attr('data-tasks-complete');

                // Initialize Project List Doughnut Charts
                app.actions.updateProjectListDoughnutChart(proj, proj.attr('data-status'), tasksComplete, tasksTtl, true);
            }

            // Project Management Navigation:::Set Today Date Info
            var hours = tempDateObj.getHours(), minutes = tempDateObj.getMinutes(),
                ampm = hours >= 12 ? 'PM' : 'AM';

            hours = hours % 12;
            hours = hours ? hours : 12;
            minutes = minutes < 10 ? ('0' + minutes) : minutes;

            $('#pm-navigation .date.today time').attr('datetime', tempDateObj.getFullYear() + '-' + ("0" + (tempDateObj.getMonth() + 1)).slice(-2) + '-' + ("0" + tempDateObj.getDate()).slice(-2) + " " + ("0" + tempDateObj.getHours()).slice(-2) + ":" + ("0" + tempDateObj.getMinutes()).slice(-2) + ":" + ("0" + tempDateObj.getSeconds()).slice(-2));
            $('#pm-navigation .date.cell').html((tempDate.getMonth() + 1) + '/' + tempDate.getDate()).siblings('.time.cell').html(hours + ':' + minutes + ' ' + ampm + ' EST');

            // Initialize Employee Team Directory
            var employeeDirectory = new app.viewmodels.EmployeeDirectoryViewModel(employees);
            ko.applyBindings(employeeDirectory, document.getElementById("pm-team-navigation"));

            // INITIALIZE: Call Utility function to generate Project Overview
            app.utils.generateProjectOverview($('#resource-overview-table'), resourceOverview[selectedProjected], { "assignmentTaskList": assignmentTaskList, "employeeDirectory": employeeDirectory, "initJS": false });
            
            // Fire off After Render Function to Initialize certain elements
            app.utils.renderAfterProjectOverview();

            /* Task Init: Set Discipline Color Column Width */
            $("#project-tasks-table > colgroup").prepend('<col style="width: 10px;">'); // Add col to colgroup for width

            // Team Directory Filter: Force Blur on Select Change in order to keep design consistent
            $('select').on('change', function (e) {
                e.preventDefault();
                $(this).blur();
            });

            /***
                PM-DASH INTERACTIONS
            ***/

            // Project Management Navigation:::Expansion/Collapsing
            $('.btn-expand').on('click touchstart', function (e) {
                e.preventDefault();
                if ($('#pm-navigation').hasClass('expanded')) {
                    $('#pm-navigation').removeClass('expanded');
                    // $('#headline .btn-expand').removeClass('expanded');
                } else {
                    $('#pm-navigation').addClass('expanded');
                    // $('#headline .btn-expand').addClass('expanded');
                }
            });

            // Project Management Navigation:::Project Selection
            $('#pm-navigation').on('click', '.projects li', function () {
                var ps = $(this);
                $('.loading').fadeIn('fast', function () {
                    $('#pm-navigation').switchClass('expanded', 'collapsed'); // collapse navigation

                    $('#project-assignments .btn-group .action.undo,#project-assignments .btn-group .action.approve').addClass('disabled'); // Disable Undo and Approve Buttons

                    var pSelect = $('#pm-navigation .projects li'), current = ps;
                    pSelect.removeClass('active');
                    current.addClass('active');

                    selectedProjected = ~~current.attr('data-projectID');
                    currentProject = $.map(projects, function (value, key) {
                        if (value.project_id == selectedProjected) {
                            return key;
                        }
                    });

                    // Update Tasks List and Current Selection
                    $("#project-tasks-table").igHierarchicalGrid("destroy"); // Needed to change dataSource when initializing with MVC Helper
                    $("#project-tasks-table").igHierarchicalGrid({
                        dataSource: taskList[selectedProjected],
                        responseDataKey: "tasks",
                        dataSourceType: "json",
                        autoGenerateColumns: false,
                        enableHoverStyles: true,
                        alternateRowStyles: false,
                        primaryKey: "id",
                        columns: [
                            { key: "id", headerText: "Task ID", dataType: "number", hidden: true },
                            {
                                key: "name", headerText: "Task", dataType: "string", formatter: function (val, record) {
                                    return '<div class="taskItem" data-task-end="' + record.endDate + '" data-task-start="' + record.startDate + '"><span class="taskname ' + record.flag + '" data-category="' + record.discipline.toLowerCase().replace(/\+|\s/g, '-') + '">' + val + ' <small>(# ' + record.id + ')</small></span><span class="enddate">' + Resources.TaskProjectedEndLabel + ' ' + (app.utils.parseDate(record.endDate).getMonth() + 1) + '/' + app.utils.parseDate(record.endDate).getDate() + '</span><span class="hours">' + record.hours + ' <span class="visible-lg-inline">' + Resources.TaskHoursLabel + '</span><span class="visible-md-inline visible-sm-inline visible-xs-inline">' + Resources.TaskHrsLabel + '</span></span></div>';
                                }
                            },
                            { key: "flag", headerText: "Flag", dataType: "string", hidden: true },
                            { key: "discipline", headerText: "Discipline", dataType: "string", hidden: true },
                            { key: "endDate", headerText: "End Date", dataType: "string", hidden: true },
                            { key: "startDate", headerText: "Start Date", dataType: "string", hidden: true },
                            { key: "hours", headerText: "Hours", dataType: "number", hidden: true }
                        ],
                        columnLayouts: [
                            {
                                key: "assets",
                                autoGenerateColumns: false,
                                enableHoverStyles: false,
                                showHeader: false,
                                showFooter: false,
                                alternateRowStyles: false,
                                columns: [
                                { key: "type", headerText: "Type", dataType: "string", columnCssClass: 'file-type', formatter: function (val) { return '<i class="icon-sm icon-' + val + '"></i>'; } },
                                { key: "name", headerText: "Asset", dataType: "string", columnCssClass: 'task-name', formatter: function (val) { return val; } },
                                { key: "url", headerText: "URL", dataType: "string", formatter: function (val) { return '<small>(<a href="' + val + '" target="_blank">' + Resources.TaskViewFile + '</a>)</small>'; } }
                                ]
                            }
                        ],
                        autoFormat: 'dateandnumber',
                        showFooter: false,
                        showHeader: false,
                        rowsRendered: app.utils.taskListRowsRendered,
                        rowExpanding: app.utils.taskListRowsExpanding
                    });
                    /* Task Init: Set Discipline Color Column Width */
                    $("#project-tasks-table > colgroup").prepend('<col style="width: 10px;">'); // Add col to colgroup for width

                    projectDetails.updateProjDetailsDisplay(projects[currentProject]); // Update Project Details Display

                    // Update Assigned Resource List
                    assignmentTaskList.generateList(employees, selectedProjected);

                    // Call Utility to Generate Resource Overview
                    app.utils.generateProjectOverview($('#resource-overview-table'), resourceOverview[selectedProjected], { "assignmentTaskList": assignmentTaskList, "employeeDirectory": employeeDirectory, 'projectSelect': true });
                    // Fire off After Render Function to Initialize certain elements
                    app.utils.renderAfterProjectOverview();

                    app.utils.resizeResourceTaskAllocationLists(); // Resize Project Task List and Assigned Resources List Heights

                    // Checkpoint to see if current week or beyond
                    // If Today is after the end date, then disable add button
                    if ($("#project-tasks-table tbody > tr.task.item.show").length == 0 || $("#project-tasks-table tbody > tr.task.item.show:eq(0)").find('.taskItem').attr('data-task-end') < $('#pm-navigation .date.today time').attr('datetime')) {
                        $('#project-assignments .action.add-resource').addClass('disabled');
                    } else { $('#project-assignments .action.add-resource').removeClass('disabled'); }

                    $('.loading').delay(500).fadeOut(1300); // Fade Out Load Screen
                });

            });

            // Resource Overview:::Hide/Show Help
            $('#resource-overview .action.help').on('click', function (e) {
                e.preventDefault();
                $('#legend-help').slideToggle(750);
            });


            // Tasks List:::Expand/Collapse Task Item
            $('#project-tasks-table').on('click', 'tbody tr.task.item', function (e) {
                e.preventDefault();
                $('#project-assignments .btn-group .action.undo,#project-assignments .btn-group .action.approve').addClass('disabled'); // Disable Undo and Approve Buttons

                $('.task.item').removeClass('ui-iggrid-selectedcell ui-state-active');
                $(this).addClass('ui-iggrid-selectedcell ui-state-active');


                var selectedRowIndex = $(this).index('.task.item'),
                    parentGrid = $('#project-tasks-table');

                // If the selected row's state isn't expanded, then collapse all rows except selected
                if ($("#project-tasks-table tbody > tr.task.item:eq(" + selectedRowIndex + ")").attr('state') !== 'e') {
                    // Collapse All Rows on table
                    $('#project-tasks-table').igHierarchicalGrid("collapse", $("#project-tasks-table tbody > tr[state=e]"));
                    // Expand Selected Row to Show Assets // this makes whole row clickable to expand
                    parentGrid.igHierarchicalGrid("expand", $("#project-tasks-table tbody > tr.task.item:eq(" + selectedRowIndex + ")"));
                }

                // Checkpoint to see if current week or beyond
                // If Today is after the end date, then disable add button
                if ($(this).find('.taskItem').attr('data-task-end') < $('#pm-navigation .date.today time').attr('datetime')) {
                    $('#project-assignments .action.add-resource').addClass('disabled');
                } else { $('#project-assignments .action.add-resource').removeClass('disabled'); }

                // Filter Assignment List
                assignmentTaskList.filter($("#project-tasks-table tbody > tr.task.item:eq(" + selectedRowIndex + ")").attr('data-id-fk'));
                // Update Rendering of Doughnut Chart
                assignmentTaskList.updateDoughnutChart();
                // Update Team Directory Member Available Hours
                employeeDirectory.updateAvailability(employees, $('#project-tasks-table tr.task.item:visible').index($(this)));

                // Loop through Assignment list and enable/disable employees
                var pa = 0, total = $('#project-assignments-list li').length, employeeListItems = $('#project-assignments-list li'), employeeDirectoryList = $('#project-team-list li'), idx;

                employeeDirectoryList.removeClass('disabled'); // Clean Slate, remove the disable class from entire list
                employeeDirectoryList.find('.hrs-free:contains("<b>0</b>")').parents('li').addClass('disabled'); // Disabled all team members with 0 available hours
                // Loop through assigned resources and disable on employee directory
                for (pa = 0; pa < total; pa += 1) {
                    idx = employeeListItems.eq(pa).attr('data-employee-id');
                    employeeDirectoryList.filter(function () {
                        return $(this).attr('data-employee-id') === idx;
                    }).addClass('disabled');
                }

                // If there are 6 or more people assigned to the project, disable any person not involved in project
                if ($('#resource-overview-table tbody tr').length >= 6) {
                    selectedProjected = $('#headline').attr('data-projectid');
                    currentProject = $.map(projects, function (value, key) {
                        if (value.project_id == selectedProjected) {
                            return key;
                        }
                    });
                    employeeDirectoryList.filter(function () {
                        return $.inArray($(this).attr('data-employee-id'), projects[currentProject].employees) == -1;
                    }).addClass('disabled');
                }
            });

            // Init Task Resource Assignment Selector
            var assignmentSelector = $('#project-assignments-list-container');

            // Task Resource Assignment:::Toggle Contact Info
            assignmentSelector.on('click', 'li .action-toggle-contact', function (e) {
                e.preventDefault();
                if (!$(this).parents('li').hasClass('disabled')) {
                    var imgWidth = $(this).siblings('img').outerWidth() - 6;
                    if ($(this).siblings('.contact').outerWidth() > 0) {
                        // Animate contact bar
                        $(this).siblings('.contact').find('span').animate({ opacity: 0 }, 500).parents('.contact').animate({
                            width: '0',
                            'padding-left': '0px'
                        }, 1000).removeClass('expanded');

                        $(this).find('span').switchClass('glyphicon-minus-sign', 'glyphicon-info-sign');
                    } else {
                        // Clone element to obtain true width and remove
                        var el = $(this), elem = el.siblings('.contact').clone().css({ "display": "inline", "height": "auto", "width": "100%" }).find('span').appendTo('body');
                        var width = elem.css('width');
                        elem.remove();
                        // Animate contact bar
                        $(this).siblings('.contact').animate({
                            width: (~~width.replace('px', '') + 10) + 'px',
                            'padding-left': (imgWidth - 10) + 'px'
                        }, 1000).find('span').animate({ opacity: 1 }, 2000).parents('.contact').addClass('expanded');

                        $(this).find('span').switchClass('glyphicon-info-sign', 'glyphicon-minus-sign');
                    }
                }
            });

            // Task Resource Assignment:::Increase/Decrease Hrs
            assignmentSelector.on('click', 'li .action-adjust-hrs a', function (e) {
                e.preventDefault();
                if (!$(this).hasClass('disabled') && !$(this).parents('li').hasClass('disabled') && !$(this).hasClass('disabled') && !$(this).parents('li').hasClass('past-week')) {

                    var action = $(this).attr('class'),
                        parentListItem = $(this).parents('li'),
                        siblingElem = $(this).parents('.action-adjust-hrs').next('div'),
                        thisChart = $(this).parents('li').children('.hours.chart'),
                        val, statusBrush, selectedHrs, hrsOnTask, hrsOnTaskVal, hrsOnOther, hrsOnOtherVal, hrsFree, hrsFreeVal, n;

                    statusBrush = app.utils.getDisciplineBrush($(this).parents('li').attr('data-discipline'));
                    selectedHrs = 40;

                    // If action is Add hours, then adjust values
                    if (action == 'add-hrs') {
                        siblingElem.find('.hrs-on-task b').html(function (i, v) {
                            return ~~v + 1;
                        });
                        siblingElem.find('.hrs-free b').html(function (i, v) {
                            val = ~~v - 1;
                            if (val < 0) { $(this).parents('li').addClass('warning'); }
                            return val;
                        });

                        if (~~siblingElem.find('.hrs-on-task b').text() > 0) {
                            $(this).siblings('.subtract-hrs').removeClass('disabled');
                        }

                        $(this).siblings('.subtract-hrs').removeClass('disabled');
                    }
                        // else If action is Subtract hours, then adjust values
                    else if (action == 'subtract-hrs') {

                        siblingElem.find('.hrs-on-task b').html(function (i, v) {
                            return ((~~v - 1 >= 0) ? ~~v - 1 : 0);
                        });
                        siblingElem.find('.hrs-free b').html(function (i, v) {
                            val = ~~v + 1;
                            if (val >= 0) { $(this).parents('li').removeClass('warning'); }
                            return val;
                        });

                        if (~~siblingElem.find('.hrs-on-task b').text() === 0) {
                            $(this).addClass('disabled');
                        }
                    }

                    hrsOnTask = ~~siblingElem.find('.hrs-on-task b').text();
                    hrsOnOther = ~~siblingElem.find('.hrs-on-other b').text();
                    hrsFree = ~~siblingElem.find('.hrs-free b').text();
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

                    // Update Assignment Resource Dougnut Chart
                    thisChart.igDoughnutChart({
                        series: [{
                            name: "Resource",
                            outlines: [statusBrush, '#767676', '#dddddd'],
                            brushes: [statusBrush, '#767676', '#dddddd'],
                            dataSource: [
                                { "category": "Hrs On Project", "count": hrsOnTaskVal },
                                { "category": "Hrs On Other", "count": hrsOnOtherVal },
                                { "category": "Hrs Free", "count": hrsFreeVal }
                            ]
                        }]
                    });

                    // Change Pending Changes Flag depending on values -- if values return to base then remove flag, else show
                    if (~~siblingElem.find('.hrs-on-task b').text() == ~~parentListItem.find('.hours.chart').attr('data-hrs-task')) {
                        parentListItem.attr('data-pending-changes', 'false');
                    } else { parentListItem.attr('data-pending-changes', 'true'); }
                    // Enable/Disable Approve and Undo buttons based on pending changes
                    if ($('#project-assignments-list li[data-pending-changes="true"]').length > 0) {
                        $('#project-assignments header a').removeClass('disabled');
                    } else {
                        $('#project-assignments header a').addClass('disabled');
                    }

                }
            });

            // Task Resource Assignment:::Approve
            $('#project-assignments header a.action.approve').on('click', function (e) {
                e.preventDefault();
                // declare vars outside of loop
                var changesPending = $('#project-assignments-list li[data-pending-changes="true"]').length,
                    pendingAssignment = $('#project-assignments-list li[data-pending-changes="true"]:visible'),
                    hrsOnTask, hrsOnProject, other, pID = $('#headline').attr('data-projectid'), hrsChange,
                    numberOfProjects = projects.length, numberOfEmployees = employees.length, dataHrsTask, hrsFree,
                    eID, tID, edate, sdate, c = 0, p = 0, t = 0, o = 0, w = 0, taskListSelector, curProjSelector,
                    cTaskCheck, curProjWkSelector, curProjectWeeks, curProjectNumWeeks,
                    employeeName, employeeDiscipline;

                if (!$(this).hasClass('disabled')) {

                    $('.loading').fadeIn('fast', function () {

                        // Loop through all items that have data-pending-changes set to true and save new data
                        for (c = 0; c < changesPending; c += 1) {

                            eID = pendingAssignment.eq(c).attr('data-employee-id');
                            tID = pendingAssignment.eq(c).attr('data-task-id');
                            other = pendingAssignment.eq(c).find('.hours.chart').attr('data-other');
                            edate = pendingAssignment.eq(c).attr('data-task-end');
                            sdate = pendingAssignment.eq(c).attr('data-task-start');

                            employeeName = pendingAssignment.eq(c).find('.name').text();
                            //employeeDiscipline = pendingAssignment.eq(c).find('.member span:eq(2)').text();
                            employeeDiscipline = pendingAssignment.eq(c).attr("data-discipline");


                            // Get Current Project Details
                            curProjSelector = projects.filter(function (p) {
                                return p.project_id == pID;
                            });

                            // Get Current Project Week Details
                            curProjectWeeks = resourceOverview[pID].weeks;
                            curProjectNumWeeks = curProjectWeeks.length;

                            // Get Project Task Details
                            taskListSelector = taskList[pID].tasks.filter(function (t) {
                                return t.id == tID;
                            });

                            // Get Current Employee
                            var curEmployee = employees.filter(function (e) {
                                return e.employee_id == eID;
                            });

                            // Get All Tasks for current week for current project
                            var currentTasks = curEmployee[0].tasks.filter(function (t) {
                                return t.end_date == edate && t.project_id == pID;
                            });
                            // Get All Tasks for current week not for this project
                            var otherTasks = curEmployee[0].tasks.filter(function (t) {
                                return t.end_date == edate && t.project_id != pID;
                            });

                            // If Item is pending removal, then
                            if (pendingAssignment.eq(c).hasClass('disabled')) {
                                dataHrsTask = ~~pendingAssignment.eq(c).find('.hours.chart').attr('data-hrs-task');
                                hrsOnTask = ~~pendingAssignment.eq(c).find('.hours.breakdown .hrs-on-task b').text();
                                hrsOnProject = (hrsOnTask - ~~pendingAssignment.eq(c).find('.hours.chart').attr('data-hrs-task')) + ~~pendingAssignment.eq(c).find('.hours.chart').attr('data-hrs');
                                hrsChange = hrsOnTask - pendingAssignment.eq(c).find('.hours.chart').attr('data-hrs-task');
                                hrsFree = 40 - (~~hrsOnProject + ~~other);

                                /******
                                    REMOVE HOURS FROM DATA
                                ******/
                                // Update Hours for all tasks during current week on current project
                                for (t = 0; t < currentTasks.length; t += 1) {
                                    currentTasks[t].hrs_on_project += -~~dataHrsTask;
                                    currentTasks[t].hrs_total += -~~dataHrsTask;

                                    // Default the status to 'ok' on all tasks this week on this project
                                    if (taskList[pID].tasks.filter(function (t) {
                                        return t.endDate == edate && $.inArray(eID, t.resources) != -1;
                                    }).length > 0) {
                                        taskList[pID].tasks.filter(function (t) {
                                            return t.endDate == edate && $.inArray(eID, t.resources) != -1;
                                        })[t].flag = 'ok';
                                        $('#project-tasks-table .task.item[data-id=' + currentTasks[t].task_id + '] .taskname').attr('class', 'taskname'); // Remove Status class
                                    }
                                }
                                // Remove Employee ID from Task Details
                                var eIDX = taskListSelector[0].resources.indexOf(eID);
                                taskListSelector[0].resources.splice(eIDX, 1);

                                // Remove Task ID from Employee details
                                curEmployee[0].tasks = curEmployee[0].tasks.filter(function (t) {
                                    return t.task_id != tID;
                                });

                                var numOfProjectTasks = curEmployee[0].tasks.filter(function (t) {
                                    return t.project_id == pID;
                                }).length;

                                // Update Hours for all tasks during current week not on current project
                                for (o = 0; o < otherTasks.length; o += 1) {
                                    otherTasks[o].hrs_on_other += -~~dataHrsTask;
                                    otherTasks[o].hrs_total += -~~dataHrsTask;

                                    if (taskList[otherTasks[o].project_id].tasks.filter(function (t) {
                                        return t.endDate == edate && t.id == otherTasks[o].task_id && $.inArray(eID, t.resources) != -1;
                                    }).length > 0) {
                                        taskList[otherTasks[o].project_id].tasks.filter(function (t) {
                                            return t.endDate == edate && t.id == otherTasks[o].task_id && $.inArray(eID, t.resources) != -1;
                                        })[0].flag = 'ok';
                                    }
                                }


                                // Check if employee doesn't have any tasks from the project remove from project
                                if (numOfProjectTasks <= 0) {

                                    // Remove Employee from All Weeks
                                    // Update All Projects for Current week
                                    for (p = 0; p < numberOfProjects; p += 1) {
                                        // If Week Data Exists for Current project, continue with update
                                        if (resourceOverview[projects[p].project_id].weeks.length > 0) {
                                            curProjWkSelector = resourceOverview[projects[p].project_id].weeks.filter(function (w) {
                                                return w.endDate == edate;
                                            });
                                            if (curProjWkSelector.length > 0) {
                                                curProjWkSelector = curProjWkSelector[0].resources.filter(function (r) {
                                                    return r.employeeID == eID;
                                                });
                                                if (projects[p].project_id != pID && curProjWkSelector.length > 0) { curProjWkSelector[0].hours[0].other += -~~dataHrsTask; }
                                            }
                                        }

                                        // Loop through project weeks, and Remove Current Employee
                                        for (w = 0; w < curProjectNumWeeks; w += 1) {
                                            curProjectWeeks[w].resources = curProjectWeeks[w].resources.filter(function (r) { return r.employeeID != eID; });
                                        }
                                    }

                                    // Remove from project ID from employee
                                    curEmployee[0].projects.splice(curEmployee[0].projects.indexOf(pID), 1);

                                    // Remove from employee ID from Project
                                    curProjSelector[0].employees.splice(curProjSelector[0].employees.indexOf(eID), 1);

                                } else {
                                    // Default Weekly Overview Totals
                                    // Update Weekly Total for Every Project for Current Week

                                    for (p = 0; p < numberOfProjects; p += 1) {
                                        // If Week Data Exists for Current project, continue with update
                                        if (resourceOverview[projects[p].project_id].weeks.length > 0) {
                                            curProjWkSelector = resourceOverview[projects[p].project_id].weeks.filter(function (w) {
                                                return w.endDate == edate;
                                            });

                                            if (curProjWkSelector.length > 0) {
                                                curProjWkSelector = curProjWkSelector[0].resources.filter(function (r) {
                                                    return r.employeeID == eID;
                                                });
                                                if (projects[p].project_id == pID) {
                                                    curProjWkSelector[0].hours[0].worked += -~~dataHrsTask;
                                                    curProjWkSelector[0].hours[0].planned += -~~dataHrsTask;
                                                }
                                                if (projects[p].project_id != pID && curProjWkSelector.length > 0) {
                                                    curProjWkSelector[0].hours[0].other += -~~dataHrsTask;
                                                }
                                            }
                                        }
                                    }

                                }

                                // Find Project, Task and Employee IDs to pass to removal task
                                assignmentTaskList.removeResourceAssignment($('#headline').attr('data-projectid'), pendingAssignment.eq(c).attr('data-task-id'), pendingAssignment.eq(c).attr('data-employee-id'));

                                $('#project-team-list li[data-employee-id=' + pendingAssignment.eq(c).attr('data-employee-id') + ']').removeClass('disabled');

                                curProjSelector[0].hours_planned += -~~dataHrsTask; // Add the New hours to the total hours of project
                                curProjSelector[0].budget_projected = (curProjSelector[0].hours_planned + curProjSelector[0].hours_overtime) * 150.00; // Get new projected budget based off of new total Planned Hours + overtime hours * the rate of $150/hr

                                /*Project end date*/
                                var curProjEndDate = new Date(curProjSelector[0].end_date).getDate();
                                var adjHrs = (curProjSelector[0].hours_planned + curProjSelector[0].hours_overtime)
                                var adjDays = (adjHrs - curProjSelector[0].hours_budget) / 8;
                                adjDays = Math.ceil(adjDays);
                                curProjSelector[0].projected_end_date = curProjSelector[0].end_date.replace(/\-(\d{2})\s/g, '-' + (curProjEndDate + adjDays) + ' ');


                                // Determine and Set Status of Project
                                if (curProjSelector[0].hours_overtime > 0 && curProjSelector[0].budget_projected > curProjSelector[0].budget) {
                                    curProjSelector[0].status = 'danger';
                                } else if (curProjSelector[0].hours_planned > curProjSelector[0].hours_budget) {
                                    curProjSelector[0].status = 'warning';
                                } else {
                                    curProjSelector[0].status = 'ok';
                                }
                            }
                                // ELSE, ADDING NEW ASSIGNMENT/NEW TEAM MEMBER OR EDITING EXISTING ASSIGNMENT
                            else {
                                dataHrsTask = ~~pendingAssignment.eq(c).find('.hours.chart').attr('data-hrs-task');
                                hrsOnTask = ~~pendingAssignment.eq(c).find('.hours.breakdown .hrs-on-task b').text();
                                hrsOnProject = (hrsOnTask - ~~pendingAssignment.eq(c).find('.hours.chart').attr('data-hrs-task')) + ~~pendingAssignment.eq(c).find('.hours.chart').attr('data-hrs');
                                hrsChange = hrsOnTask - pendingAssignment.eq(c).find('.hours.chart').attr('data-hrs-task');
                                hrsFree = 40 - (~~hrsOnProject + ~~other);

                                pendingAssignment.eq(c).attr('data-pending-changes', 'false');
                                pendingAssignment.eq(c).find('.hours.chart').attr('data-hrs-task', hrsOnTask);
                                pendingAssignment.eq(c).find('.hours.chart').attr('data-hrs', hrsOnProject);


                                /******
                                    SAVE DATA
                                ******/
                                cTaskCheck = taskList[pID].tasks.filter(function (t) {
                                    return t.endDate == edate && $.inArray(eID, t.resources) != -1;
                                });
                                // Update Hours for all tasks during current week on current project
                                for (t = 0; t < currentTasks.length; t += 1) {
                                    if (currentTasks[t].task_id == tID) {
                                        currentTasks[t].hrs_on_task = hrsOnTask;
                                    }
                                    currentTasks[t].hrs_on_project = hrsOnProject;
                                    currentTasks[t].hrs_total += hrsChange;

                                    taskList[pID].tasks.filter(function (t) {
                                        return t.endDate == edate && $.inArray(eID, t.resources) != -1;
                                    })[t].flag = 'ok';


                                    $('#project-tasks-table .task.item[data-id=' + currentTasks[t].task_id + '] .taskname').attr('class', 'taskname'); // Remove Status class
                                }
                                // Update Hours for all tasks during current week not on current project
                                // Loops through each task this week for employee
                                for (o = 0; o < otherTasks.length; o += 1) {
                                    otherTasks[o].hrs_on_other += hrsChange;
                                    otherTasks[o].hrs_total += hrsChange;

                                    if (taskList[otherTasks[o].project_id].tasks.filter(function (t) {
                                        return t.endDate == edate && t.id == otherTasks[o].task_id && $.inArray(eID, t.resources) != -1;
                                    }).length > 0) {
                                        taskList[otherTasks[o].project_id].tasks.filter(function (t) {
                                            return t.endDate == edate && t.id == otherTasks[o].task_id && $.inArray(eID, t.resources) != -1;
                                        })[0].flag = 'ok';
                                    }
                                }

                                // Save to Tasks
                                if (pendingAssignment.eq(c).hasClass('addition')) {
                                    // Add New Assignment into Employee Task Array
                                    curEmployee[0].tasks.push({
                                        "start_date": sdate,
                                        "end_date": edate,
                                        "project_id": ~~pID,
                                        "task_id": ~~tID,
                                        "hrs_on_task": ~~hrsOnTask,
                                        "hrs_on_project": ~~hrsOnProject,
                                        "hrs_on_other": ~~other,
                                        "hrs_total": (~~hrsOnProject + ~~other)
                                    });

                                    // If Employee is not currently a part of the project, then add to every week
                                    // If Project ID isn't within Employee's project array, then add
                                    if ($.inArray(~~pID, curEmployee[0].projects) == -1) {
                                        curEmployee[0].projects.push(~~pID); // Add Employee ID to Project

                                        // If Team Member is completely new to project, object to every week of project
                                        for (w = 0; w < curProjectNumWeeks; w += 1) {
                                            curProjectWeeks[w].resources.push({
                                                "employeeID": eID,
                                                "name": employeeName,
                                                "discipline": employeeDiscipline,
                                                "hours": [
                                                {
                                                    "worked": 0,
                                                    "planned": (curProjectWeeks[w].endDate == edate) ? ~~hrsOnProject : 0,
                                                    "other": (curProjectWeeks[w].endDate == edate) ? ~~other : 0,
                                                    "overtime": 0,
                                                    "total": 40
                                                }
                                                ]
                                            });

                                            // Make note to check to see if we need to add other hours to the other weeks (for other projects)
                                        }


                                    }
                                    // Update Weekly Hours
                                    // Loop Through Projects and Find current week and update
                                    for (p = 0; p < numberOfProjects; p += 1) {
                                        // If Week Data Exists for Current project, continue with update
                                        if (resourceOverview[projects[p].project_id].weeks.length > 0) {
                                            curProjWkSelector = resourceOverview[projects[p].project_id].weeks.filter(function (w) {
                                                return w.endDate == edate;
                                            });


                                            if (curProjWkSelector.length > 0) {
                                                curProjWkSelector = curProjWkSelector[0].resources.filter(function (r) {
                                                    return r.employeeID == eID;
                                                });
                                                if (projects[p].project_id == pID) { curProjWkSelector[0].hours[0].planned = ~~hrsOnProject } // Update Planned Hours, if current project
                                                if (projects[p].project_id != pID && curProjWkSelector.length > 0) { curProjWkSelector[0].hours[0].other += ~~hrsChange; } // Update Other hours, not current project
                                            }

                                        }
                                    }


                                    // If Employee isn't within array, then add
                                    if ($.inArray(eID, curProjSelector[0].employees) == -1) {
                                        curProjSelector[0].employees.push(eID); // Add Employee ID to Project Details
                                    }

                                    taskListSelector[0].resources.push(eID); // Add Employee ID to Task List
                                    pendingAssignment.eq(c).removeClass('addition'); // Remove Class from item

                                } else {
                                    // Update Weekly Hours
                                    // Loop Through Projects and Find current week and update
                                    for (p = 0; p < numberOfProjects; p += 1) {
                                        // If Week Data Exists for Current project, continue with update
                                        if (resourceOverview[projects[p].project_id].weeks.length > 0) {
                                            curProjWkSelector = resourceOverview[projects[p].project_id].weeks.filter(function (w) {
                                                return w.endDate == edate;
                                            });
                                            if (curProjWkSelector.length > 0) {
                                                curProjWkSelector = curProjWkSelector[0].resources.filter(function (r) {
                                                    return r.employeeID == eID;
                                                });

                                                if (projects[p].project_id == pID) { curProjWkSelector[0].hours[0].planned = ~~hrsOnProject; } // Update Planned Hours, if current project
                                                if (projects[p].project_id != pID && curProjWkSelector.length > 0) {
                                                    curProjWkSelector[0].hours[0].other += ~~hrsChange;
                                                } // Update Other hours, not current project

                                            }
                                        }
                                    }

                                }
                            }

                            // Save Off Project Detail Information
                            curProjSelector[0].hours_planned += hrsChange; // Add the New hours to the total hours of project
                            curProjSelector[0].budget_projected = (curProjSelector[0].hours_planned + curProjSelector[0].hours_overtime) * 150.00; // Get new projected budget based off of new total Planned Hours + overtime hours * the rate of $150/hr

                            /*Calculate New Projected end date*/
                            var curProjEndDate = new Date(curProjSelector[0].end_date).getDate();
                            var adjHrs = (curProjSelector[0].hours_planned + curProjSelector[0].hours_overtime)
                            var adjDays = (adjHrs - curProjSelector[0].hours_budget) / 8;
                            adjDays = Math.ceil(adjDays);
                            curProjSelector[0].projected_end_date = curProjSelector[0].end_date.replace(/\-(\d{2})\s/g, '-' + (curProjEndDate + adjDays) + ' ');


                            // Determine and Set Status of Project
                            if (curProjSelector[0].hours_overtime > 0 && curProjSelector[0].budget_projected > curProjSelector[0].budget) {
                                curProjSelector[0].status = 'danger';
                            } else if (curProjSelector[0].hours_planned > curProjSelector[0].hours_budget) {
                                curProjSelector[0].status = 'warning';
                            } else {
                                curProjSelector[0].status = 'ok';
                            }

                        }



                        $('#project-assignments header a.undo, #project-assignments header a.approve').addClass('disabled');

                        /******
                            UPDATE VIEWS POST-SAVE
                        ******/
                        var e = 0, tse = 0, taskStatusElem;
                        for (e; e < numberOfEmployees; e += 1) {
                            tse = 0;
                            taskStatusElem = employees[e].tasks.filter(function (t) {
                                return t.end_date == edate && t.hrs_total > 40;
                            });
                            if (taskStatusElem.length > 0) {
                                for (tse; tse < taskStatusElem.length; tse += 1) {
                                    taskList[taskStatusElem[tse].project_id].tasks.filter(function (t) {
                                        return t.id == taskStatusElem[tse].task_id;
                                    })[0].flag = 'warning';
                                    $('#project-tasks-table .task.item[data-id=' + taskStatusElem[tse].task_id + '] .taskname').attr('class', 'taskname warning');
                                }
                            }
                        }

                        // Loop Through Projects to check for status change
                        var proj = 0, projFilter;
                        for (proj = 0; proj < numberOfProjects; proj += 1) {
                            projFilter = taskList[projects[proj].project_id].tasks.filter(function (t) {
                                return t.flag == 'warning';
                            });
                            if (projFilter.length > 0 && projects[proj].status != 'danger' || projects[proj].budget_projected > projects[proj].budget && projects[proj].status != 'danger') {
                                projects[proj].status = 'warning';
                            } else if (projFilter.length == 0 && projects[proj].status != 'danger') {
                                projects[proj].status = 'ok';
                            }
                            // Update Project List, if current project
                            if (tempDate > app.utils.parseDate(projects[proj].start_date)) {
                                projectList.updateProject(~~projects[proj].project_id, projects[proj]);
                            }
                        }

                        var currentProject = $.map(projects, function (value, key) {
                            if (value.project_id == pID) {
                                return key;
                            }
                        });

                        // Update Project Details
                        projectDetails.updateProjDetailsDisplay(projects[currentProject]); // Update Project Details Display
                        // Update Assigned Resources
                        assignmentTaskList.generateList(employees, pID);

                        var cIdx = $('#resource-overview-table th.ui-iggrid-selectedcell.ui-state-active .igColHeader[data-week-end="' + $('#project-tasks-table .ui-iggrid-selectedcell.ui-state-active .taskItem').attr('data-task-end') + '"]').parents('th').index(),
                            tIdx = $('#project-tasks-table .ui-iggrid-selectedcell.ui-state-active').index('#project-tasks-table tr.task.item');

                        app.utils.generateProjectOverview($('#resource-overview-table'), resourceOverview[selectedProjected], { "assignmentTaskList": assignmentTaskList, "employeeDirectory": employeeDirectory, 'currentSelectionEndDate': edate, 'currentSelectionTaskID': tID, 'cIndex': cIdx, 'tIndex': tIdx });


                        // Fire off After Render Function to Initialize certain elements
                        app.utils.renderAfterProjectOverview();

                        app.utils.resizeResourceTaskAllocationLists(); // Resize Project Task List and Assigned Resources List Heights

                        // Fade Out Load Screen
                        $('.loading').delay(200).fadeOut(1300);
                    });

                }
            });



            // Task Resource Assignment:::Remove
            $('#project-assignments').on('click', '.action-remove a', function (e) {
                e.preventDefault();
                if (!$(this).parents('li').hasClass('past-week') && !$(this).parents('li').hasClass('disabled')) {
                    var changesPending = $('#project-assignments-list li[data-pending-changes="true"]').length,
                        pendingAssignment = $('#project-assignments-list li[data-pending-changes="true"]:visible'),
                        hrs, other;

                    var removeElem = $(this).parents('li');

                    removeElem.addClass('disabled').attr('data-pending-changes', 'true');

                    if ($('#project-assignments-list li[data-pending-changes="true"]').length > 0) {
                        // Check if removal of newly added resource
                        if ($(this).parents('li').hasClass('addition')) {
                            // If so, simply remove
                            $(this).parents('li').remove();
                            return false;
                        }
                        $('#project-assignments header a').removeClass('disabled');
                    } else {
                        $('#project-assignments header a').addClass('disabled');
                    }
                }
                return false;
            });

            // Task Resource Assignment:::Undo
            $('#project-assignments header a.action.undo').on('click', function (e) {
                e.preventDefault();
                if (!$(this).hasClass('disabled')) {
                    var changesPending = $('#project-assignments-list li[data-pending-changes="true"]').length,
                        assignmentItem = $('#project-assignments-list li:visible'),
                        pendingAssignment = $('#project-assignments-list li[data-pending-changes="true"]:visible'),
                        hrsOnTask, hrsOnTaskVal, hrsOnOther, hrsOnOtherVal, hrsFree, hrsFreeVal,
                        selectedHrs, hrs, other, free, statusBrush, n;

                    selectedHrs = 40;

                    // Loop through all items that have data-pending-changes set to true and return to default (last known) values
                    var c = 0;
                    for (c; c < changesPending; c += 1) {
                        if (pendingAssignment.eq(c).hasClass('addition')) {
                            // Find Project, Task and Employee IDs to pass to removal task
                            assignmentTaskList.removeResourceAssignment($('#headline').attr('data-projectid'), pendingAssignment.eq(c).attr('data-task-id'), pendingAssignment.eq(c).attr('data-employee-id'));

                            $('#project-team-list li[data-employee-id=' + pendingAssignment.eq(c).attr('data-employee-id') + ']').removeClass('disabled');
                        }
                        else {
                            hrsOnTask = ~~pendingAssignment.eq(c).find('.hours.chart').attr('data-hrs-task');
                            hrsOnOther = Math.abs(~~pendingAssignment.eq(c).find('.hours.chart').attr('data-hrs') - hrsOnTask) + ~~pendingAssignment.eq(c).find('.hours.chart').attr('data-other');
                            hrsFree = selectedHrs - (hrsOnTask + hrsOnOther);
                            statusBrush = app.utils.getDisciplineBrush(pendingAssignment.eq(c).attr('data-discipline'));
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

                            // Revert Hour Breakdown based off of last saved values
                            pendingAssignment.eq(c).attr('data-pending-changes', 'false');
                            pendingAssignment.eq(c).find('.hours.breakdown .hrs-on-task b').html(hrsOnTask);
                            pendingAssignment.eq(c).find('.hours.breakdown .hrs-on-other b').html(hrsOnOther);
                            pendingAssignment.eq(c).find('.hours.breakdown .hrs-free b').html(hrsFree);

                            // Revert Doughnut Chart based off of last saved values
                            pendingAssignment.eq(c).find('.hours.chart').igDoughnutChart({
                                series: [{
                                    name: "Resource",
                                    outlines: [statusBrush, '#767676', '#dddddd'],
                                    brushes: [statusBrush, '#767676', '#dddddd'],
                                    dataSource: [
                                        { "category": "Hrs On Project", "count": hrsOnTaskVal },
                                        { "category": "Hrs On Other", "count": hrsOnOtherVal },
                                        { "category": "Hrs Free", "count": hrsFreeVal }
                                    ]
                                }]
                            });

                            pendingAssignment.eq(c).removeClass('disabled'); // Undo Items queued for removal

                            if (~~hrsFree < 0) { pendingAssignment.eq(c).addClass('warning'); }
                            else { pendingAssignment.eq(c).removeClass('warning'); }
                        }

                    }

                    $('#project-assignments header a.undo, #project-assignments header a.approve').addClass('disabled');
                }
            });

            // Team Navigation Slide:::Expand/Collapse
            $('.action.add-resource, #project-panel #headline .action.slide-team-directory').on('click', function (e) {
                if (!$(this).hasClass('disabled')) {
                    if ($("#project-tasks-table tbody > tr.task.item.show").length == 0) {
                        $("#project-team-list li").addClass('disabled');
                    }

                    if ($(this).hasClass('slide-team-directory')) {
                        $('#pm-dashboard #pm-team-navigation').addClass('directory-view');
                    } else {
                        $('#pm-team-navigation').removeClass('directory-view');
                    }

                    var rows = $('#resource-overview-table tbody tr').length,
                        rowSelector = $('#resource-overview-table tbody tr'),
                        resources = [], r = 0;

                    for (r; r < rows; r += 1) {
                        resources.push(rowSelector.eq(r).attr('data-id'));
                    }

                    // Handles Open animation for Team Resource Selection Slide
                    if ($('#pm-team-navigation').hasClass('directory-view')) {
                        $('#project-panel #headline .action.slide-team-directory').animate({ "right": "351px", "easing": "easeInQuad" }, 50).css({ 'position': 'fixed' });
                        $('#pm-team-navigation').animate({ "right": "0px", "easing": "easeInQuad" }, 50).switchClass('collapsed', 'expanded');
                        // $('#pm-team-navigation label').animate({"right":"-20px","easing":"easeInQuad"},1000)
                        $('#pm-team-navigation label,#pm-team-navigation .action.close-team-navigation').css({ 'position': 'fixed' });
                    } else {
                        $('#pm-team-navigation').animate({
                            "right": '0px',
                            easing: "easeInQuad"
                        }, 50).switchClass('collapsed', 'expanded');
                        // $('#pm-team-navigation label').animate({"right":"-376px","easing":"easeInQuad"},1000)
                        $('#pm-team-navigation label,#pm-team-navigation .action.close-team-navigation').css({ 'position': 'fixed' });
                    }
                }
            });
            $(document).on('click', function (e) {

                if ($(e.target).closest('.action.close-team-navigation').length || !$(e.target).closest('#pm-team-navigation').length) {
                    // Hide the menus.
                    if (typeof e.target.href === 'undefined') {
                        e.preventDefault();
                    }
                    $('#pm-team-navigation label,#pm-team-navigation .action.close-team-navigation').css({ 'position': 'absolute!important' });

                    /*-351px*/
                    var teamUL = $('#pm-team-navigation'), tdWidth = teamUL.outerWidth();
                    if (teamUL.css('right') == '0px') {
                        if (teamUL.hasClass('directory-view')) {
                            $('#project-panel #headline .action.slide-team-directory').animate({ "right": "0px", "easing": "easeInQuad" }, 0).css({ 'position': 'absolute' });
                            teamUL.switchClass('expanded', 'collapsed').animate({ "right": '-' + (tdWidth + 350) + 'px', "easing": "easeInQuad" }, 0, function () {
                                $('#pm-team-navigation select').val('all').change(); // Default to All Team View
                            });
                        } else {
                            teamUL.switchClass('expanded', 'collapsed').animate({
                                "right": '-' + (tdWidth + 350) + 'px',
                                easing: "easeOutQuad"
                            }, 0, function () {
                                $('#pm-team-navigation select').val('all').change(); // Default to All Team View
                            });
                        }

                        $('#pm-team-navigation li').removeClass('selected').find('.selection-notification').css({ background: "inherit", "font-size": "0px" }).parents('li').find('.action.confirm-add').fadeOut(500); // Clear Selection
                    }
                }
                return false;
            });
            // Team Navigation Slide:::Filter List
            $('#pm-team-navigation select').on('change', function () {
                var f = $(this).val(); // retrieve filter
                if (f && f.toLowerCase() !== 'all') {
                    $('#pm-team-navigation #project-team-list li').hide().filter(function () {
                        return $(this).attr('data-discipline') == f;
                    }).fadeIn(1200);
                } else {
                    $('#pm-team-navigation #project-team-list li').hide().fadeIn(1200);
                }
                return false;
            });
            // Team Navigation Slide:::Select Resource
            $('#pm-team-navigation li').on('click', function (e) {
                var teamUL = $('#pm-team-navigation'),
                    numResourcesOnProject = $('#resource-overview-table tbody tr').length,
                    selectedEmployee = $(this).attr('data-employee-id'),
                    html = '',
                    curTaskSelector = $('#project-tasks-table tr.task.item.ui-iggrid-selectedcell.ui-state-active'),
                    isEmployeeOnProject = (($('#resource-overview-table tbody > tr[data-id=' + selectedEmployee + ']').length > 0) ? true : false);


                if (!teamUL.hasClass('directory-view') && !$(this).hasClass('disabled') && !teamUL.hasClass('directory-view')) {
                    if ($(this).hasClass('selected')) {
                        // alert('Add Resource');
                        $('#pm-team-navigation li').removeClass('selected').find('.selection-notification').css({ background: "inherit", "font-size": "0px" }).parents('li').find('.action.confirm-add').fadeOut(500); // Clear Selection

                        var hrsOnProject = $(this).attr('data-hrs'),
                            hrsOnTask = 0,
                            hrsOnOther = $(this).attr('data-other'),
                            hrsOnOtherAll = ~~hrsOnProject + ~~hrsOnOther,
                            hrsOnOtherAllVal = ((~~hrsOnOther < 4) ? 2 : ~~hrsOnOther - 2),
                            selectedHrs = 40,
                            hrsFree = ~~selectedHrs - ~~hrsOnOtherAll,
                            hrsFreeVal = ~~selectedHrs - ~~hrsOnOtherAllVal,
                            hrsOnTaskVal, hrsOnOtherVal, statusBrush;


                        $(this).addClass('disabled'); // DISABLE SELECTION WITHIN TEAM NAV
                        $('#project-assignments .action.undo, #project-assignments .action.approve').removeClass('disabled');

                        // Insert New Assignment into KO Observable Array
                        assignmentTaskList.addResourceAssignment({
                            "id": '' + $(this).attr('data-employee-id') + '',
                            "name": $(this).find('.user img').attr('alt'),
                            "discipline": $(this).attr('data-discipline'),
                            "email": $(this).attr('data-employee-email'),
                            "phone": $(this).attr('data-employee-phone')
                        }, {
                            "project_id": $('#headline').attr('data-projectid'),
                            "task_id": curTaskSelector.attr('data-id'),
                            "hrs_on_task": ~~hrsOnTask,
                            "hrs_on_project": ~~hrsOnProject,
                            "hrs_on_other": ~~hrsOnOther,
                            "start_date": curTaskSelector.find('.taskItem').attr('data-task-start'),
                            "end_date": curTaskSelector.find('.taskItem').attr('data-task-end')
                        }, (($('#resource-overview-table tbody tr[data-id*=' + ~~selectedEmployee + ']').length > 0) ? false : true));
                        assignmentTaskList.updateDoughnutChart(); // Generate Chart



                        /*CLOSE TEAM NAV*/
                        $('#project-panel #headline .action.slide-team-directory').animate({ "right": "0px", "easing": "easeInQuad" }, 1000).css({ 'position': 'absolute' });
                        teamUL.switchClass('expanded', 'collapsed').animate({ "right": "-651px", "easing": "easeInQuad" }, 0, function () {
                            $('#pm-team-navigation select').val('all').change(); // Default to All Team View
                        });
                    } else {
                        $('#pm-team-navigation li').removeClass('selected').find('.selection-notification').css({ background: "inherit", "font-size": "0px" }).parents('li').find('.action.confirm-add').fadeOut(500); // Clear Selection

                        if (numResourcesOnProject <= 6 && isEmployeeOnProject || numResourcesOnProject < 6 && $('#project-assignments-list .addition.new').length < (6 - numResourcesOnProject)) {
                            // Animate to new selection
                            $(this).addClass('selected').find('.selection-notification').css({ background: "#addfb1", "font-size": "15px" });
                            $(this).find('.action.confirm-add').fadeIn(900);
                        } else {
                            // Fire off warning message about too many resources
                            $('#legend h2 small').animate({ 'color': '#fff', 'font-size': '1em' }).animate({ 'color': '#c6c6c6', 'font-size': '0.55em' }, 1000);
                        }
                    }
                }
                return false;
            });

            // Modal Window for Task Deliverable Links
            $("#project-tasks-table").on("click", "a", function (e) {
                e.preventDefault();
                $('#asset-alert').removeClass("hidden");
            });
            // Modal Window for Task Deliverable Links
            $("#asset-alert").on("click", function (e) {
                e.preventDefault();
                if ($(e.target).closest('.modal-title a').length || !$(e.target).closest('#asset-msg-container').length) {
                    $('#asset-alert').addClass("hidden");
                }
            });

            // Hide Initial Load Screen
            $('.loading').delay(200).fadeOut(1300, function () {
                app.utils.resizeResourceTaskAllocationLists(); // Resize Project Task List and Assigned Resources List Heights
                $(this).addClass('bg-opacity85');
                return false;
            });
        });
        
    }
}(jQuery, window.app || {}));
