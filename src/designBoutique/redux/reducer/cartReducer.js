const initialState = [
];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newProducts = [...state, action.product]
      return newProducts;
    case 'DELETE_FROM_CART':
      return state.filter((item) => item.id!== action.productId);
    default:
      return state;
  }
};

export default cartReducer;