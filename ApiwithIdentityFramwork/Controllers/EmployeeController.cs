using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ApiwithIdentityFramwork.EDM;
namespace ApiwithIdentityFramwork.Controllers
{
    [Authorize]
    public class EmployeeController : ApiController
    {
        public IEnumerable<Product> Get()
        {
            using (var dc = new mvvmpattrenEntities())
            {
                return dc.Products.ToList();

            }
        }

    }
}
