// Object js

var car = {
    brand : "Ferrari", 
    type : "Sports Car",
    price : 5000000,
    "horse power" : 986
}
console.log (car)


var manusia = [

 {
    nama : "Yulita Danel",
    warnaKulit : "Sawo Mateng",
    jenisKelamin : "Perempuan",
    tinggiBadan : 153,
    beratBadan : 55,
    usia : 25,
},
{
    nama : "Daffa",
    warnaKulit : "Sawo Mateng",
    jenisKelamin : "Perempuan",
    tinggiBadan : 185,
    beratBadan : 70,
    usia : 25,
}
]
console.log (manusia)// (menampilkan semua data didalam object)


var manusia = [

 {
    nama : "Yulita Danel",
    warnaKulit : "Sawo Mateng",
    jenisKelamin : "Perempuan",
    tinggiBadan : 153,
    beratBadan : 55,
    usia : 25,
},
{
    nama : "Desta",
    warnaKulit : "Sawo Mateng",
    jenisKelamin : "Laki-laki",
    tinggiBadan : 185,
    beratBadan : 70,
    usia : 25,
}
]
console.log (manusia [1].jenisKelamin)// (menampilkan data tertentu)
console.log (manusia [0].jenisKelamin)
console.log (manusia [0].tinggiBadan)



for (i=0;i < manusia.length; i++){
    console.log (manusia [0].tinggiBadan)
}

manusia.forEach(function (item) {
    console.log (item.warnaKulit)
})




var warnaKulit = manusia.map (function (item) {
    return item.warnaKulit 
})
console.log (warnaKulit)

var beratBadan = manusia.map (function (item) {
    return item.beratBadan 
})
console.log (beratBadan)

var nama = manusia.map (function (item) {
    return item.nama
})
console.log (nama)

var jenisKelamin = manusia.map (function (item) {
    return item.jenisKelamin
})
console.log (jenisKelamin)

var usia = manusia.map (function (item) {
    return item.usia 
})
console.log (usia)


var filterUsia = manusia.filter (function (item){
    return item.Usia >= "20"
}) 
console.log (filterUsia)


