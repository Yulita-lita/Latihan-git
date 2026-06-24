var angka = [2,5,1,3,4]
console.log (angka [0])
console.log (angka [2])

var angka = [2,5,1,3,4]
console.log (angka)


// Method (Fungsi Bawaan)
 //Length
console.log (angka.length)


//push 
console.log ("sebelum Push :" + angka)
angka.push (9)
console.log ("setelah Push :" + angka)


console.log ("sebelum pop:" + angka)
angka.pop ()
console.log ("setelah pop:" + angka)

console.log ("sebelum unshift:" + angka)
angka.unshift(8)
console.log ("setelah unshif:" + angka)

console.log ("sebelum shift:" + angka)
angka.shift (9)
console.log ("setelah shift:" + angka)




var peserta = ["andra", "taufik", "adit", ]
console.log (peserta)

// Join 
console.log ("sebelum join")
console.log (peserta)
// Peserta Join ("-")
console.log ("setelah join")
console.log(peserta.join("-"))


// split 
var nama = "Muhammad Desta Greddy Aulia Rahman"
console.log ("sebelum split")
console.log (nama)
// Peserta Join ("-")
console.log ("setelah di split")
console.log(nama.split(""))

var nama = "Muhammad Desta Greddy Aulia Rahman"
console.log ("sebelum split")
console.log (nama)
// Peserta Join ("-")
console.log ("setelah di split")
console.log(nama.split(" "))

var nama = "Muhammad Desta Greddy Aulia Rahman"
console.log (nama.length)
console.log (angka.length)


var peserta = ["andra", "taufik", "adit", ]
console.log ("sebelum Sort")
console.log (peserta)
console.log ("setelah di Sort")
console.log (peserta.sort ())
console.log (peserta)
console.log ("setelah di Reverse")
console.log (peserta.reverse)
console.log (peserta)


// Slice 

console.log ("sebelum Slice")
console.log (peserta)
var newPeserta = peserta.slice (2,3)
console.log (newPeserta)
console.log (peserta)

// Splice 
console.log ("sebelum splice")
console.log (peserta)
var newPeserta = peserta.splice (2,0, "Heldi", "Huda")
console.log (newPeserta)
console.log (peserta)
