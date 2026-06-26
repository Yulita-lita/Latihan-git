// Asynchronous

// setTimeout (function () {
//     console.log ("saya dijalankan belakang")
// }, 3000)

// console.log ("saya dijalankan pertama")

// Promise 

var isMomHappy = false;

var willIGetNewPhone = new Promise(
    function (resolove, reject) {
        if (isMomHappy) {
            var phone = {
                brand: "Samsung",
                color: "black"
            };
            resolove (phone); 
        } else {
            var reason = new Error ("mom is not happy"); 
            reject (reason); 
        }
    }
)