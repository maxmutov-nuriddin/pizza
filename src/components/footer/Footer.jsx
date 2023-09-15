import '../../css/footer.css'

const Footer = () => {
  return (
    <footer className="footer pb-5 pt-2 px-3">
      <div className="footer__container d-flex flex-wrap justify-content-between">
        <ul className="mt-4 footer__list d-flex flex-column align-items-center justify-content-between">
          <li className="footer__list-item">
            <img src="../../../public/logo.svg" alt="logo" className="footer__logo" />
          </li>
          <li className="footer__list-item footer__copyright">
            © Куда Пицца 2021
          </li>
        </ul>
        <ul className="mt-4 d-flex flex-column gap-2 justify-content-between footer__list">
          <li className="footer__list-heading">
            <strong>Куда пицца</strong>
          </li>
          <li className="footer__list-item">О компании</li>
          <li className="footer__list-item">Пользовательское соглашение</li>
          <li className="footer__list-item">Условия гарантии</li>
        </ul>
        <ul className="mt-4 d-flex flex-column gap-2 justify-content-between footer__list">
          <li className="footer__list-heading">
            <strong>Помощь</strong>
          </li>
          <li className="footer__list-item">Ресторан</li>
          <li className="footer__list-item">Контакты</li>
          <li className="footer__list-item">Поддержка</li>
          <li className="footer__list-item">Отследить заказ</li>
        </ul>
        <ul className="mt-4 d-flex flex-column gap-2 justify-content-between footer__list">
          <li className="footer__list-heading">
            <strong>Контакты</strong>
          </li>
          <li className="footer__list-item footer__list-tel">+7 (926) 223-10-11</li>
          <li className="footer__list-item footer__list-address">Москва, ул. Юных Ленинцев, д.99</li>
          <li className="footer__list-item">
            <ul className="d-flex flex-row gap-4 footer__social-list">
              <li className="footer__social-list-item">
                <a href="#" className="footer__social-link footer__social-face">Facebok</a>
              </li>
              <li className="footer__social-list-item">
                <a href="#" className="footer__social-link footer__social-instagram">Instagram</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer