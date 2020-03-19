import React from 'react';

function SearchBox(props) {
    return (
        <div class="input-group input-group-lg">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-lg">Search Pokémon</span>
            </div>
            <input type="text" onChange={props.inputHandler} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
        </div>
    )
};

export default SearchBox;