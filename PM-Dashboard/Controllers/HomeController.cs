using PM_Dashboard.Models;
using System;
using System.Globalization;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Infragistics.Web.Mvc;

namespace PM_Dashboard.Controllers
{
    public class HomeController : Controller
    {
        static ResourceData data = new ResourceData();

        public ActionResult Index(string returnUrl)
        {
            ViewBag.ReturnUrl = returnUrl;
            //data.projects = data.projects.OrderBy(project => project.status).ThenBy(project => project.project_id).ToList();

            string pID = data.projects[0].project_id.ToString(); // Obtain 1st Project ID
            GridModel overview = new GridModel();
            overview.DataSource = data.resourceOverview[pID].weeks[0].resources.AsQueryable();

            overview.ID = "resource-overview-table";
            overview.PrimaryKey = "employeedID";
            overview.Width = "100%";
            overview.AutoGenerateColumns = false;
            overview.AutoGenerateLayouts = false;
            overview.EnableHoverStyles = false;
            overview.AutofitLastColumn = false;

            GridColumn employeeIDCol = new GridColumn();
            employeeIDCol.Key = "employeeID";
            employeeIDCol.HeaderText = "Employee ID";
            employeeIDCol.DataType = "string";
            employeeIDCol.Hidden = true;

            GridColumn disciplineCol = new GridColumn();
            disciplineCol.Key = "discipline";
            disciplineCol.HeaderText = "Discipline";
            disciplineCol.DataType = "string";
            disciplineCol.Width = "113px";
            disciplineCol.HeaderCssClass = "disciplineCol";
            disciplineCol.ColumnCssClass = "disciplineCol";
            disciplineCol.FormatterFunction = "formatResourceFirstCol";

            overview.Columns.Add(employeeIDCol);
            overview.Columns.Add(disciplineCol);

            int wk = 1;
            int compareWithStartDate, compareWithEndDate;
            string today = "2015-07-07 12:00:00";
            DateTime t1 = Convert.ToDateTime(today);
            DateTime sdate,edate;
            string sdateMonth, edateMonth, sdateDay, edateDay, curLabel;
            curLabel = @Resources.Main.Overview_CurrentLabel;
            foreach (var week in data.resourceOverview[pID].weeks)
            {

                sdate = Convert.ToDateTime(week.startDate);
                edate = Convert.ToDateTime(week.endDate);
                compareWithStartDate = DateTime.Compare(t1, sdate);
                compareWithEndDate = DateTime.Compare(t1, edate);

                sdateMonth = week.startDate.Substring(5, 2).TrimStart(new Char[] { '0' });
                sdateDay = week.startDate.Substring(8, 2).TrimStart(new Char[] { '0' });
                edateMonth = week.endDate.Substring(5, 2).TrimStart(new Char[] { '0' });
                edateDay = week.endDate.Substring(8, 2).TrimStart(new Char[] { '0' });
                GridColumn weekCol = new GridColumn();
                weekCol.Key = "discipline";
                if (compareWithStartDate > 0 && compareWithEndDate < 0) {
                    weekCol.HeaderText = @"<div class='igColHeader current' data-week='" + wk + "' data-week-end='" + week.endDate + "' data-week-start='" + week.startDate + "'>" + sdateMonth + "/" + sdateDay + "-" + edateMonth + "/" + edateDay + " <small style='color: #fff;'>(" + curLabel + ")</small></div>";
                }
                else
                {
                    weekCol.HeaderText = @"<div class='igColHeader' data-week='" + wk + "' data-week-end='" + week.endDate + "' data-week-start='" + week.startDate + "'>" + sdateMonth + "/" + sdateDay + "-" + edateMonth + "/" + edateDay + "</div>";         
                }
                weekCol.DataType = "string";
                weekCol.Width = "113px";
                weekCol.ColumnCssClass = "gaugeRow";
                weekCol.Template = @"<div class='hidden notification overage'></div><div class='linear-gauge week" + wk + "' data-week='" + wk + "'></div>";

                overview.Columns.Add(weekCol);

                wk = wk + 1;
            }
            overview.AddClientEvent("rowsRendered", "app.utils.renderLinearGauge(resourceOverview['10000'])");



            GridModel tasks = new GridModel();
            tasks.DataSource = data.taskList[pID].tasks.AsQueryable();

            tasks.ID = "project-tasks-table";
            tasks.PrimaryKey = "id";
            tasks.AutoGenerateColumns = false;
            tasks.AlternateRowStyles = false;
            tasks.EnableHoverStyles = true;
            tasks.ShowHeader = false;
           

            GridColumn taskIDCol = new GridColumn();
            taskIDCol.Key = "id";
            taskIDCol.HeaderText = "Task ID";
            taskIDCol.DataType = "number";
            taskIDCol.Hidden = true;
           
            GridColumn taskCol = new GridColumn();
            taskCol.Key = "name";
            taskCol.HeaderText = "Task";
            taskCol.DataType = "string";
            taskCol.FormatterFunction = @"function(v,r) { return ""<div class='taskItem' data-task-end='"" + r.endDate + ""' data-task-start='"" + r.startDate + ""'><span class='taskname "" + r.flag + ""' data-category='"" + r.discipline.toLowerCase().replace(' ', '-') + ""'>"" + v + "" <small>(# "" + r.id + "")</small></span><span class='enddate'>"" + Resources.TaskProjectedEndLabel + "" "" + (parseDate(r.endDate).getMonth()+1) + '/' + parseDate(r.endDate).getDate() + ""</span><span class='hours'>"" + r.hours +  "" <span class='visible-lg-inline'>"" + Resources.TaskHoursLabel + ""</span><span class='visible-md-inline visible-sm-inline visible-xs-inline'>"" + Resources.TaskHrsLabel + ""</span></span></div>""; }";

            GridColumn flagCol = new GridColumn();
            flagCol.Key = "flag";
            flagCol.HeaderText = "Flag";
            flagCol.DataType = "string";
            flagCol.Hidden = true;

            GridColumn discCol = new GridColumn();
            discCol.Key = "discipline";
            discCol.HeaderText = "Discipline";
            discCol.DataType = "string";
            discCol.Hidden = true;

            GridColumn edateCol = new GridColumn();
            edateCol.Key = "endDate";
            edateCol.HeaderText = "End Date";
            edateCol.DataType = "string";
            edateCol.Hidden = true;

            GridColumn sdateCol = new GridColumn();
            sdateCol.Key = "startDate";
            sdateCol.HeaderText = "Start Date";
            sdateCol.DataType = "string";
            sdateCol.Hidden = true;

            GridColumn hoursCol = new GridColumn();
            hoursCol.Key = "hours";
            hoursCol.HeaderText = "hours";
            hoursCol.DataType = "string";
            hoursCol.Hidden = true;

            /*Add Columns*/
            tasks.Columns.Add(taskIDCol);
            tasks.Columns.Add(taskCol);
            tasks.Columns.Add(flagCol);
            tasks.Columns.Add(discCol);
            tasks.Columns.Add(edateCol);
            tasks.Columns.Add(sdateCol);
            tasks.Columns.Add(hoursCol);

            GridColumnLayoutModel layout = new GridColumnLayoutModel();
            layout.Key = "assets";
            layout.AutoGenerateColumns = false;
            layout.EnableHoverStyles = false;
            layout.ShowHeader = false;

            GridColumn type = new GridColumn();
            type.Key = "type";
            type.HeaderText = "Type";
            type.DataType = "string";
            type.ColumnCssClass = "file-type";
            type.FormatterFunction = @"function(val){return ""<i class='icon-sm icon-"" + val + ""'></i>"";}";

            GridColumn name = new GridColumn();
            name.Key = "name";
            name.HeaderText = "Assets";
            name.DataType = "string";
            name.ColumnCssClass = "task-name";

            GridColumn url = new GridColumn();
            url.Key = "url";
            url.HeaderText = "URL";
            url.DataType = "string";
            url.FormatterFunction = @"function(val){return ""<small>(<a href='"" + val + ""' target='_blank'>"" + Resources.TaskViewFile + ""</a>)</small>"";}";
            
            layout.Columns.Add(type);
            layout.Columns.Add(name);
            layout.Columns.Add(url);


            tasks.ColumnLayouts.Add(layout);

            tasks.AddClientEvent("rowsRendered", "app.utils.taskListRowsRendered()");
            tasks.AddClientEvent("rowExpanding", "app.utils.taskListRowsExpanding(evt,ui)");


            dynamic vm = new ExpandoObject();
            vm.data = data;
            vm.grid = overview;
            vm.tasks = tasks;

            return View(vm);
        }

		public JsonResult GetProjectData()
		{
			return Json(data.projects, JsonRequestBehavior.AllowGet);
		}

		public JsonResult GetResourceOverviewData()
		{
			return Json(data.resourceOverview, JsonRequestBehavior.AllowGet);
		}

		public JsonResult GetEmployeesData()
		{
			return Json(data.employees, JsonRequestBehavior.AllowGet);
		}

		public JsonResult GetTaskListData()
		{
			return Json(data.taskList, JsonRequestBehavior.AllowGet);
		}
    }
}