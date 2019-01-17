//using ContentUpdateAI.EF6.Content;
//using System.Collections.Generic;
//using System.Data.Entity;

//namespace ContentUpdateAI.EF6
//{
//    public class ContentInitialiser : DropCreateDatabaseAlways<ContentContext>
//    {
//        protected override void Seed(ContentContext context)
//        {
//            IList<ContentModel> seedContent = new List<ContentModel>();

//            seedContent.Add(new ContentModel { LineNumber = 1, Content = "GoF Definition" });
//            seedContent.Add(new ContentModel { LineNumber = 2, Content = "This chapter covers the Singleton pattern." });
//            seedContent.Add(new ContentModel { LineNumber = 3, Content = "GoF Definition" });
//            seedContent.Add(new ContentModel { LineNumber = 4, Content = "Ensure a class has only one instance, and provide a global point of access to it." });
//            seedContent.Add(new ContentModel { LineNumber = 5, Content = "Concept" });
//            seedContent.Add(new ContentModel { LineNumber = 6, Content = "A particular class should have only one instance. You can use this instance whenever" });
//            seedContent.Add(new ContentModel { LineNumber = 7, Content = "you need it and therefore avoid creating unnecessary objects." });

//            context.Contents.AddRange(seedContent);

//            base.Seed(context);
//        }
//    }
//}
