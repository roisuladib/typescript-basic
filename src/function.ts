// Type Data Balikan Functions
function getName(): string {
   return 'My Name Is: Muhammad Roisul Adib';
}
console.log(getName());

function getAge(): number {
   return 17
}
console.log(getAge());

function getAdderss(): void {
   console.log('Wkwkwk');
}
getAdderss();

function multiPlay(val1: number, val2: number): number {
   return val1 * val2;
}
console.log(multiPlay(5, 1));

// function as type
type Age = number;
let age: Age = 12;

type Tambah = (e1: number, e2: number) => number;
const Add: Tambah = (e1: number, e2: number): number => {
   return e1 + e2;
};
console.log(Add(2, 90));

// Default parameters
const fullName = (first: string, last: string = 'Joko'): string => {
   return first + ' ' + last;
}
console.log(fullName('Adib'));

// Optional parameters
// const getUmur = (val1: number, val2?: number): number => {
//    return val1 - val2;
// }
// console.log(getUmur(2, 45));













