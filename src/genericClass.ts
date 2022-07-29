class List<T> {
   private data: T[];
   constructor(...e: T[]) {
      this.data = e;
   }
   add(value: T): void {
      this.data.push(value);
   }
   addMultiple(...value: T[]): void {
      this.data.push(...value);
   }
   getAll(): T[] {
      return this.data;
   }
}

let numbers = new List<number>(1, 2, 3);
numbers.add(4);
numbers.addMultiple(5, 6, 7);
console.log(numbers.getAll());

let random = new List<number | string>(9, 'adib');
random.add(1);
random.add('Wkwkw');
random.addMultiple(12, 'Coba Multi', 89);
console.log(random.getAll());

