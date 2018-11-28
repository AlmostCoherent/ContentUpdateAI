using System.Web;
using System.Web.Optimization;

namespace ContentUpdateAI.WebApp.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundle)
        {
            // create an object of ScriptBundle and 
            // specify bundle name (as virtual path) as constructor parameter 
            bundle.Add(new ScriptBundle("~/Script/Bundles")
                .Include(
                    "~/app/main.*",
                    "~/app/polyfill.*",
                    "~/app/scripts.*",
                    "~/app/vendor.*"
                ));

            bundle.Add(new ScriptBundle("~/Script/app")
                .Include("~/ContentUpdateApp/dist/out-tsc/src/app"));

            bundle.Add(new Bundle("~/Content/Styles")
                .Include("~/app/styles.css"));
        }
    }
}