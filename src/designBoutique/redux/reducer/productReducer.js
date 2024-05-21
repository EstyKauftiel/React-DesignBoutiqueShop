import img1 from "../../../images/A Littel Color Placement.jpg"
import img2 from "../../../images/A wooden vase.jpg"
import img3 from "../../../images/Agartal.jpg"
import img4 from "../../../images/Air freshener set.jpg"
import img5 from "../../../images/Bath Baskets.jpg"
import img6 from "../../../images/Bubbys table.jpg"
import img7 from "../../../images/Candle.jpg"
import img8 from "../../../images/Classic Placement.jpg"
import img9 from "../../../images/Clean line table setting.webp"
import img10 from "../../../images/Clear Jars.jpg"
import img11 from "../../../images/Country style Placement.jpg"
import img12 from "../../../images/Creem Beads Napkin Rings.jpg"
import img13 from "../../../images/Dark Wode Placement.jpg"
import img14 from "../../../images/Diamond candle.jpg"
import img15 from "../../../images/Elegant Dried Flowers.jpg"
import img16 from "../../../images/Fancy But Classic Napkin Rings.jpg"
import img17 from "../../../images/Gold Flower Napkin Rings.jpg"
import img18 from "../../../images/Grand set Up.jpg"
import img19 from "../../../images/Homy Style Placement.jpg"
import img20 from "../../../images/Ktifa Shachor.jpg"
import img21 from "../../../images/Lable Cards.jpg"
import img22 from "../../../images/Pastel Beads Napkin Rings.jpg"
import img23 from "../../../images/Pink Style set.jpg"
import img24 from "../../../images/Place Holder Napkin Rings.jpg"
import img25 from "../../../images/PlatesSet.jpg"
import img26 from "../../../images/Rose set up.jpg"
import img27 from "../../../images/Set Blue Flower Plats.jpg"
import img28 from "../../../images/Summer setting.jpg"

const products = [
    {
      id: 1,
      name: 'A Littel Color Placement',
      qty: 15,
      image: img1,
      price: 19.9,
      description: 'clear placemate',
      qtyInCart:0
    },
    {
      id: 2,
      name: 'A wooden vase',
      qty: 20,
      image: img2,
      price: 45.9,
      description: 'a stylish wooden vase',
      qtyInCart:0
    },
    {
      id: 3,
      name: 'Agartal',
      qty: 10,
      image: img3,
      price: 30.9,
      description: 'a marble brown vase',
      qtyInCart:0
    },
    {
      id: 4,
      name: 'Air freshener set',
      qty: 4,
      image: img4,
      price: 78.9,
      description: 'black air freshener',
      qtyInCart:0
    },
    {
      id: 5,
      name: 'Bath Baskets',
      qty: 15,
      image: img5,
      price: 45,
      description: 'a brown bath baskets',
      qtyInCart:0
    },
    {
      id: 6,
      name: 'Bubbys table',
      qty: 12,
      image: img6,
      price: 670,
      description: 'purple:set of 8',
      qtyInCart:0
    },
    {
      id: 7,
      name: 'Candle',
      qty: 15,
      image: img7,
      price: 19.9,
      description: '3 size white candles',
      qtyInCart:0
    },
    {
      id: 8,
      name: 'Classic Placement',
      qty: 30,
      image: img8,
      price: 16,
      description: 'rose-gold Placement',
      qtyInCart:0
    },
    {
      id: 9,
      name: 'line table setting',
      qty: 3,
      image: img9,
      price: 729.9,
      description: 'rose-gold:set of 8',
      qtyInCart:0
    },
    {
      id: 10,
      name: 'Clear Jars',
      qty: 11,
      image: img10,
      price: 49.9,
      description: 'clear jars with a cover',
      qtyInCart:0
    },
    {
      id: 11,
      name: 'Country style Placement',
      qty: 15,
      image: img11,
      price: 16,
      description: 'a flower country',
      qtyInCart:0
    },
    {
      id: 12,
      name: 'Creem Napkin Rings',
      qty: 15,
      image: img12,
      price: 11.9,
      description: 'creem beads napkin',
      qtyInCart:0
    },
    {
      id: 13,
      name: 'Dark Wode Placement',
      qty: 37,
      image: img13,
      price: 24,
      description: 'dark wode color',
      qtyInCart:0
    },
    {
      id: 14,
      name: 'Diamond candle',
      qty: 6,
      image: img14,
      price: 19.5,
      description: 'rose-gold candle',
      qtyInCart:0
    },
    {
      id: 15,
      name: 'Elegant Dried Flowers',
      qty: 19,
      image: img15,
      price: 30.9,
      description: 'bondel of Dried Flowers',
      qtyInCart:0
    },
    {
      id: 16,
      name: 'Fancy Napkin Rings',
      qty: 25,
      image: img16,
      price: 10,
      description: 'flower with dimamonds',
      qtyInCart:0
    },
    {
      id: 17,
      name: 'Gold Flower Napkin Rings',
      qty: 15,
      image: img17,
      price: 8,
      description: 'gold Flower Napkin',
      qtyInCart:0
    },
    {
      id: 18,
      name: 'Grand set Up',
      qty: 4,
      image: img18,
      price: 689.9,
      description: 'purplea: set of 8',
      qtyInCart:0
    },
    {
      id: 19,
      name: 'Homy Style Placement',
      qty: 15,
      image: img19,
      price: 14.9,
      description: 'white cloth Placement',
      qtyInCart:0
    },
    {
      id: 20,
      name: 'Ktifa Shachor',
      qty: 6,
      image: img20,
      price: 154.9,
      description: 'tablecloth Ktifa Shachor',
      qtyInCart:0
    },
    {
      id: 21,
      name: 'Lable Cards',
      qty: 75,
      image: img21,
      price: 25,
      description: 'card place holder',
      qtyInCart:0
    },
    {
      id: 22,
      name: 'Pastel Napkin Rings',
      qty: 35,
      image: img22,
      price: 11.9,
      description: 'price for one',
      qtyInCart:0
    },
    {
      id: 23,
      name: 'Pink Style set',
      qty: 15,
      image: img23,
      price: 599.9,
      description: 'pink: set of 8',
      qtyInCart:0
    },
    {
      id: 24,
      name: 'Place Napkin Rings',
      qty: 35,
      image: img24,
      price: 12.9,
      description: 'place holder rings',
      qtyInCart:0
    },
    {
      id: 25,
      name: 'Plates Set',
      qty: 15,
      image: img25,
      price: 199.9,
      description: 'cream-green set',
      qtyInCart:0
    },
    {
      id: 26,
      name: 'Rose set up',
      qty: 4,
      image: img26,
      price: 780,
      description: 'Rose: set of 8',
      qtyInCart:0
    },
    {
      id: 27,
      name: 'Set Blue Flower Plats',
      qty: 15,
      image: img27,
      price: 690,
      description: 'white-blue flowers set',
      qtyInCart:0
    },
    {
      id: 28,
      name: 'Summer setting',
      qty: 15,
      image: img28,
      price: 690,
      description: 'summer setting: set of 8',
      qtyInCart:0
    }

];

const productReducer = (state = products, action) => {
  switch (action.type) {
    case 'DECREASE_QTY':
      {
          const newProducts = [...state];
          newProducts.find((product)=> product.id===action.productId).qty-=1;
          newProducts.find((product)=>product.id===action.productId).qtyInCart+=1;
          return newProducts;
      }
    case 'ADD_QTY':
      {
          const newProducts = [...state];
          newProducts.find((product)=> product.id===action.productId).qty+=1;
          newProducts.find((product)=>product.id===action.productId).qtyInCart-=1
          return newProducts;
      }
    case 'ADD_SUM_QTY':
      {
          const newProducts = [...state];
          newProducts.find((product) => product.id === action.productId).qty +=  newProducts.find((product) => product.id === action.productId).qtyInCart;
          newProducts.find((product) => product.id === action.productId).qtyInCart = 0;
          return newProducts; 
      }
    default:
      return state;
  }
};

export default productReducer;