/*
We are making a pokemon card number generate 

*/

const base = "https://pokeapi.co/api/v2/pokemon/"

function getData() {
    fetch(base)
    .then((response) => {
        return response.json()

    })
}

getData()