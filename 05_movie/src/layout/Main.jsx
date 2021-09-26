import React from 'react';
import Movielist from '../components/Movielist';
import Preloader from '../components/preloader';
import Search from '../components/Search';
import { useState, useEffect } from 'react';

function Main() {
    const [movies, setMovies] = useState([]);
    const [errorLoad, setErrorLoad] = useState(false);
    //const [find, setfind] = useState('');

    // Аналогично componentDidMount и componentDidUpdate:
    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=7cd6a2d1&s=bad&page=1`)
            .then((response) => response.json())
            .then((data) => setMovies(data.Search));
    }, []);

    let searchMovies = (str, type) => {
        fetch(
            `http://www.omdbapi.com/?apikey=7cd6a2d1&s=${str}${
                type === 'all' ? '' : `&type=${type}`
            }`
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.Response === 'True') {
                    setMovies(data.Search);
                    setErrorLoad(false);
                } else if (data.Response === 'False') {
                    setMovies([]);
                    setErrorLoad(true);
                    console.log(data.Error);
                }
            }); //setMovies(data.Search)
    };

    return (
        <main className='container content'>
            <Search searchMovies={searchMovies} />
            {errorLoad ? <Preloader /> : <Movielist movies={movies} errorLoad={errorLoad} />}
        </main>
    );
}

export default Main;
