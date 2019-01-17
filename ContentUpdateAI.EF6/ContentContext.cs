
using ContentUpdateAI.EF6.Content;
using System.Data.Entity;

namespace ContentUpdateAI.EF6
{
    public class ContentContext : DbContext
    {
        public ContentContext() : base("name=DBConnectionString")
        {
            //Database.SetInitializer(new ContentInitialiser());

        }
        public DbSet<ContentModel> Contents { get; set; }
    }
}