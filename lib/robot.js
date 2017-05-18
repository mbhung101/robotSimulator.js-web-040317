'use strict';

var directions = ['north','east','south','west']
function Robot() {
this.bearing = 'north'
this.coordinates = [0,0]
this.orient = (direction) => {
if (directions.includes(direction)===false){
  throw new Error("Invalid Robot Bearing")
}
this.bearing = direction
}
this.turnRight = () => {
if  (directions.indexOf(this.bearing) === 3){
  this.bearing = directions[0]
} else {
  this.bearing = directions[directions.indexOf(this.bearing)+1]
}
console.log (this.bearing)
}
this.turnLeft = () => {
if  (directions.indexOf(this.bearing) === 0){
  this.bearing = directions[3]
} else {
  this.bearing = directions[directions.indexOf(this.bearing)-1]
}
console.log (this.bearing)
}
this.at = (x,y) => this.coordinates = [x,y]
this.advance = () => {
switch (this.bearing){
  case "north":
    this.coordinates[1] += 1
    break;
  case "south":
    this.coordinates[1] += -1
    break;
  case "east":
    this.coordinates[0] += 1
    break;
  case "west":
    this.coordinates[0] -= 1
    break;
  default:
}
}
this.instructions = (command) => {
  let comm = command.split('')
  var log = []
  comm.forEach( (e) => {switch(e){
    case "A":
      log.push('advance')
      break;
    case "R":
      log.push('turnRight')
      break;
    case "L":
      log.push('turnLeft')
      break;
      default: return "Invalid Command"
  }
  })
  return log
}
this.evaluate = (command) => {
  let comm = command.split('')
  var log = []
  comm.forEach( (e) => {switch(e){
    case "A":
      this.advance()
      break;
    case "R":
      this.turnRight()
      break;
    case "L":
      this.turnLeft()
      break;
      default: return "Invalid Command"
  }
  })
}
this.place = (b) => {
  var ans = []
  for(var i in b){
    ans.push(b[i])
  }
  this.coordinates = [ans[0],ans[1]]
  this.bearing = ans[2]
}
}
