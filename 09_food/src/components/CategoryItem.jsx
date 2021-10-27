import { getFilteredCategory } from '../api';

function CategoryItem(props) {
    const { idCategory, strCategory, strCategoryDescription, strCategoryThumb } = props;

    return (
        <div className="row">
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                        <img src={strCategoryThumb} alt={strCategory} />
                        <span className="card-title">{strCategory}</span>
                    </div>
                    <div className="card-content">
                        <p>
                            I am a very simple card. I am good at containing small bits of
                            information. I am convenient because I require little markup to use
                            effectively.
                        </p>
                    </div>
                    <div className="card-action">
                        <button
                            className="waves-effect waves-light btn"
                            onClick={() => getFilteredCategory(strCategory)}
                        >
                            Find more...
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CategoryItem;
