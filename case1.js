/*
    CASE 1
*/

let fruits = [
    {
        fruitId: 1,
        fruitName: "Apel",
        fruitType: "IMPORT",
        stock: 10,
    },
    {
        fruitId: 2,
        fruitName: "Kurma",
        fruitType: "IMPORT",
        stock: 20,
    },
    {
        fruitId: 3,
        fruitName: "apel",
        fruitType: "IMPORT",
        stock: 50,
    },
    {
        fruitId: 4,
        fruitName: "Manggis",
        fruitType: "LOCAL",
        stock: 100,
    },
    {
        fruitId: 5,
        fruitName: "Jeruk Bali",
        fruitType: "LOCAL",
        stock: 10,
    },
    {
        fruitId: 5,
        fruitName: "KURMA",
        fruitType: "IMPORT",
        stock: 20,
    },
    {
        fruitId: 5,
        fruitName: "Salak",
        fruitType: "LOCAL",
        stock: 150,
    },
];

// No.1
const showFruits = (buah) => {
    console.log("Buah-buahan yang dimiliki Andi adalah: ");
    buah.forEach((el) => console.log(el.fruitName));
};
showFruits(fruits);

console.log("===============================");

// No.2
const splitFruitsbyType = (buah) => {
    // siapkan wadah
    let wadah = {};
    for (let i = 0; i < buah.length; i++) {
        // ambil datanya
        const data = buah[i];
        // ambil tipenya
        const tipe = buah[i].fruitType;
        // Cek kalau key dalam wadah punya tipe yang sama dengan data buah, masukkan data kedalam properti yang ada
        if (wadah.hasOwnProperty(tipe)) {
            wadah[tipe].push(data);
        }
        // jika belum, buat properti baru baru dan masukkan datanya
        else {
            wadah[tipe] = [data];
        }
    }
    return wadah;
};

let hasil = splitFruitsbyType(fruits);
// Menampilkan jumlah wadah
console.log("Jumlah wadah yang dibutuhkan:\n", Object.keys(hasil).length);

// Menampilkan isi tiap wadah
let tipeWadah = Object.keys(hasil);
for (let i = 0; i < tipeWadah.length; i++) {
    console.log(`WADAH ${tipeWadah[i]} BERISI:`);
    hasil[tipeWadah[i]].forEach((el) => {
        console.log(el.fruitName);
    });
    console.log("-----------");
}
console.log("===============================");

// No.3

let hasil2 = splitFruitsbyType(fruits);
let tipeWadah2 = Object.keys(hasil);

for (let i = 0; i < tipeWadah2.length; i++) {
    let stok = 0;
    for (let j = 0; j < hasil2[tipeWadah2[i]].length; j++) {
        stok += hasil2[tipeWadah2[i]][j].stock;
    }
    //   menampilkan hasil penjumlahan semua buah sesuai tipenya
    console.log(`Total stok buah ${tipeWadah[i]} adalah :\n ${stok}`);
}
console.log("===============================");

// No. 4
// Sintaks diatas hanya bertujuan untuk menampilkan objektif soal.

// =======================================================
