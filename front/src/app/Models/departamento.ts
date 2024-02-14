export class Departamento {
  Id: number;
  NomeDepartamento: string;
  DataCadastro: Date;
  // Outros campos, se necessário

  constructor(Id: number, NomeDepartamento: string, DataCadastro  : Date) {
    this.Id = Id;
    this.NomeDepartamento = NomeDepartamento;
    this.DataCadastro = DataCadastro;
  }
}
