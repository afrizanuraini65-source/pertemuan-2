// 2. ARRAY KERANJANG
let keranjang = ["Buku", "Pensil", "Penghapus"];
console.log("Awal:", keranjang);

// tambah barang ke akhir
keranjang.push("Bolpoin");
console.log("Setelah push:", keranjang);

// tambah barang ke awal
keranjang.unshift("Tas");
console.log("Setelah unshift:", keranjang);

// hapus barang terakhir
keranjang.pop();
console.log("Setelah pop:", keranjang);

// hapus barang pertama
keranjang.shift();
console.log("Setelah shift:", keranjang);

// tampilkan isi array dengan nomor urut
console.log("Isi keranjang:");
for (let i = 0; i < keranjang.length; i++) {
  console.log(`${i + 1}. ${keranjang[i]}`);
}

console.log("===================================");

// 4. ARRAY OF OBJECT PRODUK
const produk = [
  { nama: "Beras", harga: 50000 },
  { nama: "Minyak", harga: 20000 }
];

// tambah produk baru dengan push
produk.push({ nama: "Gula", harga: 15000 });
console.log("Setelah push:");
console.table(produk);

// hapus produk terakhir dengan pop
produk.pop();
console.log("Setelah pop:");
console.table(produk);

// fungsi tambahProduk
function tambahProduk(nama, harga) {
  produk.push({ nama, harga });
}

// fungsi hitungTotal
function hitungTotal() {
  let total = 0;
  for (let item of produk) {
    total += item.harga;
  }
  return total;
}

// contoh penggunaan fungsi
tambahProduk("Kopi", 30000);
tambahProduk("Teh", 12000);
console.table(produk);
console.log("Total harga:", hitungTotal());

// struktur kontrol if
if (produk.length > 0) {
  console.log("Produk tersedia");
} else {
  console.log("Produk kosong");
}

// switch nama hari
let angkaHari = new Date().getDay(); // otomatis ambil hari sekarang (0-6)
let namaHari = "";

switch (angkaHari) {
  case 0:
    namaHari = "Minggu";
    break;
  case 1:
    namaHari = "Senin";
    break;
  case 2:
    namaHari = "Selasa";
    break;
  case 3:
    namaHari = "Rabu";
    break;
  case 4:
    namaHari = "Kamis";
    break;
  case 5:
    namaHari = "Jumat";
    break;
  case 6:
    namaHari = "Sabtu";
    break;
  default:
    namaHari = "Hari tidak valid";
}

console.log("Hari ini:", namaHari);
