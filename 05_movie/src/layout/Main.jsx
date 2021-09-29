import React from 'react';
import Movielist from '../components/Movielist';
import Preloader from '../components/preloader';
import Search from '../components/Search';
import { useState, useEffect } from 'react';

function Main() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(true);
    const [load, setLoad] = useState(true);

    // Аналогично componentDidMount и componentDidUpdate:
    useEffect(() => {
        setError(true);
        setLoad(true);
        fetch(`https://www.omdbapi.com/?apikey=7cd6a2d1&s=bad&page=1`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.Search);
                setError(false);
                setLoad(false);
            })

            .catch((err) => {
                console.error(err);
                setError(true);
                setLoad(true);
            });
    }, []);

    let searchMovies = (str, type) => {
        setLoad(true);
        fetch(
            `https://www.omdbapi.com/?apikey=7cd6a2d1&s=${str}${
                type === 'all' ? '' : `&type=${type}`
            }`
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.Response === 'True') {
                    setMovies(data.Search);
                    setError(false);
                    setLoad(false);
                } else if (data.Response === 'False' && data.Error === 'Movie not found!') {
                    setMovies([]);
                    setError(true);
                    setLoad(false);
                }
            });
    };

    return (
        <main className='container content'>
            <Search searchMovies={searchMovies} />
            {load ? <Preloader /> : <Movielist movies={movies} errorLoad={error} />}
        </main>
    );
}

export default Main;
