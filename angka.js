// let angka = prompt("Masukkan angka: ");

// if (angka % 2 === 0) {
//   alert(`${angka} adalah blangan GENAP`);
// } else {
//   alert(`${angka} adalah blangan GANJIL`);
// }

for(let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  if (i === 7) {
    break;
  }
  console.log(i);
}

