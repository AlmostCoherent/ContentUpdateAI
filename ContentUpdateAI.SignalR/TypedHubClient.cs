﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContentUpdateAI.SignalR
{
    public class TypedHubClient : ITypedHubClient
    {
        public Task BroadcastMessage(string type, string payload)
        {
            throw new NotImplementedException();
        }
    }
}