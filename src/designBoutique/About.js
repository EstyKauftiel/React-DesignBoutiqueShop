import React from 'react';
import img1 from "../images/About2.jpg"
import img2 from "../images/About1.jpg"
import img3 from "../images/About3.jpg"

const About = () => {
  return (
    <div className="about-div">

      <br></br>
      <div className="text">
        <b><h4> Tablecloths, napkins, hugs and jewelry for the home</h4></b>
        <p>With the stunning Casa Bella team, we started creating diverse and
          colorful collections, oozing style 4 times a year according to seasons
          and dates, fashion trends and subsequent demand 😍 It was important
          to us that thequality does not fall from the beauty. Our products are
          made of high-quality raw materials, which do not wrinkle and are
          preserved even after washing and hand stains and Kiddush wine because
          we understand what it is.
        </p>
      </div>
      <img className="img-about" src={img1}></img>
      <br></br>
      <br></br>
      <div className="text">
        <b><h4>The uniqueness of Casa Bella lies in the combinations</h4></b>
        <p>The collections consist of items that complement each other and allow original connections for dressing a table.
          Each and every one will be able to find items and through them define themselves and the nature of the hospitality,
          and change from time to time because it's the most fun 🌺
        </p>
      </div>
      <img className="img-about" src={img2}></img>

      <br></br>
      <br></br>
      <div className="text">
        <b><h4>Thanks to your love. Thanks</h4></b>
        <p>Our emphasis is on table fashion through contemporary styling and play with colors
          and textures - to refresh the familiar table and raise it a few levels above.
          But thanks to your love, we did not hold back and also created jewelry for the whole
          house. Living room, bedrooms, balcony, kitchen - we have the accessories that will upgrade every
          look and soul of every space. And all the time we are creating and thinking how to
          upgrade this magical experience around the table so that it will be joyful and solidifying.
          Creative and approachable. Even the food tastes better that way, we checked 😍 We also have
          a wonderful table-community with tips and inspiration. Invite each one
        </p>
      </div>

      <img className="img-about" src={img3}></img>
    </div>



  );
};

export default About;