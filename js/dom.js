
const body = document.querySelector('body')
const button = document.getElementById('clearButton');

function mainHeader(){
  const main = document.createElement('main')
  const header = document.createElement('div')
  const headerTitle = document.createElement('h1')
  const buttonStartNewGame = document.createElement('button')

  header.id="header"
  buttonStartNewGame.id="start-new-game"
  buttonStartNewGame.innerText="Start A New Game!"
  headerTitle.innerText="Battle Ship Game.Drag And Drop BattleShip On Grid"


  body.appendChild(main)
  main.appendChild(header)
  header.appendChild(headerTitle)
  header.appendChild(buttonStartNewGame)
}
function gameGrid(numberOfDivsToCreate) {
  // first it createst the place the grid will load into.
  const containerWrapper= document.createElement('div')
  const containerGrid = document.createElement('div')

  containerGrid.classList.add('container')

  containerWrapper.appendChild(containerGrid)

    var gridCellDimensions = ((300 / numberOfDivsToCreate) - 2).toFixed(2);
    var gridSize = Math.pow(numberOfDivsToCreate, 2);
    let id = 1;
    // create grid squares & add to container
    while (gridSize > 0) {
        var newDiv = document.createElement('div');
        containerGrid.appendChild(newDiv);
        newDiv.classList.add('grid');
        newDiv.id=id
        newDiv.style.height = gridCellDimensions + 'px';
        newDiv.style.width = gridCellDimensions + 'px';
        newDiv.style.border = '1px solid white';
        gridSize--;
        id++;
    }
    body.appendChild(containerWrapper)
    const gridCells = document.querySelectorAll('.grid');
    gridCells.forEach(cell => cell.addEventListener('click', changeColor));
    console.log(gridCellDimensions);
    console.log('Grid has been created!!')
}
function weaponsGrid(){
const weaponsContainerWrapper = document.createElement('div')
const weaponsContainer = document.createElement('div')
weaponsContainer.classList.add('container2')
// weapon1:carrier
const weaponName = document.createElement('h6')
const weaponBox = document.createElement('div')
const weaponItem = document.createElement('div')

weaponName.innerText="Carrier-5Holes"
weaponBox.classList.add('box')
weaponItem.classList.add('item')
weaponItem.id="item"
weaponItem.draggable=true;

weaponsContainer.appendChild(weaponName)
weaponsContainer.appendChild(weaponBox)
weaponBox.appendChild(weaponItem)


// weapon1:carrier
const weaponName2 = document.createElement('h6')
const weaponBox2 = document.createElement('div')
const weaponItem2 = document.createElement('div')

weaponName2.innerText="BattleShip-4Holes"
weaponBox2.classList.add('box')
weaponItem2.classList.add('item2')
weaponItem2.id="item2"
weaponItem2.draggable=true;

weaponsContainer.appendChild(weaponName2)
weaponsContainer.appendChild(weaponBox2)
weaponBox2.appendChild(weaponItem2)


// weapon1:carrier
const weaponName3 = document.createElement('h6')
const weaponBox3 = document.createElement('div')
const weaponItem3 = document.createElement('div')

weaponName3.innerText="BattleShip-3Holes"
weaponBox3.classList.add('box')
weaponItem3.classList.add('item3')
weaponItem3.id="item3"
weaponItem3.draggable=true;

weaponsContainer.appendChild(weaponName3)
weaponsContainer.appendChild(weaponBox3)
weaponBox3.appendChild(weaponItem3)


// weapon1:carrier
const weaponName4 = document.createElement('h6')
const weaponBox4 = document.createElement('div')
const weaponItem4 = document.createElement('div')

weaponName4.innerText="Submarine-3Holes"
weaponBox4.classList.add('box')
weaponItem4.classList.add('item4')
weaponItem4.id="item4"
weaponItem4.draggable=true;

weaponsContainer.appendChild(weaponName4)
weaponsContainer.appendChild(weaponBox4)
weaponBox4.appendChild(weaponItem4)


// weapon1:carrier
const weaponName5 = document.createElement('h6')
const weaponBox5 = document.createElement('div')
const weaponItem5 = document.createElement('div')

weaponName5.innerText="Carrier-5Holes"
weaponBox5.classList.add('box')
weaponItem5.classList.add('item5')
weaponItem5.id="item5"
weaponItem5.draggable=true;

weaponsContainer.appendChild(weaponName5)
weaponsContainer.appendChild(weaponBox5)
weaponBox5.appendChild(weaponItem5)


body.appendChild(weaponsContainerWrapper)
weaponsContainerWrapper.appendChild(weaponsContainer)
}
function eventListers(){
  // implementing drag and drop
  /* draggable element */
  const weapon = document.querySelector('#item');
  weapon.addEventListener('dragstart', dragStart);
  const weapon2 = document.querySelector('#item2');
  weapon2.addEventListener('dragstart', dragStart);

  const weapon3 = document.querySelector('#item3');
  weapon3.addEventListener('dragstart', dragStart);

  const weapon4 = document.querySelector('#item4');
  weapon4.addEventListener('dragstart', dragStart);

  const weapon5 = document.querySelector('#item5');
  weapon5.addEventListener('dragstart', dragStart);
  /* drop targets */
  // const boxes = document.querySelectorAll('.box');
  const gridCells = document.querySelectorAll('.grid');
  gridCells.forEach(cell => {
      cell.addEventListener('dragenter', dragEnter)
      cell.addEventListener('dragover', dragOver);
      cell.addEventListener('dragleave', dragLeave);
      cell.addEventListener('drop', drop);
  });

}
mainHeader()
weaponsGrid()
gameGrid(10); // on page load, create a 16 x 16 grid
eventListers()
// change grid square color to red
function changeColor() {

    const hitColor = 'rgb(251 62 2)'
    const missColor = 'rgb(43 136 187)'

  this.style.backgroundColor = missColor;
}




function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}





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
    console.log(e.target.parentElement)
    console.log(draggable)
    console.log(e.target.id)
    // add it to the drop target

    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
}
