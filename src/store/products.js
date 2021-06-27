let initialState = {
  products: [
    {
      category: 'FOOD',
      name: 'Sabaane5',
      description: 'ZAAAAAAAAAAAAKI',
      price: 1000,
      inventory: 35,
    },
    {
      category: 'FOOD',
      name: '6a7aaleb',
      description: 'What can I say 🤷',
      price: 500,
      inventory: 35,
    },
    {
      category: 'FOOD',
      name: 'Za3aanef',
      description: 'fish fish fish fish 🐟',
      price: 12,
      inventory: 35,
    },
    {
      category: 'FOOD',
      name: 'Baatenjaan',
      description: '🍆🍆🍆🍆🍆🍆🍆',
      price: 3,
      inventory: 35,
    },
    {
      category: 'ELECTRONICS',
      name: 'Vape',
      description: 'The mood of the dude',
      price: 10,
      inventory: 35,
    },
    {
      category: 'ELECTRONICS',
      name: 'PC',
      description: 'RGB RGB RGB RGB RGB RGB 🔴 🟢 🔵',
      price: 1200,
      inventory: 35,
    },
  ]
}

export default function productsReducer(state = initialState, action) {
  let {type, category} = action;

  switch (type) {
    case 'ACTIVE_CATEGORY':
      let products = initialState.products.filter(product => (
        product.category === category
      ))
      return {products};

    case 'ALL_CATEGORIES':
      return initialState;
  
    default:
      return state;
  }
}

export const activeCategory = (category) => {
  return {
    type: 'ACTIVE_CATEGORY',
    category
  }
}

export const allCategories = () => {
  return {
    type: 'ALL_CATEGORIES'
  }
}