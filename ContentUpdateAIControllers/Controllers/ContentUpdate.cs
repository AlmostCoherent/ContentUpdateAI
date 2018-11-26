using ContentUpdateAI.Luis;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System;

namespace ContentUpdateAIControllers.Controllers
{
    [Route("/api/contentupdate")]
    public class ContentUpdate : ApiController
    {
        [HttpPost]
        public async Task<HttpResponseMessage> GetContentUpdate()
        {
            var response = Request.CreateResponse(HttpStatusCode.OK);
            return response;

        }
    }
}