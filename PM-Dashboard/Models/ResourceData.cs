using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PM_Dashboard.Models
{
    public class ResourceData
    {
        public List<ProjectDetails> projects { get; set; }
        public Dictionary<String, ResourceOverview> resourceOverview { get; set; }
        public List<Employee> employees { get; set; }
        public Dictionary<String, TaskList> taskList { get; set; }

        public ResourceData()
        {
            GenerateProjectDetailsData();
            GenerateResourceOverviewData();
            GenerateEmployeesData();
            GenerateTaskListData();
        }

        #region Project Data Generation
        private void GenerateProjectDetailsData()
        {
            projects = new List<ProjectDetails>();

            ProjectDetails project;

            project = new ProjectDetails();
            project.project_id = 10000;
            project.client_name = "Pepper Autobody Restoration";
            project.client_abbr = "PEPAUTO";
            project.start_date = "2015-05-11 00:00:00";
            project.end_date = "2015-07-17 23:59:59";
            project.projected_end_date = "2015-07-19 23:59:59";
            project.budget = 100200.00m;
            project.budget_projected = 102150.00m;
            project.status = "danger";
            project.tasks_total = 22;
            project.tasks_complete = 17;
            project.hours_budget = 668;
            project.hours_planned = 673;
            project.hours_worked = 511;
            project.hours_overtime = 8;
            project.employees.Add("0000009");
            project.employees.Add("0000007");
            project.employees.Add("0000002");
            project.employees.Add("0000022");
            project.employees.Add("0000008");
            projects.Add(project);

            project = new ProjectDetails();
            project.project_id = 10001;
            project.client_name = "Zeevill Inc";
            project.client_abbr = "ZEEVILL";
            project.start_date = "2015-06-22 00:00:00";
            project.end_date = "2015-08-28 23:59:59";
            project.projected_end_date = "2015-08-28 23:59:59";
            project.budget = 100950.00m;
            project.budget_projected = 100950.00m;
            project.status = "ok";
            project.tasks_total = 22;
            project.tasks_complete = 3;
            project.hours_budget = 673;
            project.hours_planned = 673;
            project.hours_worked = 134;
            project.hours_overtime = 0;
            project.employees.Add("0000012");
            project.employees.Add("0000004");
            project.employees.Add("0000017");
            project.employees.Add("0000019");
            project.employees.Add("0000008");
            projects.Add(project);

            project = new ProjectDetails();
            project.project_id = 10002;
            project.client_name = "Madara Italian Bistro";
            project.client_abbr = "MADARA";
            project.start_date = "2015-05-25 00:00:00";
            project.end_date = "2015-07-17 23:59:59";
            project.projected_end_date = "2015-07-18 23:59:59";
            project.budget = 58200.00m;
            project.budget_projected = 58950.00m;
            project.status = "warning";
            project.tasks_total = 16;
            project.tasks_complete = 12;
            project.hours_budget = 388;
            project.hours_planned = 393;
            project.hours_worked = 134;
            project.hours_overtime = 0;
            project.employees.Add("0000004");
            project.employees.Add("0000012");
            project.employees.Add("0000022");
            project.employees.Add("0000017");
            project.employees.Add("0000006");
            project.employees.Add("0000019");
            projects.Add(project);

            project = new ProjectDetails();
            project.project_id = 10003;
            project.client_name = "Zesto Cola";
            project.client_abbr = "ZESTCOL";
            project.start_date = "2015-08-03 00:00:00";
            project.end_date = "2015-10-09 23:59:59";
            project.projected_end_date = "2015-10-09 23:59:59";
            project.budget = 100950.00m;
            project.budget_projected = 9150.00m;
            project.status = "ok";
            project.tasks_total = 22;
            project.tasks_complete = 0;
            project.hours_budget = 673;
            project.hours_planned = 61;
            project.hours_worked = 0;
            project.hours_overtime = 0;
            project.employees.Add("0000006");
            projects.Add(project);
        }
        #endregion

        #region ResourceOverview Data Generation
        private void SetupProject10000OverviewData()
        {
            ProjectResource projResData;
            Week weekData;
            resourceOverview["10000"] = new ResourceOverview();

            weekData = new Week("2015-05-11 00:00:00", "2015-05-14 23:59:59");
            {
                projResData = new ProjectResource("0000009", "Wendy Weicher", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000007", "Jen Lombardo", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(40, 40, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000008", "Kevin Richardson", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(4, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000002", "Troy Gardner", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000022", "Kris Tulowitzki", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10000"].weeks.Add(weekData);

            weekData = new Week("2015-05-18 00:00:00", "2015-05-22 23:59:59");
            {
                projResData = new ProjectResource("0000009", "Wendy Weicher", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(20, 20, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000007", "Jen Lombardo", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(40, 40, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000008", "Kevin Richardson", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(6, 6, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000002", "Troy Gardner", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000022", "Kris Tulowitzki", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10000"].weeks.Add(weekData);

            weekData = new Week("2015-05-24 00:00:00", "2015-05-29 23:59:59");
            {
                projResData = new ProjectResource("0000009", "Wendy Weicher", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(4, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000007", "Jen Lombardo", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(40, 40, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000008", "Kevin Richardson", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(5, 5, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000002", "Troy Gardner", "Development");
                projResData.hours.Add(new ProjectWorkHours(4, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000022", "Kris Tulowitzki", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10000"].weeks.Add(weekData);

            weekData = new Week("2015-06-01 00:00:00", "2015-06-05 23:59:59");
            {
                projResData = new ProjectResource("0000009", "Wendy Weicher", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(4, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000007", "Jen Lombardo", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(40, 40, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000008", "Kevin Richardson", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(5, 5, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000002", "Troy Gardner", "Development");
                projResData.hours.Add(new ProjectWorkHours(4, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000022", "Kris Tulowitzki", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10000"].weeks.Add(weekData);

            weekData = new Week("2015-06-08 00:00:00", "2015-06-12 23:59:59");
            {
                projResData = new ProjectResource("0000009", "Wendy Weicher", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(4, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000007", "Jen Lombardo", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(40, 40, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000008", "Kevin Richardson", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(5, 5, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000002", "Troy Gardner", "Development");
                projResData.hours.Add(new ProjectWorkHours(4, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000022", "Kris Tulowitzki", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10000"].weeks.Add(weekData);

            weekData = new Week("2015-06-15 00:00:00", "2015-06-19 23:59:59");
            {
                projResData = new ProjectResource("0000009", "Wendy Weicher", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(40, 40, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000007", "Jen Lombardo", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(8, 8, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000008", "Kevin Richardson", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(5, 5, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000002", "Troy Gardner", "Development");
                projResData.hours.Add(new ProjectWorkHours(4, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000022", "Kris Tulowitzki", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10000"].weeks.Add(weekData);

            weekData = new Week("2015-06-22 00:00:00", "2015-06-26 23:59:59");
            {
                projResData = new ProjectResource("0000009", "Wendy Weicher", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(43, 40, 0, 3, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000007", "Jen Lombardo", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(8, 8, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000008", "Kevin Richardson", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(5, 5, 4, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000002", "Troy Gardner", "Development");
                projResData.hours.Add(new ProjectWorkHours(4, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000022", "Kris Tulowitzki", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10000"].weeks.Add(weekData);

            weekData = new Week("2015-06-29 00:00:00", "2015-07-03 23:59:59");
            {
                projResData = new ProjectResource("0000009", "Wendy Weicher", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(4, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000007", "Jen Lombardo", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(4, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000008", "Kevin Richardson", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(8, 8, 6, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000002", "Troy Gardner", "Development");
                projResData.hours.Add(new ProjectWorkHours(40, 40, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000022", "Kris Tulowitzki", "Development");
                projResData.hours.Add(new ProjectWorkHours(40, 35, 0, 5, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10000"].weeks.Add(weekData);

            weekData = new Week("2015-07-06 00:00:00", "2015-07-10 23:59:59");
            {
                projResData = new ProjectResource("0000009", "Wendy Weicher", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(0, 5, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000007", "Jen Lombardo", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(0, 5, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000008", "Kevin Richardson", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(4, 10, 5, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000002", "Troy Gardner", "Development");
                projResData.hours.Add(new ProjectWorkHours(15, 40, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000022", "Kris Tulowitzki", "Development");
                projResData.hours.Add(new ProjectWorkHours(10, 35, 10, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10000"].weeks.Add(weekData);

            weekData = new Week("2015-07-13 00:00:00", "2015-07-17 23:59:59");
            {
                projResData = new ProjectResource("0000009", "Wendy Weicher", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(0, 5, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000007", "Jen Lombardo", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(0, 5, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000008", "Kevin Richardson", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(0, 9, 5, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000002", "Troy Gardner", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 40, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000022", "Kris Tulowitzki", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 40, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10000"].weeks.Add(weekData);
        }

        private void SetupProject10001OverviewData()
        {
            ProjectResource projResData;
            Week weekData;
            resourceOverview["10001"] = new ResourceOverview();

            weekData = new Week("2015-06-22 00:00:00", "2015-06-26 23:59:59");
            {
                projResData = new ProjectResource("0000012", "Jason Kluber", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 40, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000004", "Justin Kazmir", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(40, 40, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000008", "Kevin Richardson", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(4, 4, 5, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000017", "Mandy Rizzo", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000019", "Tara Kershaw", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10001"].weeks.Add(weekData);

            weekData = new Week("2015-06-29 00:00:00", "2015-07-03 23:59:59");
            {
                projResData = new ProjectResource("0000012", "Jason Kluber", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(20, 20, 20, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000004", "Justin Kazmir", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(40, 40, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000008", "Kevin Richardson", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(6, 6, 8, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000017", "Mandy Rizzo", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000019", "Tara Kershaw", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10001"].weeks.Add(weekData);

            weekData = new Week("2015-07-06 00:00:00", "2015-07-10 23:59:59");
            {
                projResData = new ProjectResource("0000012", "Jason Kluber", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(2, 4, 4, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000004", "Justin Kazmir", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(15, 40, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000008", "Kevin Richardson", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(2, 5, 10, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000017", "Mandy Rizzo", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 4, 30, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000019", "Tara Kershaw", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 30, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10001"].weeks.Add(weekData);

            weekData = new Week("2015-07-13 00:00:00", "2015-07-17 23:59:59");
            {
                projResData = new ProjectResource("0000012", "Jason Kluber", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(0, 4, 4, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000004", "Justin Kazmir", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(0, 40, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000008", "Kevin Richardson", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(0, 5, 9, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000017", "Mandy Rizzo", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 4, 30, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000019", "Tara Kershaw", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 40, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10001"].weeks.Add(weekData);

            weekData = new Week("2015-07-20 00:00:00", "2015-07-24 23:59:59");
            {
                projResData = new ProjectResource("0000012", "Jason Kluber", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(0, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000004", "Justin Kazmir", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(0, 40, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000008", "Kevin Richardson", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(0, 5, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000017", "Mandy Rizzo", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000019", "Tara Kershaw", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10001"].weeks.Add(weekData);

            weekData = new Week("2015-07-27 00:00:00", "2015-07-31 23:59:59");
            {
                projResData = new ProjectResource("0000012", "Jason Kluber", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(0, 40, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000004", "Justin Kazmir", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(0, 8, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000008", "Kevin Richardson", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(0, 5, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000017", "Mandy Rizzo", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000019", "Tara Kershaw", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10001"].weeks.Add(weekData);

            weekData = new Week("2015-08-03 00:00:00", "2015-08-07 23:59:59");
            {
                projResData = new ProjectResource("0000012", "Jason Kluber", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(0, 40, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000004", "Justin Kazmir", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(0, 8, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000008", "Kevin Richardson", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(0, 5, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000017", "Mandy Rizzo", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000019", "Tara Kershaw", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10001"].weeks.Add(weekData);

            weekData = new Week("2015-08-10 00:00:00", "2015-08-14 23:59:59");
            {
                projResData = new ProjectResource("0000012", "Jason Kluber", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(0, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000004", "Justin Kazmir", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(0, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000008", "Kevin Richardson", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(0, 5, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000017", "Mandy Rizzo", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 40, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000019", "Tara Kershaw", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 40, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10001"].weeks.Add(weekData);

            weekData = new Week("2015-08-17 00:00:00", "2015-08-21 23:59:59");
            {
                projResData = new ProjectResource("0000012", "Jason Kluber", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(0, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000004", "Justin Kazmir", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(0, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000008", "Kevin Richardson", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(0, 5, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000017", "Mandy Rizzo", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 40, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000019", "Tara Kershaw", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 40, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10001"].weeks.Add(weekData);

            weekData = new Week("2015-08-24 00:00:00", "2015-08-28 23:59:59");
            {
                projResData = new ProjectResource("0000012", "Jason Kluber", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(0, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000004", "Justin Kazmir", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(0, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000008", "Kevin Richardson", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(0, 5, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000017", "Mandy Rizzo", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 40, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000019", "Tara Kershaw", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 40, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10001"].weeks.Add(weekData);
        }

        private void SetupProject10002OverviewData()
        {
            ProjectResource projResData;
            Week weekData;
            resourceOverview["10002"] = new ResourceOverview();

            weekData = new Week("2015-05-25 00:00:00", "2015-05-29 23:59:59");
            {
                projResData = new ProjectResource("0000012", "Jason Kluber", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000004", "Justin Kazmir", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(40, 40, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000006", "Evan McCutchen", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(0, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000022", "Kris Tulowitzki", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000017", "Mandy Rizzo", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000019", "Tara Kershaw", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10002"].weeks.Add(weekData);

            weekData = new Week("2015-06-01 00:00:00", "2015-06-05 23:59:59");
            {
                projResData = new ProjectResource("0000012", "Jason Kluber", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(20, 20, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000004", "Justin Kazmir", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(40, 40, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000006", "Evan McCutchen", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(6, 6, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000022", "Kris Tulowitzki", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000017", "Mandy Rizzo", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000019", "Tara Kershaw", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10002"].weeks.Add(weekData);

            weekData = new Week("2015-06-08 00:00:00", "2015-06-12 23:59:59");
            {
                projResData = new ProjectResource("0000012", "Jason Kluber", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(4, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000004", "Justin Kazmir", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(40, 40, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000006", "Evan McCutchen", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(5, 5, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000022", "Kris Tulowitzki", "Development");
                projResData.hours.Add(new ProjectWorkHours(4, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000017", "Mandy Rizzo", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000019", "Tara Kershaw", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10002"].weeks.Add(weekData);

            weekData = new Week("2015-06-15 00:00:00", "2015-06-19 23:59:59");
            {
                projResData = new ProjectResource("0000012", "Jason Kluber", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(4, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000004", "Justin Kazmir", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(40, 40, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000006", "Evan McCutchen", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(5, 5, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000022", "Kris Tulowitzki", "Development");
                projResData.hours.Add(new ProjectWorkHours(4, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000017", "Mandy Rizzo", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000019", "Tara Kershaw", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10002"].weeks.Add(weekData);

            weekData = new Week("2015-06-22 00:00:00", "2015-06-26 23:59:59");
            {
                projResData = new ProjectResource("0000012", "Jason Kluber", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(40, 40, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000004", "Justin Kazmir", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 40, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000006", "Evan McCutchen", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(5, 5, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000022", "Kris Tulowitzki", "Development");
                projResData.hours.Add(new ProjectWorkHours(4, 4, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000017", "Mandy Rizzo", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000019", "Tara Kershaw", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10002"].weeks.Add(weekData);

            weekData = new Week("2015-06-29 00:00:00", "2015-07-03 23:59:59");
            {
                projResData = new ProjectResource("0000012", "Jason Kluber", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(20, 20, 20, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000004", "Justin Kazmir", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 40, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000006", "Evan McCutchen", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(8, 8, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000022", "Kris Tulowitzki", "Development");
                projResData.hours.Add(new ProjectWorkHours(4, 4, 35, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000017", "Mandy Rizzo", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000019", "Tara Kershaw", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10002"].weeks.Add(weekData);

            weekData = new Week("2015-07-06 00:00:00", "2015-07-10 23:59:59");
            {
                projResData = new ProjectResource("0000012", "Jason Kluber", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(2, 4, 4, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000004", "Justin Kazmir", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 40, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000006", "Evan McCutchen", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(3, 9, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000022", "Kris Tulowitzki", "Development");
                projResData.hours.Add(new ProjectWorkHours(4, 10, 35, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000017", "Mandy Rizzo", "Development");
                projResData.hours.Add(new ProjectWorkHours(10, 30, 4, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000019", "Tara Kershaw", "Development");
                projResData.hours.Add(new ProjectWorkHours(10, 30, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10002"].weeks.Add(weekData);

            weekData = new Week("2015-07-13 00:00:00", "2015-07-17 23:59:59");
            {
                projResData = new ProjectResource("0000012", "Jason Kluber", "Visual Design");
                projResData.hours.Add(new ProjectWorkHours(0, 4, 4, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000004", "Justin Kazmir", "User Experience");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 40, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000006", "Evan McCutchen", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(0, 9, 0, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000022", "Kris Tulowitzki", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 0, 40, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000017", "Mandy Rizzo", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 30, 4, 0, 40));
                weekData.resources.Add(projResData);

                projResData = new ProjectResource("0000019", "Tara Kershaw", "Development");
                projResData.hours.Add(new ProjectWorkHours(0, 40, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10002"].weeks.Add(weekData);
        }

        private void SetupProject10003OverviewData()
        {
            ProjectResource projResData;
            Week weekData;
            resourceOverview["10003"] = new ResourceOverview();

            weekData = new Week("2015-08-03 00:00:00", "2015-08-07 23:59:59");
            {
                projResData = new ProjectResource("0000006", "Evan McCutchen", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(0, 4, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10003"].weeks.Add(weekData);

            weekData = new Week("2015-08-10 00:00:00", "2015-08-14 23:59:59");
            {
                projResData = new ProjectResource("0000006", "Evan McCutchen", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(0, 6, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10003"].weeks.Add(weekData);

            weekData = new Week("2015-08-17 00:00:00", "2015-08-21 23:59:59");
            {
                projResData = new ProjectResource("0000006", "Evan McCutchen", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(0, 5, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10003"].weeks.Add(weekData);

            weekData = new Week("2015-08-24 00:00:00", "2015-08-28 23:59:59");
            {
                projResData = new ProjectResource("0000006", "Evan McCutchen", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(0, 5, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10003"].weeks.Add(weekData);

            weekData = new Week("2015-08-31 00:00:00", "2015-09-04 23:59:59");
            {
                projResData = new ProjectResource("0000006", "Evan McCutchen", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(0, 5, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10003"].weeks.Add(weekData);

            weekData = new Week("2015-09-07 00:00:00", "2015-09-11 23:59:59");
            {
                projResData = new ProjectResource("0000006", "Evan McCutchen", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(0, 5, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10003"].weeks.Add(weekData);

            weekData = new Week("2015-09-14 00:00:00", "2015-09-18 23:59:59");
            {
                projResData = new ProjectResource("0000006", "Evan McCutchen", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(0, 5, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10003"].weeks.Add(weekData);

            weekData = new Week("2015-09-21 00:00:00", "2015-09-25 23:59:59");
            {
                projResData = new ProjectResource("0000006", "Evan McCutchen", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(0, 8, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10003"].weeks.Add(weekData);

            weekData = new Week("2015-09-28 00:00:00", "2015-10-02 23:59:59");
            {
                projResData = new ProjectResource("0000006", "Evan McCutchen", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(0, 9, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10003"].weeks.Add(weekData);

            weekData = new Week("2015-10-05 00:00:00", "2015-10-09 23:59:59");
            {
                projResData = new ProjectResource("0000006", "Evan McCutchen", "Project Management");
                projResData.hours.Add(new ProjectWorkHours(0, 9, 0, 0, 40));
                weekData.resources.Add(projResData);
            }
            resourceOverview["10003"].weeks.Add(weekData);
        }

        private void GenerateResourceOverviewData()
        {
            resourceOverview = new Dictionary<String, ResourceOverview>();
            SetupProject10000OverviewData();
            SetupProject10001OverviewData();
            SetupProject10002OverviewData();
            SetupProject10003OverviewData();
        }
        #endregion

        #region Employee Data Generation
        private void GenerateEmployeesData()
        {
            employees = new List<Employee>();

            Employee employeeData;
            employeeData = new Employee("0000009", "Wendy Weicher", "Visual Design", "wweicher@example.com", "555-456-7890");
            employeeData.projects.Add(10000);
            employeeData.tasks.Add(new EmployeeTask("2015-05-11 00:00:00", "2015-05-15 23:59:59", 10000, 1001, 5, 20, 0, 20));
            employeeData.tasks.Add(new EmployeeTask("2015-05-18 00:00:00", "2015-05-22 23:59:59", 10000, 1002, 15, 20, 0, 20));
            employeeData.tasks.Add(new EmployeeTask("2015-05-25 00:00:00", "2015-05-29 23:59:59", 10000, 1003, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-06-01 00:00:00", "2015-06-05 23:59:59", 10000, 1005, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-06-08 00:00:00", "2015-06-12 23:59:59", 10000, 1008, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-06-15 00:00:00", "2015-06-19 23:59:59", 10000, 1010, 40, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-06-22 00:00:00", "2015-06-26 23:59:59", 10000, 1012, 40, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-06-29 00:00:00", "2015-07-03 23:59:59", 10000, 1016, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-07-06 00:00:00", "2015-07-10 23:59:59", 10000, 1019, 5, 5, 0, 5));
            employeeData.tasks.Add(new EmployeeTask("2015-07-13 00:00:00", "2015-07-17 23:59:59", 10000, 1021, 5, 5, 0, 5));
            employees.Add(employeeData);

            employeeData = new Employee("0000012", "Jason Kluber", "Visual Design", "jkluber@example.com", "555-456-7890");
            employeeData.projects.Add(10001);
            employeeData.projects.Add(10002);
            employeeData.tasks.Add(new EmployeeTask("2015-06-29 00:00:00", "2015-07-03 23:59:59", 10001, 1023, 5, 20, 0, 20));
            employeeData.tasks.Add(new EmployeeTask("2015-06-29 00:00:00", "2015-07-03 23:59:59", 10001, 1024, 15, 20, 20, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-07-06 00:00:00", "2015-07-10 23:59:59", 10001, 1025, 4, 4, 4, 8));
            employeeData.tasks.Add(new EmployeeTask("2015-07-13 00:00:00", "2015-07-17 23:59:59", 10001, 1027, 4, 4, 4, 8));
            employeeData.tasks.Add(new EmployeeTask("2015-07-20 00:00:00", "2015-07-24 23:59:59", 10001, 1030, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-07-27 00:00:00", "2015-07-31 23:59:59", 10001, 1032, 40, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-08-03 00:00:00", "2015-08-07 23:59:59", 10001, 1034, 40, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-08-10 00:00:00", "2015-08-14 23:59:59", 10001, 1038, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-08-17 00:00:00", "2015-08-21 23:59:59", 10001, 1041, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-08-24 00:00:00", "2015-08-28 23:59:59", 10001, 1043, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-06-01 00:00:00", "2015-06-05 23:59:59", 10002, 1045, 20, 20, 0, 20));
            employeeData.tasks.Add(new EmployeeTask("2015-06-08 00:00:00", "2015-06-12 23:59:59", 10002, 1047, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-06-15 00:00:00", "2015-06-19 23:59:59", 10002, 1050, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-06-22 00:00:00", "2015-06-26 23:59:59", 10002, 1052, 40, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-06-29 00:00:00", "2015-07-03 23:59:59", 10002, 1054, 20, 20, 20, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-07-06 00:00:00", "2015-07-10 23:59:59", 10002, 1057, 4, 4, 4, 8));
            employeeData.tasks.Add(new EmployeeTask("2015-07-13 00:00:00", "2015-07-17 23:59:59", 10002, 1059, 4, 4, 4, 8));
            employees.Add(employeeData);

            employeeData = new Employee("0000007", "Jen Lombardo", "User Experience", "jlombardo@example.com", "555-456-7890");
            employeeData.projects.Add(10000);
            employeeData.tasks.Add(new EmployeeTask("2015-05-11 00:00:00", "2015-05-15 23:59:59", 10000, 1000, 40, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-05-18 00:00:00", "2015-05-22 23:59:59", 10000, 1001, 20, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-05-18 00:00:00", "2015-05-22 23:59:59", 10000, 1002, 20, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-05-25 00:00:00", "2015-05-29 23:59:59", 10000, 1003, 40, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-06-01 00:00:00", "2015-06-05 23:59:59", 10000, 1005, 40, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-06-08 00:00:00", "2015-06-12 23:59:59", 10000, 1007, 25, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-06-08 00:00:00", "2015-06-12 23:59:59", 10000, 1008, 15, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-06-15 00:00:00", "2015-06-19 23:59:59", 10000, 1010, 8, 8, 0, 8));
            employeeData.tasks.Add(new EmployeeTask("2015-06-22 00:00:00", "2015-06-26 23:59:59", 10000, 1012, 8, 8, 0, 8));
            employeeData.tasks.Add(new EmployeeTask("2015-06-29 00:00:00", "2015-07-03 23:59:59", 10000, 1016, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-07-06 00:00:00", "2015-07-10 23:59:59", 10000, 1019, 5, 5, 0, 5));
            employeeData.tasks.Add(new EmployeeTask("2015-07-13 00:00:00", "2015-07-17 23:59:59", 10000, 1021, 5, 5, 0, 5));
            employees.Add(employeeData);

            employeeData = new Employee("0000004", "Justin Kazmir", "User Experience", "jkazmir@example.com", "555-456-7890");
            employeeData.projects.Add(10001);
            employeeData.projects.Add(10002);
            employeeData.tasks.Add(new EmployeeTask("2015-06-22 00:00:00", "2015-06-26 23:59:59", 10001, 1022, 40, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-06-29 00:00:00", "2015-07-03 23:59:59", 10001, 1023, 20, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-06-29 00:00:00", "2015-07-03 23:59:59", 10001, 1024, 20, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-07-06 00:00:00", "2015-07-10 23:59:59", 10001, 1025, 40, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-07-13 00:00:00", "2015-07-17 23:59:59", 10001, 1027, 40, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-07-20 00:00:00", "2015-07-24 23:59:59", 10001, 1029, 25, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-07-20 00:00:00", "2015-07-24 23:59:59", 10001, 1030, 15, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-07-27 00:00:00", "2015-07-31 23:59:59", 10001, 1032, 8, 8, 0, 8));
            employeeData.tasks.Add(new EmployeeTask("2015-08-03 00:00:00", "2015-08-07 23:59:59", 10001, 1034, 8, 8, 0, 8));
            employeeData.tasks.Add(new EmployeeTask("2015-08-10 00:00:00", "2015-08-14 23:59:59", 10001, 1038, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-08-17 00:00:00", "2015-08-21 23:59:59", 10001, 1041, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-08-24 00:00:00", "2015-08-28 23:59:59", 10001, 1043, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-05-25 00:00:00", "2015-05-29 23:59:59", 10002, 1044, 40, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-06-01 00:00:00", "2015-06-05 23:59:59", 10002, 1045, 30, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-06-01 00:00:00", "2015-06-05 23:59:59", 10002, 1046, 10, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-06-08 00:00:00", "2015-06-12 23:59:59", 10002, 1047, 40, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-06-15 00:00:00", "2015-06-19 23:59:59", 10002, 1049, 25, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-06-15 00:00:00", "2015-06-19 23:59:59", 10002, 1050, 15, 40, 0, 40));
            employees.Add(employeeData);

            employeeData = new Employee("0000006", "Evan McCutchen", "Project Management", "emccutchen@example.com", "555-456-7890");
            employeeData.projects.Add(10002);
            employeeData.projects.Add(10003);
            employeeData.tasks.Add(new EmployeeTask("2015-05-25 00:00:00", "2015-05-29 23:59:59", 10002, 1044, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-06-01 00:00:00", "2015-06-05 23:59:59", 10002, 1045, 6, 6, 0, 6));
            employeeData.tasks.Add(new EmployeeTask("2015-06-08 00:00:00", "2015-06-12 23:59:59", 10002, 1047, 5, 5, 0, 5));
            employeeData.tasks.Add(new EmployeeTask("2015-06-15 00:00:00", "2015-06-19 23:59:59", 10002, 1049, 5, 5, 0, 5));
            employeeData.tasks.Add(new EmployeeTask("2015-06-15 00:00:00", "2015-06-19 23:59:59", 10002, 1050, 5, 5, 0, 5));
            employeeData.tasks.Add(new EmployeeTask("2015-06-22 00:00:00", "2015-06-26 23:59:59", 10002, 1052, 5, 5, 0, 5));
            employeeData.tasks.Add(new EmployeeTask("2015-06-29 00:00:00", "2015-07-03 23:59:59", 10002, 1054, 4, 8, 0, 8));
            employeeData.tasks.Add(new EmployeeTask("2015-06-29 00:00:00", "2015-07-03 23:59:59", 10002, 1055, 4, 8, 0, 8));
            employeeData.tasks.Add(new EmployeeTask("2015-07-06 00:00:00", "2015-07-10 23:59:59", 10002, 1056, 3, 9, 0, 9));
            employeeData.tasks.Add(new EmployeeTask("2015-07-06 00:00:00", "2015-07-10 23:59:59", 10002, 1057, 6, 9, 0, 9));
            employeeData.tasks.Add(new EmployeeTask("2015-07-13 00:00:00", "2015-07-17 23:59:59", 10002, 1058, 3, 9, 0, 9));
            employeeData.tasks.Add(new EmployeeTask("2015-07-13 00:00:00", "2015-07-17 23:59:59", 10002, 1059, 6, 9, 0, 9));
            employeeData.tasks.Add(new EmployeeTask("2015-08-03 00:00:00", "2015-08-07 23:59:59", 10003, 1060, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-08-10 00:00:00", "2015-08-14 23:59:59", 10003, 1061, 6, 6, 0, 6));
            employeeData.tasks.Add(new EmployeeTask("2015-08-17 00:00:00", "2015-08-21 23:59:59", 10003, 1063, 5, 5, 0, 5));
            employeeData.tasks.Add(new EmployeeTask("2015-08-24 00:00:00", "2015-08-28 23:59:59", 10003, 1065, 5, 5, 0, 5));
            employeeData.tasks.Add(new EmployeeTask("2015-08-24 00:00:00", "2015-08-28 23:59:59", 10003, 1066, 5, 5, 0, 5));
            employeeData.tasks.Add(new EmployeeTask("2015-08-31 00:00:00", "2015-09-04 23:59:59", 10003, 1067, 3, 5, 0, 5));
            employeeData.tasks.Add(new EmployeeTask("2015-08-31 00:00:00", "2015-09-04 23:59:59", 10003, 1068, 2, 5, 0, 5));
            employeeData.tasks.Add(new EmployeeTask("2015-09-07 00:00:00", "2015-09-11 23:59:59", 10003, 1070, 5, 5, 0, 5));
            employeeData.tasks.Add(new EmployeeTask("2015-09-14 00:00:00", "2015-09-18 23:59:59", 10003, 1072, 5, 5, 0, 5));
            employeeData.tasks.Add(new EmployeeTask("2015-09-21 00:00:00", "2015-09-25 23:59:59", 10003, 1074, 2, 8, 0, 8));
            employeeData.tasks.Add(new EmployeeTask("2015-09-21 00:00:00", "2015-09-25 23:59:59", 10003, 1075, 2, 8, 0, 8));
            employeeData.tasks.Add(new EmployeeTask("2015-09-21 00:00:00", "2015-09-25 23:59:59", 10003, 1076, 4, 8, 0, 8));
            employeeData.tasks.Add(new EmployeeTask("2015-09-28 00:00:00", "2015-10-02 23:59:59", 10003, 1077, 2, 9, 0, 9));
            employeeData.tasks.Add(new EmployeeTask("2015-09-28 00:00:00", "2015-10-02 23:59:59", 10003, 1078, 2, 9, 0, 9));
            employeeData.tasks.Add(new EmployeeTask("2015-09-28 00:00:00", "2015-10-02 23:59:59", 10003, 1079, 5, 9, 0, 9));
            employeeData.tasks.Add(new EmployeeTask("2015-10-05 00:00:00", "2015-10-09 23:59:59", 10003, 1080, 3, 9, 0, 9));
            employeeData.tasks.Add(new EmployeeTask("2015-10-05 00:00:00", "2015-10-09 23:59:59", 10003, 1081, 6, 9, 0, 9));
            employees.Add(employeeData);

            employeeData = new Employee("0000008", "Richard Kevinson", "Project Management", "rkevinson@example.com", "555-456-7890");
            employeeData.projects.Add(10000);
            employeeData.projects.Add(10001);
            employeeData.tasks.Add(new EmployeeTask("2015-05-11 00:00:00", "2015-05-15 23:59:59", 10000, 1000, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-05-18 00:00:00", "2015-05-22 23:59:59", 10000, 1001, 3, 6, 0, 6));
            employeeData.tasks.Add(new EmployeeTask("2015-05-18 00:00:00", "2015-05-22 23:59:59", 10000, 1002, 3, 6, 0, 6));
            employeeData.tasks.Add(new EmployeeTask("2015-05-25 00:00:00", "2015-05-29 23:59:59", 10000, 1003, 5, 5, 0, 5));
            employeeData.tasks.Add(new EmployeeTask("2015-06-01 00:00:00", "2015-06-05 23:59:59", 10000, 1005, 5, 5, 0, 5));
            employeeData.tasks.Add(new EmployeeTask("2015-06-08 00:00:00", "2015-06-12 23:59:59", 10000, 1007, 3, 5, 0, 5));
            employeeData.tasks.Add(new EmployeeTask("2015-06-08 00:00:00", "2015-06-12 23:59:59", 10000, 1008, 2, 5, 0, 5));
            employeeData.tasks.Add(new EmployeeTask("2015-06-15 00:00:00", "2015-06-19 23:59:59", 10000, 1010, 5, 5, 0, 5));
            employeeData.tasks.Add(new EmployeeTask("2015-06-22 00:00:00", "2015-06-26 23:59:59", 10000, 1012, 5, 5, 4, 9));
            employeeData.tasks.Add(new EmployeeTask("2015-06-29 00:00:00", "2015-07-03 23:59:59", 10000, 1014, 2, 8, 6, 14));
            employeeData.tasks.Add(new EmployeeTask("2015-06-29 00:00:00", "2015-07-03 23:59:59", 10000, 1015, 2, 8, 6, 14));
            employeeData.tasks.Add(new EmployeeTask("2015-06-29 00:00:00", "2015-07-03 23:59:59", 10000, 1016, 4, 8, 6, 14));
            employeeData.tasks.Add(new EmployeeTask("2015-07-06 00:00:00", "2015-07-10 23:59:59", 10000, 1017, 2, 10, 5, 15));
            employeeData.tasks.Add(new EmployeeTask("2015-07-06 00:00:00", "2015-07-10 23:59:59", 10000, 1018, 2, 10, 5, 15));
            employeeData.tasks.Add(new EmployeeTask("2015-07-06 00:00:00", "2015-07-10 23:59:59", 10000, 1019, 6, 10, 5, 15));
            employeeData.tasks.Add(new EmployeeTask("2015-07-13 00:00:00", "2015-07-17 23:59:59", 10000, 1020, 3, 9, 5, 14));
            employeeData.tasks.Add(new EmployeeTask("2015-07-13 00:00:00", "2015-07-17 23:59:59", 10000, 1021, 6, 9, 5, 14));
            employeeData.tasks.Add(new EmployeeTask("2015-06-22 00:00:00", "2015-06-26 23:59:59", 10001, 1022, 4, 4, 5, 9));
            employeeData.tasks.Add(new EmployeeTask("2015-06-29 00:00:00", "2015-07-03 23:59:59", 10001, 1023, 3, 6, 8, 14));
            employeeData.tasks.Add(new EmployeeTask("2015-06-29 00:00:00", "2015-07-03 23:59:59", 10001, 1024, 3, 6, 8, 14));
            employeeData.tasks.Add(new EmployeeTask("2015-07-06 00:00:00", "2015-07-10 23:59:59", 10001, 1025, 5, 5, 10, 15));
            employeeData.tasks.Add(new EmployeeTask("2015-07-13 00:00:00", "2015-07-17 23:59:59", 10001, 1027, 5, 5, 9, 14));
            employeeData.tasks.Add(new EmployeeTask("2015-07-20 00:00:00", "2015-07-24 23:59:59", 10001, 1029, 3, 5, 0, 5));
            employeeData.tasks.Add(new EmployeeTask("2015-07-20 00:00:00", "2015-07-24 23:59:59", 10001, 1030, 2, 5, 0, 5));
            employeeData.tasks.Add(new EmployeeTask("2015-07-27 00:00:00", "2015-07-31 23:59:59", 10001, 1032, 5, 5, 0, 5));
            employeeData.tasks.Add(new EmployeeTask("2015-08-03 00:00:00", "2015-08-07 23:59:59", 10001, 1034, 5, 5, 0, 5));
            employeeData.tasks.Add(new EmployeeTask("2015-08-10 00:00:00", "2015-08-14 23:59:59", 10001, 1036, 2, 8, 0, 8));
            employeeData.tasks.Add(new EmployeeTask("2015-08-10 00:00:00", "2015-08-14 23:59:59", 10001, 1037, 2, 8, 0, 8));
            employeeData.tasks.Add(new EmployeeTask("2015-08-10 00:00:00", "2015-08-14 23:59:59", 10001, 1038, 4, 8, 0, 8));
            employeeData.tasks.Add(new EmployeeTask("2015-08-17 00:00:00", "2015-08-21 23:59:59", 10001, 1039, 2, 9, 0, 9));
            employeeData.tasks.Add(new EmployeeTask("2015-08-17 00:00:00", "2015-08-21 23:59:59", 10001, 1040, 2, 9, 0, 9));
            employeeData.tasks.Add(new EmployeeTask("2015-08-17 00:00:00", "2015-08-21 23:59:59", 10001, 1041, 5, 9, 0, 9));
            employeeData.tasks.Add(new EmployeeTask("2015-08-24 00:00:00", "2015-08-28 23:59:59", 10001, 1042, 3, 9, 0, 9));
            employeeData.tasks.Add(new EmployeeTask("2015-08-24 00:00:00", "2015-08-28 23:59:59", 10001, 1043, 6, 9, 0, 9));
            employees.Add(employeeData);

            employeeData = new Employee("0000002", "Troy Gardner", "Development", "tgardner@example.com", "555-456-7890");
            employeeData.projects.Add(10000);
            employeeData.tasks.Add(new EmployeeTask("2015-05-25 00:00:00", "2015-05-29 23:59:59", 10000, 1004, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-06-01 00:00:00", "2015-06-05 23:59:59", 10000, 1006, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-06-01 00:00:00", "2015-06-05 23:59:59", 10000, 1009, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-06-15 00:00:00", "2015-06-19 23:59:59", 10000, 1011, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-06-22 00:00:00", "2015-06-26 23:59:59", 10000, 1013, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-06-29 00:00:00", "2015-07-03 23:59:59", 10000, 1014, 30, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-06-29 00:00:00", "2015-07-03 23:59:59", 10000, 1016, 10, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-07-06 00:00:00", "2015-07-10 23:59:59", 10000, 1017, 30, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-07-06 00:00:00", "2015-07-10 23:59:59", 10000, 1019, 10, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-07-13 00:00:00", "2015-07-17 23:59:59", 10000, 1020, 30, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-07-13 00:00:00", "2015-07-17 23:59:59", 10000, 1021, 10, 40, 0, 40));
            employees.Add(employeeData);

            employeeData = new Employee("0000017", "Mandy Rizzo", "Development", "mrizzo@example.com", "555-456-7890");
            employeeData.projects.Add(10001);
            employeeData.projects.Add(10002);
            employeeData.tasks.Add(new EmployeeTask("2015-07-06 00:00:00", "2015-07-10 23:59:59", 10001, 1026, 4, 4, 30, 34));
            employeeData.tasks.Add(new EmployeeTask("2015-07-13 00:00:00", "2015-07-17 23:59:59", 10001, 1028, 4, 4, 30, 34));
            employeeData.tasks.Add(new EmployeeTask("2015-07-20 00:00:00", "2015-07-24 23:59:59", 10001, 1031, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-07-27 00:00:00", "2015-07-31 23:59:59", 10001, 1033, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-08-03 00:00:00", "2015-08-07 23:59:59", 10001, 1035, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-08-10 00:00:00", "2015-08-14 23:59:59", 10001, 1036, 30, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-08-10 00:00:00", "2015-08-14 23:59:59", 10001, 1038, 10, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-08-17 00:00:00", "2015-08-24 23:59:59", 10001, 1039, 30, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-08-17 00:00:00", "2015-08-21 23:59:59", 10001, 1041, 10, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-08-24 00:00:00", "2015-08-28 23:59:59", 10001, 1042, 30, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-08-24 00:00:00", "2015-08-28 23:59:59", 10001, 1043, 10, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-07-06 00:00:00", "2015-07-10 23:59:59", 10002, 1056, 20, 30, 4, 34));
            employeeData.tasks.Add(new EmployeeTask("2015-07-06 00:00:00", "2015-07-10 23:59:59", 10002, 1057, 10, 30, 4, 34));
            employeeData.tasks.Add(new EmployeeTask("2015-07-13 00:00:00", "2015-07-17 23:59:59", 10002, 1058, 20, 30, 4, 34));
            employeeData.tasks.Add(new EmployeeTask("2015-07-13 00:00:00", "2015-07-17 23:59:59", 10002, 1059, 10, 30, 4, 34));
            employees.Add(employeeData);

            employeeData = new Employee("0000022", "Kris Tulowitzki", "Development", "ktulowitzki@example.com", "555-456-7890");
            employeeData.projects.Add(10000);
            employeeData.projects.Add(10002);
            employeeData.tasks.Add(new EmployeeTask("2015-06-29 00:00:00", "2015-07-03 23:59:59", 10000, 1015, 25, 35, 0, 35));
            employeeData.tasks.Add(new EmployeeTask("2015-06-29 00:00:00", "2015-07-03 23:59:59", 10000, 1016, 10, 35, 0, 35));
            employeeData.tasks.Add(new EmployeeTask("2015-07-06 00:00:00", "2015-07-10 23:59:59", 10000, 1018, 25, 35, 10, 45));
            employeeData.tasks.Add(new EmployeeTask("2015-07-06 00:00:00", "2015-07-10 23:59:59", 10000, 1019, 10, 35, 10, 45));
            employeeData.tasks.Add(new EmployeeTask("2015-07-13 00:00:00", "2015-07-17 23:59:59", 10000, 1020, 30, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-07-13 00:00:00", "2015-07-17 23:59:59", 10000, 1021, 10, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-06-08 00:00:00", "2015-06-12 23:59:59", 10002, 1048, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-06-15 00:00:00", "2015-06-19 23:59:59", 10002, 1051, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-06-22 00:00:00", "2015-06-26 23:59:59", 10002, 1053, 4, 4, 0, 4));
            employeeData.tasks.Add(new EmployeeTask("2015-06-29 00:00:00", "2015-07-03 23:59:59", 10002, 1055, 4, 4, 35, 39));
            employeeData.tasks.Add(new EmployeeTask("2015-07-06 00:00:00", "2015-07-10 23:59:59", 10002, 1057, 10, 10, 35, 45));
            employees.Add(employeeData);

            employeeData = new Employee("0000019", "Tara Kershaw", "Development", "tkershaw@example.com", "555-456-7890");
            employeeData.projects.Add(10001);
            employeeData.projects.Add(10002);
            employeeData.tasks.Add(new EmployeeTask("2015-08-10 00:00:00", "2015-08-14 23:59:59", 10001, 1037, 30, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-08-10 00:00:00", "2015-08-14 23:59:59", 10001, 1038, 10, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-08-17 00:00:00", "2015-08-21 23:59:59", 10001, 1040, 30, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-08-17 00:00:00", "2015-08-21 23:59:59", 10001, 1041, 10, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-08-24 00:00:00", "2015-08-28 23:59:59", 10001, 1042, 30, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-08-24 00:00:00", "2015-08-28 23:59:59", 10001, 1043, 10, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-07-06 00:00:00", "2015-07-10 23:59:59", 10002, 1056, 20, 30, 0, 30));
            employeeData.tasks.Add(new EmployeeTask("2015-07-06 00:00:00", "2015-07-10 23:59:59", 10002, 1057, 10, 30, 0, 30));
            employeeData.tasks.Add(new EmployeeTask("2015-07-13 00:00:00", "2015-07-17 23:59:59", 10002, 1058, 30, 40, 0, 40));
            employeeData.tasks.Add(new EmployeeTask("2015-07-13 00:00:00", "2015-07-17 23:59:59", 10002, 1059, 10, 40, 0, 40));
            employees.Add(employeeData);
        }
        #endregion

        #region TaskList Data Generation
        private void SetupTaskList10000Data()
        {
            taskList["10000"] = new TaskList();
            Task taskData;
            taskData = new Task(1000, @Resources.Main.Task_ProjectReview, "2015-05-11 00:00:00", "2015-05-15 23:59:59", "Project Management", "40", "ok");
            {
                taskData.resources.Add("0000007");
                taskData.resources.Add("0000008");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_MeetingNotes, "http://dropbox.com", "text", true));
            }
            taskList["10000"].tasks.Add(taskData);

            taskData = new Task(1001, @Resources.Main.Task_StakeholderInterviews, "2015-05-18 00:00:00", "2015-05-22 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000007");
                taskData.resources.Add("0000008");
                taskData.resources.Add("0000009");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_PrepInterviewQ, "http://dropbox.com", "text", true));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_RecordInterviews, "http://dropbox.com", "audio", true));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_AnalyzeInterview, "http://dropbox.com", "text", true));
            }
            taskList["10000"].tasks.Add(taskData);

            taskData = new Task(1002, @Resources.Main.Task_DesignResearch, "2015-05-18 00:00:00", "2015-05-22 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000007");
                taskData.resources.Add("0000008");
                taskData.resources.Add("0000009");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_ResearchNotes, "http://dropbox.com", "text", true));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_GatherDesign, "http://dropbox.com", "pdf", true));
            }
            taskList["10000"].tasks.Add(taskData);

            taskData = new Task(1003, @Resources.Main.Task_Wireframing, "2015-05-25 00:00:00", "2015-05-29 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000007");
                taskData.resources.Add("0000008");
                taskData.resources.Add("0000009");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_WireframeSketches, "http://dropbox.com", "image", true));
            }
            taskList["10000"].tasks.Add(taskData);

            taskData = new Task(1004, @Resources.Main.Task_DevResearch, "2015-05-25 00:00:00", "2015-05-29 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000002");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_ResearchNotes, "http://dropbox.com", "text", true));
            }
            taskList["10000"].tasks.Add(taskData);

            taskData = new Task(1005, @Resources.Main.Task_WireframingII, "2015-06-01 00:00:00", "2015-06-05 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000007");
                taskData.resources.Add("0000008");
                taskData.resources.Add("0000009");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_WireframeSketches, "http://dropbox.com", "image", true));
            }
            taskList["10000"].tasks.Add(taskData);

            taskData = new Task(1006, @Resources.Main.Task_DevResearchII, "2015-06-01 00:00:00", "2015-06-05 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000002");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_ResearchNotes, "http://dropbox.com", "text", true));
            }
            taskList["10000"].tasks.Add(taskData);

            taskData = new Task(1007, @Resources.Main.Task_AnnotationInteractions, "2015-06-08 00:00:00", "2015-06-12 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000007");
                taskData.resources.Add("0000008");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_Prototyping, "http://dropbox.com", "text", true));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_InteractionDoc, "http://dropbox.com", "pdf", true));
            }
            taskList["10000"].tasks.Add(taskData);

            taskData = new Task(1008, @Resources.Main.Task_UserTesting, "2015-06-08 00:00:00", "2015-06-12 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000007");
                taskData.resources.Add("0000008");
                taskData.resources.Add("0000009");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_UserFeedbackDoc, "http://dropbox.com", "text", true));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_MakeAdjustments, "http://dropbox.com", "text", true));
                taskData.assets.Add(new Asset(@Resources.Main.Assets_MakeAdjustmentsWireframe, "http://dropbox.com", "image", true));
            }
            taskList["10000"].tasks.Add(taskData);

            taskData = new Task(1009, @Resources.Main.Task_DevResearchIII, "2015-06-08 00:00:00", "2015-06-12 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000002");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_ResearchNotes, "http://dropbox.com", "text", true));
            }
            taskList["10000"].tasks.Add(taskData);

            taskData = new Task(1010, @Resources.Main.Task_VisualDesign, "2015-06-15 00:00:00", "2015-06-19 23:59:59", "Visual Design", "40", "ok");
            {
                taskData.resources.Add("0000009");
                taskData.resources.Add("0000007");
                taskData.resources.Add("0000008");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_DesignSpecs, "http://dropbox.com", "pdf", true));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_DesignPreviews, "http://dropbox.com", "image", true));
            }
            taskList["10000"].tasks.Add(taskData);

            taskData = new Task(1011, @Resources.Main.Task_DevResearchIV, "2015-06-15 00:00:00", "2015-06-19 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000002");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_ResearchNotes, "http://dropbox.com", "text", true));
            }
            taskList["10000"].tasks.Add(taskData);

            taskData = new Task(1012, @Resources.Main.Task_VisualDesignII, "2015-06-22 00:00:00", "2015-06-26 23:59:59", "Visual Design", "40", "danger");
            {
                taskData.resources.Add("0000009");
                taskData.resources.Add("0000007");
                taskData.resources.Add("0000008");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_DesignPreviews, "http://dropbox.com", "image", true));
            }
            taskList["10000"].tasks.Add(taskData);

            taskData = new Task(1013, @Resources.Main.Task_DevResearchV, "2015-06-22 00:00:00", "2015-06-26 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000002");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_ResearchNotes, "http://dropbox.com", "text", true));
            }
            taskList["10000"].tasks.Add(taskData);

            taskData = new Task(1014, @Resources.Main.Task_FrontendDev, "2015-06-29 00:00:00", "2015-07-03 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000002");
                taskData.resources.Add("0000008");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_SendDevLink, "http://dropbox.com", "text", true));
            }
            taskList["10000"].tasks.Add(taskData);

            taskData = new Task(1015, @Resources.Main.Task_BackendDev, "2015-06-29 00:00:00", "2015-07-03 23:59:59", "Development", "40", "danger");
            {
                taskData.resources.Add("0000022");
                taskData.resources.Add("0000008");

                taskData.assets.Add(new Asset(@Resources.Main.Asset__UpdateTaskListDoc, "http://dropbox.com", "text", true));
            }
            taskList["10000"].tasks.Add(taskData);

            taskData = new Task(1016, @Resources.Main.Task_UserTestingFix, "2015-06-29 00:00:00", "2015-07-03 23:59:59", "User Experience", "40", "danger");
            {
                taskData.resources.Add("0000007");
                taskData.resources.Add("0000009");
                taskData.resources.Add("0000008");
                taskData.resources.Add("0000002");
                taskData.resources.Add("0000022");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_UserTestBugs, "http://dropbox.com", "text", true));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_UpdateBugReport, "http://dropbox.com", "text", true));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_FixBugs, "http://dropbox.com", "text", true));
            }
            taskList["10000"].tasks.Add(taskData);

            taskData = new Task(1017, @Resources.Main.Task_FrontendDevII
, "2015-07-06 00:00:00", "2015-07-10 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000002");
                taskData.resources.Add("0000008");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_SendDevLink, "http://dropbox.com", "text", false));
            }
            taskList["10000"].tasks.Add(taskData);

            taskData = new Task(1018, @Resources.Main.Task_BackendDevII, "2015-07-06 00:00:00", "2015-07-10 23:59:59", "Development", "40", "warning");
            {
                taskData.resources.Add("0000022");
                taskData.resources.Add("0000008");

                taskData.assets.Add(new Asset(@Resources.Main.Asset__UpdateTaskListDoc, "http://dropbox.com", "text", false));
            }
            taskList["10000"].tasks.Add(taskData);

            taskData = new Task(1019, @Resources.Main.Task_UserTestingFixII, "2015-07-06 00:00:00", "2015-07-10 23:59:59", "User Experience", "40", "warning");
            {
                taskData.resources.Add("0000007");
                taskData.resources.Add("0000009");
                taskData.resources.Add("0000008");
                taskData.resources.Add("0000002");
                taskData.resources.Add("0000022");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_UserTestBugs, "http://dropbox.com", "text", false));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_UpdateBugReport, "http://dropbox.com", "text", false));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_FixBugs, "http://dropbox.com", "text", false));
            }
            taskList["10000"].tasks.Add(taskData);

            taskData = new Task(1020, @Resources.Main.Task_FinalizeDev, "2015-07-13 00:00:00", "2015-07-17 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000002");
                taskData.resources.Add("0000022");
                taskData.resources.Add("0000008");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_ProvideUpdateLink, "http://dropbox.com", "text", false));
            }
            taskList["10000"].tasks.Add(taskData);

            taskData = new Task(1021, @Resources.Main.Task_FinalReview, "2015-07-13 00:00:00", "2015-07-17 23:59:59", "Project Management", "40", "ok");
            {
                taskData.resources.Add("0000009");
                taskData.resources.Add("0000007");
                taskData.resources.Add("0000008");
                taskData.resources.Add("0000002");
                taskData.resources.Add("0000022");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_ProvideUpdateLink, "http://dropbox.com", "text", false));
            }
            taskList["10000"].tasks.Add(taskData);
        }

        private void SetupTaskList10001Data()
        {
            taskList["10001"] = new TaskList();
            Task taskData;

            taskData = new Task(1022, @Resources.Main.Task_ProjectReview, "2015-06-22 00:00:00", "2015-06-26 23:59:59", "Project Management", "40", "ok");
            {
                taskData.resources.Add("0000004");
                taskData.resources.Add("0000008");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_MeetingNotes, "http://dropbox.com", "text", true));
            }
            taskList["10001"].tasks.Add(taskData);

            taskData = new Task(1023, @Resources.Main.Task_StakeholderInterviews, "2015-06-29 00:00:00", "2015-07-03 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000004");
                taskData.resources.Add("0000008");
                taskData.resources.Add("0000012");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_PrepInterviewQ, "http://dropbox.com", "text", true));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_RecordInterviews, "http://dropbox.com", "audio", true));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_AnalyzeInterview, "http://dropbox.com", "text", true));
            }
            taskList["10001"].tasks.Add(taskData);

            taskData = new Task(1024, @Resources.Main.Task_DesignResearch, "2015-06-29 00:00:00", "2015-07-03 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000004");
                taskData.resources.Add("0000008");
                taskData.resources.Add("0000012");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_ResearchNotes, "http://dropbox.com", "text", true));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_GatherDesign, "http://dropbox.com", "pdf", true));
            }
            taskList["10001"].tasks.Add(taskData);

            taskData = new Task(1025, @Resources.Main.Task_Wireframing, "2015-07-06 00:00:00", "2015-07-10 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000004");
                taskData.resources.Add("0000008");
                taskData.resources.Add("0000012");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_WireframeSketches, "http://dropbox.com", "image", false));
            }
            taskList["10001"].tasks.Add(taskData);

            taskData = new Task(1026, @Resources.Main.Task_DevResearch, "2015-07-06 00:00:00", "2015-07-10 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000017");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_ResearchNotes, "http://dropbox.com", "text", false));
            }
            taskList["10001"].tasks.Add(taskData);

            taskData = new Task(1027, @Resources.Main.Task_WireframingII, "2015-07-13 00:00:00", "2015-07-17 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000004");
                taskData.resources.Add("0000008");
                taskData.resources.Add("0000012");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_WireframeSketches, "http://dropbox.com", "image", false));
            }
            taskList["10001"].tasks.Add(taskData);

            taskData = new Task(1028, @Resources.Main.Task_DevResearchII, "2015-07-13 00:00:00", "2015-07-17 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("00000017");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_ResearchNotes, "http://dropbox.com", "text", false));
            }
            taskList["10001"].tasks.Add(taskData);

            taskData = new Task(1029, @Resources.Main.Task_AnnotationInteractions, "2015-07-20 00:00:00", "2015-07-24 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000004");
                taskData.resources.Add("0000008");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_Prototyping, "http://dropbox.com", "text", false));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_InteractionDoc, "http://dropbox.com", "pdf", false));
            }
            taskList["10001"].tasks.Add(taskData);

            taskData = new Task(1030, @Resources.Main.Task_UserTesting, "2015-07-20 00:00:00", "2015-07-24 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000004");
                taskData.resources.Add("0000008");
                taskData.resources.Add("0000012");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_UserFeedbackDoc, "http://dropbox.com", "text", false));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_MakeAdjustments, "http://dropbox.com", "text", false));
                taskData.assets.Add(new Asset(@Resources.Main.Assets_MakeAdjustmentsWireframe, "http://dropbox.com", "image", false));
            }
            taskList["10001"].tasks.Add(taskData);

            taskData = new Task(1031, @Resources.Main.Task_DevResearchIII, "2015-07-20 00:00:00", "2015-07-24 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("00000017");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_ResearchNotes, "http://dropbox.com", "text", false));
            }
            taskList["10001"].tasks.Add(taskData);

            taskData = new Task(1032, @Resources.Main.Task_VisualDesign, "2015-07-27 00:00:00", "2015-07-31 23:59:59", "Visual Design", "40", "ok");
            {
                taskData.resources.Add("0000012");
                taskData.resources.Add("0000004");
                taskData.resources.Add("0000008");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_DesignSpecs, "http://dropbox.com", "pdf", false));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_DesignPreviews, "http://dropbox.com", "image", false));
            }
            taskList["10001"].tasks.Add(taskData);

            taskData = new Task(1033, @Resources.Main.Task_DevResearchIV, "2015-07-27 00:00:00", "2015-07-31 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000017");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_ResearchNotes, "http://dropbox.com", "text", false));
            }
            taskList["10001"].tasks.Add(taskData);

            taskData = new Task(1034, @Resources.Main.Task_VisualDesignII, "2015-08-03 00:00:00", "2015-08-07 23:59:59", "Visual Design", "40", "ok");
            {
                taskData.resources.Add("0000012");
                taskData.resources.Add("0000004");
                taskData.resources.Add("0000008");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_DesignPreviews, "http://dropbox.com", "image", false));
            }
            taskList["10001"].tasks.Add(taskData);

            taskData = new Task(1035, @Resources.Main.Task_DevResearchV, "2015-08-03 00:00:00", "2015-08-07 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000017");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_ResearchNotes, "http://dropbox.com", "text", false));
            }
            taskList["10001"].tasks.Add(taskData);

            taskData = new Task(1036, @Resources.Main.Task_FrontendDev, "2015-08-10 00:00:00", "2015-08-14 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000017");
                taskData.resources.Add("0000008");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_SendDevLink, "http://dropbox.com", "text", false));
            }
            taskList["10001"].tasks.Add(taskData);

            taskData = new Task(1037, @Resources.Main.Task_BackendDev, "2015-08-10 00:00:00", "2015-08-14 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000019");
                taskData.resources.Add("0000008");

                taskData.assets.Add(new Asset(@Resources.Main.Asset__UpdateTaskListDoc, "http://dropbox.com", "text", false));
            }
            taskList["10001"].tasks.Add(taskData);

            taskData = new Task(1038, @Resources.Main.Task_UserTestingFix, "2015-08-10 00:00:00", "2015-08-14 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000004");
                taskData.resources.Add("0000012");
                taskData.resources.Add("0000008");
                taskData.resources.Add("0000017");
                taskData.resources.Add("0000019");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_UserTestBugs, "http://dropbox.com", "text", false));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_UpdateBugReport, "http://dropbox.com", "text", false));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_FixBugs, "http://dropbox.com", "text", false));
            }
            taskList["10001"].tasks.Add(taskData);

            taskData = new Task(1039, @Resources.Main.Task_FrontendDevII, "2015-08-17 00:00:00", "2015-08-21 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000017");
                taskData.resources.Add("0000008");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_SendDevLink, "http://dropbox.com", "text", false));
            }
            taskList["10001"].tasks.Add(taskData);

            taskData = new Task(1040, @Resources.Main.Task_BackendDevII, "2015-08-17 00:00:00", "2015-08-21 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000019");
                taskData.resources.Add("0000008");

                taskData.assets.Add(new Asset(@Resources.Main.Asset__UpdateTaskListDoc, "http://dropbox.com", "text", false));
            }
            taskList["10001"].tasks.Add(taskData);

            taskData = new Task(1041, @Resources.Main.Task_UserTestingFixII, "2015-08-17 00:00:00", "2015-08-21 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000004");
                taskData.resources.Add("0000012");
                taskData.resources.Add("0000008");
                taskData.resources.Add("0000017");
                taskData.resources.Add("0000019");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_UserTestBugs, "http://dropbox.com", "text", false));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_UpdateBugReport, "http://dropbox.com", "text", false));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_FixBugs, "http://dropbox.com", "text", false));
            }
            taskList["10001"].tasks.Add(taskData);

            taskData = new Task(1042, @Resources.Main.Task_FinalizeDev, "2015-08-24 00:00:00", "2015-08-28 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000017");
                taskData.resources.Add("0000019");
                taskData.resources.Add("0000008");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_ProvideUpdateLink, "http://dropbox.com", "text", false));
            }
            taskList["10001"].tasks.Add(taskData);

            taskData = new Task(1043, @Resources.Main.Task_FinalReview, "2015-08-24 00:00:00", "2015-08-28 23:59:59", "Project Management", "40", "ok");
            {
                taskData.resources.Add("0000004");
                taskData.resources.Add("0000012");
                taskData.resources.Add("0000008");
                taskData.resources.Add("0000017");
                taskData.resources.Add("0000019");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_ProvideUpdateLink, "http://dropbox.com", "text", false));
            }
            taskList["10001"].tasks.Add(taskData);
        }

        private void SetupTaskList10002Data()
        {
            taskList["10002"] = new TaskList();
            Task taskData;

            taskData = new Task(1044, @Resources.Main.Task_ProjectReview, "2015-05-25 00:00:00", "2015-05-29 23:59:59", "Project Management", "40", "ok");
            {
                taskData.resources.Add("0000004");
                taskData.resources.Add("0000006");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_MeetingNotes, "http://dropbox.com", "text", true));
            }
            taskList["10002"].tasks.Add(taskData);

            taskData = new Task(1045, @Resources.Main.Task_StakeholderInterviews, "2015-06-01 00:00:00", "2015-06-05 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000004");
                taskData.resources.Add("0000006");
                taskData.resources.Add("0000012");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_PrepInterviewQ, "http://dropbox.com", "text", true));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_RecordInterviews, "http://dropbox.com", "audio", true));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_AnalyzeInterview, "http://dropbox.com", "text", true));
            }
            taskList["10002"].tasks.Add(taskData);

            taskData = new Task(1046, @Resources.Main.Task_DesignResearch, "2015-06-01 00:00:00", "2015-06-05 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000004");
                taskData.resources.Add("0000006");
                taskData.resources.Add("0000012");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_ResearchNotes, "http://dropbox.com", "text", true));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_GatherDesign, "http://dropbox.com", "pdf", true));
            }
            taskList["10002"].tasks.Add(taskData);

            taskData = new Task(1047, @Resources.Main.Task_Wireframing, "2015-06-08 00:00:00", "2015-06-12 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000004");
                taskData.resources.Add("0000006");
                taskData.resources.Add("0000012");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_WireframeSketches, "http://dropbox.com", "image", true));
            }
            taskList["10002"].tasks.Add(taskData);

            taskData = new Task(1048, @Resources.Main.Task_DevResearch, "2015-06-08 00:00:00", "2015-06-12 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000022");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_ResearchNotes, "http://dropbox.com", "text", true));
            }
            taskList["10002"].tasks.Add(taskData);

            taskData = new Task(1049, @Resources.Main.Task_AnnotationInteractions, "2015-06-15 00:00:00", "2015-06-19 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000004");
                taskData.resources.Add("0000006");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_Prototyping, "http://dropbox.com", "text", true));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_InteractionDoc, "http://dropbox.com", "pdf", true));
            }
            taskList["10002"].tasks.Add(taskData);

            taskData = new Task(1050, @Resources.Main.Task_UserTesting, "2015-06-15 00:00:00", "2015-06-19 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000004");
                taskData.resources.Add("0000006");
                taskData.resources.Add("0000012");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_UserFeedbackDoc, "http://dropbox.com", "text", true));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_MakeAdjustments, "http://dropbox.com", "text", true));
                taskData.assets.Add(new Asset(@Resources.Main.Assets_MakeAdjustmentsWireframe, "http://dropbox.com", "image", true));
            }
            taskList["10002"].tasks.Add(taskData);

            taskData = new Task(1051, @Resources.Main.Task_DevResearchII, "2015-06-15 00:00:00", "2015-06-19 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000022");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_ResearchNotes, "http://dropbox.com", "text", true));
            }
            taskList["10002"].tasks.Add(taskData);

            taskData = new Task(1052, @Resources.Main.Task_VisualDesign, "2015-06-22 00:00:00", "2015-06-26 23:59:59", "Visual Design", "40", "ok");
            {
                taskData.resources.Add("0000006");
                taskData.resources.Add("0000012");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_DesignSpecs, "http://dropbox.com", "pdf", true));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_DesignPreviews, "http://dropbox.com", "image", true));
            }
            taskList["10002"].tasks.Add(taskData);

            taskData = new Task(1053, @Resources.Main.Task_DevResearchII, "2015-06-22 00:00:00", "2015-06-26 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000022");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_ResearchNotes, "http://dropbox.com", "text", true));
            }
            taskList["10002"].tasks.Add(taskData);

            taskData = new Task(1054, @Resources.Main.Task_VisualDesignII, "2015-06-29 00:00:00", "2015-07-03 23:59:59", "Visual Design", "40", "ok");
            {
                taskData.resources.Add("0000006");
                taskData.resources.Add("0000012");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_DesignSpecs, "http://dropbox.com", "pdf", true));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_DesignPreviews, "http://dropbox.com", "image", true));
            }
            taskList["10002"].tasks.Add(taskData);

            taskData = new Task(1055, @Resources.Main.Task_Dev, "2015-06-29 00:00:00", "2015-07-03 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000022");
                taskData.resources.Add("0000006");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_SendDevLink, "http://dropbox.com", "text", true));
            }
            taskList["10002"].tasks.Add(taskData);

            taskData = new Task(1056, @Resources.Main.Task_DevII, "2015-07-06 00:00:00", "2015-07-10 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000019");
                taskData.resources.Add("0000017");
                taskData.resources.Add("0000006");

                taskData.assets.Add(new Asset(@Resources.Main.Asset__UpdateTaskListDoc, "http://dropbox.com", "text", false));
            }
            taskList["10002"].tasks.Add(taskData);

            taskData = new Task(1057, @Resources.Main.Task_UserTestingFix, "2015-07-06 00:00:00", "2015-07-10 23:59:59", "User Experience", "40", "warning");
            {
                taskData.resources.Add("0000012");
                taskData.resources.Add("0000006");
                taskData.resources.Add("0000022");
                taskData.resources.Add("0000017");
                taskData.resources.Add("0000019");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_UserTestBugs, "http://dropbox.com", "text", false));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_UpdateBugReport, "http://dropbox.com", "text", false));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_FixBugs, "http://dropbox.com", "text", false));
            }
            taskList["10002"].tasks.Add(taskData);

            taskData = new Task(1058, @Resources.Main.Task_DevIII, "2015-07-13 00:00:00", "2015-07-17 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000019");
                taskData.resources.Add("0000017");
                taskData.resources.Add("0000006");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_SendDevLink, "http://dropbox.com", "text", false));
            }
            taskList["10002"].tasks.Add(taskData);

            taskData = new Task(1059, @Resources.Main.Task_FinalReview, "2015-07-13 00:00:00", "2015-07-17 23:59:59", "Project Management", "40", "ok");
            {
                taskData.resources.Add("0000012");
                taskData.resources.Add("0000006");
                taskData.resources.Add("0000019");
                taskData.resources.Add("0000017");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_ProvideUpdateLink, "http://dropbox.com", "text", false));
            }
            taskList["10002"].tasks.Add(taskData);
        }

        private void SetupTaskList10003Data()
        {
            taskList["10003"] = new TaskList();
            Task taskData;

            taskData = new Task(1060, @Resources.Main.Task_ProjectReview, "2015-08-03 00:00:00", "2015-08-07 23:59:59", "Project Management", "40", "ok");
            {
                taskData.resources.Add("0000006");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_MeetingNotes, "http://dropbox.com", "text", false));
            }
            taskList["10003"].tasks.Add(taskData);

            taskData = new Task(1061, @Resources.Main.Task_StakeholderInterviews, "2015-08-10 00:00:00", "2015-08-14 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000006");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_PrepInterviewQ, "http://dropbox.com", "text", false));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_RecordInterviews, "http://dropbox.com", "audio", false));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_AnalyzeInterview, "http://dropbox.com", "text", false));
            }
            taskList["10003"].tasks.Add(taskData);

            taskData = new Task(1062, @Resources.Main.Task_DesignResearch, "2015-08-10 00:00:00", "2015-08-14 23:59:59", "User Experience", "40", "ok");
            {
                taskData.assets.Add(new Asset(@Resources.Main.Asset_ResearchNotes, "http://dropbox.com", "text", false));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_GatherDesign, "http://dropbox.com", "pdf", false));
            }
            taskList["10003"].tasks.Add(taskData);

            taskData = new Task(1063, @Resources.Main.Task_Wireframing, "2015-08-17 00:00:00", "2015-08-21 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000006");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_WireframeSketches, "http://dropbox.com", "image", false));
            }
            taskList["10003"].tasks.Add(taskData);

            taskData = new Task(1064, @Resources.Main.Task_DevResearch, "2015-08-17 00:00:00", "2015-08-21 23:59:59", "Development", "40", "ok");
            {
                taskData.assets.Add(new Asset(@Resources.Main.Asset_ResearchNotes, "http://dropbox.com", "text", false));
            }
            taskList["10003"].tasks.Add(taskData);

            taskData = new Task(1065, @Resources.Main.Task_WireframingII, "2015-08-24 00:00:00", "2015-08-28 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000006");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_WireframeSketches, "http://dropbox.com", "image", false));
            }
            taskList["10003"].tasks.Add(taskData);

            taskData = new Task(1066, @Resources.Main.Task_DevResearchII, "2015-08-24 00:00:00", "2015-08-28 23:59:59", "Development", "40", "ok");
            {
                taskData.assets.Add(new Asset(@Resources.Main.Asset_ResearchNotes, "http://dropbox.com", "text", false));
            }
            taskList["10003"].tasks.Add(taskData);

            taskData = new Task(1067, @Resources.Main.Task_AnnotationInteractions, "2015-08-31 00:00:00", "2015-09-04 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000006");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_Prototyping, "http://dropbox.com", "text", false));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_InteractionDoc, "http://dropbox.com", "pdf", false));
            }
            taskList["10003"].tasks.Add(taskData);

            taskData = new Task(1068, @Resources.Main.Task_UserTesting, "2015-08-31 00:00:00", "2015-09-04 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000006");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_UserFeedbackDoc, "http://dropbox.com", "text", false));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_MakeAdjustments, "http://dropbox.com", "text", false));
                taskData.assets.Add(new Asset(@Resources.Main.Assets_MakeAdjustmentsWireframe, "http://dropbox.com", "image", false));
            }
            taskList["10003"].tasks.Add(taskData);

            taskData = new Task(1069, @Resources.Main.Task_DevResearchIII, "2015-08-31 00:00:00", "2015-09-04 23:59:59", "Development", "40", "ok");
            {
                taskData.assets.Add(new Asset(@Resources.Main.Asset_ResearchNotes, "http://dropbox.com", "text", false));
            }
            taskList["10003"].tasks.Add(taskData);

            taskData = new Task(1070, @Resources.Main.Task_VisualDesign, "2015-09-07 00:00:00", "2015-09-11 23:59:59", "Visual Design", "40", "ok");
            {
                taskData.resources.Add("0000006");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_DesignSpecs, "http://dropbox.com", "pdf", false));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_DesignPreviews, "http://dropbox.com", "image", false));
            }
            taskList["10003"].tasks.Add(taskData);

            taskData = new Task(1071, @Resources.Main.Task_DevResearchIV, "2015-09-07 00:00:00", "2015-09-11 23:59:59", "Development", "40", "ok");
            {
                taskData.assets.Add(new Asset(@Resources.Main.Asset_ResearchNotes, "http://dropbox.com", "text", false));
            }
            taskList["10003"].tasks.Add(taskData);

            taskData = new Task(1072, @Resources.Main.Task_VisualDesignII, "2015-09-14 00:00:00", "2015-09-18 23:59:59", "Visual Design", "40", "ok");
            {
                taskData.resources.Add("0000006");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_DesignPreviews, "http://dropbox.com", "image", false));
            }
            taskList["10003"].tasks.Add(taskData);

            taskData = new Task(1073, @Resources.Main.Task_DevResearchV, "2015-09-14 00:00:00", "2015-09-18 23:59:59", "Development", "40", "ok");
            {
                taskData.assets.Add(new Asset(@Resources.Main.Asset_ResearchNotes, "http://dropbox.com", "text", false));
            }
            taskList["10003"].tasks.Add(taskData);

            taskData = new Task(1074, @Resources.Main.Task_FrontendDev, "2015-09-21 00:00:00", "2015-09-25 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000006");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_SendDevLink, "http://dropbox.com", "text", false));
            }
            taskList["10003"].tasks.Add(taskData);

            taskData = new Task(1075, @Resources.Main.Task_BackendDev, "2015-09-21 00:00:00", "2015-09-25 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000006");

                taskData.assets.Add(new Asset(@Resources.Main.Asset__UpdateTaskListDoc, "http://dropbox.com", "text", false));
            }
            taskList["10003"].tasks.Add(taskData);

            taskData = new Task(1076, @Resources.Main.Task_UserTestingFix, "2015-09-21 00:00:00", "2015-09-25 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000006");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_UserTestBugs, "http://dropbox.com", "text", false));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_UpdateBugReport, "http://dropbox.com", "text", false));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_FixBugs, "http://dropbox.com", "text", false));
            }
            taskList["10003"].tasks.Add(taskData);

            taskData = new Task(1077, @Resources.Main.Task_FrontendDevII, "2015-09-28 00:00:00", "2015-10-02 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000006");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_SendDevLink, "http://dropbox.com", "text", false));
            }
            taskList["10003"].tasks.Add(taskData);

            taskData = new Task(1078, @Resources.Main.Task_BackendDevII, "2015-09-28 00:00:00", "2015-10-02 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000006");

                taskData.assets.Add(new Asset(@Resources.Main.Asset__UpdateTaskListDoc, "http://dropbox.com", "text", false));
            }
            taskList["10003"].tasks.Add(taskData);

            taskData = new Task(1079, @Resources.Main.Task_UserTestingFixII, "2015-09-28 00:00:00", "2015-10-02 23:59:59", "User Experience", "40", "ok");
            {
                taskData.resources.Add("0000006");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_UserTestBugs, "http://dropbox.com", "text", false));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_UpdateBugReport, "http://dropbox.com", "text", false));
                taskData.assets.Add(new Asset(@Resources.Main.Asset_FixBugs, "http://dropbox.com", "text", false));
            }
            taskList["10003"].tasks.Add(taskData);

            taskData = new Task(1080, @Resources.Main.Task_FinalizeDev, "2015-10-05 00:00:00", "2015-10-09 23:59:59", "Development", "40", "ok");
            {
                taskData.resources.Add("0000006");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_ProvideUpdateLink, "http://dropbox.com", "text", false));
            }
            taskList["10003"].tasks.Add(taskData);

            taskData = new Task(1081, @Resources.Main.Task_FinalReview, "2015-10-05 00:00:00", "2015-10-09 23:59:59", "Project Management", "40", "ok");
            {
                taskData.resources.Add("0000006");

                taskData.assets.Add(new Asset(@Resources.Main.Asset_ProvideUpdateLink, "http://dropbox.com", "text", false));
            }
            taskList["10003"].tasks.Add(taskData);
        }

        private void GenerateTaskListData()
        {
            taskList = new Dictionary<String, TaskList>();
            SetupTaskList10000Data();
            SetupTaskList10001Data();
            SetupTaskList10002Data();
            SetupTaskList10003Data();
        }
        #endregion
    }

    #region Project
    public class ProjectDetails
    {
        public int project_id { get; set; }
        public String client_name { get; set; }
        public String client_abbr { get; set; }
        public String start_date { get; set; }
        public String end_date { get; set; }
        public String projected_end_date { get; set; }
        public decimal budget { get; set; }
        public decimal budget_projected { get; set; }
        public String status { get; set; }
        public int tasks_total { get; set; }
        public int tasks_complete { get; set; }
        public int hours_budget { get; set; }
        public int hours_planned { get; set; }
        public int hours_worked { get; set; }
        public int hours_overtime { get; set; }
        public List<String> employees { get; set; }

        public ProjectDetails()
        {
            employees = new List<String>();
        }
    }
    #endregion

    #region ResourceOverview
    public class ResourceOverview
    {
        public List<Week> weeks { get; set; }

        public ResourceOverview()
        {
            this.weeks = new List<Week>();
        }
    }

    public class Week
    {
        public String startDate { get; set; }
        public String endDate { get; set; }
        public List<ProjectResource> resources { get; set; }

        public Week(String startDate, String endDate)
        {
            this.startDate = startDate;
            this.endDate = endDate;
            this.resources = new List<ProjectResource>();
        }
    }

    public class ProjectResource
    {
        public String employeeID { get; set; }
        public String name { get; set; }
        public String discipline { get; set; }
        public List<ProjectWorkHours> hours { get; set; }

        public ProjectResource(String id, String name, String discipline)
        {
            this.employeeID = id;
            this.name = name;
            this.discipline = discipline;
            this.hours = new List<ProjectWorkHours>();
        }
    }

    public class ProjectWorkHours
    {
        public int worked { get; set; }
        public int planned { get; set; }
        public int other { get; set; }
        public int overtime { get; set; }
        public int total { get; set; }

        public ProjectWorkHours(int worked, int planned, int other, int overtime, int total)
        {
            this.worked = worked;
            this.planned = planned;
            this.other = other;
            this.overtime = overtime;
            this.total = total;
        }
    }
    #endregion

    #region Employees
    public class Employee
    {
        public String employee_id { get; set; }
        public String name { get; set; }
        public String discipline { get; set; }
        public String email { get; set; }
        public String phone { get; set; }
        public List<int> projects { get; set; }
        public List<EmployeeTask> tasks { get; set; }

        public Employee(String id, String name, String discipline, String email, String phone)
        {
            this.projects = new List<int>();
            this.tasks = new List<EmployeeTask>();

            this.employee_id = id;
            this.name = name;
            this.discipline = discipline;
            this.email = email;
            this.phone = phone;
        }
    }

    public class EmployeeTask
    {
        public String start_date { get; set; }
        public String end_date { get; set; }
        public int project_id { get; set; }
        public int task_id { get; set; }
        public int hrs_on_task { get; set; }
        public int hrs_on_project { get; set; }
        public int hrs_on_other { get; set; }
        public int hrs_total { get; set; }

        public EmployeeTask(String start, String end, int projId, int taskId, int taskHours, int projHours, int otherHours, int totalHours)
        {
            this.start_date = start;
            this.end_date = end;
            this.project_id = projId;
            this.task_id = taskId;
            this.hrs_on_task = taskHours;
            this.hrs_on_project = projHours;
            this.hrs_on_other = otherHours;
            this.hrs_total = totalHours;
        }
    }
    #endregion

    #region TaskList
    public class TaskList
    {
        public List<Task> tasks { get; set; }

        public TaskList()
        {
            tasks = new List<Task>();
        }
    }

    public class Task
    {
        public int id { get; set; }
        public String name { get; set; }
        public String startDate { get; set; }
        public String endDate { get; set; }
        public String discipline { get; set; }
        public String hours { get; set; }
        public String flag { get; set; }
        public List<String> resources { get; set; }
        public List<Asset> assets { get; set; }

        public Task(int id, String name, String start, String end, String discipline, String hours, String flag)
        {
            resources = new List<String>();
            assets = new List<Asset>();

            this.id = id;
            this.name = name;
            this.startDate = start;
            this.endDate = end;
            this.discipline = discipline;
            this.hours = hours;
            this.flag = flag;
        }
    }

    public class Asset
    {
        public String name { get; set; }
        public String url { get; set; }
        public String type { get; set; }
        public Boolean isDone { get; set; }

        public Asset(String name, String url, String type, Boolean done)
        {
            this.name = name;
            this.url = url;
            this.type = type;
            this.isDone = done;
        }
    }
    #endregion
}