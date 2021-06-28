export let initialState = {
  products: [
    {
      category: 'FOOD',
      name: 'Sabaane5',
      description: 'ZAAAAAAAAAAAAKI',
      price: 1000,
      inventory: 35,
      imgUrl: '/assets/spinach.jpg',
    },
    {
      category: 'FOOD',
      name: '6a7aaleb',
      description: 'What can I say 🤷',
      price: 500,
      inventory: 35,
      imgUrl: '/assets/algae.jpg',
    },
    {
      category: 'FOOD',
      name: 'Za3aanef',
      description: 'fish fish fish fish 🐟',
      price: 12,
      inventory: 35,
      imgUrl: '/assets/fins.jpg',
    },
    {
      category: 'FOOD',
      name: 'Baatenjaan',
      description: '🍆🍆🍆🍆🍆🍆🍆',
      price: 3,
      inventory: 35,
      imgUrl: '/assets/eggplants.jpg',
    },
    {
      category: 'ELECTRONICS',
      name: 'Vape',
      description: 'The mood of the dude',
      price: 10,
      inventory: 35,
      imgUrl: '/assets/vape.png',
    },
    {
      category: 'ELECTRONICS',
      name: 'PC',
      description: 'RGB RGB RGB RGB 🔴 🟢 🔵',
      price: 1200,
      inventory: 35,
      imgUrl: '/assets/pc.jpg',
    }
  ]
};

export default function productsReducer(state = initialState, action) {
  let { type, activeCategoryNew } = action;

  switch (type) {
    case 'ACTIVE_CATEGORY':
      if (activeCategoryNew === 'ALL') return initialState;
      let products = initialState.products.filter(
        (product) => product.category === activeCategoryNew
      );
      return { products };

    default:
      return state;
  }
}

