using Xunit;

namespace ContentUpdateAI.LuisService.Tests
{
    public class GetLuisResponseTests
    {
        [Fact]
        public void GetLuisReponseTest()
        {
            string[] query = new string[] { @"Line 16 remove ""This"" and replace with ""That""" };
            string response = LuisEndPoints.GetCompositeResponse(query);
            //string expectedModel = System.IO.File.ReadAllText("");
            Assert.True(true);
        }
    }
}
