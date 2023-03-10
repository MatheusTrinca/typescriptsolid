/*
  Interface Segregation Principle
  Os clientes não devem ser forçados a depender de types, interfaces ou
  membros abstratos que não utilizam
*/
import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistence } from './services/persistence';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import {
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';

//const fiftyPercentDiscount = new FiftyPercentDiscount();
//const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();

// const individualCustomer = new IndividualCustomer(
//   'Matheus',
//   'Felipe',
//   '111.111.111-11',
// );

const enterpriseCustomer = new EnterpriseCustomer(
  'Matheus PJ',
  '111.001-34234/3423',
);
const shoppingCart = new ShoppingCart(noDiscount);
const persistence = new Persistence();
const messaging = new Messaging();
const order = new Order(
  shoppingCart,
  messaging,
  persistence,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.94758));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.totalWithDiscount());

console.log(shoppingCart.items);
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
