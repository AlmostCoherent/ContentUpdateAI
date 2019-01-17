using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContentUpdateAI.EF6.Content
{
    public class ContentModel
    {
        [Key]
        public int ContentId { get; set; }
        public int LineNumber { get; set; }
        public string Content { get; set; }
        [NotMapped]
        public string ChangeToContent { get; set; }
    }
}
