// import Card from "../components/card/Card";
// import Category from "../components/category/Category";
// import { products } from '../data/products';

// import '../css/card.css'
// import Description from "../components/desription/Description";
// import Search from "../components/search/Search";
// import CardBox from "../components/cadBox/CardBox";
// import { useContext } from "react";
// import { AppContext } from "../contexts/AppContext";

// const HomePage = () => {
//   const categories = ['Пицца', 'Суши', 'Закуски', 'Десерты', 'Напитки', 'Соусы', 'Комбо'];
//   const { values, setValues } = useContext(AppContext);


//   let data = {};

//   categories.forEach((category) => {
//     data[category] = products.filter((product) => product.category === category);
//   });
//   const handleCardClick = (id) => {
//     let product = products.find((el) => el.id === id);
//     let checkCart = values.find((el) => el.id === id);
//     let newCart;
//     if (checkCart) {
//       newCart = values.map((el) => {
//         if (el.id === id) {
//           el.quantity++;
//         }
//         return el;
//       });
//       setValues(newCart);
//     } else {
//       newCart = [...values, { ...product, quantity: 1 }];
//       setValues(newCart);
//     }
//     localStorage.setItem("cart", JSON.stringify(newCart));
//   };



//   return (
//     <>
//       <Category />
//       <CardBox />
//       <Search />
//       {categories.map((category) => (
//         <div key={category}>
//           <h1 id={category} className="title-category">{category}</h1>
//           <Card data={data[category]} handleCardClick={handleCardClick}/>
//         </div>
//       ))}
//       <Description />
//       <div className=" position-absolute position-fixed btn__top">
//         <a href="#"><img className="btn__top-img" src="../../public/arrowhead-up.png" alt="top" /></a>
//       </div>
//     </>
//   );
// };

// export default HomePage;


import Card from "../components/card/Card";
import Category from "../components/category/Category";
import { products } from '../data/products';

import '../css/card.css'
import Description from "../components/desription/Description";
import Search from "../components/search/Search";
import CardBox from "../components/cadBox/CardBox";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const HomePage = () => {
  const categories = ['Пицца', 'Суши', 'Закуски', 'Десерты', 'Напитки', 'Соусы', 'Комбо'];
  const { values, setValues } = useContext(AppContext);


  let data = {};

  categories.forEach((category) => {
    data[category] = products.filter((product) => product.category === category);
  });
  const handleCardClick = (id) => {
    let product = products.find((el) => el.id === id);
    let checkCart = values.find((el) => el.id === id);
    let newCart;
    if (checkCart) {
      newCart = values.map((el) => {
        if (el.id === id) {
          el.quantity++;
        }
        return el;
      });
      setValues(newCart);
    } else {
      newCart = [...values, { ...product, quantity: 1 }];
      setValues(newCart);
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
  };


  return (
    <>
      <Category />
      <CardBox />
      <Search />
      {categories.map((category) => (
        <div key={category}>
          <h1 id={category} className="title-category">{category}</h1>
          <Card data={data[category]} handleCardClick={handleCardClick} />
        </div>
      ))}
      <Description />
      <div className=" position-absolute position-fixed btn__top">
        <a href="#"><img className="btn__top-img" src="../../public/arrowhead-up.png" alt="top" /></a>
      </div>
    </>
  );
};

export default HomePage;