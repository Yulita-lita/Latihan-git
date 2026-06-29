

// let nama = "John"

// if(true )
//     {
//    let nama = "doe"
//    console.log (nama)
//    }
// console.log (nama)
 
// // const
// function tampilkanNama (a) {
//     console.log ("Halo!, " + a)
// }
// tampilkanNama ("Yulita")

// var tampilkanNama = function(a) {
//     console.log ("Halo!, " + a)
// }
// tampilkanNama ("Yulita")



// const HitungLingkaran = (radius) => {
//     var pi = 22/7
    

//     const luas = (r) => { return pi * r * r }
//     const keliling = (r) => {return 2 * pi * r }
//     console.log ("Luas :",  (radius))
//     console.log ( "Keliling:" , keliling (radius))
// }
// HitungLingkaran (7)



//Enhanced object literals

//let names = "Yulita" 
//let person = {
//    nama : names, 
 //   umur : 23,
  //  tinggi : 173 
//}

//let namaPerson = person.nama
//let umurPerson = person.umur 
//let tinggiPerson = person.tinggi
//let {nama, umur, tinggi} = person
//console.log (nama)

// Destructuring
//let number = [1, 5, 6, 7, 8]

//let number1 = number [0]
//let number1 = number [1]
//let number1 = number [2]
//let number1 = number [3]
//let number1 = number [5]

//let [num1, num2, num3, num4, lastNum] = [1, 5, 6, 7, 8]

//console.log (num2)


// Rest Parameter 
// let [num1, num2, num3, num4, lastNum] = [1, 5, 6, 7, 8]

// let footbalers = ["Messi", "Ronaldo", "Mbappe", "Halland", "Neymar" ]

// let [foot1, foot2, foot3, foot4, foot5]  = footbalers

// console.log (foot3)

// let footbalers = ["Messi", "Ronaldo", "Mbappe", "Halland", "Neymar" ]

// let [foot1, foot2, ...restFoots]  = footbalers

// console.log (foot1)
// console.log (foot2)
// console.log (restFoots)


// Rest Parameter Object
// let names = "Yulita" 
// let person = {
//     nama : names, 
//     umur : 25,
//     tinggi : 173 
// }

// let {nama, ...restPerson} = person
// console.log (nama)
// console.log (restPerson)

//Spread Operator 
// let buah = [ "Strawbery", "Mangga", "Appel"]
// // buah.unshift ("Mangga", "Jeruk")
// // buah.shift ("Mangga")
// // buah.push ("Durian")
// // console.log (buah)

// buah = ["Mangga",  ...buah, "Jeruk"]
// console.log (buah)

let botol = {
    merek : "Aqua",
    ukuran : "6000ml",
    harga : 5000
}
// botol.warna = "biru"
// botol.kemasan = "plastik"
botol = {... botol, warna: "biru", kemasan: "plastik", bentuk: "bulat"}
console.log (botol)

