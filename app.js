function pesquisar() {
    // Declara uma variável para armazenar os resultados da pesquisa, inicialmente vazia.
    let resultados = "";

      // Seleciona o elemento HTML com o ID "resultados-pesquisa" e armazena em uma variável para uso posterior.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa)
    {
      section.innerHTML = "<p>Digite o nome do rapper</p>";
      return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    let nome = "";
    let descricao = "";
    let tags = "";

    console.log(campoPesquisa)
  
    // Itera sobre cada elemento (dado) do array 'dados'.
    for (let dado of dados) {
      nome = dado.nome.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = tags.toLowerCase();
      // verifica se a pesquisa do usuario tem correspondencia na base de dados
      if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
      {
        // cria um novo elemento com o nome pesquisado (apenas se encontrado na base de dados)
        resultados += `
  <div class="item-resultado">
    <h2>
      <a href="#" target="_blank">${dado.nome}</a>
    </h2>
    <p class="descricao-meta">${dado.descricao}</p>
    <a href=${dado.youtube} target="_blank">Youtube</a>
  </div>
  `;
      }
      
      // Concatena uma nova div com as informações do dado atual à variável 'resultados'.
      // As crase (``) permitem a interpolação de strings, ou seja, inserir valores de variáveis dentro de uma string.
      
    }
  
    // Seleciona a seção com o ID "resultados-pesquisa" e atribui o conteúdo da variável 'resultados' a ela.
    // Isso renderiza os resultados da pesquisa na página.
    section.innerHTML = resultados;

    if (!resultados)
    {
      section.innerHTML = "<p>Rapper não encontrado</p>";
    }
  }
  
  // Seleciona o elemento HTML com o ID "resultados-pesquisa" e armazena em uma variável para uso posterior.
  let section = document.getElementById("resultados-pesquisa");