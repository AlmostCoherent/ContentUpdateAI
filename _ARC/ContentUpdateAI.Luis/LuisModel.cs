using System;
using System.Collections.Generic;
using System.Text;

namespace ContentUpdateAI.Luis
{
    public class LuisModel
    {
        public string Query { get; set; }
        public TopScoringIntent TopScoringIntent { get; set; }
        public List<LuisEntity> Entities { get; set; }
        public List<CompositeEntities> CompositeEntities { get; set; }
    }

    public class CompositeEntities
    {
        public string ParentType { get; set; }
        public string Value { get; set; }
        public List<CompositeChildren> Children { get; set; }
    }
    public class CompositeChildren
    {
        public string Type { get; set; }
        public string Value { get; set; }
    }

    public class TopScoringIntent
    {
        public string Intent { get; set; }
        public float Score { get; set; }
    }
    public class LuisEntity
    {
        public string Entity { get; set; }
        public string Type { get; set; }
        public int StartIndex { get; set; }
        public int EndIndex { get; set; }
        public float Score { get; set; }

    }
}
