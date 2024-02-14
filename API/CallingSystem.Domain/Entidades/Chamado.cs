using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CallingSystem.Domain.Entidades
{
    public class Chamado
    {
        public int Id { get; set; }
        public string Descricao { get; set; }
        public DateTime DataCadastro { get; set; } = DateTime.Now;
        public DateTime DataEntrega { get; set; }
        public int DepartamentoId { get; set; }
    }
}
