using CallingSystem.Domain.Entidades;
using CallingSystem.Infra.Repository.Context;
using CallingSystem.Infra.Repository.Interface;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CallingSystem.Infra.Repository.Implementation
{
    public class ChamadoRepository : IChamadoRepository
    {
        public ChamadoRepository() { }

        public void CadastrarChamado(Chamado chamado)
        {
            using (var connection = new SqlConnection(ConnectionConfig.ConnectionString))
            {
                string sql = $"INSERT INTO Chamado (Descricao, DataEntrega,DepartamentoId) VALUES ('{chamado.Descricao}', CONVERT(datetime,'{chamado.DataEntrega}',103), {chamado.DepartamentoId})";
                connection.Execute(sql, chamado);

            }

        }
        public List<ChamadoDto> CarregarChamados()
        {
            var chamados = new List<ChamadoDto>();
            using (var connection = new SqlConnection(ConnectionConfig.ConnectionString))
            {
                connection.Open();
                chamados = connection.Query<ChamadoDto>(
                    string.Format(@"SELECT Chamado.Id AS Id, 
                                           Chamado.Descricao AS Descricao, 
                                           Chamado.DataCadastro AS DataCadastro, 
                                           Chamado.DataEntrega AS DataEntrega, 
                                           dp.ID AS DepartamentoId,
                                           dp.NomeDepartamento AS DepartamentoNome
                                    FROM Chamado
                                    INNER JOIN Departamento AS dp ON Chamado.DepartamentoId = dp.ID;
")
                    ).ToList();

            }
            return chamados;
        }
        public Chamado CarregarChamadoId(int id)
        {
            return new Chamado();
        }
        public void DeletarChamado(int chamadoId)
        {

            using (var connection = new SqlConnection(ConnectionConfig.ConnectionString))
            {
                string sql = $"DELETE FROM Chamado WHERE Id = {chamadoId}";
                connection.Execute(sql);

            }
        }
    }
}
