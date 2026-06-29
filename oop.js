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



 class Car {
    constructor (brand) {
        this.carname = brand;
    }
    present (x){
        return x  + ", I have a" + this.carname;
    }
 }

 mycar = new Car (" Ford");
 console.log (mycar.present( "Hello"));
 mycar = new Car (" Toyota");
 console.log (mycar.present( "Hello"));