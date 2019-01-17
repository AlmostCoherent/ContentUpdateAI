namespace ContentUpdateAI.EF6.Migrations
{
    using ContentUpdateAI.EF6.Content;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ContentUpdateAI.EF6.ContentContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(ContentUpdateAI.EF6.ContentContext context)
        {
            IList<ContentModel> seedContent = new List<ContentModel>();

            seedContent.Add(new ContentModel { LineNumber = 1, Content = "GoF Definition" });
            seedContent.Add(new ContentModel { LineNumber = 2, Content = "This chapter covers the Singleton pattern." });
            seedContent.Add(new ContentModel { LineNumber = 3, Content = "GoF Definition" });
            seedContent.Add(new ContentModel { LineNumber = 4, Content = "Ensure a class has only one instance, and provide a global point of access to it." });
            seedContent.Add(new ContentModel { LineNumber = 5, Content = "Concept" });
            seedContent.Add(new ContentModel { LineNumber = 6, Content = "A particular class should have only one instance. You can use this instance whenever" });
            seedContent.Add(new ContentModel { LineNumber = 7, Content = "you need it and therefore avoid creating unnecessary objects." });

            context.Contents.AddRange(seedContent);

            base.Seed(context);
        }
    }
}
