import React from 'react';
import './TodoSearch.css'

function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState('');

    console.log('Todos de: ' + searchValue);
    return (
        <input placeholder="search ToDo" className="TodoSearch" value={searchValue} onChange={(event) => {
            setSearchValue(event.target.value);
        }
        }></input>
    )
}

export { TodoSearch };