const input = document.querySelector("input");
const button = document.querySelector("button");
const pokemonContainer = document.querySelector(".pokemon-container");

function traerPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
  .then((res) => res.json())
  .then((data) => {
    crearPokemon(data);
  });
}

traerPokemon();

function crearPokemon(pokemon){
    const img = document.createElement("img");
    img.src = pokemon.sprites.front_default;

    const h3 = document.createElement("h3");
    h3.textContent = pokemon.name;
}