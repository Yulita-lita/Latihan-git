// Asynchronous

// setTimeout (function () {
//     console.log ("saya dijalankan belakang")
// }, 3000)

// console.log ("saya dijalankan pertama")

// Promise 

// var isMomHappy = false;

// var willIGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             var phone = {
//                 brand: "Samsung",
//                 color: "black"
//             };
//             resolve (phone); 
//         } else {
//             var reason = new Error ("mom is not happy"); 
//             reject(reason); 
//         }
//     }
// );
// function askMom() {
//     willIGetNewPhone
//         .then (function (fulfilled) {
//             console.log (fulfilled);
//         })
//         .catch (function (error) {
//             console.log (error.message);
//         });
// }

// askMom()


function periksaDataPasien (nomorIdPasien) {
    var dataPasien = [
        {id : 1, nama: "john", jenisKelamin: "Laki-laki"},
        {id : 2, nama: "Michael", jenisKelamin : "Laki-laki"}, 
        {id : 3, nama: "Sarah", jenisKelamin : "Perempuan"},
        {id : 4, nama: "Frank", jenisKelamin : "Laki-laki"},
    ]
    return new Promise (function (resolve, reject){
        var pasien = dataPasien.find (x=> x.id === nomorIdPasien)
        if (pasien === undefined){
            reject ("data pasien tidak ada")
        }else{
            resolve (pasien)
        }
    })
     
}
periksaDataPasien (3).then (function(data){
    console.log (data)
}).catch (function (err){
    console.log (err)
})


//Async/ Await 

function doAsync(nomorIdPasien) {
    return new Promise ( function (resolve, reject){
        var dataPasien=[
        {id : 1, nama: "john", jenisKelamin: "Laki-laki"},
        {id : 2, nama: "Michael", jenisKelamin : "Laki-laki"}, 
        {id : 3, nama: "Sarah", jenisKelamin : "Perempuan"},
        {id : 4, nama: "Frank", jenisKelamin : "Laki-laki"},
    ]
    
    var pasien = dataPasien.find (x=> x.id === nomorIdPasien)
        if (pasien === undefined){
            reject ("data pasien tidak ada")
        }else{
            resolve (pasien)
        }
    })
}

async function hello(nomorIdPasien){
    try {
        var result = await doAsync ()
        console.log (result)
    }   catch (err){
        console.log(err.message)
    }
}
hello (2)

