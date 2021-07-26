const container = document.querySelector('.container');
const button = document.getElementById('clearButton');


function addDiv(numberOfDivsToCreate) {
    var gridCellDimensions = ((300 / numberOfDivsToCreate) - 2).toFixed(2);
    var gridSize = Math.pow(numberOfDivsToCreate, 2);

    // create grid squares & add to container
    while (gridSize > 0) {
        var newDiv = document.createElement('div');
        container.appendChild(newDiv);
        newDiv.classList.add('grid');
        newDiv.style.height = gridCellDimensions + 'px';
        newDiv.style.width = gridCellDimensions + 'px';
        newDiv.style.border = '1px solid white';
        gridSize--;
    }

    const gridCells = document.querySelectorAll('.grid');
    gridCells.forEach(cell => cell.addEventListener('click', changeColor));
    console.log(gridCellDimensions);
    console.log('Grid has been created!!')
}

// change grid square color to red
function changeColor() {

    const hitColor = 'rgb(251 62 2)'
    const missColor = 'rgb(43 136 187)'

  this.style.backgroundColor = missColor;
}


// clear grid + prompt for new grid size
function clear() {}
button.addEventListener('click', clear);

// implementing drag and drop
/* draggable element */
const item = document.querySelector('#item');

item.addEventListener('dragstart', dragStart);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}


/* drop targets */
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
}
window.onload = addDiv(10); // on page load, create a 16 x 16 grid
