// Recursive function

function countDown (number)  {



    console.log (number);

    var newNumber = number - 1;


    if (newNumber > 0 ) {
    countDown (newNumber);
    }
}

countDown (4); 




//First-classs Function 

function HitungLingkaran(radius) {
    var pi = 22/7

    function luas (r) {return pi * r * r }
    function keliling (r) {return 2 * pi * r }
    console.log ("Luas :", luas (radius))
    console.log ( "Keliling:" , keliling (radius))
}
HitungLingkaran (7)


function HitungPersegi (sisi){

    function luas (s) {return s * s } 
    function keliling (s) {return 4 * s}
    console.log ("Luas :", luas (sisi))
    console.log ( "Keliling:" , keliling (sisi))
}

HitungLingkaran (6)
// Currying Function


function tambah (a, b) {
    return a + b 
}

console.log (tambah (2,5)) 

function tambah (a){
    return function (b){
        return a + b 
    }
}

console.log (tambah (2)(5))


// contoh Komputasi berat tanpa currying function

function getGreeting (){
    var x = 0 
    for (i=0; i <1000000000; i++) {
        x +=i 
    }
    return "Selamat pagi"
}

function say (callback, name){
    var greeting = callback ()
    console.log (greeting, name)
}
var users = ["Desta", "Taufiq", "Huda", "Heldi", "Aditya"]

users.map (function (user) {
    return say (getGreeting, user)
})

