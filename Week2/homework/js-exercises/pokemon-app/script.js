const pokemonUrl = "https://pokeapi.co/api/v2/pokemon";

// fetch data
function fetchData(url) {
    return fetch(url)
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            return new Error(`Request failed! ${err}`);
        })
}

// addPokemonToDOM
function addPokemonToDOM(url) {
    const imageElement = document.getElementById("pokemonImage");

    if(imageElement) {
        imageElement.remove();
    }

    fetchData(url)
        .then((pokemon) => {
            const imageContainer = document.createElement("div");
            imageContainer.id = "pokemonImage";
            const image = document.createElement("img");
            image.src = pokemon.sprites.front_default;
            imageContainer.appendChild(image);
            document.body.appendChild(imageContainer);
        })
}

// main
function main () {
    const buttonElement = document.getElementById("get_pokemon");
    if(buttonElement) {
        buttonElement.remove();
    }

    const selectElement = document.getElementById("select_pokemon");
    if(selectElement) {
        selectElement.remove();
    }

    const select = document.createElement("select");
    select.id = "select_pokemon";
    const button = document.createElement("button");
    button.innerText = "Get Pokemon!";
    button.style = "display: block; margin: 5px 0; padding: 5px"
    button.id = "get_pokemon"
    document.body.appendChild(button);

    fetchData(pokemonUrl).then((pokemons) => {
        pokemons.results.forEach((pokemon) => {
            const option = document.createElement("option");
            option.value = pokemon.url;
            option.innerText = pokemon.name;
            select.appendChild(option);
        })

        document.body.appendChild(select);
    });

    // event listener for the option change
    select.addEventListener("change", (event) => {
        addPokemonToDOM(event.target.value)
    })

    button.addEventListener("click", () => {
        const imageElement = document.getElementById("pokemonImage")
        imageElement.remove();

        main();
    })
}

window.onload = main();