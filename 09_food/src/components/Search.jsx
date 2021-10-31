import { useState } from 'react';

function Search({ cb = Function.prototype }) {
    const [value, setValue] = useState('');
    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        cb(value);
    };
    return (
        <>
            <div className='row'>
                <div className=' container col s12'>
                    <div className=' col s10'>
                        <input
                            type='search'
                            id='search-field'
                            placeholder='Search'
                            onKeyDown={handleKey}
                            onChange={(e) => setValue(e.target.value)}
                            value={value}
                        />
                    </div>
                    <button className='btn btn_search' onClick={handleSubmit}>
                        Search
                    </button>
                </div>
            </div>
        </>
    );
}

export default Search;
