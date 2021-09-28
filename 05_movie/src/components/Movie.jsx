import { useRef, useState } from 'react';
import { RatingsComp } from './RatingsComp';

function Movie(props) {
    const { Title, Year, imdbID, Type, Poster } = props;
    const [info, setInfo] = useState({});
    const [errorInfo, setErrorInfo] = useState(false);
    const { Actors, Director, Metascore, Plot, Ratings, Released, imdbRating } = info;
    let ratingCompRef = useRef('');

    function getMoreInfo(dataId) {
        fetch(`http://www.omdbapi.com/?apikey=7cd6a2d1&i=${dataId}&plot=full`)
            .then((response) => response.json())
            .then((dataGet) => {
                if (dataGet.Response === 'True') {
                    setInfo(dataGet);
                    setErrorInfo(false);
                    fillRef(dataGet.Ratings);
                } else if (dataGet.Response === 'False') {
                    setInfo({});
                    setErrorInfo(true);
                    console.log(dataGet.Error);
                }
            });
    }

    const fillRef = (ratings) => {
        ratingCompRef.current.value = ratings.map((rating, index) => {
            console.log('ratings.map');
            return <RatingsComp key={index} Source={rating.Source} Value={rating.Value} />;
        });
    };

    return (
        <>
            <div id={imdbID} className="card movie">
                <div
                    className="card-image waves-effect waves-block waves-light"
                    onClick={(e) => getMoreInfo(imdbID)}
                >
                    {Poster === 'N/A' ? (
                        <img
                            alt={Title}
                            className="activator"
                            src="https://via.placeholder.com/150x300.png?text=Poster+was+ninjaed+by+wild+Gremlins"
                        />
                    ) : (
                        <img alt={Title} className="activator" src={Poster} />
                    )}
                </div>
                <div className="card-content">
                    <span
                        className="card-title activator grey-text text-darken-4"
                        onClick={(e) => getMoreInfo(imdbID)}
                    >
                        <i className="material-icons right">more_vert</i>
                        {Title}
                    </span>
                    <p>
                        {Year} <span className="right">{Type}</span>
                    </p>
                    <p>
                        <a href={`https://www.imdb.com/title/${imdbID}/`}>To Imdb Base</a>
                    </p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                        <i className="material-icons right">close</i>
                        {Title}
                    </span>
                    <p>Actors: {Actors}</p>
                    <p>Director: {Director}</p>
                    <p ref={ratingCompRef}></p>
                    <p>{Plot}</p>
                </div>
            </div>
        </>
    );
}

export default Movie;

// {
//     Ratings.map((rating, index) => {
//         return <RatingsComp key={index} Source={rating.Source} Value={rating.Value} />;
//     });
// }

///<RatingsComp filmRates={Actors}/>
