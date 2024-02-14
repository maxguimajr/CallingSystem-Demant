using CallingSystem.Domain.Entidades;
using CallingSystem.Infra.Repository.Implementation;
using CallingSystem.Infra.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CallingSystem.Domain.Businness.Interface;
using CallingSystem.Domain.Businness.Implementation;

namespace CallingSystem.Application.Controllers
{
    public class ChamadoController : ApiController
    {

        private readonly IChamadoRepository _chamadoRepository;
        private readonly IChamadoBusinness _chamadoBusinness;

        public ChamadoController()
        {
            _chamadoRepository = new ChamadoRepository();
            _chamadoBusinness = new ChamadoBusinness();
        }
        // GET api/chamados
        [HttpGet]
        [Route("api/Chamado/CarregarChamados")]
        public IHttpActionResult  CarregarDepartamentos()
        {
            try
            {
                var resultado = _chamadoRepository.CarregarChamados();
                return Ok(resultado);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
        [HttpGet]
        [Route("api/Chamado/CarregarChamadoId/{id}")]
        public Chamado CarregarChamadoId(int id)
        {
            try
            {
                return _chamadoRepository.CarregarChamadoId(id);
            }
            catch (Exception ex)
            {
                return new Chamado();
            }
        }

        [HttpPost]
        [Route("api/Chamado/CadastrarChamado")]
        public IHttpActionResult CadastrarChamado(Chamado chamado)
        {
            try
            {
                var ret = _chamadoBusinness.validarFeriado(chamado);
                if (ret == "ok")
                {
                    _chamadoRepository.CadastrarChamado(chamado);

                }
                return Ok();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
        [HttpDelete]
        [Route("api/Chamado/DeletarChamado/{chamadoId}")]
        public IHttpActionResult DeletarChamado(int chamadoId)
        {
            try
            {
                _chamadoRepository.DeletarChamado(chamadoId);
                return Ok();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}
