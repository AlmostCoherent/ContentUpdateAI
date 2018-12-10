namespace ContentUpdateAI.LuisService
{
    public static class LuisEndPoints
    {
        public static string GetCompositeResponse(string[] query)
        {
            return GetLuisResponse.GetLuisIntent(query).ToString();
        }
    }
}
