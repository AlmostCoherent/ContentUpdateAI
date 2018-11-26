using System.Web.Mvc;

namespace ContentUpdateAI.Controller
{
    public class ContentUpdateController : System.Web.Mvc.Controller
    {
        [Route("contentupdate/v1/get")]
        public string Get()
        {
            return "This was returned";
        }
    }
}
