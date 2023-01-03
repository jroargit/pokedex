let pokemonContainer = document.querySelector('.pokemon-container');
const api = "https://pokeapi.co/api/v2/" ;

function fetchPokemon (id) {
    fetch(`${api}pokemon/${id}`)
        .then(res => res.json())
        .then(data => {
                createPokemon(data);
        });
}

function fetchPokemons (number) {
    for (let index = 1; index <= number; index++) {
        fetchPokemon(index)
        
    };
}

function createPokemon (pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `#00${pokemon.id}`;

    const name = document.createElement('p');
    name.classList.add('pokemon-name');
    name.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    pokemonContainer.appendChild(card);
}

fetchPokemons(15);

