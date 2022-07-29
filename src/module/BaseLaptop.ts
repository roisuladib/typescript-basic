import ILaptop from './ILaptop';
import * as Keyboard from './Keyboard';

abstract class BaseLaptop<T> implements ILaptop<T> {
   name: string;
   type: T;
   withNumberic: boolean;
   withTouchButton: boolean;
   constructor(
      name: string, 
      type: T, 
      withNumberic: boolean, 
      withTouchButton: boolean
   ){
      this.name = name;
      this.type = type;
      this.withNumberic = withNumberic;
      this.withTouchButton = withTouchButton;
   }
   a():void {
      console.log(Keyboard.a());
   }
   b():void {
      console.log(Keyboard.b());
   }
   c():void {
      console.log(Keyboard.c());
   }
}

export default BaseLaptop;