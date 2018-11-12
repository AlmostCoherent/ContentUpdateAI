using System;
using Xunit;

namespace ContentUpdateAI.Luis.Tests
{
    public class GetLuisResponseTests
    {
        [Fact]
        public void GetLuisReponseTest()
        {
            string query = @"Line 16 remove ""This"" and replace with ""That""";
            LuisModel response = GetLuisResponse.GetLuisIntent(query);
        }
    }
}
