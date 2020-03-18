import React from 'react';

function SearchBox(props) {
    return (
        <div>
            <input onChange={props.inputHandler} type='text' />
        </div>
    )
};

export default SearchBox;