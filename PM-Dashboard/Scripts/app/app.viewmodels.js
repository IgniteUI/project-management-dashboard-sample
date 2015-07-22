(function ($, app) {
    'use strict';

    var tempDate = app.utils.parseDate('2015-07-07 12:57:00'), // Set Fake Date for Today
        tempDateObj = new Date('07/07/2015 12:57:00');
    

    var viewModels = {
        projectListModel: function (p) {
            var self = this;

            self.project_id = ko.observable(p.project_id);
            self.client_name = ko.observable(p.client_name);
            self.client_abbr = ko.observable(p.client_abbr);
            self.status = ko.observable(p.status);
            self.tasks_complete = ko.observable(p.tasks_complete);
            self.tasks_total = ko.observable(p.tasks_total);
            self.end_date = ko.observable(p.end_date);
            self.start_date = ko.observable(p.start_date);

            self.formatStartDate = ko.computed(function () {
                var parseStart = app.utils.parseDate(self.start_date());
                return (parseStart.getMonth() + 1) + '/' + parseStart.getDate();
            });
            self.formatProjecID = ko.computed(function () {
                var pID = self.project_id();
                return '# ' + pID;
            });
        },
        projectViewModel: function (projects) {
            var self = this, p = 0, sDate, eDate;
            self.currentProjects = ko.observableArray();
            self.upcomingProjects = ko.observableArray();
            var projectCount = projects.length;

            for (p = 0; p < projectCount; p += 1) {
                sDate = app.utils.parseDate(projects[p].start_date, 'yyyy/mm/dd');
                eDate = app.utils.parseDate(projects[p].end_date, 'yyyy/mm/dd');

                // Check if "Today's" date falls between project's start and end for current week iteration
                if (tempDate > sDate && tempDate < eDate) {
                    self.currentProjects.push(new app.viewmodels.projectListModel(projects[p]));
                } else {
                    self.upcomingProjects.push(new app.viewmodels.projectListModel(projects[p]));
                }

            }

            self.sortProjectList = function () {
                self.currentProjects.sort(function (a, b) { var s1 = ((a.status() === 'danger') ? 0 : ((a.status() === 'warning') ? 1 : 2)), s2 = ((b.status() === 'danger') ? 0 : ((b.status() === 'warning') ? 1 : 2)); return ((s1 > s2) ? 1 : -1); });
            };

            self.selectedProjectIndex = function (pID) {
                var i = 0, index;
                for (i = 0; i < self.currentProjects().length; i += 1) {
                    if (~~self.currentProjects()[i].project_id() === ~~pID) {
                        index = i;
                        break;
                    }
                }
                return index;
            };

            self.addProject = function (p) {
                self.currentProjects.push(new app.viewmodels.projectListModel(p));
                self.sortProjectList(); // Re-sort
            };

            self.updateProject = function (pID, currentProject) {
                var index = self.selectedProjectIndex(pID);

                // Update Model
                self.currentProjects()[index].project_id(currentProject.project_id);
                self.currentProjects()[index].client_name(currentProject.client_name);
                self.currentProjects()[index].client_abbr(currentProject.client_abbr);
                self.currentProjects()[index].status(currentProject.status);
                self.currentProjects()[index].tasks_complete(currentProject.tasks_complete);
                self.currentProjects()[index].tasks_total(currentProject.tasks_total);
                self.currentProjects()[index].end_date(currentProject.end_date);
                self.currentProjects()[index].start_date(currentProject.start_date);

                // Updates Project Doughnut Chart Status
                app.actions.updateProjectListDoughnutChart($('.projects.current li:eq(' + index + ') .doughnut'), self.currentProjects()[index].status(), self.currentProjects()[index].tasks_complete(), self.currentProjects()[index].tasks_total());

                self.sortProjectList(); // Re-sort
            };

            self.sortProjectList(); // Sort List on Initialization
        },
        projectDetailsViewModel: function (project) {

            var self = this;
            self.project = project;

            self.project_id = ko.observable(project.project_id);
            self.client_name = ko.observable(project.client_name);
            self.client_abbr = ko.observable(project.client_abbr);
            self.start_date = ko.observable(project.start_date);
            self.end_date = ko.observable(project.end_date);
            self.projected_end_date = ko.observable(project.projected_end_date);
            self.budget = ko.observable(project.budget);
            self.budget_projected = ko.observable(project.budget_projected);
            self.hours_planned = ko.observable(project.hours_planned);
            self.hours_worked = ko.observable(project.hours_worked);
            self.tasks_total = ko.observable(project.tasks_total);
            self.tasks_complete = ko.observable(project.tasks_complete);
            self.status = ko.observable(project.status);

            self.hrsCompletePercent = ko.computed(function () {
                var temp = Math.round((~~self.hours_worked() / ~~self.hours_planned()) * 100);
                return '(' + ((temp >= 0) ? temp : 0) + '%)';
            });
            self.tasksCompletePercent = ko.computed(function () {
                var temp = Math.round((~~self.tasks_complete() / ~~self.tasks_total()) * 100);
                return '(' + ((temp >= 0) ? temp : 0) + '%)';
            });

            self.end_date_format = ko.computed(function () {
                var e = app.utils.parseDate(self.end_date());
                return (e.getMonth() + 1) + '/' + e.getDate() + '/' + e.getFullYear();
            });
            self.projected_end_date_format = ko.computed(function () {
                var e = app.utils.parseDate(self.projected_end_date());
                return (e.getMonth() + 1) + '/' + e.getDate() + '/' + e.getFullYear();
            });

            self.budget_format = function (b) {
                if (typeof (b) === 'function') { return "$ " + b().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
            };
            self.budget_projected_format = function (b) {
                if (typeof (b) === 'function') { return "$ " + b().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
            };

            $('#project-panel').attr('data-projectID', self.project_id());

            self.updateProjDetailsDisplay = function (p) {
                self.project_id(p.project_id);
                self.client_name(p.client_name);
                self.client_abbr(p.client_abbr);
                self.start_date(p.start_date);
                self.end_date(p.end_date);
                self.projected_end_date(p.projected_end_date);
                self.budget(p.budget);
                self.budget_projected(p.budget_projected);
                self.hours_planned(p.hours_planned);
                self.hours_worked(p.hours_worked);
                self.tasks_total(p.tasks_total);
                self.tasks_complete(p.tasks_complete);
                self.status(p.status);
            };
        },
        AssignmentResourceListModel: function (employee, task, changeBool, addBool, newBool) {
            var self = this;

            self.id = employee.id;
            self.name = employee.name;
            self.discipline = Resources.Disciplines[employee.discipline.toLowerCase().replace(" ", "")];
            self.disciplineCls = employee.discipline;
            self.email = employee.email;
            self.phone = employee.phone;

            self.pending_changes = ko.observable(changeBool);
            self.addition_changes = ko.observable(addBool);
            self.addition_new = ko.observable(newBool);

            self.task_end_date = task.end_date;
            self.task_start_date = task.start_date;
            self.project_id = task.project_id;
            self.task_id = task.task_id;
            self.hrs_on_task = ko.observable(task.hrs_on_task);
            self.hrs_on_project = ko.observable(task.hrs_on_project);
            self.hrs_on_other = ko.observable(task.hrs_on_other);

            var sDate = app.utils.parseDate(self.task_start_date, 'yyyy/mm/dd');
            var eDate = app.utils.parseDate(self.task_end_date, 'yyyy/mm/dd');

            self.pastWeek = ko.computed(function () {
                return sDate < tempDate && eDate < tempDate;
            });

            self.status = ko.computed(function () {
                return ((self.hrs_on_project() + self.hrs_on_other()) > 40) ? 'warning' : 'ok';
            });

            self.disciplineClass = ko.computed(function () {
                return self.disciplineCls.toLowerCase().replace(/\s/g, '-');
            });

            self.hrs_all_other = ko.computed(function () {
                return self.hrs_on_other() + (self.hrs_on_project() - self.hrs_on_task());
            });

            self.hrs_free = ko.computed(function () {
                return 40 - (self.hrs_on_project() + self.hrs_on_other());
            });
        },
        AssignmentResourceViewModel: function (employees, pID) {
            var self = this;
            self.tasks = ko.observableArray();
            self.currentFilter = ko.observable();

            // Get Project Tasks by looping through employees
            self.generateList = function (e, id) {
                id = id || pID;
                var numEmployeed = employees.length, ar = 0, arlm = 0, t;
                self.tasks.destroyAll(); // Empty existing observable
                self.currentFilter = ko.observable(); // Clears filter

                for (ar = 0; ar < numEmployeed; ar += 1) {
                    arlm = 0;

                    // Filter tasks by current project
                    t = e[ar].tasks.filter(function (obj) { return ~~obj.project_id === ~~id; });

                    // Loop through filtered tasks for employee
                    for (arlm = 0; arlm < t.length; arlm += 1) {
                        self.tasks.push(new app.viewmodels.AssignmentResourceListModel({
                            "id": e[ar].employee_id,
                            "name": e[ar].name,
                            "discipline": e[ar].discipline,
                            "email": e[ar].email,
                            "phone": e[ar].phone
                        }, t[arlm], 'false', false, false));
                    }

                }
                self.sortTaskList(); // Sort List
            };

            self.addResourceAssignment = function (e, t, newAddBool) {
                self.tasks.push(new app.viewmodels.AssignmentResourceListModel(e, t, 'true', true, newAddBool));
                self.sortTaskList(); // Sort Assignment List
            };

            self.removeResourceAssignment = function (pID, tID, eID) {
                self.tasks.remove(function (task) {
                    return (~~task.id === ~~eID && ~~task.task_id === ~~tID && ~~task.project_id === ~~pID);
                });
            };

            self.sortTaskList = function () {
                self.tasks.sort(function (a, b) { return (a.discipline.toLowerCase() > b.discipline.toLowerCase()) ? 1 : -1; });
            };


            self.filterTasks = ko.computed(function () {
                if (!self.currentFilter()) {
                    return self.tasks();
                } else {
                    return ko.utils.arrayFilter(self.tasks(), function (task) {
                        return ~~task.task_id === ~~self.currentFilter();
                    });
                }
            });

            self.filter = function (id) {
                id = (typeof id === 'undefined') ? '0' : id; // Checkpoint to see if ID was passed, else default to 0
                self.currentFilter(id);
            };

            self.updateDoughnutChart = function () {
                app.actions.updateResourceAssignmentDoughnutChart();
            };


            // Initialize List
            self.generateList(employees, pID);
            self.sortTaskList(); // Sort Assignment List
        },
        EmployeeDirectoryModel: function (employee) {
            var self = this;
            self.id = employee.employee_id;
            self.name = employee.name;
            self.discipline = Resources.Disciplines[employee.discipline.toLowerCase().replace(" ", "")];
            self.disciplineCls = employee.discipline;
            self.email = employee.email;
            self.phone = employee.phone;
            self.projects = ko.observableArray(employee.projects);

            self.is_disabled = ko.observable(false);

            self.disciplineClass = ko.computed(function () {
                return self.disciplineCls.toLowerCase().replace(/\s/g, '-');
            });

            self.assigned_projects = ko.computed(function () {
                return self.projects().length;
            });

            var cEnd = $('#project-tasks-table tr:visible:eq(0) .taskItem').attr('data-task-end'); // availability;
            self.availability = ko.observableArray(employee.tasks.filter(function (t) {
                return t.end_date == cEnd && t.project_id == $('#project-panel').attr('data-projectid');
            }));

            self.hours_project = ko.computed(function () {
                var a = self.availability().filter(function (t) {
                    return t.project_id == $('#headline').attr('data-projectid');
                });

                return (a.length > 0) ? (a[0].hrs_on_project) : 0;
            });
            self.hours_other = ko.computed(function () {
                return (self.availability().length > 0) ? (self.availability()[0].hrs_total - self.hours_project()) : 0;
            });

            self.hours_available = ko.computed(function () {
                return (self.availability().length > 0) ? (40 - (self.hours_other() + self.hours_project())) : 40;
            });
        },
        EmployeeDirectoryViewModel: function (employees) {
            var self = this, numEmployees = employees.length, e = 0;
            self.employees = ko.observableArray();

            for (e = 0; e < numEmployees; e += 1) {
                self.employees.push(new app.viewmodels.EmployeeDirectoryModel(employees[e]));
            }

            self.updateAvailability = function (emp, idx) {
                idx = idx || 0;
                var cEnd = $('#project-tasks-table tr.task.item:visible:eq(' + idx + ') .taskItem').attr('data-task-end');
                numEmployees = emp.length;

                for (e = 0; e < numEmployees; e += 1) {
                    // Update # of Projects
                    if (emp[e].projects.length > 0) {
                        self.employees()[e].projects(emp[e].projects);
                    }
                    else { self.employees()[e].projects([]); }

                    self.employees()[e].availability(emp[e].tasks.filter(function (t) {
                        return t.end_date == cEnd;
                    }));
                }
            };
        }
    };

    window.app.viewmodels = viewModels;

}(jQuery, window.app || {}));
