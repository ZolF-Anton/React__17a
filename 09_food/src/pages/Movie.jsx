import { useParams, useHistory, useRouteMatch, useLocation } from 'react-router';

function Movie() {
    const { idRoute } = useParams();
    const { goBack } = useHistory();
    const value = useRouteMatch();
    const value2 = useLocation();
    console.log(value);
    console.log(value2);

    return (
        <>
            <h1>
                <span>Movie's id is {idRoute} </span> <br /> GG!
            </h1>
            <button className="btn" onClick={goBack}>
                Go BACK!
            </button>
        </>
    );
}

export default Movie;
