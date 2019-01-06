using ContentUpdateAI.LuisService;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace ContentUpdateAI.Controller
{
    public class ContentUpdateController : System.Web.Mvc.Controller
    {
        [Route("contentupdate/v1/check-composite")]
        public string CheckForCompositeEntityMatch(string[] query, ResponseType responseType)
        {
            switch (responseType)
            {
                case ResponseType.CompositeEntity:
                    return LuisEndPoints.GetCompositeResponse(query);
                case ResponseType.TopScoringIntent:
                    return LuisEndPoints.GetTopScoringIntent(query);
                default:
                    return LuisEndPoints.GetFullLuisModel(query);
            }
        }

        public enum ResponseType
        {
            FullLuisModel,
            CompositeEntity,
            TopScoringIntent
        }
    }
}
