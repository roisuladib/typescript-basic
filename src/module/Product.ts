import Asus from './Asus';
import Macbook from './Macbook';

let asus = new Asus('Zenbook', true, true);
console.log(asus);

let macbook = new Macbook(2017, true, true);
console.log(macbook);
macbook.a();
macbook.b();
macbook.c();

