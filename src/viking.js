// Soldier
class Soldier {
    constructor(health,strength){
        this.health = health;
        this.strength = strength;
    }  


        
        attack(){
            return this.strength;
        }
        receiveDamage(damage){

       this.health = this.health - damage;

        }

    }

    //For all the properties you want to use from the parent, use super. For new ones use the this.newProp = newProp. All of this inside the constructor

//Viking
class Viking extends Soldier {
  constructor (name, health, strength){
 super(health, strength);
 this.name = name;
  }   
  receiveDamage(damage){

    this.health =this.health - damage ;

     
if (this.health > 0 ){
     return `${this.name} has recieved ${damage} points of damage`
}
else {
    return `${this.name} has died in act of combat`
}

}
batlleCry(){
    returun `Odin Owns You All !`
 }
}


class Saxon extends Soldier{

    attack(){
    return this.strength
}
receiveDamage(damage){
    this.health = this.health - damage;
    if (this.health > 0 ){
        return `A saxon has recieved ${damage} points of damage`
   }
   else {
       return `A saxon has died in act of combat`
   }
}
}
const viking = new Viking("Ragnar", 100, 20);
console.log(viking.receiveDamage(150));



// return this.strength;
// }
// }
// }

// // Saxon
// class Saxon {}

// // War
// class War {}
