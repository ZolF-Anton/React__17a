import { Link } from 'react-router-dom';
import { getFilteredCategory } from '../api';

function CategoryItem(props) {
    const { strCategory, strCategoryDescription, strCategoryThumb } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={strCategoryThumb} alt={strCategory} />
                <span className="card-title">{strCategory}</span>
            </div>
            <div className="card-content">
                <p>{strCategoryDescription.slice(0, 120)}...</p>
            </div>
            <div className="card-action">
                <Link
                    to={`/category/${strCategory}`}
                    className="waves-effect waves-light btn"
                    onClick={() => getFilteredCategory(strCategory)}
                >
                    Find more...
                </Link>
            </div>
        </div>
    );
}
export default CategoryItem;
