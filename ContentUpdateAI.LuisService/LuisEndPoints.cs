using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ContentUpdateAI.LuisService
{
    public static class LuisEndPoints
    {
        public static string GetCompositeResponse(string[] query)
        {
            var luisResponse = GetLuisResponse.GetLuisIntent(query);

            List<Dictionary<string, string>> list = new List<Dictionary<string, string>>();

            foreach (var record in luisResponse)
            {
                Dictionary<string, string> simpleCompositeDictionary = new Dictionary<string, string>();

                var lineNumberValueFromComposite = record.CompositeEntities.FirstOrDefault().Children.Where(r => r.Type == CompositeType.LineToUpdate.ToString()).FirstOrDefault().Value;
                simpleCompositeDictionary.Add(CompositeType.LineToUpdate.ToString(), lineNumberValueFromComposite);

                var updateFromValueFromComposite = record.CompositeEntities.FirstOrDefault().Children.Where(r => r.Type == CompositeType.UpdateFrom.ToString()).FirstOrDefault().Value;
                simpleCompositeDictionary.Add(CompositeType.UpdateFrom.ToString(), updateFromValueFromComposite);

                var updateToValueFromComposite = record.CompositeEntities.FirstOrDefault().Children.Where(r => r.Type == CompositeType.UpdateTo.ToString()).FirstOrDefault().Value;
                simpleCompositeDictionary.Add(CompositeType.UpdateTo.ToString(), updateToValueFromComposite);

                list.Add(simpleCompositeDictionary);
            }
            return list.ToJson();
        }

        public enum CompositeType
        {
            LineToUpdate,
            UpdateFrom,
            UpdateTo
        }

        public static string GetTopScoringIntent(string[] query)
        {
            throw new NotImplementedException();
        }

        public static string GetFullLuisModel(string[] query)
        {
            var luisResponse = GetLuisResponse.GetLuisIntent(query);
            return JsonConvert.SerializeObject(luisResponse);
        }

        public static string ToJson(this object input)
        {
            return JsonConvert.SerializeObject(input);
        }
    }
}
