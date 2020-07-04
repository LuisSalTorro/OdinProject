let num = "0"
let currOp = "+"

const calculate = (num1, num2, operator) =>{
    if (operator === '+') {
        return num1 + num2
    }else if (operator === '*') {
        return num1 * num2
    }else if (operator === '-') {
        return num1 - num2
    }else {
        return num1 / num2
    }
}

const createEventListeners = () =>{
    const buttons = document.querySelectorAll('.button')
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', (event) => {
            console.log(event.target.textContent)
            event.target.classList.add('clicked')
            numberBuffer(event.target.textContent)
        })
    }
}

const removeTransition = () =>{
    const buttons = document.querySelectorAll(".button")
    buttons.forEach(button => button.addEventListener('transitionend', (event) => {
        // if(event.target.propertyName !== 'transform') return; 
        event.target.classList.remove('clicked')
    }))
}

const numberBuffer = (number) => {
    if(num === "0"){
        num = number
        writeToScreen(num)
    }else if(number === "+" ||number === "-" || 
    number === "*" ||number === "/"){
        //Push buffer to calc screen
        let screenContent = document.querySelector('.screencontent')
        screenContent.textContent = num
        currOp = number
        num = "0"
        writeToScreen(number)
    }else if(number === "="){
        let screenContent = document.querySelector('.screencontent')
        //calculate(num, screen.textContext, currOp)
        screenContent.textContent = calculate(Number(screenContent.textContent), Number(num), currOp)
        writeToScreen(num)
    }else if(number === "c"){
        let screenContent = document.querySelector('.screencontent')
        screenContent.textContent = ""
        num = "0"
        writeToScreen(num)
    }else{
        num += number
        writeToScreen(num)
    }
    console.log(num)
}

const writeToScreen = (info) => {
    let screenContent = document.querySelector('.userInput')
    screenContent.textContent = info
}

createEventListeners()
removeTransition()
