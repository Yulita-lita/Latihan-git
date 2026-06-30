//Variabel
console.log ("Hello Semua")

var nama = "Jhon Doe"
var nomorUrut = 12

console.log ("nama")
console.log (nama)
console.log (nomorUrut)

var open= false
if (open== true){
    console.log ("BUKA")
}

// Operator Aritmatika
var a = 5
var b = 5
var tambah = a + b
var kurang = a - b
var kali = a * b
var bagi = a / b
var modulus = a % b 
console.log ("hasil a =", a)
console.log ("hasil b =", b)
console.log ("hasil tambah =", a + b)
console.log ("hasil kurang =", a - b)
console.log ("hasil kali =", a * b)
console.log ("hasil bagi =", a / b)
console.log ("hasil modulus =", a % b)

// Operator Perbandingan

console.log ("Operator Perbandingan")
console.log ("================")


console.log (1 == "1")
console.log (1 === "1")
console.log (1 == 1)
console.log (1 != "1")
console.log (1 !== 1)
console.log (1 <"2")
console.log (1 > "5")
console.log (1 <= 2)
console.log (1 >= 2)

// Operator Kondisional (&& (AND) OR (||))

console.log (true && true)
console.log (true && false)
console.log (false && false)
console.log (true || true)
console.log (true || false)
console.log (false || false)
// contoh  
var status = open
var jamBuka = 9
console.log (status == "Open" && jamBuka <= 9)
console.log (status == "Open" || jamBuka <= 10)

// Methods 
var word = "Web Programming"
var word1 = "Web"
var word2 = "Programming"
var word3 = "tahun 2026"
console.log (word.length)
console.log ("word1". charAt (1))

var word3 = word. substring(3)
console.log (word.toUpperCase ())
console.log (word.toLowerCase ())

console.log (word.trim ());
console.log (word.replace ("r", "R"))
console.log (word.replaceAll ("r", "R"))

var int = 12; 
var real = 3.45;
var arr = [6, 7, 8];

var strInt = String (int);
var strReal = String (real);
var strArr = String (arr);

console.log (strInt);
console.log (strReal);
console.log (strArr);

var angka = 12 
var real = 3.45;
console.log (angka)
console.log (real)

console.log (angka.toString ());
console.log (real.toString());


var kata = "10"
console.log (kata)
console.log (parseInt (kata))


var angka1 = 1.5
var angka2 = 2

console.log (angka1)
console.log (angka2)

var angka3 = angka1 + angka2 
console.log (angka3)

var mood = "Happy"
if (mood == "Happy"){
    console.log ("Hari ini aku bahagia")
}
 var mood = "Happy"
 if (mood == "Belajar") {
    console.log ("Hari ini aku belajar")
 }

var mood = "Belajar"
 if (mood == "Belajar") {
    console.log ("Hari ini aku belajar")
    
 }

 if (true) {
    console.log ( "Kode Program dijalankan")
 }
 if (false){
    console.log ("Kode Program tidak dijalankan")
 }

var mood = "Happy"
if (mood == "Happy") {
    console.log ("Hari ini aku Bahagia")
}else
  console.log ("Hari ini alu sedang sedih")

var mood = "Happy"
if (mood == "Bahagia") {
    console.log ("Hari ini aku Bahagia")
}else
  console.log ("Hari ini alu sedang sedih")


  var mood = "Happy"
if (mood == "Happy") {
    console.log ("Hari ini aku Bahagia")
}else if (mood == "Marah"){
  console.log ("Hari ini alu sedang sedih") 
}else {
    console.log ("Hari ini saya sedang Belajar")
}
  
var mood = "Marah"
if (mood == "Happy") {
    console.log ("Hari ini aku Bahagia")
}else if (mood == "Marah"){
  console.log ("Hari ini aku sedang sedih") 
}else {
    console.log ("Hari ini saya sedang Belajar")
}
var mood = "Bahagia"
if (mood == "Happy") {
    console.log ("Hari ini aku Bahagia")
}else if (mood == "Marah"){
  console.log ("Hari ini aku sedang sedih") 
}else {
    console.log ("Hari ini saya sedang Belajar")
}



var umur = 35
if (umur >= 17) {
    console.log ("sudah memiliki KTP")
    if (umur > 20){
        console.log ("umur kurang dari 20 Tahun") 
    }else if ( umur < 30){
        console.log ("usia antara 20-30 Tahun")
    }else if (umur < 40) {
        console.log ("usia antara 30-40 Tahun")
    }else {
    console.log ("sudah berumur")
    }
}else{
    console.log ("belum memiliki KTP")
}


var warna = "merah"

switch (warna){
    case "merah" : {
        console.log ("warna merah") 
        break 
    }
    case "Kuning" : {
        console.log ("warna kuning ")
        break
    }
    case "hijau" :{
        console.log ("warna hijau")
        break
    }
    default : {
        console.log ("warna yang anda pilih tidak ada")
    }
}


var warna = "ungu"

switch (warna){
    case "merah" : {
        console.log ("warna merah") 
        break 
    }
    case "Kuning" : {
        console.log ("warna kuning ")
        break
    }
    case "hijau" :{
        console.log ("warna hijau")
        break
    }
    case "biru" : {
        console.log ("warna biru")
        break 
    }
    default : {
        console.log ("warna yang anda pilih tidak ada")
    }
}

for (var angka = 1; angka < 10; angka++) {
    console.log ("Iterasi ke-" + angka);
}




var jumlah = 0
for (deret = 5; deret < 0; deret--) {
    jumlah += deret
    console.log ("jumlah saat ini" + jumlah);
}
console.log ("jumlah terakhir :" + jumlah)