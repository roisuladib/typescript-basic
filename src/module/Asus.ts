import BaseLaptop from './BaseLaptop';

class Asus<T> extends BaseLaptop<T> {
   constructor(
      type: T, 
      withNumberic: boolean, 
      withTouchButton: boolean
   ) {
      super('Asus', type, withNumberic, withTouchButton);
   }
}

export default Asus;