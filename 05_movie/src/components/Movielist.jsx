import Movie from './Movie';

function Movielist(props) {
    const { movies, errorLoad } = props;

    return (
        <div className='movies'>
            {errorLoad ? (
                <h3>ERRORz</h3>
            ) : (
                movies.map((movie) => {
                    return <Movie key={movie.imdbID} {...movie} />;
                })
            )}
        </div>
    );
}

export default Movielist;
