using System;
using Microsoft.Bot.Builder.Luis;
using Microsoft.Bot.Builder.Dialogs;
using System.Threading.Tasks;
using Microsoft.Bot.Builder.Luis.Models;

namespace ContentUpdateAI.Luis
{
    [LuisModel("6ae38cfe-3084-4c18-8a8d-dd75a60cf624", "e8ed78ec10214dbaa87d3721e6017e28")]
    [Serializable]
    public class LuisService
    {
        [LuisIntent("")]
        [LuisIntent("None")]
        public async Task None(LuisResult result)
        {
            string message = $"Sorry, I did not understand '{result.Query}'. Type 'help' if you need assistance.";
        }

        [LuisIntent("UpdateContent")]
        public async Task UpdateContent(LuisResult luisResult)
        {
            string message = luisResult.ToString();

        }
    }
}
