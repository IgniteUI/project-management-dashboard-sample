using System.Web;
using System.Web.Optimization;

namespace PM_Dashboard
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/dependencies").Include(
                        "~/Scripts/modernizr-2.8.3.min.js",
                        "~/Scripts/jquery-1.11.2.min.js",
                        "~/Scripts/jquery-ui-1.10.3.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/igniteui").Include(
                        "~/Scripts/ignite/infragistics.core.js",
                        "~/Scripts/ignite/infragistics.lob.js",
                        "~/Scripts/ignite/infragistics.dv.js"));

            bundles.Add(new ScriptBundle("~/bundles/knockout").Include(
                        "~/Scripts/knockout-3.3.0.min.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                        "~/Content/app.html5bp.css",
                        "~/Content/app.css"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                        "~/Scripts/jquery-mCustomScrollbar.3.0.8.js",
                        "~/Scripts/app/app.utils.js",
                        "~/Scripts/app/app.actions.js",
                        "~/Scripts/app/app.viewmodels.js",
                        "~/Scripts/app/app.main.js"));

            BundleTable.EnableOptimizations = true;
        }
    }
}