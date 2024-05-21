import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

const Payment = () => {

    useEffect(() =>
    {
        alert("Are you sure you want to go to payment? ");
    }
  )
    
    const navigate=useNavigate();
    const products = useSelector((state) => state.cart)
    const totalAmount = products.reduce((acc, product) => acc + (product.qtyInCart * product.price), 0);

    return (
        <div>
            <h4 className="p-title"><b>Payment Page</b></h4>
            <br></br>
            <Table striped bordered hover size="sm" className="tabl">
                <thead className="header">
                    <tr>
                        <th>image</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td><img src={product.image} alt="Card image cap" class="img" className="payment-img"></img></td>
                            <td>{product.name}</td>
                            <td>{product.qtyInCart}</td>
                            <td>{product.price}</td>
                            <td>{product.qtyInCart * product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div>Total: {totalAmount}</div>
            <Button variant="dark" onClick={() => navigate("/creditCardForm")}>Pay Now</Button>
        </div>
    );

};

export default Payment;