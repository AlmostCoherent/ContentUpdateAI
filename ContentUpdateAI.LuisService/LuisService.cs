namespace ContentUpdateAI.LuisService
{
    public static class LuisService
    {
        public static string GetCompositeResponse(string query)
        {
            return GetLuisResponse.GetLuisIntent(query).ToString();
        }
    }
}
