// perulangan
var lagi = true;
while (lagi) {
  // menangkap pilihan player
  var p = prompt("Masukkan pilihan : g/s/o \nKeterangan: \ng = Gajah \ns = Semut \no = Orang");

  // menangkap pilihan computer
  // membangkitkan bilangan random
  var comp = Math.random();
  if (comp < 0.34) {
    comp = "Gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "Orang";
  } else {
    comp = "Semut";
  }

  // mengubah singkat menjadi jelas
  if (p == "g") {
    p = "Gajah";
  } else if (p == "s") {
    p = "Semut";
  } else if (p == "o") {
    p = "Orang";
  }

  // menentukan rules
  var hasil = "";

  if (p == comp) {
    hasil = "SERI";
  } else if (p == "Gajah") {
    // if (comp == 'semut') {
    //   hasil = 'KALAH';
    // } else if (p == 'orang') {
    //   hasil = 'MENANG';
    // }
    hasil = comp == "Orang" ? "MENANG" : "KALAH";
  } else if (p == "Semut") {
    hasil = comp == "Gajah" ? "MENANG" : "KALAH";
  } else if (p == "Orang") {
    hasil = comp == "Semut" ? "MENANG" : "KALAH";
  } else if (p == null) {
    p = comp = "Cancel";
    hasil = "melakukan Cancel.";
  } else {
    comp = "ERROR";
    hasil = "harus memilih dengan benar!";
  }

  // tampilkan hasil
  alert("Anda memilih " + p + " dan computer memilih " + comp + "\nHasilnya : " + "Anda " + hasil);
  lagi = confirm("Ingin mencoba lagi?");
}

alert("Terimakasih telah bermain!");
