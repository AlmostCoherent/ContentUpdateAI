using ContentUpdateAI.EF6;
using System.Web.Mvc;
using ContentUpdateAI.EF6;
using ContentUpdateAI.Shared.ApiHelpers;

namespace ContentUpdateAI.Controller
{
    public class ContentController : System.Web.Mvc.Controller
    {
        [Route("content/v1/get-content")]
        public string GetContent(int contentId = 0)
        {
            return ContentUpdateAI.EF6.Content.ContentRepository.GetContent().ToJson();
        }
    }
}
