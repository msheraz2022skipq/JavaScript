//Task1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy(){
    for(d of dairy){
        console.log(d)
    }
}


//Task2
const animal = {
    canJump: true 
    };
const bird = Object.create(animal); 
bird.canFly = true;
bird.hasFeathers = true;
//for-of iterate over object own properties
function birdCan(){
    for (prop of Object.keys(bird)){
        console.log(prop+': '+bird[prop])
    }
}

//Task3
//for-in can iterate over object and its prototype
function animalCan(){
    for (prop in bird){
        console.log(prop+': '+bird[prop])
    }
}

