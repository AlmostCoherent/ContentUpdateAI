using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContentUpdateAI.EF6.Content
{
    public class ContentRepository
    {
        public static List<ContentModel> GetContent()
        {
            List<ContentModel> contentModelList = new List<ContentModel>();

            using (var context = new ContentContext())
            {
                var contentModel = from temp in context.Contents select temp;

                contentModelList = contentModel.ToList();
                }

            return contentModelList;
        }
    }
}
