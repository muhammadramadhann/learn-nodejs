const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

const makeCoffee = name => {
    console.log(`Kopi ${name} siap!`);
}

const makeBill = price => {
    console.log(`Total harga Rp ${price}`);
}

const onCoffeOrderedListener = (name, price) => {
    makeCoffee(name);
    makeBill(price);
}

myEventEmitter.on('coffee-order', onCoffeOrderedListener);

myEventEmitter.emit('coffee-order', 'Espresso', 15000);