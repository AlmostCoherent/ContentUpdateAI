using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace ContentUpdateAI.Controller.ApiControllers
{
    public class SignalRController : ApiController
    {
        //[Route("api/v1/get-response")]
        public string GetResponse(int contentId = 0)
        {
            return "Hello world!";
        }

    }
}
