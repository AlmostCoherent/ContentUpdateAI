using Xunit;

namespace ContentUpdateAI.Controller.Tests
{
    public class ContentUpdateControllerTests
    {
        [Theory]
        [InlineData("Line 6 update from \"this\" to \"that\"", "ExpectedModel.txt")]
        public void CheckForCompositeEntityMatchTest(string queryString, string fileName)
        {
            var controller = new ContentUpdateController();
            //string result = controller.CheckForCompositeEntityMatch(queryString);
            //string expectedResult = System.IO.File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + "\\TestData\\" + fileName);
            //Assert.Equal(result, expectedResult);
        }
    }
}