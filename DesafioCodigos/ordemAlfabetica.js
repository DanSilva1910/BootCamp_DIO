const nomes = ["Ana", "Carlos", "Zoe", "Fernanda", "Diego"];

// Criando uma cópia ordenada do array sem modificar o original
const nomesOrdenados = [...nomes].sort();

nomesOrdenados.forEach(nome => {
    console.log(nome);
  });// O array ordenado será exibido no console
