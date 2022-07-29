// export class Payment {
//    public name: string;
//    constructor(name: string) {
//       this.name = name;
//    }
// }
// let payment = new Payment('Kang Adib');
// console.log(payment);

// Cara Lain
export class Payment {
   constructor(public name: string) {
   }
}
let payment = new Payment('Kang Akang');
console.log(payment);

export class Product {
   public name: string;
   constructor(name: string, public age?: number) {
      this.name = name;
   }
}
let product = new Product('Semangka', 90);
console.log(product);

// public = bisa di akses di luar class
// protected = hanya bisa di class tersebut, dan kelas turunanya
// private = hanya bisa di akses dari class itu sendiri

// Inheritence (Kelas Trurunan) = Sebuah class yang mempunyai sifat" turunan dari parent classnya

export class User {
   name: string;
   constructor(name: string, public age: number) { 
      this.name = name; 
   }
   setName(value: string):void {
      this.name = value;
   }
   getName = ():string => {
      return this.name;
   }
}

// Ketika Admin extends ke user maka admin ini mewarisi sifat dan method yang ada pada class User
class Admin extends User {
   read: boolean = true;
   write: boolean = true;
   phone: string;
   private _email: string = '';
   static getRoleName: string = 'Admin'; // Tidak perlu masuk cunstructor
   constructor(phone: string, name: string, age: number) {
      super(name, age);
      this.phone = phone;
   }

   static getNameRole() {
      return 'Hay';
   }

   getRole(): { read: boolean; write: boolean } {
      return {
         read: this.read,
         write: this.write
      }
   }

   set email(value: string) {
      if (value.length < 5) {
         this._email = 'Email Salah'
      } else {
         this._email = value;
      }
   }
   get email(): string {
      return this._email;
   }
}
let admin = new Admin('0495433656', 'Royan', 67);
console.log(admin.age);
console.log(admin.phone);
console.log(admin.setName('Amalia'));
console.log(admin.getName());
console.log(admin.getRole());

admin.email = 'coba@gmail.com';
console.log(admin.email);


// Setter && Getter
// Setter: berfungsi sebagai validator ketika ingin mengubah property pada class
// Getter : Mengambil data pada sebuah class



// Static Methods // Static Properties (yg bisa di akses dalam kelas itu sendiri)
let adminStatic = Admin.getRoleName;
console.log(adminStatic);

let adminStatic1 = Admin.getNameRole();
console.log(adminStatic1);

