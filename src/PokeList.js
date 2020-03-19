import React from 'react';
import Pokemon from './Pokemon';

function PokeList(props) {
    let pokemons = props.filteredPokemon.map((pokemon, i) => {
        return <Pokemon 
            key={i} 
            name={pokemon.name} 
            num={pokemon.num} 
            img={pokemon.img} 
            type={pokemon.type} 
            weaknesses={pokemon.weaknesses} 
            height={pokemon.height} 
            weight={pokemon.weight}
            prev_evolution={pokemon.prev_evolution} 
            next_evolution={pokemon.next_evolution}
        />
    })
    return (
        <div>
            {pokemons}
        </div>
    )
}

export default PokeList;