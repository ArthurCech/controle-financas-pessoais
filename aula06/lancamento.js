class Lancamento {
  constructor(categoria, tipo, valor) {
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
  }
}
