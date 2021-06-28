let initialState = [];

export default function cartReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      console.log('PAYLOAD', payload);
      payload.count = 1;
      if (!state.length) return [payload];
      let added = false;
      let cartItems = [...state]
      cartItems = cartItems.map(item => {
        if (item.name === payload.name) {
          added = true
          return {...item, count: item.count + 1}
        }
        return item;
      })
      console.log(cartItems)
      if (!added) return [...cartItems, payload];
      // console.log('FINAL', cartItems);
      return cartItems;

    case 'ALL_CATEGORIES':
      return initialState;

    default:
      return state;
  }
}

export function addToCart(payload) {
  return {
    type: 'ADD_TO_CART',
    payload
  };
}
