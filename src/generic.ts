// Sebuah Type data yang dinamis

// Cara Salah
function getData(value: any) {
   return value;
}
console.log(getData('Kang Mam'));
console.log(getData(1233));

// ketika menggunakan function myData Kasih tau saya type nya apa
function myData<T>(value: T) {
   return value;
}
console.log(getData('Kang Wkwkw').length);
console.log(getData(2424));

const arrowFunc = <T, >(value: T) => {
   return value;
}
console.log(arrowFunc(232).toLocaleString().length);


