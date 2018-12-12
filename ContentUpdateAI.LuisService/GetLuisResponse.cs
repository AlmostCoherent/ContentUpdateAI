using ContentUpdateAI.Services;
using Newtonsoft.Json;
using System;
using System.Web;

namespace ContentUpdateAI.LuisService
{
    public static class GetLuisResponse
    {
        private static string _luisAppId = "55bc8e00-8ab9-48c0-8e36-00d115f039ec";
        private static string _luisUrl = "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/" + _luisAppId  + "?";
        private static string _subscriptionKey = "e8ed78ec10214dbaa87d3721e6017e28";

        public static string GetLuisIntent(string[] userStringQuery)
        {
            int lengthOfQueries = userStringQuery.Length;
            string[] returnResponse = new string[lengthOfQueries];

            for(int i = 0; i < userStringQuery.Length; i++)
            {
                System.Collections.Specialized.NameValueCollection queryString = GetLuisQueryString(userStringQuery[i]);

                string jsonResponse = GetHttpResponse.GetJsonResponse(_luisUrl, queryString);
                LuisModel luisModel = JsonConvert.DeserializeObject<LuisModel>(jsonResponse);
                string compositeResponse = JsonConvert.SerializeObject(luisModel.CompositeEntities);

                returnResponse[i] = compositeResponse;
            }

            //LuisModel luisModel = JsonConvert.DeserializeObject<LuisModel>(jsonResponse);

            return JsonConvert.SerializeObject(returnResponse);
        }

        private static System.Collections.Specialized.NameValueCollection GetLuisQueryString(string userStringQuery)
        {
            var queryString = HttpUtility.ParseQueryString(string.Empty);

            queryString["q"] = userStringQuery; //Uri.EscapeUriString(userStringQuery);//HttpUtility.UrlEncode(userStringQuery);
            queryString["subscription-key"] = _subscriptionKey;
            queryString["timezoneOffset"] = "0";
            queryString["verbose"] = "false";
            queryString["spellCheck"] = "false";
            queryString["staging"] = "false";
            return queryString;
        }

    }
}
