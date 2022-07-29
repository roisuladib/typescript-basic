// Interface

interface Laptop {
  name: string;
  on(): void;
  of(): void;
}

class Samsung implements Laptop {
  name: string;
  isGaming: boolean;
  constructor(name: string, isGaming: boolean) {
    this.name = name;
    this.isGaming = isGaming;
  }
  on(): void {
    console.log("Urip");
  }
  of(): void {
    console.log("Modar");
  }
}

class Apple implements Laptop {
  name: string;
  keyboardLight: boolean;
  constructor(name: string, keyboardLight: boolean) {
    this.name = name;
    this.keyboardLight = keyboardLight;
  }
  on(): void {
    console.log("Nyala");
  }
  of(): void {
    console.log("Mati");
  }
}

let samsung = new Samsung('Asus', true);
console.log(samsung.on());
console.log(samsung.of());

let apple = new Apple('Apple', true);
console.log(apple.on());
console.log(apple.of());
