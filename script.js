let luck = [
 'A vida trará coisas boas se tiver paciência.',
 'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si',
 'Não compense na ira o que lhe falta na razão',
 'Defeitos e virtudes são apenas dois lados da mesma moeda',
 'A maior de todas as torres começa no solo.',
 'Não há que ser forte. Há que ser flexível.',
 'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
 'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
 'A juventude não é uma época da vida, é um estado de espírito.',
 'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
 'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
 'Siga os bons e aprenda com eles.',
 'Não importa o tamanho da montanha, ela não pode tapar o sol.',

]
const img = document.querySelector('#img')
const main = document.querySelector('.main')
const main1 = document.querySelector('.main1')
const button = document.querySelector('#button')
const msg = document.querySelector('#msg')




img.addEventListener('click', imgClick )
button.addEventListener('click', buttonClick)

function imgClick(){
  const random = Math.round(Math.random() * luck.length);
  //const numberRandom = Math.round(Math.random()* 13)
    msg.innerText = luck[random];


  main.classList.add('hide')
  main1.classList.remove("hide")

}


function buttonClick(){
 
  main1.classList.add('hide')
  main.classList.remove("hide")

}


