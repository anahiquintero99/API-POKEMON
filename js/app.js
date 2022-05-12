//URL API
const API_URL = new URL('https://pokeapi.co/api/v2/pokemon/');

//global variables
const titleList = document.querySelector('#title-list');
const imgPokemon = document.querySelector('#img-pokemon');
const namePokemon = document.querySelector('#name-pokemon');

//Async Function
async function reload() {
  try {
    //connecting api
    const idPokemon = document.getElementById('id-pokemon').value;
    const response = await fetch(API_URL + idPokemon);
    const json = await response.json();

    //creat name
    namePokemon.textContent = json.species.name;

    //found img
    imgPokemon.src = json.sprites.other.dream_world.front_default;
  } catch (error) {
    console.log(error);
  }
}

reload();
