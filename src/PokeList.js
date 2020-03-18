import React from 'react';
import Pokemon from './Pokemon';

function PokeList(props) {
    let pokemons = props.filteredPokemon.map((pokemon, i) => {
        return <Pokemon key={i} name={pokemon.name} type={pokemon.type} />
    })
    return (
        <div>
            {pokemons}
        </div>
    )
}

export default PokeList;