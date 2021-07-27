function createShips(){
  return [{
    name:"Carrier",
    describtion:"5-Holes",
    size:5,
  },{
    name:"BattleShip",
    describtion:"4-Holes",
    size:4,
  },{
    name:"Cruiser",
    describtion:"3-Holes",
    size:3,
  },{
    name:"Submarine",
    describtion:"3-Holes",
    size:3,
  },{
    name:"Destroyer",
    describtion:"2-Holes",
    size:2,
  }]
}

module.exports = createShips;
