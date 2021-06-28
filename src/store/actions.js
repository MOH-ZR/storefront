
// export const filterProducts = (category) => {
//   return {
//     type: 'ACTIVE_CATEGORY',
//     category
//   };
// };

export const activeCategory = (activeCategoryNew) => {
  console.log('working')
  return {
    type: 'ACTIVE_CATEGORY',
    activeCategoryNew
  };
};

export const allCategories = () => {
  return {
    type: 'ALL_CATEGORIES'
  };
};
