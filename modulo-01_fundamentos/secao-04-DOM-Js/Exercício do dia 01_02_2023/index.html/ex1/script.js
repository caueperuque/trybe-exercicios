const trybeTrip = document.createElement('h1');
trybeTrip.innerText = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(trybeTrip);


const main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main)

const section = document.createElement('section');
section.className = 'center-content';
section.innerText = 'Testezão'
main.appendChild(section);

const paragraph = document.createElement('p');
section.appendChild(paragraph);

const section2 = document.createElement('section');
section2.className = 'left-content';
main.appendChild(section2);

const section3 = document.createElement('section');
section3.className = 'right-content';
main.appendChild(section3);

const image = document.createElement('img');
image.src = 'https://picsum.photos/200'
image.className = 'small-image';
section2.appendChild(image);

const elementUl = document.createElement('ul');
section3.appendChild(elementUl);
const arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
        'Sete', 'Oito', 'Nove', 'Dez']
for (let num in arrayNumbers) {
  const elementLi = document.createElement('li');
  elementLi.innerHTML = arrayNumbers[num];
  elementUl.appendChild(elementLi);
}


for(let index = 1; index <= 3; index += 1) {
  const tagH3 = document.createElement('h3');
  main.append(tagH3);
  tagH3.innerText = `Teste ${index}`
  tagH3.className = 'description'
};

const title = document.createElement('title');
trybeTrip.append(title);

main.firstElementChild.nextElementSibling.remove('section2')

section3.style.marginRight = 'auto';

main.style.backgroundColor = 'green'

elementUl.lastElementChild.remove();
elementUl.lastElementChild.remove();


