const express = require('express');
const app = express();
const port = 3000;

let mahasiswa = [ "Yulita", "Daffa", "Irtiyah", "Desta"]
let objectMahasiswa = [
  {nim: 12345, nama: "Andra Ramadhani Widodo",},
  {nim: 67890, nama: "Ayunda Kusuma R"},
  {nim: 11121, nama: "Daffa Seta Az-Zhara Resqiumah"},
  {nim: 31315, nama: "Debby Farizal Rahman"},
  {nim: 16171, nama: "Muhammad Rendra Fachrizal"},
  {nim: 81920, nama: "Heldi Saputra"},
  {nim: 21222, nama: "Muhammad Aditya Dwi Saputra"},
  {nim: 23242, nama: "Yulita Danel"},
  {nim: 52627, nama: "Muhammad Desta Greddy Aulia Rahman"},
  {nim: 28293, nama: "Irtiyaah Nailah Zaky Amany"},
  {nim: 31323, nama: "Taufikqurrahman"},
]


const getObjectMahasiswa = (req, res) => {
  let {nama} = req.query
  let result =""

  if(nama == undefined){
    nama =""
  }
  
  objectMahasiswa.forEach ((item,index) => {
    if (item.nama.toLowerCase(). includes(nama)) {
    result += `<span style: font-size: 24px; <H1>${index + 1}.</H1>NIM : ${item.nim} <br> Nama : ${item.nama}<br>`
    }
  })
  if (result ===""){
  console.log ("Data tidak ditemukan")  
  res.send (`Data Tidak Ditemukan`);  
  }
  res.send (result);
}

const getObjectMahasiswabyNim = (req, res) => {
  // let nim = req.params.nim
  let {nim} = req.params;
  let hasil = objectMahasiswa.find((item) => {
    return item.nim === Number(nim)
  })
  // console.log (hasil)
  res.send (`${hasil.nama}`)
  }

const getMahasiswa = (req, res) => {
  let result = ""

  mahasiswa.forEach(function(item, index){
    result += `<br>${index + 1}. ${item}</br>`
  })
  res.send (result);
}
app.get('/', (req, res) => {
  res.send ('Hello, nama saya Yulita');
});

app.get('/mahasiswa', getMahasiswa)
app.get ('/objectMahasiwa', getObjectMahasiswa);
app.get ('/objectmahasiswa/:nim', getObjectMahasiswabyNim)

app.listen(port, () =>{
  console.log('Example app listening on port ${port}');
});
