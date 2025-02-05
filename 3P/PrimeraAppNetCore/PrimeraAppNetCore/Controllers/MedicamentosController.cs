using Microsoft.AspNetCore.Mvc;
using CapaEntidad;
using CapaDatos;
using System.Collections.Generic;
using CapaNegocio;

namespace PrimeraAppNetCore.Controllers
{
    public class MedicamentosController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult SinMenu()
        {
            return View();
        }

        public string saludo()
        {
            return "Hola amigos";
        }

        public string saludoNombre(string nombre) {
            return "Hola, " + nombre;
        }

        public string saludoCompleto(string nombre, string apellido)
        {
            return "Hola, " + nombre + " " + apellido;
        }

        public List<MedicamentoCLS> listarMedicamentos()
        {
            MedicamentoBL obj = new MedicamentoBL();
            return obj.listaMedicamentos();
        }
    }
}
