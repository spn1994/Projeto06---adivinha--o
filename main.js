//Variáveis da aplicação

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1
// eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
      handleResetClick()
   } // nessa linha função enter
  })
// função callback
function handleTryClick(event) {
  event.preventDefault() //nao faca padrao

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
      // lista de classe é um objeto(classlist)
    
    document
    .querySelector('.screen2 h2') //posso pesquisar somente no screen2
    .innerText = `acertou em ${xAttempts} tentativas` 
    //innertex éo valor do h2 que vai sustituir
  }
  
  inputNumber.value = "" // sempre que quiser try vai estar vazio
  xAttempts++
}


function handleResetClick() {
  toggleScreen()
  xAttempts = 1 //esse fez zerar numero de tentativas
  randomNumber = Math.round(Math.random() * 10)

}
// função de mudar tela toggle é mudar ingles
function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')

}



