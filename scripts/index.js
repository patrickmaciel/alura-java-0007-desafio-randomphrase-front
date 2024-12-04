import getDados from "./getDados.js";

const btnSortear = document.querySelector('.btn-sortear');
const fichaDescricao = document.getElementById('ficha-descricao');

function carregarInfoSerie() {
  getDados(`/phrases/random-mapper`)
      .then(data => {
        fichaDescricao.innerHTML = `
            <p><i>"${data.phrase}"</i></p>
          `;
      })
      .catch(error => {
          console.error('Erro ao obter informações da série:', error);
      });
}


window.onload = carregarInfoSerie();
btnSortear.addEventListener('click', carregarInfoSerie);
