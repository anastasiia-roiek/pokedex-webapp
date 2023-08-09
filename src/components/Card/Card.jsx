import React, { useEffect, useState } from 'react';
import './Card.scss';

const Card = React.memo(({ pokemon, infoPokemon }) => {
  const [pokeInfo, setPokeInfo] = useState(null);

  const handleInfoPokemon = React.useCallback(() => {
    infoPokemon(pokeInfo);
  }, [infoPokemon, pokeInfo]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(pokemon.url);

        if (!response.ok) {
          throw new Error(`Network response was not ok. Status: ${response.status}`);
        }

        const pokeData = await response.json();

        setPokeInfo(pokeData);
      } catch (error) {
        throw new Error('Something went wrong');
      }
    };

    fetchPokemonData();
  }, [pokemon.url]);

  return (
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events */
    <div className="card" onClick={handleInfoPokemon} role="button" tabIndex="0">
      {pokeInfo && (
        <div className="card_info">
          <img className="card_image" src={pokeInfo.sprites.front_default} alt="" />
          <h2 className="card_title">{pokemon.name}</h2>
          <div className="card_types">
            {pokeInfo.types.map((typeData) => (
              <span
                key={typeData.slot}
                className={`card_type type-${typeData.type.name}`}
              >
                {typeData.type.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

export default Card;
