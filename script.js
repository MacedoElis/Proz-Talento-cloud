//Crie um projeto com dois arquivos: index.html e script.js. No arquivo 'index' insira apenas a estrutura base HTML e
//a tag script para conectar o arquivo HTML com o arquivo de extensão JavaScript.
//Usando os conceitos aprendidos nesse módulo, e sem alterar o arquivo index.html, adicione um título simples ao site com
//o id 'titulo', e um elemento que represente um produto à venda. O produto precisa incluir pelo menos o nome,
//a descrição e o preço. Pode incluir outros "elementos filhos" se achar necessário como, por exemplo, uma imagem.
//Procure usar o método simples e o método complexo, ensinados neste tópico.
 


//criando o titulo

let titulo = document.createElement("h1");

//manipular elemento
titulo.id = "titulo";
console.log(titulo)
titulo.innerText = "Pet Shop";

let body = document.querySelector("body")

// Adicionando o elemento 'titulo' no DOM
body.appendChild(titulo);

// Criando um elemento para o produto
let produto = document.createElement("div");

produto.innerHTML = `
  <div>
    <h2> Royal Canin Bulldog frances adulto</h2>
    <img src="https://www.tiendanimal.pt/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dw1048deb0/images/pienso_perros_royal_canin_adult_bulldog_frances_ROY159825_M_1.jpg?sw=780&sh=780&q=85" alt="x-racao">
    <p>Ração seca para cães adultos de raça Bulldog Francês, após os 12 meses.
    .</p>
    <p id="preco-racao">R$ 50.00</p>
  </div>
`;

// Adicionando o elemento no dom
body.appendChild(produto)


