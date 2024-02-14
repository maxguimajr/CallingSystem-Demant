using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CallingSystem.Domain.Entidades;

namespace CallingSystem.Infra.Repository.Interface
{
    public interface IDepartamentoRepository
    {
        void CadastrarDepartamento(Departamento departamento);
        List<Departamento> CarregarDepartamentos();
        Departamento CarregarDepartamentoId(int id);
        void DeletarDepartamento(int departamentoId);
    }
}
