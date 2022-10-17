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

