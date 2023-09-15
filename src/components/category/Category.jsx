import { categories } from '../../data/category';
import '../../css/category.css';

const Category = () => {
  return (
    <div className="category d-flex justify-content-between mt-5">
      {categories.map((item) => (
        <a key={item.name} className="category__link" href={`#${item.name}`}>
          <img className="category__image" src={item.image} alt={item.name} />
          <h3 className="category__title">{item.name}</h3>
        </a>
      ))}
    </div>
  );
};

export default Category;