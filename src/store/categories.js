let initialState = {
  categories: [
    {
      normalizedName: 'FOOD',
      displayName: 'FOOD',
      description: 'You are what you eat 🤤'
    },
    {
      normalizedName: 'ELECTRONICS',
      displayName: 'ELECTRONICS',
      description: 'Some 🛸 alien 🛸 tech right here!'
    }
  ],
  activeCategory: {
    normalizedName: 'FOOD',
    displayName: 'FOOD',
    description: 'You are what you eat 🤤'
  }
};

export default function categoriesReducer(state = initialState, action) {
  let { type, activeCategoryName } = action;

  switch (type) {
    case 'ACTIVE_CATEGORY':
      let activeCategory = state.categories.filter(
        (category) => category.normalizedName === activeCategoryName
      );
      console.log('state', state)
      console.log(activeCategory)
      return { ...state, activeCategory: activeCategory[0] };

    case 'ALL_CATEGORIES':
      return initialState;

    default:
      return state;
  }
}

export const activeCategory = (activeCategoryName) => {
  console.log('working')
  return {
    type: 'ACTIVE_CATEGORY',
    activeCategoryName
  };
};
