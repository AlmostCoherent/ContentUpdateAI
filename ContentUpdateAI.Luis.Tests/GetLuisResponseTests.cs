using System;
using Xunit;
using ContentUpdateAI.LuisService;

namespace ContentUpdateAI.Luis.Tests
{
    public class GetLuisResponseTests
    {
        [Fact]
        public void GetLuisReponseTest()
        {
            string query = @"Line 16 remove ""This"" and replace with ""That""";
            string response = LuisEndPoints.GetCompositeResponse(query);
            string expectedModel = System.IO.File.ReadAllText("");
        }
    }
}
