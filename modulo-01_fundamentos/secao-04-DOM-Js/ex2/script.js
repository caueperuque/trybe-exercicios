const elemenWhereAreYou = document.querySelector('#elementoOndeVoceEsta');

const pai = elemenWhereAreYou.parentNode;
pai.style.color = 'green';

const primeiroFilhoDoFilho = elemenWhereAreYou.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Hello, World!';

const filho1ByPai = pai.firstChild;

const filho1ByElementoEstou = elemenWhereAreYou.previousElementSibling;

const atencaoByElementoEstou = elemenWhereAreYou.nextSibling;

const terceiroFilhoByElementoEstou = elemenWhereAreYou.nextElementSibling;

const terceiroFilhoByPai = pai.lastElementChild.previousElementSibling;
