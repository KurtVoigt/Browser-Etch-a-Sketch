let grid = document.getElementById("gridContainer");
let rainbowColors = false;
let clearButton = document.getElementById("clearButton");
let resizeButton = document.getElementById("resizeButton");
let rainbowButton = document.getElementById("rainbowButton");
clearButton.addEventListener("click", clear);
resizeButton.addEventListener("click", resize);
rainbowButton.addEventListener("click", rainbow);


function draw(DOMNode) {
    if (rainbowColors) {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        DOMNode.target.style.backgroundColor = "#" + randomColor;
    }
    else {
        DOMNode.target.style.backgroundColor = "rgb(22, 21, 21)";
    }

}

function resize(newSize) {
    newSize = Number(prompt("Please enter an integer up to 90 to make a new inputxinput box"));

    if (!isNaN(newSize) && Number.isInteger(newSize) && newSize <= 90) {
        grid.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;
        grid.innerHTML = "";
        for (let i = 0; i < (newSize * newSize); i++) {
            let gridSquare = document.createElement("div");
            gridSquare.addEventListener("mouseover", draw);
            gridSquare.classList.add("gridSquare");
            grid.appendChild(gridSquare);
        }
    }
    else
        alert("input was either not an integer or greater than 90");


}

function clear() {
    let gridList = document.querySelectorAll(".gridSquare");
    for (let i = 0; i < gridList.length; i++) {
        gridList[i].style.backgroundColor = "rgb(143, 138, 138)";
    }
}
function rainbow() {
    rainbowColors = !rainbowColors;
    if(rainbowColors){
        rainbowButton.innerText = "Dark Mode";
    }
    else
    rainbowButton.innerText = "Rainbow Mode";
}


for (let i = 0; i < 16; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.addEventListener("mouseover", draw);
    gridSquare.classList.add("gridSquare");
    grid.appendChild(gridSquare);
}