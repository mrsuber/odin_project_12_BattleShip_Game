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
    // this.style.backgroundColor = '#06bb3e';
    const hitColor = 'rgb(251 62 2)'
    const missColor = 'rgb(43 136 187)'
  //   const randomR = Math.floor(Math.random() * 256);
  // const randomG = Math.floor(Math.random() * 256);
  // const randomB = Math.floor(Math.random() * 256);
  this.style.backgroundColor = missColor;
}


// clear grid + prompt for new grid size
function clear() {

}

button.addEventListener('click', clear);
window.onload = addDiv(10); // on page load, create a 16 x 16 grid