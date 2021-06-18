const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const orderModifier = (order) => {
  const newName = "luiz Silva";
  order.name = newName;
  const newValue = "50,00";
  order.order.drinks.coke.price = newValue;
  console.log(`Olá ${order.name}, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é ${order.order.drinks.coke.price}.`);
}

orderModifier(order);

