// import {kaboom} from "kaboom.mjs";
import kaboom from "/kaboom.mjs";
// import kaboom from "/kaboom";
// const kaboom = require("kaboom")
// Initialize Kaboom Context
kaboom({
  font: "sinko",
  background: [ 0, 0, 255, ],
})
let SPEED = 100;
const player = add([
    rect(30,60),
    color(45),  // renders as a sprite
    pos(120, 80),    // position in world
    area(),          // has a collider
    body(),          // responds to physics and gravity
])

onKeyDown("left", () => {
    player.move(-SPEED, 0)  
})
onKeyDown("right", () => {
    player.move(SPEED, 0)
})
const ground = add([
    rect(width(),60),
    color(45),  // renders as a sprite
    pos(0, 700),    // position in world
    area(),          // has a collider
    solid(),
    // body(),          // responds to physics and gravity
])
console.log("This is a javascript file.")

onClick(() => addKaboom(mousePos()))







