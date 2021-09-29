import Movie from './Movie';
import Preloader from '../components/preloader';

function Movielist(props) {
    const { movies, errorLoad } = props;

    return (
        <div className='movies'>
            {errorLoad ? (
                <>
                    <Preloader />
                    <h4>Nothing...</h4>
                </>
            ) : (
                movies.map((movie) => {
                    return <Movie key={movie.imdbID} {...movie} />;
                })
            )}
        </div>
    );
}

export default Movielist;
