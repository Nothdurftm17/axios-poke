import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);

    const fetchInfo = () => (
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(pokemon => { setPokemon(pokemon.data.results) })
    );

    return (
        <div className="App">
                <h1>PokéDex</h1>
                <button onClick={fetchInfo} className="btn btn-primary btn-lg">Fetch Pokemon</button>
                <ul>
                    {
                        pokemon.map((item, i) => {
                            return <li key={i}>{item.name}</li>
                        })
                    }
                </ul>
        </div>
            );
}
export default Pokemon