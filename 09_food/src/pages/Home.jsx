import { useState, useEffect } from 'react';

import Preloader from '../components/Preloader';
import CategoryList from '../components/CategoryList';
import { getAllCategories } from '../api';

function Home() {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        console.log('useRff loading...');
        getAllCategories().then((data) => {
            //console.log('data');
            setCatalog(data.categories);
        });
    }, []);
    return <>{catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />}</>;
}

export default Home;
