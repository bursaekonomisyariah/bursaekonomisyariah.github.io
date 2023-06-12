function formatRupiah(input) {
  var value = input.value;
  // Menghapus karakter selain angka
  value = value.replace(/[^\d]/g, '');

  // Menambahkan titik sebagai pemisah ribuan
  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Menambahkan "IDR " di depan nilai
  value = "IDR " + value;

  // Mengupdate nilai pada input
  input.value = value;
}

function calculate() {
  var hargaBarang = parseInt(document.getElementById('harga-barang').value.replace(/[^\d]/g, ''));
  var uangMuka = parseInt(document.getElementById('uang-muka').value.replace(/[^\d]/g, ''));
  var tenor = parseInt(document.getElementById('tenor').value);
  
  var margin = 0.4;
  var marginTahun = margin * tenor / 12;
  
  var jumlahPinjaman = hargaBarang - uangMuka;
  var bunga = jumlahPinjaman * marginTahun;
  var totalPembayaran = jumlahPinjaman + bunga;
  
  document.getElementById('result').innerHTML = `
    <p>Jumlah Pinjaman: ${formatRupiah(jumlahPinjaman)}</p>
    <p>Bunga: ${formatRupiah(bunga)}</p>
    <p>Total Pembayaran: ${formatRupiah(totalPembayaran)}</p>
  `;
}
