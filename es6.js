

let nama = "John"

if(true )
    {
   let nama = "doe"
   console.log (nama)
   }
console.log (nama)
 
// const
function tampilkanNama (a) {
    console.log ("Halo!, " + a)
}
tampilkanNama ("Yulita")

var tampilkanNama = function(a) {
    console.log ("Halo!, " + a)
}
tampilkanNama ("Yulita")



const HitungLingkaran = (radius) => {
    var pi = 22/7
    

    const luas = (r) => { return pi * r * r }
    const keliling = (r) => {return 2 * pi * r }
    console.log ("Luas :",  (radius))
    console.log ( "Keliling:" , keliling (radius))
}
HitungLingkaran (7)
