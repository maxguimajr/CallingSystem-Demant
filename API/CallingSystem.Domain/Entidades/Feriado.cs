using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CallingSystem.Domain.Entidades
{
    internal class Feriado
    {
        public string level { get; set; }
        public string name { get; set; }
        public string type { get; set; }
        
        [JsonProperty("date")]
        [JsonConverter(typeof(IsoDateTimeConverter))]
        public DateTime Date { get; set; }
    }
}
