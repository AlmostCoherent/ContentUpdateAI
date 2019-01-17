namespace ContentUpdateAI.EF6.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initialcreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ContentModels",
                c => new
                    {
                        ContentId = c.Int(nullable: false, identity: true),
                        LineNumber = c.Int(nullable: false),
                        Content = c.String(),
                    })
                .PrimaryKey(t => t.ContentId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.ContentModels");
        }
    }
}
