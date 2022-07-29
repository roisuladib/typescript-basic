import BaseLaptop from './BaseLaptop';

class Macbook<T> extends BaseLaptop<T> {
   constructor(
      type: T, 
      withNumberic: boolean, 
      withTouchButton: boolean
   ) {
      super('Macbook', type, withNumberic, withTouchButton);
   }
}

export default Macbook;