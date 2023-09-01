const valorInicial = 5000;
const taxaJuros = .08;
const periodo = 5;

let valorFinal = calcularMontanteJurosCompostos(valorInicial, taxaJuros, periodo) ;

//TODO: Iterar, baseado no período em anos, para calculo do valorFinal com os juros.

function calcularMontanteJurosCompostos(valorInicial, taxa, tempo) {
    const montante = valorInicial * Math.pow(1 + taxa, tempo);
    return montante;
}

console.log('Valor final do investimento: R$', valorFinal.toFixed(2));