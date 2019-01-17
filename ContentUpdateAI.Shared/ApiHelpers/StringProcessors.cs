using Newtonsoft.Json;

namespace ContentUpdateAI.Shared.ApiHelpers
{
    public static class StringProcessors
    {
        public static string ToJson(this object input)
        {
            return JsonConvert.SerializeObject(input);
        }

    }
}
