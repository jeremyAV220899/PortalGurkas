using Microsoft.AspNetCore.Mvc;
using PortalGurkas.Models.Acceso;

namespace PortalGurkas.Controllers.Acceso
{
    public class AccesoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Index(Usuario _usuario)
        {
            return RedirectToAction("Index", "Home");

        }
    }
}
