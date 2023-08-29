function calculadora() {
    const operador = Number(prompt(
        "Escolha uma Operação\n 1-Soma (+)\n2-Subtração (-)\n3-Multiplicação (*)\n4-Divisão Real (/)\n5-Divisão Inteira (%)\n6-Potenciação (**)"
    ));

    if (!operador || operador >= 7) {
        alert("Erro Operação Inválida")
        calculadora();
    } else {

        let n1 = Number(prompt("Insira o primeiro valor"));
        let n2 = Number(prompt("Insira o segundo valor"));
        let resultado;

        if (!n1 || !n2) {
            alert("Paramentros Inválidos");
            calculadora();
        } else {

            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function dividisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                novaOperacao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`O numero ${n1} elevado a ${n2} potencia é igual a ${resultado}`);
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = Number(prompt("Deseja fazer uma nova operação:\n1 - Sim\n2 - Não"));

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Ate a proxima');
                } else {
                    alert('Digite um valor valido')
                    novaOperacao();
                }
            }

        }

        switch (operador) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                dividisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;
        }

    }
}


calculadora();
