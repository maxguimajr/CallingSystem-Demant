using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CallingSystem.Domain.Entidades
{
    public class Departamento
    {
        public int Id { get; set; }
        public string NomeDepartamento { get; set; }
        public DateTime DataCadastro { get; set; } = DateTime.Now;
    }
}
