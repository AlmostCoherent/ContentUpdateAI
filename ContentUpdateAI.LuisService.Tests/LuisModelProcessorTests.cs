using Newtonsoft.Json;
using Xunit;

namespace ContentUpdateAI.LuisService.Tests
{
    public class LuisModelProcessorTests
    {
        [Fact]
        public void GetProcessedLuisLineModelTest()
        {
            string fileContent = System.IO.File.ReadAllText("./TestData/ExpectedModel.txt");

            LuisModel expectedModel = JsonConvert.DeserializeObject<LuisModel>(System.IO.File.ReadAllText("./TestData/ExpectedModel.txt"));

        }
    }
}
