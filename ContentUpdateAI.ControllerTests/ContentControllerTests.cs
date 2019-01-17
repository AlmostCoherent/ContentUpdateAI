using Xunit;

namespace ContentUpdateAI.Controller.Tests
{
    public class ContentControllerTests
    {
        [Fact]
        public void GetContentTest()
        {
            var controller = new ContentController();
            var temp = controller.GetContent();
            Assert.NotEmpty(temp);
        }
    }
}