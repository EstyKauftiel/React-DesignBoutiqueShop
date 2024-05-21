import { useSelector } from "react-redux"
import { deleteFromCart } from "./redux/actions/cartActions"
import { addQty, decreaseQty, addSumQty} from "./redux/actions/productActions"
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import trash from "../images/trash.png"


export default function CartDetails() {
  const products = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [rendering, setRendering] = useState(0);

  const addToTheCart = (item) => {
    dispatch(decreaseQty(item.id))
    setRendering(rendering + 1);
  }

  const removeFromCart = (item) => {
    if (item.qtyInCart === 1)
      dispatch(deleteFromCart(item.id))
    dispatch(addQty(item.id))
    setRendering(rendering + 1);
  }

  return (
    <>
      <br></br>
      <Table striped bordered hover size="sm" className="tabl">
        <thead className="header">
          <tr>
            <th>name</th>
            <th>image</th>
            <th>sum</th>
            <th>+/-</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {products ? products.map((item) => (
            <>
              <tr>
                <td>{item.name}</td>
                <td><img src={item.image} alt="Card image cap" class="img" className="cart-img"></img></td>
                <td>{item.price}</td>
                <td>
                  <div className="cart-brn">
                    <Button onClick={() => addToTheCart(item)} variant="dark">+</Button>
                    <p>{item.qtyInCart}</p>
                    <Button onClick={() => removeFromCart(item)} variant="dark">-</Button>
                  </div>

                </td>
                <td><img src={trash} className="img_trash" onClick={() =>{ dispatch(deleteFromCart(item.id)); dispatch(addSumQty(item.id))}}></img></td>
              </tr>
            </>
          )) : <tr><td><div>Products is null</div></td></tr>}
        </tbody>
      </Table>
      <br></br>
      <Button onClick={() => navigate("/payment")} variant="dark">Proceed to Payment</Button>
    </>
  )
}