// Capturando os elementos h1 e a
let titulo = document.getElementById('titulo')
let link = document.querySelector('a');
console.log("titulo");
console.log("a");

// Adicionando conteúdo textual neles
titulo.innerText = 'Temas estudados'
link.innerText = 'Site da Proz'


// Capturando os elementos ul e ol
let listaNaoOrdenada = document.querySelector('ul')
let listaOrdenada = document.querySelector('ol')

// Adicionando três itens simples na lista não ordenada
listaNaoOrdenada.innerHTML = `
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  `

  // Adicionando três itens com links na lista ordenada
listaOrdenada.innerHTML = `
<li><a href="https://about.meta.com/">Meta</a></li>
<li><a href="https://www.aws.com">AWS</a></li>
<li><a href="https://www.google.com">Google</a></li>
`











/*Crie um projeto com dois arquivos: index.html e script.js. No arquivo 'index' insira a estrutura base HTML 
e dentro da tag 'body' inclua quatro tags vazias: h1, ul, a, ol. Adicione o atributo id="titulo" à tag h1, o 
atributo href="https://prozeducacao.com.br" à tag 'a', e o atributo id="lista-ordenada" à tag 'ol'. Na sequência,
realize a conexão entre o arquivo HTML e o arquivo JavaScript.No arquivo script.js capture os quatro elementos
criados, e use a propriedade .innerText para adicionar conteúdo textual aos elementos 'h1' e 'a', e a propriedade
.innerHTML para adicionar três itens simples na lista não ordenada, e três itens com links para outros sites na lista
ordenada.  */