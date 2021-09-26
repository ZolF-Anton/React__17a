function Movie(props) {
    const { Title, Year, imdbID, Type, Poster } = props;

    return (
        <>
            <div id={imdbID} className='card movie'>
                <div className='card-image waves-effect waves-block waves-light'>
                    {Poster === 'N/A' ? (
                        <img
                            alt={Title}
                            className='activator'
                            src='https://via.placeholder.com/150x300.png?text=Poster+was+ninjaed+by+wild+Gremlins'
                        />
                    ) : (
                        <img alt={Title} className='activator' src={Poster} />
                    )}
                </div>
                <div className='card-content'>
                    <span className='card-title activator grey-text text-darken-4'>
                        {Title}
                        <i className='material-icons right'>more_vert</i>
                    </span>
                    <p>
                        {Year} <span className='right'>{Type}</span>
                    </p>
                    <p>
                        <a href={`https://www.imdb.com/title/${imdbID}/`}>To Imdb Base</a>
                    </p>
                </div>
                <div className='card-reveal'>
                    <span className='card-title grey-text text-darken-4'>
                        Card Title<i className='material-icons right'>close</i>
                    </span>
                    <p>
                        Here is some more information about this product that is only revealed once
                        clicked on.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Movie;
