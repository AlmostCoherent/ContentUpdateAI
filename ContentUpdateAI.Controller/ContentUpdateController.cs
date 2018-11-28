using ContentUpdateAI.LuisService;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace ContentUpdateAI.Controller
{
    public class ContentUpdateController : System.Web.Mvc.Controller
    {
        [Route("contentupdate/v1/check-composite")]
        public string CheckForCompositeEntityMatch(string query)
        {
            return LuisService.LuisService.GetCompositeResponse(query);
        }
    }
}
