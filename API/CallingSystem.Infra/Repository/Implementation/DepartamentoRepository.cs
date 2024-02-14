using CallingSystem.Domain.Entidades;
using CallingSystem.Infra.Repository.Context;
using CallingSystem.Infra.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Runtime.Remoting.Contexts;
using System.Text;
using System.Threading.Tasks;
using Dapper;

namespace CallingSystem.Infra.Repository.Implementation
{
    public class DepartamentoRepository : IDepartamentoRepository
    {
        public DepartamentoRepository() { }

        public void CadastrarDepartamento(Departamento departamento)
        {
            using (var connection = new SqlConnection(ConnectionConfig.ConnectionString))
            {
                string sql = $"INSERT INTO Departamento (NomeDepartamento) VALUES ('{departamento.NomeDepartamento}')";
                connection.Execute(sql, departamento);

            }

        }
        public List<Departamento> CarregarDepartamentos()
        {
            var departs = new List<Departamento>();
            using (var connection = new SqlConnection(ConnectionConfig.ConnectionString))
            {
                connection.Open();
                departs = connection.Query<Departamento>(
                    string.Format(@"SELECT * FROM Departamento")
                    ).ToList();

            }
            return departs;
        }
        public Departamento CarregarDepartamentoId(int id)
        {
            var depart = new Departamento();
            using (var connection = new SqlConnection(ConnectionConfig.ConnectionString))
            {
                connection.Open();
                depart = connection.QueryFirstOrDefault<Departamento>(
                    string.Format(@"SELECT * FROM Departamento where ID = 1")
                    );

            }
            return depart;
        }
        public void DeletarDepartamento(int departamentoId)
        {

            using (var connection = new SqlConnection(ConnectionConfig.ConnectionString))
            {
                string sql = $"DELETE FROM Departamento WHERE ID = {departamentoId}";
                connection.Execute(sql);

            }
        }

    }
}
