using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContentUpdateAI.SignalR
{
    public interface ITypedHubClient
    {
        Task BroadcastMessage(string type, string payload);
    }
}
