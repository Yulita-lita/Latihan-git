create table mahasiswa (
    nim INT(10) PRIMARY KEY, 
    nama CHAR(255) NOT NULL, 
    prodi CHAR(255) NOT NULL, 
    jenisKelamin ENUM ("laki-laki", "Perempuan"),
    alamat TEXT NOT NULL, 
    noHp CHAR(25)
);

select nama from mahasisiswa;


INSERT INTO mahasiswa (nim, nama, prodi, jenisKelamin, alamat, noHp)
VALUES ("123456", "Yulita", "SI", "Perempuan", "Samarinda", "082323232323");

INSERT INTO mahasiswa()
VALUES ("904634", "Irtiyah", "WEB", "Perempuan", "Samarinda", "084536732773");

INSERT INTO mahasiswa (nim, nama, prodi, jenisKelamin, alamat, noHp)
VALUES ("0685945", "Irtiyah", "WEB", "Perempuan", "Samarinda", "081589058585");


select * from mahasiswa // menampilkan semua table dari mahasiswa


UPDATE mahasiswa
SET NIM = "9046344"
WHERE nim = 904634;

DELETE FROM mahasiswa 
WHERE NIM = "685945"

SELECT * 
FROM mydb.penjual 
INNER JOIN mydb.produk
on mydb.penjual.idpenjual.mydb.produk.penjual_idpenjual

SELECT * 
FROM mydb.penjual 
WHERE nama LIKE %ita%  

UPDATE mydb.penjual
SET kota_idkota= 2
WHERE idpenjual= 2
