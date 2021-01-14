using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ApiwithIdentityFramwork.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        public ActionResult RegistrationPage()
        {
            return View();
        }
        public ActionResult LoginPage()
        {
            return View();

        }
        public ActionResult Data()
        {
            return View();
        }
    }
}
