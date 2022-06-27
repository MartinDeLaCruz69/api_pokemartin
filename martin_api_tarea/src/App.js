const input = document.querySelector("input");
const button = document.querySelector("button");
const pokemonContainer = document.querySelector(".pokemon-container");

function traerPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
  .then((res) => res.json())
  .then((data) => console.log(data));
}