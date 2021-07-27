
const createShips = require('../createShips')



describe('create the five battleships and return the array of object of the ships', () => {
  test('returns an array object', () => {
    expect(createShips()).toStrictEqual([{
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
    }]);
  });

  })
