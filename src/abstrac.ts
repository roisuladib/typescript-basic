// abstract class sebuah class yang tidak bisa di instansi langsung dari luar class itu sendiri melainkan harus meng EXTENDS sebuah childnya
abstract class Vehicle {
   abstract wheels: number;
   start(): void {
      console.log("Brummm...");
            
   }
}

class Car extends Vehicle {
   wheels: number = 4;
}

class MotorCycle extends Vehicle {
   wheels: number = 2;
}

let car = new Car();
console.log(car.wheels);
car.start();

let motor = new MotorCycle();
console.log(motor.wheels);
motor.start();


