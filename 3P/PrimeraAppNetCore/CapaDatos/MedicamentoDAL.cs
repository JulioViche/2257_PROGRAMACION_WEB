using CapaEntidad;

namespace CapaDatos
{
    public class MedicamentoDAL
    {
        public List<MedicamentoCLS> listaMedicamentos()
        {
            List<MedicamentoCLS> lista = new List<MedicamentoCLS>();
            lista.Add(new MedicamentoCLS
            {
                id = 1,
                nombre = "Complejo B",
                descripcion = "Para defensas"
            });
            lista.Add(new MedicamentoCLS
            {
                id = 2,
                nombre = "Paracetamol",
                descripcion = "Para fiebre"
            });
            lista.Add(new MedicamentoCLS
            {
                id = 3,
                nombre = "Vitamina C",
                descripcion = "Para gripe"
            });
            lista.Add(new MedicamentoCLS
            {
                id = 4,
                nombre = "Vitamina C",
                descripcion = "Para gripe"
            });

            return lista;
        }
    }
}
