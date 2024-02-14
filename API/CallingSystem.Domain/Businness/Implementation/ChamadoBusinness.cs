using CallingSystem.Domain.Businness.Interface;
using CallingSystem.Domain.Entidades;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace CallingSystem.Domain.Businness.Implementation
{
    public class ChamadoBusinness :IChamadoBusinness
    {
        public string validarFeriado(Chamado chamado)
        {
            string apiUrl = $"https://api.invertexto.com/v1/holidays/{chamado.DataEntrega.Year}?token=5828|PJpmDxLsDPxAVxqLdHNy76J3c3pKShY8";

            // Criar um cliente HTTP
            using (HttpClient client = new HttpClient())
            {
                try
                {
                    HttpResponseMessage response = client.GetAsync(apiUrl).Result;

                    if (response.IsSuccessStatusCode)
                    {
                        string responseBody = response.Content.ReadAsStringAsync().Result;

                        List<Feriado> feriados = JsonConvert.DeserializeObject<List<Feriado>>(responseBody);
                        var Feri = feriados.Find(x=> x.Date == chamado.DataEntrega.Date );

                        if (Feri != null)
                        {
                            throw new Exception($"Esta data é feriado de {Feri.name} de ambito {Feri.level} e tipo {Feri.type}, escolha outra data!");
                        }
                        return "ok";
                    }
                    else
                    {

                        return $"Erro: {response.StatusCode}";
                    }
                }
                catch (HttpRequestException e)
                {
                    return  $"Erro de requisição HTTP: {e.Message}";
                }
            }

        }
    }
}
