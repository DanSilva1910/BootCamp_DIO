// Entrada de dados
let saldoTotal = parseInt(gets());
let  valorSaque = parseInt(gets());

//TODO: Criar as condições necessárias para impressão da saída, vide tabela de exemplos.

print(realizarSaque(saldoTotal,  valorSaque));

function realizarSaque(saldoTotal, valorSaque) {
    if (saldoTotal >= valorSaque) {
        saldoTotal -= valorSaque;
        return `Saque realizado com sucesso! Novo saldo: ${saldoTotal}`;
    } else {
        return "Saldo insuficiente. Saque não realizado!";
    }
}