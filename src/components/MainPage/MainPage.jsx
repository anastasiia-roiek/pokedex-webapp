import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Card from '../Card/Card';
import PokeInfo from '../PokeInfo/PokeInfo';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import './MainPage.scss';

const MainPage = () => {
  const [pokeInfo, setPokeInfo] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [allTypes, setAllTypes] = useState([]);
  const [loadedPokemonsCount, setLoadedPokemonsCount] = useState(16);
  const [totalPokemons, setTotalPokemons] = useState(0);

  const getCharacters = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');

      return response.data;
    } catch (error) {
      throw new Error('Something went wrong');
    }
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters();

      setPokemons(data.results);
      setTotalPokemons(data.count);
    };

    fetchCharacters();

    const fetchTypes = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/type');

      setAllTypes(response.data.results);
    };

    fetchTypes();
  }, []);

  const getPokemonsByTypes = async () => {
    if (selectedTypes.length === 0) {
      const data = await getCharacters();

      setPokemons(data.results);
      setTotalPokemons(data.count);

      return;
    }

    try {
      const typePromises = selectedTypes.map(type => axios.get(`https://pokeapi.co/api/v2/type/${type}`));
      const responses = await Promise.all(typePromises);
      const typePokemons = responses
        .map(response => response.data.pokemon.map(pokemon => pokemon.pokemon));

      const commonPokemons = typePokemons
        .reduce((prev, current) => prev
          .filter(pokemon => current.some(p => p.name === pokemon.name)));

      setPokemons(commonPokemons);
    } catch (error) {
      throw new Error('Something went wrong');
    }
  };

  const handleTypeChange = (event) => {
    const type = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedTypes(prevTypes => [...prevTypes, type]);
    } else {
      setSelectedTypes(prevTypes => prevTypes.filter(t => t !== type));
    }
  };

  const loadMorePokemons = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${loadedPokemonsCount}&limit=16`);
      const newPokemons = response.data.results;

      setPokemons(prevPokemons => [...prevPokemons, ...newPokemons]);
      setLoadedPokemonsCount(prevCount => prevCount + 16);
    } catch (error) {
      throw new Error('Something went wrong');
    }
  };

  useEffect(() => {
    getPokemonsByTypes();
  }, [selectedTypes, loadedPokemonsCount]);

  return (
    <div className="container">
      <Header />

      <div className="container-content">
        <div className="container_left-content">
          <div className="type-filter">
            {allTypes.map((type) => (
              <label htmlFor={`type-${type.name}`} key={type.name} className={`type-filter__label ${type.name}`}>
                <div className="type-filter__checkbox-label">
                  <input
                    type="checkbox"
                    id={`type-${type.name}`}
                    value={type.name}
                    checked={selectedTypes.includes(type.name)}
                    onChange={handleTypeChange}
                  />
                  <span className="type-filter__checkbox"></span>
                  {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                </div>
              </label>
            ))}
          </div>

          {pokemons.slice(0, loadedPokemonsCount).map((pokemon) => (
            <Card key={pokemon.name} pokemon={pokemon} infoPokemon={poke => setPokeInfo(poke)} />
          ))}

          {loadedPokemonsCount < totalPokemons
            ? <LoadMoreButton onClick={loadMorePokemons} /> : null}
        </div>

        <div className="container_right-content">
          <PokeInfo data={pokeInfo} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
