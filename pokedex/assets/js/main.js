
const offset = 0
const limit = 99

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)

    .then(response => response.json())
    .then(jsonbody =>console.log(jsonbody))
    .catch(error => console.log(error.mesage))

   


