import '../../css/searc.css'

const Search = () => {
  return (
    <section className="location py-3 px-2 my-5">
      <p className="location__title hidden">Проверить адрес доставки</p>
      <div className="location__container d-flex justify-content-between align-items-center">
        <p className="location__title see">Проверить адрес доставки</p>
        <input type="text" className="location__input" />
        <button className="location__button">Проверить</button>
      </div>
    </section>
  )
}

export default Search