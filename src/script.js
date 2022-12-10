const rulesBoard = document.getElementById('rules')
const rulesButton = document.getElementsByTagName('button')[0]
const rulesCloseIcon = document.getElementById('icon-close')
const blurPlan = document.getElementById('blur-plan')

rulesButton.addEventListener("click", showElement)
rulesCloseIcon.addEventListener("click", hideElement)
blurPlan.addEventListener("click", hideElement)

function showElement (){
    rulesBoard.classList.add('show')
    blurPlan.classList.add('show')
}
function hideElement (){
    rulesBoard.classList.remove('show')
    blurPlan.classList.remove('show')
}

const scissorsElement = document.getElementById('scissors')
const paperElement = document.getElementById('paper')
const rockElement = document.getElementById('rock')
const lizardElement = document.getElementById('lizard')
const spocksElement = document.getElementById('spocks')

const pentagonElement = document.getElementById('pentagon-img')

scissorsElement.addEventListener('click', selectOption, true)
paperElement.addEventListener('click', selectOption, true)
rockElement.addEventListener('click', selectOption, true)
lizardElement.addEventListener('click', selectOption, true)
spocksElement.addEventListener('click', selectOption, true)



//Evento ao clicar na opção
function selectOption (optionSelect) {
    const elementsHTML = [scissorsElement, paperElement, rockElement, lizardElement, spocksElement]
    const options = ['scissors', 'paper', 'rock', 'lizard', 'spocks']

    //Identifica qual elemento foi clicado
    options.map(function(elem, index){
        if(elem == optionSelect.srcElement.id){
            elementsHTML[index].style.animation=`diagonal-move-anim-${optionSelect.srcElement.id} .5s linear 1 forwards`
            elementsHTML.splice(index, 1)
        }
    })
    
    //Salva na variável a opção  do usuário
    var index = options.indexOf(optionSelect.srcElement.id)
    console.log(index)
    
    //Define opção do computador(nº aleatório)
    var randonNumber = Math.floor(Math.random() * 5)
    console.log('index:'+index)
    console.log('num:'+randonNumber)
    if (index == randonNumber) {
        while (index == randonNumber){
            randonNumber = Math.floor(Math.random() * 5)
            console.log('segundo' + randonNumber)
        }
    }
    
    //Mostra a opção do pc
    pentagonElement.style.opacity = '0'
    
    elementsHTML.map(function(elem) {
        elem.classList.add('hide')
    })
    
    const titlePlayer = document.querySelector(`#${optionSelect.srcElement.id}>.title-player`)
    const titleHouse = document.getElementsByClassName('title-house')[0]

    const circleOption = document.getElementById('circle-picked')
    titlePlayer.style.color = "#e3e3e3"
    titleHouse.style.color = "#e3e3e3"
    circleOption.style.opacity = '1'
        
    const optionComputer = randonNumber
    showSpecial(elementsHTML, optionComputer)
}

function showSpecial (elemnts, option){
    elemnts[option].classList.add('option-computer-select')
    elemnts[option].classList.add('border')
}