import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg';
import '../../css/headerBottom.css';
import { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { categories } from "../../data/category";

const HeaderBottom = () => {
  const { values } = useContext(AppContext);
  let totalPrice = 0;

  values.map((item) => {
    totalPrice += +item.price * item.quantity;
  });

  const [act, setAct] = useState(false)
  const [fix, setFix] = useState(false)


  const actives = () => {
    if (window.scrollY >= 135) {
      setAct(true)
    } else {
      setAct(false)
    }
  }
  const fixeds = () => {
    if (window.scrollY >= 53) {
      setFix(true)
    } else {
      setFix(false)
    }
  }


  window.addEventListener("scroll", actives)
  window.addEventListener("scroll", fixeds)

  return (
    <header className={`header__bottom py-3 ${fix ? 'fix' : ''}`}>
      <nav className="header__nav d-flex justify-content-between mx-3 align-items-center">
        <div className="header__nav-item">
          <NavLink to='/' className="header__nav-link">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className={`category justify-content-between gap-5 ${act ? ' block' : ' none'}`}>
          {categories.map((item) => (
            <a key={item.name} className="category__links" href={`#${item.name}`}>
              <h3 className="category__title">{item.name}</h3>
            </a>
          ))}
        </div>
        <div className="header__nav-item">
          <NavLink to='/sell' className="header__nav-links">
            <span className="header__nav-price">{totalPrice}</span> ₽
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default HeaderBottom;