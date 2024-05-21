// import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// const CreditCardForm = () => {
//     

//     const [formData, setFormData] = useState({
//         cardNumber: '',
//         cardHolder: '',
//         expirationDate: '',
//         cvv: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Add logic to handle form submission (e.g., send data to server)
//         console.log('Form submitted:', formData);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Card Number:
//                 <input
//                     type="text"
//                     name="cardNumber"
//                     value={formData.cardNumber}
//                     onChange={handleChange}
//                     maxLength="16"
//                     placeholder="Enter card number"
//                     required
//                 />
//             </label>
//             <br></br>
//             <label>
//                 Card Holder:
//                 <input
//                     type="text"
//                     name="cardHolder"
//                     value={formData.cardHolder}
//                     onChange={handleChange}
//                     placeholder="Enter card holder's name"
//                     required
//                 />
//             </label>
//             <br></br>
//             <div>
//                 <label>
//                     Expiration Date:
//                     <input
//                         type="text"
//                         name="expirationDate"
//                         value={formData.expirationDate}
//                         onChange={handleChange}
//                         placeholder="MM/YYYY"
//                         maxLength="7"
//                         required
//                     />
//                 </label>
//                 <br></br>
//                 <label>
//                     CVV:
//                     <input
//                         type="text"
//                         name="cvv"
//                         value={formData.cvv}
//                         onChange={handleChange}
//                         maxLength="3"
//                         placeholder="Enter CVV"
//                         required
//                     />
//                 </label>
//             </div>
            
//             <Button onClick={() => navigate("/paymentSuccessful")} variant="dark">Submit</Button>
//         </form>
//     );
// };

// export default CreditCardForm;

import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";

export default function CreditCardForm() {
    const navigate=useNavigate();
    const products = useSelector((state) => state.cart)
    const totalAmount = products.reduce((acc, product) => acc + (product.qtyInCart * product.price), 0);
  return (
    <MDBContainer className="py-5" id="pay">
      <MDBRow md="5">
        <MDBCol md="8" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <h5 className="mb-0">Biling details</h5>
            </MDBCardHeader>
            <MDBCardBody id="body">
              <MDBRow className="mb-4">
                <MDBCol md="6">
                  <MDBInput label="First name" id="form1" type="text" />
                </MDBCol>

                <MDBCol md="6">
                  <MDBInput label="Last name" id="form2" type="text" />
                </MDBCol>
              </MDBRow>

              {/* <MDBInput
                wrapperClass="mb-4"
                label="Address"
                id="form3"
                type="text"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form4"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Phone"
                id="form5"
                type="number"
              /> */}


              <h5 className="mb-0">Payment:</h5>

              <MDBRow>
                <MDBCol md="5">
                  <MDBInput
                    label="Name on card"
                    id="form6"
                    type="text"
                    wrapperClass="mb-4"
                  />
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    label="Credit cart number"
                    id="form7"
                    type="text"
                    wrapperClass="mb-4"
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    label="Expiration"
                    id="form8"
                    type="text"
                    wrapperClass="mb-4"
                  />
                </MDBCol>
                <MDBCol md="5">
                  <MDBInput
                    label="CVV"
                    id="form8"
                    type="text"
                    wrapperClass="mb-4"
                  />
                </MDBCol>
              </MDBRow>

              <Button onClick={() => navigate("/paymentSuccessful")} variant="dark" size="lg" block>
              Submit
              </Button>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="4" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <h5 className="mb-0">Summary</h5>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBListGroup flush>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>{totalAmount}</span>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Shipping
                  <span>Gratis</span>
                </MDBListGroupItem>
                <hr className="my-2"></hr>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p className="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span>
                    <strong>{totalAmount}</strong>
                  </span>
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}