//INSTANCE CLASS

// class Car {
//     constructor (brand,factory) {
//         this.brand = brand
//         this.factory = factory
//         this.sound = "honk! honk! vroomvroom"
//     }
// }
//  var innova = new Car ("Innova", "Toyota")
//  console.log (innova)

//  class Car {
//     constructor (brand) {
//         this.carname = brand;
//     }
//     present (){
//         return " I have a" + this.carname;
//     }
//  }

//  mycar = new Car (" Ford");
//  console.log (mycar.present())





//  class Car {
//     constructor (brand) {
//         this.carname = brand;
//     }
//     present (x){
//         return x  + ", I have a" + this.carname;
//     }
//  }

//  mycar = new Car (" Ford");
//  console.log (mycar.present( "Hello"));
//  mycar = new Car (" Toyota");
//  console.log (mycar.present( "Hello"));



// GETTERS dan SETTERS 
//  class Car {
//     constructor (brand) {
//         this.carname = brand;
//     }
//     get carname() {
//         return this._carname;
//     }
//     set carname (x) {
//         this._carname = x;
   
//     }
//  }

//  mycar = new Car (" Ford");
//  mycar.carname = " Toyota";
//  console.log (mycar.carname);



// STATIC METHOD
//  class Car {
//     constructor (brand) {
//         this.carname = brand;
//     }
//     static hello() {
//         return "Hello!!";
//     }
//  }

//  mycar = new Car (" Ford");
 
//  console.log (Car.hello ());


// INHERITENCE / Pewarisan

class Person {
    constructor (nama){
        this.name = nama 
        this._mapel = ""
    }
    get personMapel (){
        return this._mapel   
    }
    set personMapel (mapel){
        this._mapel = mapel
    }
    berjalan (){
        return "Prok Prok Prok"
    }
}
class School extends Person{
    constructor (){
        super (name)
        this.school = ""  

    }
}
var guru = new Person ("Pak Budi")
guru.personMapel = "Matematika" 
console.log (guru)
console.log (guru.berjalan ())