import '../../css/cardBox.css'

const CardBox = () => {
  return (
    <section className="new my-5">
      <div className="new__container d-flex text-start gap-4">
        <div className="new__content d-flex flex-column justify-content-between pb-5">
          <img src="../../../public/pizza.png" alt="img" className="new__image" />
          <p className="new__text">3 средние пиццы от 999 рублей</p>
        </div>
        <div className="new__contents flex-column justify-content-between d-flex py-5 px-3">
          <img src="../../../public/piza.png" alt="img" className="new__image" />
          <p className="new__text">Кэшбек 10% на самовывоз (доставка)</p>
        </div>
        <div className="new__content flex-column justify-content-between d-flex pb-5">
          <img src="../../../public/pizza.png" alt="img" className="new__image" />
          <p className="new__text">3 средние пиццы от 999 рублей</p>
        </div>
        <div className="new__contents flex-column justify-content-between d-flex py-5 px-3">
          <img src="../../../public/piza.png" alt="img" className="new__image" />
          <p className="new__text">Кэшбек 10% на самовывоз (доставка)</p>
        </div>
      </div>
    </section>
  )
}

export default CardBox