import React from 'react';

function Pokemon(props) {
    return(
        <div style={{
            margin: 5,
            padding: 5, 
            width: 200, 
            border: 'solid', 
            display: 'inline-block', 
            verticalAlign: 'top',
            backgroundColor: 'whitesmoke'
            }} >
            <h4>{props.name}</h4>
            <div>
                <p><b>Num:</b> {props.num}</p>
                <p><b>Type(s):</b> {props.type.join(', ')}</p>
                <p><b>Weakness(es):</b> {props.weaknesses.join(', ')}</p>
            </div>
            <img src={props.img} alt={props.name} />
        </div>
    )
}

export default Pokemon;