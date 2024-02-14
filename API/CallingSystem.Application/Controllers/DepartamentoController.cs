using CallingSystem.Domain.Entidades;
using CallingSystem.Infra.Repository.Interface;
using CallingSystem.Infra.Repository.Implementation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CallingSystem.Application.Controllers
{
    public class DepartamentoController : ApiController
    {


        private readonly IDepartamentoRepository _departamentoRepository ; 

        public DepartamentoController()
        {
            _departamentoRepository = new  DepartamentoRepository();
        }

        [HttpGet]
        [Route("api/Departamento/CarregarDepartamentos")]
        public IHttpActionResult CarregarDepartamentos()
        {
            try
            {
                var retorno = _departamentoRepository.CarregarDepartamentos();
                return Ok(retorno);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
        [HttpGet]
        [Route("api/Departamento/CarregarDepartamentoId/{id}")]
        public Departamento CarregarDepartamentoId(int id)
        {
            try
            {
                return _departamentoRepository.CarregarDepartamentoId(id);
            }
            catch (Exception ex)
            {
                return new Departamento();
            }
        }


        [HttpPost]
        [Route("api/Departamento/AdicionarDepartamento")]
        public void CadastrarDepartamento(Departamento departamento)
        {
            try
            {
                _departamentoRepository.CadastrarDepartamento(departamento);       
            }
            catch (Exception ex)
            {

            }
        }
        [HttpDelete]
        [Route("api/Departamento/DeletarDepartamento/{departamentoId}")]
        public IHttpActionResult DeletarChamado(int departamentoId)
        {
            try
            {
                _departamentoRepository.DeletarDepartamento(departamentoId);
                return Ok();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}
