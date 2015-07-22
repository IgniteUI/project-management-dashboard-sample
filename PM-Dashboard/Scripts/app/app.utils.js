(function ($, Q) {
    'use strict';

    window.app = window.app || {};

    var util = {
        isInArray: function (v, arr) {
            return arr.indexOf(v) > -1;
        },
        parseDate: function (input, format) {
            format = format || 'yyyy-mm-dd'; // default format
            var parts = input.match(/(\d+)/g), fmt = {};
            // extract date-part indexes from the format
            format.replace(/(yyyy|dd|mm)/g, function (part) { fmt[part] = ((part === 'dd') ? 2 : ((part === 'mm') ? 1 : 0)); });
            return new Date(parts[fmt.yyyy], parts[fmt.mm] - 1, parts[fmt.dd]);
        },
        debounce: function (func, wait, immediate) {
            var timeout;
            return function () {
                var context = this, args = arguments;
                var later = function () {
                    timeout = null;
                    if (!immediate) { func.apply(context, args); }
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) { func.apply(context, args); }
            };
        },
        getDisciplineBrush: function (d) {
            var brush;
            switch (d.toLowerCase()) {
                case "user experience":
                    brush = '#00E6B0';
                    break;
                case "visual design":
                    brush = '#00ABBF';
                    break;
                case "project management":
                    brush = '#0060BF';
                    break;
                case "development":
                    brush = '#4729BD';
                    break;
                case "user testing":
                    brush = '#8E27B7';
                    break;
                default:
                    brush = '#4fa0b5';
                    break;
            }
            return brush;
        },
        taskListRowsRendered: function() {
            // Add discipline classes to rows
            $("#project-tasks-table tbody > tr").addClass('task item').parents('#project-tasks-table').addClass('list');
            // Get # of Rows
            var rows = $("#project-tasks-table tbody > tr.task.item"), r = 0, elem;

            // Loop through rows to add Task Category Identifier
            for (r; r < rows.length; r += 1) {
                elem = $("#project-tasks-table tbody > tr.task.item:eq(" + r + ")");
                elem.prepend('<td class="discipline ' + elem.find('.taskname').data('category') + '"></td>');
            }
        },
        taskListRowsExpanding: function (e,ui) {
            /*Accordion Functionality for Grid when clicking expand button*/
            var grid = ui.owner, expandedRows, i, t = 0;
            expandedRows = $(ui.parentrow).closest('tbody').find('tr[state=e]');
            for (t = 0; t < expandedRows.length; t += 1) {
                grid.collapse(expandedRows[t]);
            }
        },
        renderLinearGauge: function (resources, cIndex) {
            $(".linear-gauge").each(function () {

                var gauge = $(this);

                var week = gauge.data('week');
                var weekIndex = (~~gauge.data('week') - 1);
                var rowIndex = gauge.closest('tr').index();


                $(this).parent('td').addClass('gaugeRow week' + week); // Adds week class

                var data = resources.weeks[weekIndex].resources;
                var item = data[rowIndex],
                    hrs = item.hours[0],
                    ranges = [], brushes = [],
                    dangerColor = (hrs.worked > 40) ? '#FF5D43' /*Red*/ : '#FBA137'/*Yellow-Orange*/;

                //Determin Brush color Based on Discipline
                switch (item.discipline.toLowerCase()) {
                    case "user experience":
                        brushes = ['#303030', '#00E6B0', '#0D6E5C', '#FBA137', '#FF5D43'];
                        break;
                    case "visual design":
                        brushes = ['#303030', '#00ABBF', '#125B62', '#FBA137', '#FF5D43'];
                        break;
                    case "project management":
                        brushes = ['#303030', '#0060BF', '#154062', '#FBA137', '#FF5D43'];
                        break;
                    case "development":
                        brushes = ['#303030', '#4729BD', '#3A2462', '#FBA137', '#FF5D43'];
                        break;
                    case "user testing":
                        brushes = ['#303030', '#8E27B7', '#532661', '#FBA137', '#FF5D43'];
                        break;
                    default:
                        brushes = ['#303030', '#4fa0b5', '#84cde0', '#FBA137', '#FF5D43'];
                        break;
                }

                // Determine Gauge Outline Color
                var scaleOutlineColor = ((hrs.worked > 40 || hrs.planned > 40) ? dangerColor : '#262626');

                ranges.push(
                    { name: "free", startValue: 0, endValue: 40 },
                    { name: "worked", startValue: 0, endValue: (hrs.worked - hrs.overtime) },
                    { name: "planned", startValue: (hrs.worked - hrs.overtime), endValue: ((hrs.worked > hrs.planned) ? (hrs.worked - hrs.overtime) : hrs.planned) },
                    { name: "plannedOther", startValue: ((hrs.planned > (Math.abs(40 - hrs.other))) ? ((hrs.planned <= 40) ? hrs.planned : 40) : 0), endValue: ((hrs.planned > (Math.abs(40 - hrs.other))) ? (Math.abs(40 - hrs.other)) : 0) },
                    { name: "overtime", startValue: (hrs.worked - hrs.overtime), endValue: hrs.worked }
                );

                var overageSelect = $(this).siblings('.overage');
                if (hrs.worked > 40 || hrs.planned > 40) {
                    var overage = ((hrs.worked > 40) ? hrs.worked : hrs.planned) - 40;

                    overageSelect.html('<small>+</small>' + overage).removeClass('hidden');
                } else {
                    overageSelect.removeClass('hidden').addClass('hidden');
                }

               $(this).igLinearGauge({
                    height: "60px",
                    width: "100%",
                    fontBrush: 'transparent',
                    backingBrush: "transparent",
                    backingOutline: "transparent",
                    minimumValue: 0,
                    maximumValue: 40,
                    value: hrs.worked,
                    needleBrush: "white",
                    needleOutline: "#2582a9",
                    ranges: ranges,
                    transitionDuration: 1200,
                    labelInterval: 0,
                    labelExtent: 1.5, // label positioning
                    interval: 0,
                    needleBreadth: 0, // needle width
                    needleInnerExtent: 0,
                    needleInnerPointExtent: 0,
                    needleInnerPointWidth: 0,
                    needleOuterExtent: 0,
                    needleOuterPointExtent: 0,
                    needleOuterPointWidth: 0,
                    needleStrokeThickness: 0.0,
                    ticksPostInitial: 100, // over shoot the maxValue to remove tick marks
                    scaleBrush: scaleOutlineColor,
                    scaleOutline: scaleOutlineColor,
                    scaleStrokeThickness: 5,
                    scaleStartExtent: 0.025, // scale start based off of container
                    scaleEndExtent: 0.98, // scale end based of container
                    scaleInnerExtent: 0.055,
                    scaleOuterExtent: 0.65,
                    rangeBrushes: brushes
                });
            });

            /* Default Column Selection to Current Week on Load */
            // If selection index is pass, default to that week, else use "current" week
            cIndex = cIndex || $('#resource-overview-table th span div.current').parents('th').index();

            // If today is before start date (upcoming) or after end date (current/ended project)
            if (cIndex < 0) {
                cIndex = ($('#pm-navigation li.active').parents('section').hasClass('upcoming')) ? 1 : ($('#resource-overview-table th').length - 1);
            }

            cIndex += 1; // Add one to current index to include the 1st column (label)

            // Set Selected Columns
            $('#resource-overview-table td:nth-child(' + (cIndex) + '), #resource-overview-table th:eq(' + (cIndex - 1) + ')').addClass('ui-iggrid-selectedcell ui-state-active');
        },
        resizeResourceTaskAllocationLists: function () {
           if ($(window).width() > 850) {
                var resourceOverviewHeight = 267 + ($('#resource-overview-table tbody .disciplineCol').length * 31);
                var adjHeight = ($(window).height() - resourceOverviewHeight) - 120;
                $('#resource-task-allocation #project-tasks #project-tasks-table_container, #project-assignments-list-container').css({ 'height': adjHeight + 'px' });
            }

            return false;
        },
        resizeProjectOverview: function () {
            var cellWidth = 113, staticColWidth = 113, marginLeft = 0,
                selectColElem = $('#resource-overview-table .gaugeRow.ui-iggrid-selectedcell.ui-state-active'),
                hrsSelectDisplay = $('#resource-overview #resource-overview-table_scroll #totalHrsAggregate'),
                numColumns = (selectColElem.length / $('#resource-overview-table tbody tr').length) || 1,
                containerWidth = $('#resource-overview #resource-overview-table_scroll').width(),
                colSelector = $('#resource-overview-table colgroup col');


            var firstSelectedColIdx = selectColElem.eq(0).index();
            marginLeft = (cellWidth * firstSelectedColIdx);

            $('#resource-overview .mCSB_container').css({ 'width': ($('#resource-overview-table').css('width')) }); // Force width of scroll container to fix scrolling size on "quicker" resize

            // Animate HrsAggregate container to appropriate position on resize
            hrsSelectDisplay.animate({
                width: ((cellWidth * numColumns) - 4) + 'px',
                marginLeft: marginLeft + 'px'
            }, 0);

            // Resource Overview Container is wider than the table, set first column to 0 left position
            if (containerWidth >= $('#resource-overview-table').width()) {
                $('#resource-overview-table .disciplineCol').css({ 'left': '0px' }); //Force sticky column to far left
            }

            // Scroll to Location
            $('#resource-overview #resource-overview-table_scroll').mCustomScrollbar("scrollTo", (firstSelectedColIdx - 1) * cellWidth, { scrollInertia: 1000 });

            return false;
        },
        renderAfterProjectOverview: function () {
            // Initialize Hrs Bar on Resource Overview
            var cellWidth = $('#resource-overview #resource-overview-table tr td:eq(1)').outerWidth();
            var curWeek = $('#resource-overview-table tr th.ui-iggrid-selectedcell.ui-state-active').index();
            var cellOffset = $('#resource-overview #resource-overview-table th:eq(' + curWeek + ')').offset().left;

            if ($('#resource-overview #resource-overview-table tr td').length > 0) {
                $('#resource-overview #resource-overview-table_scroll').append('<div id="totalHrsAggregate"><span class="hours">40</span></div>').find('#totalHrsAggregate').css({ width: (cellWidth) + 'px', 'margin-left': (cellOffset - cellWidth) + 'px' });

                /*SAFARI Hack: Insert div into project overview to hide double-scrollbar*/
                $('#resource-overview #resource-overview-table_scroll').append('<div class="block safari-hack"></div>').find('.block.safari-hack').css({ width: $('#resource-overview #resource-overview-table').outerWidth() + 'px' });

            }

            // Animate HrsAggregate container to appropriate position on init
            $('#resource-overview #resource-overview-table_scroll #totalHrsAggregate').css({
                'width': '109px',
                'margin-left': (curWeek * 113) + 'px'
            });

            /* Initialize Custom Scrollbar on Content */
            $('#resource-overview-table_scroll').mCustomScrollbar({
                theme: "dark",
                axis: 'x',
                callbacks: {
                    whileScrolling: function () {
                        $(this).find('table .disciplineCol').css({ 'left': Math.abs(this.mcs.left) + 'px' });
                    }
                }
            });

            // If scroll is available, it will scroll to position of current week
            $('#resource-overview #resource-overview-table_scroll').mCustomScrollbar("scrollTo", (curWeek - 1) * 109);

            return false;
        },
        generateProjectOverview: function (elem, resources, vm) {
            vm.initJS = (typeof vm.initJS == 'undefined') ? true : vm.initJS; // Default var if not passed
            var columns = [];
            if (vm.initJS) {
                // Build Column Display for Resource Overview
                var igCols = [{ headerText: "Employee ID", key: "employeeID", dataType: "string", hidden: true }, { headerText: "Discipline", key: "discipline", dataType: "string", width: 113, headerCssClass: "disciplineCol", columnCssClass: "disciplineCol", formatter: function (i, v) { return "<span class=\"swatch " + v.discipline.toLowerCase().replace(" ", "-") + "\"></span>" + Resources.OverviewLabels[v.discipline.toLowerCase().replace(" ", "")] } }];

                // Set up "Today's" Date
                var tempDate = app.utils.parseDate('2015-07-07 03:57:00'); // Set Fake Date for Today

                // Loop through Project Weeks
                var c = 0, weekNum, colHeader, sDate, eDate;
                for (c = 0; c < resources.weeks.length; c += 1) {

                    weekNum = c + 1;

                    sDate = app.utils.parseDate(resources.weeks[c].startDate, 'yyyy/mm/dd');
                    eDate = app.utils.parseDate(resources.weeks[c].endDate, 'yyyy/mm/dd');

                    // Check if "Today's" date falls between project's start and end for current week iteration
                    if (tempDate > sDate && tempDate < eDate) {
                        colHeader = '<div class="igColHeader current" data-week="' + weekNum + '" data-week-end="' + resources.weeks[c].endDate + '" data-week-start="' + resources.weeks[c].startDate + '">' + (sDate.getMonth() + 1) + '/' + sDate.getDate() + '-' + (eDate.getMonth() + 1) + '/' + eDate.getDate() + ' <small style="color: #fff;">(' + Resources.OverviewCurLabel + ')</small></div>';
                    } else {
                        colHeader = '<div class="igColHeader" data-week="' + weekNum + '" data-week-end="' + resources.weeks[c].endDate + '" data-week-start="' + resources.weeks[c].startDate + '">' + (sDate.getMonth() + 1) + '/' + sDate.getDate() + '-' + (eDate.getMonth() + 1) + '/' + eDate.getDate() + '</div>';
                    }

                    // Push into Column Init Array for igGrid
                    igCols.push({
                        headerText: colHeader,
                        key: "week" + (weekNum),
                        dataType: "string",
                        width: 113,
                        template: "<div class='hidden notification overage'></div><div class='linear-gauge week" + weekNum + "' data-week='" + weekNum + "'></div>"
                    });

                }

                // If Chart Already Exists and initJS is true, destroy in order to re-build for chosen Project
                if ($("#resource-overview-table tr").length > 0 && vm.initJS) {
                    $("#resource-overview-table").igGrid("destroy");
                }

                // If initJS is set to true, then initialize igGrid with javascript
                elem.igGrid({
                    width: '100%',
                    primaryKey: "employeeID",
                    columns: igCols,
                    dataSource: resources.weeks[0].resources,
                    autoGenerateColumns: false,
                    enableHoverStyles: false,
                    autofitLastColumn: false, // this controls whether the last column will auto fit to fill rest of grid
                    rowsRendered: function () {
                        app.utils.renderLinearGauge(resources, vm.cIndex);
                    }
                });
            }

            
            
            // Filter Task List
            vm.tIndex = ((~~vm.tIndex >= 0) ? ~~vm.tIndex : 0);
            columns.push($('#resource-overview-table th.ui-iggrid-selectedcell.ui-state-active').index()); // Init Column Selection
            app.actions.filterTasks(columns, columns.length, vm.tIndex); // Show/Hide Tasks
            columns = [];
            

            // Filter Assignment List
            if (vm.tIndex === 0) {
                vm.assignmentTaskList.filter($("#project-tasks-table tbody > tr.task.item.show:eq(0)").attr('data-id-fk'));
            }
            else {
                vm.assignmentTaskList.filter($("#project-tasks-table tbody > tr.task.item:eq(" + vm.tIndex + ")").attr('data-id-fk'));
            }
           
            // Update Rendering of Doughnut Chart
            vm.assignmentTaskList.updateDoughnutChart();
            

            // Update Team Directory Member Available Hours
            vm.employeeDirectory.updateAvailability(employees);

            // Checkpoint to see if current week or beyond
            // If Today is after the end date, then disable add button
            if ($("#project-tasks-table tbody > tr.task.item:visible:eq(" + vm.tIndex + ")").find('.taskItem').attr('data-task-end') < $('#pm-navigation .date.today time').attr('datetime')) {
                $('#project-assignments .action.add-resource').addClass('disabled');
            } else { $('#project-assignments .action.add-resource').removeClass('disabled'); }


            // Loop through Assignment list and enable/disable employees
            var pa = 0, total = $('#project-assignments-list li').length, employeeListItems = $('#project-assignments-list li'), employeeDirectoryList = $('#project-team-list li'), idx;

            employeeDirectoryList.removeClass('disabled'); // Clean Slate, remove the disable class from entire list
            employeeDirectoryList.find('.hrs-free:contains("<b>0</b>")').parents('li').addClass('disabled'); // Disabled all team members with 0 available hours
            // Loop through assigned resources and disable on employee directory
            for (pa = 0 ; pa < total; pa += 1) {
                idx = employeeListItems.eq(pa).attr('data-employee-id');
                employeeDirectoryList.filter(function () {
                    return $(this).attr('data-employee-id') === idx;
                }).addClass('disabled');
            }

            // If there are 6 or more people assigned to the project, disable any person not involved in project
            if ($('#resource-overview-table tbody tr').length >= 6) {
                var selectedProjected = $('#headline').attr('data-projectid');
                var currentProject = $.map(projects, function (value, key) {
                    if (~~value.project_id === ~~selectedProjected) {
                        return key;
                    }
                });
                employeeDirectoryList.filter(function () {
                    return $.inArray($(this).attr('data-employee-id'), projects[currentProject].employees) === -1;
                }).addClass('disabled');
            }

            /*Resource Overview:::Weekly Selection Interaction*/
            $('#resource-overview-table tr').on('click', 'td, th', function (e) {
                e.preventDefault();
                if (!$(this).hasClass('disciplineCol')) {
                    var selectedCols = columns, allowMulti = false, numColumns = 0, ttlHrs = 40;

                    $('#project-assignments .btn-group .action.undo,#project-assignments .btn-group .action.approve').addClass('disabled'); // Disable Undo and Approve Buttons

                    selectedCols.push($(this).index()); // push current selection into array

                    if (selectedCols.length > 0) {
                        // If Array is only one item long (initialization of chart), add previously selected into array
                        if (selectedCols.length === 1) {
                            selectedCols.push($('#resource-overview-table th.ui-iggrid-selectedcell.ui-state-active').index());
                        }
                        // Sort Array by Value
                        selectedCols = selectedCols.sort(function (a, b) {
                            return a - b;
                        });

                        // Check for Non-consecutive numbers and if found, clear out
                        // Logic also allows for clearing out all selection when clicking on column already in selection
                        for (c = 0; c < selectedCols.length - 1; c += 1) {
                            if ((selectedCols[c] + 1) !== (selectedCols[c + 1])) {
                                allowMulti = false;
                                selectedCols = [];
                                selectedCols[0] = $(this).index();
                                break;
                            } else {
                                allowMulti = true;
                            }
                        }

                        numColumns = selectedCols.length;

                        // Check if multiple columns should be selected; otherwise, choose only the column selected
                        if (allowMulti) {
                            // Continued Selection
                            $('#resource-overview-table td:nth-child(' + (~~$(this).index() + 1) + '), #resource-overview-table th:eq(' + $(this).index() + ')').addClass('ui-iggrid-selectedcell ui-state-active');
                        } else {
                            // Clear Selection and Select one clicked
                            $('#resource-overview-table td, #resource-overview-table th').removeClass('ui-iggrid-selectedcell ui-state-active');
                            $('#resource-overview-table td:nth-child(' + (~~$(this).index() + 1) + '), #resource-overview-table th:eq(' + $(this).index() + ')').addClass('ui-iggrid-selectedcell ui-state-active');
                        }

                        // Obtain Cell Width of Current Selection
                        var firstCellWidth = $('#resource-overview #resource-overview-table tr td.disciplineCol').outerWidth(); // get cell width
                        var cellWidth = $('#resource-overview #resource-overview-table tr td:eq(1)').outerWidth(); // get cell width
                        var cellOffset = $('#resource-overview #resource-overview-table tr td:eq(' + selectedCols[0] + ')').offset().left;
                        var hrsSelectDisplay = $('#resource-overview #resource-overview-table_scroll #totalHrsAggregate');
                        var windowOffset = (window.innerWidth <= 600) ? 100 : 0;


                        ttlHrs = numColumns * 40; // Times 40 hours by number of columns (assumes each project week will be 5 days)


                        // Animation script for total hours display: width, left margin and incremental number
                        hrsSelectDisplay.animate({
                            marginLeft: ((cellOffset - parseInt($('#resource-overview-table_scroll .mCSB_container').css('left'), 0)) - (firstCellWidth + 2)) + windowOffset + 'px',
                            width: (cellWidth * numColumns) + 'px'
                        }).promise().done(function () {
                            $({ hours: $('#resource-overview #resource-overview-table_scroll #totalHrsAggregate .hours').text() }).stop(true).animate({ hours: ttlHrs }, {
                                duration: 1200,
                                easing: "easeOutExpo",
                                step: function () {
                                    $('#resource-overview #resource-overview-table_scroll #totalHrsAggregate .hours').text(Math.round(this.hours));
                                    return false;
                                }
                            }).promise().done(function () {
                                // hard set the value after animation is done to ensure value is correct
                                $('#resource-overview #resource-overview-table_scroll #totalHrsAggregate .hours').text(this.hours);
                                return false;
                            });
                        });


                        columns = selectedCols; // save off selected columns

                        /*INCLUDE TASK FILTER CODE HERE*/
                        app.actions.filterTasks(columns, numColumns);

                        // Filter Assignment List
                        vm.assignmentTaskList.filter($("#project-tasks-table tbody > tr.task.item:visible:eq(0)").attr('data-id-fk'));
                        // Update Rendering of Doughnut Charts within Assignment lists
                        vm.assignmentTaskList.updateDoughnutChart();

                        // Update Team Directory Member Available Hours
                        vm.employeeDirectory.updateAvailability(employees);

                        // Loop through Assignment list and enable/disable employees
                        total = $('#project-assignments-list li').length;
                        employeeListItems = $('#project-assignments-list li');
                        employeeDirectoryList = $('#project-team-list li');

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
                                if (~~value.project_id === ~~selectedProjected) {
                                    return key;
                                }
                            });
                            employeeDirectoryList.filter(function () {
                                return $.inArray($(this).attr('data-employee-id'), projects[currentProject].employees) === -1;
                            }).addClass('disabled');
                        }


                        // Checkpoint to see if current week or beyond
                        // If Today is after the end date, then disable add button
                        if ($("#project-tasks-table tbody > tr.task.item:visible").length == 0 || $("#project-tasks-table tbody > tr.task.item.show:eq(0)").find('.taskItem').attr('data-task-end') < $('#pm-navigation .date.today time').attr('datetime')) {
                            $('#project-assignments .action.add-resource').addClass('disabled');
                            if ($("#project-tasks-table tbody > tr.task.item:visible").length == 0) { $('#tasklist-empty-msg').show(); }
                        } else { $('#project-assignments .action.add-resource').removeClass('disabled'); }
                    }
                }

                return false;
            });
        }
    };

    window.app.utils = util;

}(jQuery, window.app || {}));
