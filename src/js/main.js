import Handlebars from "handlebars";
import pokemonTenplate from "bundle-text:../template/pokemon.hbs";

const container = document.querySelector(".js-card-container");

const createPockemonMarkup = Handlebars.compile(pokemonTenplate);

const normalizePokemonData = (data) => {
  const pokemon = {
    name: data.name,
    id: data.id,
    abilities: data.abilities,
    weight: data.weight,
    height: data.height,
    photo: data.sprites.other.dream_world.front_default,
  };
  return pokemon;
};

const getPokemon = (pokemonName) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Помилка: ${response.statusText}`);
      }

      return response.json();
    })
    .then((data) => {
      const pokemonData = normalizePokemonData(data);
    });
};

getPokemon("pikachu");
