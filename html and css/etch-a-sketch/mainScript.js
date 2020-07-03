let colorBlack = true
let setdimensions = 16

/** 
 * createBoard(int number_of_dimensions) -> return void
 * 
 * The method finds the board id and sets the height to 100% of the parent (#overallcontainer)
 * Two for-loops:
 *  1-for) Creates a div and adds class="rows" 
 *          sizeStr is floor of 450px/dimensions. That way we can fit 
 *          different dimension sizes in the same block of pixels
 *  2-for) Creates a new div and assigns class=boxes
 *          we then assign our box height as sizeStr 
 *          We append the box to the row
 *  Finished the outer loop by appending the row tot the board
 *  We set the header which displays the x and y dimensions
 *  Finish with activating the button
 * 
*/

let createBoard = (dimensions) => {
    let board = document.querySelector("#board")
    board.style.height = "100%"
    for(let i = 0; i < dimensions; i++){
        let row = document.createElement('div')
        row.classList.add('rows')
        let sizeStr = Math.floor(450/dimensions) + "px"
        for(let j = 0; j < dimensions; j++){
            let box = document.createElement('div')
            box.classList.add('boxes')
            box.style.height = sizeStr
            row.appendChild(box)    
        }
        board.appendChild(row)
    }
    setHeader(dimensions)
    changeBoxColor()
}

let setHeader = (dimensions) => {
    document.getElementById('dimensions').innerHTML = "Dimensions: " + dimensions + "x" + dimensions
}

let changeBoxColor = () => {
    let test = document.querySelectorAll(".boxes")
    for(let i = 0; i < test.length; i++){
        test[i].addEventListener('mouseenter', (event) => {
            if(!colorBlack) {
                event.target.style.backgroundColor = randomColor()
            }
            else{
                console.log(event)
                event.target.style.backgroundColor = "black"
            }
        })    
    }
}

let randomColor = () => {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    return "rgb(" + red + ","+ green + "," + blue + ")"
}

let revertToWhite = () => {
    let but = document.querySelector('#reset')
    but.addEventListener('click', (event) => {
        var newGridSize = prompt("Enter a single less than 64 number: ", "16")
        if (newGridSize == null || newGridSize == ""){
            setdimensions = 16
        }else{
            if(newGridSize > 64){
                setdimensions = 64
            }else{
                setdimensions = newGridSize
            }
        }
        // console.log(newGridSize)
        let board = document.querySelectorAll('.rows')
        console.log(board)
        for(let i = 0; i < board.length; i++){
            // board[i].style.backgroundColor = "white"
            board[i].remove()
        }
        createBoard(setdimensions)
    })
}

createBoard(setdimensions)

revertToWhite()


let colorButton = document.querySelector('#toggleColor')
colorButton.addEventListener('click', (event) => {
    console.log("clicked" + colorBlack)
    if (colorBlack){
        colorBlack = false
        event.target.style.color = randomColor()
    }else{
        colorBlack = true
        event.target.style.color = "rgba(0,0,0,1)"
    }
})