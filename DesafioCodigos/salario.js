const saldoAtual = 100;
const valorDeposito = 50;
const valorRetirada = 100;

const calcularSaldoAtual = (saldo, deposito, retirada) => saldo + deposito - retirada;

const valorSaldoAtual = calcularSaldoAtual(saldoAtual, valorDeposito, valorRetirada);


console.log( "Saldo atualizado na conta: " + valorSaldoAtual.toFixed(2))
//TODO: Imprimir o a saída de conforme a tabela de exemplos (uma casa decimal).