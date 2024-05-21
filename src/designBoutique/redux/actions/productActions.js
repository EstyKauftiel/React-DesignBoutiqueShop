export const decreaseQty = (productId) => {
    return {
      type: 'DECREASE_QTY',
      productId,
    };
  };
  
export const addQty = (productId) => {
    return {
      type: 'ADD_QTY',
      productId,
    };
  };

export const addSumQty=(productId) => {
    return{
        type: 'ADD_SUM_QTY',
        productId,
    };
} ;