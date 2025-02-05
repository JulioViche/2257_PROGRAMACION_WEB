using CapaEntidad;
using CapaDatos;

namespace CapaNegocio
{
    public class MedicamentoBL
    {
        public List<MedicamentoCLS> listaMedicamentos()
        {
            MedicamentoDAL obj = new MedicamentoDAL();
            return obj.listaMedicamentos();
        }
    }
}
