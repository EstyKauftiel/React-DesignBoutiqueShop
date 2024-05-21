import './App.css';
import { Provider } from 'react-redux';
import store from './designBoutique/store';
import Shop from './designBoutique/redux/Shop';
import About from './designBoutique/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartDetails from './designBoutique/CartDetails';
import logo from "./images/logo2.svg";
import Payment from './designBoutique/Payment';
import { Link } from "react-router-dom";
import CreditCardForm from './designBoutique/CreditCardForm';
import PaymentSuccessful from './designBoutique/PaymentSuccessful';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <BrowserRouter>
            <Link to="/"><img src={logo} alt="Logo" className="logoImg" /></Link>
            <div className="title">
              <div className="links">
                <Link to="/cart" className="cart">🛒</Link>
                <Link to="/about" className="about">About</Link>
                <Link to="/" className="home">Home</Link>
              </div>
              <b className="t">DESIGN BOUTIQUE SHOP</b>
            </div>
            <Routes>
              <Route exact path="/" element={<Shop />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/cart" element={<CartDetails />} />
              <Route exact path="/payment" element={<Payment />} />
              <Route exact path="/creditCardForm" element={<CreditCardForm />} />
              <Route exact path="/paymentSuccessful" element={<PaymentSuccessful />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </header>
      <br />
      <div className="footer">
        <br />
        <h3><b>Developed by Esti & Sarah</b></h3>
      </div>
    </div>
  );
}

export default App;

