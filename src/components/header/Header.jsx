

import { NavLink } from 'react-router-dom'
import '../../css/headerTop.css'


const Header = () => {
  return (
    <header className="header__top py-3">
      <nav className="header__top-nav mx-3 d-flex justify-content-between align-items-center">
        <ul className="header__top-nav-list d-flex gap-5">
          <li className="header__top-nav-item"><NavLink className="header__top-nav-item after__img">Москва</NavLink></li>
          <li className="header__top-nav-item header__top-nav-address">Проверить адрес</li>
          <li className="header__top-nav-item">Среднее время доставки*: <span className="header__top-nav-item--highlight fw-bolder">00:24:19</span></li>
        </ul>
        <ul className="header__top-nav-list d-flex gap-5">
          <li className="header__top-nav-item header__top-nav-time">Время работы: с 11:00 до 23:00</li>
          <li className="header__top-nav-item header__top-nav-log"><NavLink className="header__top-nav-item after__imgs">Войти в аккаунт</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header