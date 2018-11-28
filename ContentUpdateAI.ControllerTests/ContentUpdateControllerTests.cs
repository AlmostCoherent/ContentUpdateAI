using Xunit;

namespace ContentUpdateAI.Controller.Tests
{
    public class ContentUpdateControllerTests
    {
        [Fact]
        public void CheckForCompositeEntityMatchTest()
        {
            var controller = new ContentUpdateController();
            string result = controller.CheckForCompositeEntityMatch("Line 6 update from \"this\" to \"that\"");

        }
    }
}