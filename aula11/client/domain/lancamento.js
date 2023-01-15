class Lancamento {
  constructor(categoria, tipo, valor, idLancamento) {
    if (tipo !== "receita" && tipo !== "despesa") {
      throw new Error(
        "Lançamento Inválido: o tipo deve ser receita ou despesa"
      );
    }
    if (valor <= 0) {
      throw new Error("Lançamento Inválido: o valor deve ser maior que zero");
    }
    if (categoria === "") {
      throw new Error("Lançamento Inválido: a categoria é obrigatória");
    }
    this.categoria = categoria;
    this.tipo = tipo;
    this.valor = valor;
    this.idLancamento = idLancamento;
  }

  getValorString() {
    return this.tipo === "despesa" ? this.valor * -1 : this.valor;
  }
}
