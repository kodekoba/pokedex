import React from 'react';

function Pokemon(props) {
    return(
        <div style={{width: 200, border: 'solid'}}>
            <p>Name: {props.name}</p>
            <p>Type: {props.type}</p>
        </div>
    )
}

export default Pokemon