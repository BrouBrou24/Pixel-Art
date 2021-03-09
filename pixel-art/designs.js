var color = document.querySelector("#colorPicker");

// selects entire table
var grid = document.querySelector("#pixelCanvas");

// selects the "submit" button
var submit = document.querySelector("#sizePicker > input[type=submit]:nth-child(3)");

// creates an array of individual boxes inside the grid canvas
var box = document.getElementsByTagName("td");


// makes grid
function makeGrid(height, width) {
    h = 0;
    while (h < height){
        var newRow = grid.insertRow(h)
        h += 1;
        for (let w = 0; w < width; w++)
            newRow.insertCell(w);
    }
}

//deletes grid
function deleteGrid() {
    if (grid.hasChildNodes()) {
        while (box.length > 0) {
            box[0].parentNode.removeChild(box[0]);
        }
    }
}

// adds EventListeners to all boxes in the grid canvas and colors target box
function makeListeners() {
    for (b = 0; b < box.length; b++) {
        box[b].addEventListener('click', function(event) {
            event.target.style.backgroundColor = color.value;
        })
    }
}

// wraps all the functions together in a neat area
submit.addEventListener('click', function(event) {
    event.preventDefault();
    deleteGrid();
    var inputHeight = document.querySelector("#inputHeight").value;
    var inputWidth = document.querySelector("#inputWidth").value;
    makeGrid(inputHeight, inputWidth);
    makeListeners();
})
