using CallingSystem.Domain.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CallingSystem.Infra.Repository.Interface
{
    public interface IChamadoRepository
    {
        void CadastrarChamado(Chamado chamado);
        List<ChamadoDto> CarregarChamados();
        Chamado CarregarChamadoId(int id);
        void DeletarChamado(int chamadoId);
    }
}
