import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './actions/cartActions';
import { decreaseQty } from './actions/productActions';
import Button from 'react-bootstrap/Button';
import big from "../../images/Bign.jpg"


const Shop = () => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [sunOfProducts, setSunOfProducts] = useState(0);

  const plus = (itemId) => {
    if (products.find(p => itemId === p.id).qty > 0) {
      dispatch(decreaseQty(itemId));
    }
    else {
      alert("no more left");
    }
  }

  const handleAddToCart = (product) => {
    if (cart.find(p => p.id === product.id)) {
      plus(product.id);
    }
    else {
      dispatch(addToCart(product));
      dispatch(decreaseQty(product.id))
    }
    setSunOfProducts(sunOfProducts + 1)
  };


  return (
    <>
      <img src={big} className="big-img"></img>
      <h4 className="p-title"><b>The classics that always work</b></h4>
      <div className="all-cards">
        {products.map((product) => (
          <div key={product.id} id="container">
            <div className="card">
              <img className="card-img-top" src={product.image} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <h6 className="card-price"><b className="price-s">₪</b>{product.price}</h6>
                <div className="card-text">{product.description}</div>
                <Button className="btn-btn" variant="dark" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shop;
