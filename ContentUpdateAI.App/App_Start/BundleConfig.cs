using System.Web;
using System.Web.Optimization;

namespace ContentUpdateAI.App
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/scss/app.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/scripts/app").IncludeDirectory(
                "~/app/dist/out-tsc/src/", "*.js", true));
        }
    }
}
