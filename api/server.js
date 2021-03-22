const express = require('express');
const fetch = require('node-fetch');


const app = express()
const port = 3000


app.get('/pokemon', (req, res) => {

  let pokemonIds = [4, 25, 1];
  let pokemons = [];

  async function getPokemon(ids) {
    for( let id of ids ){
      let poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      poke = await poke.json();
      poke.image = await `https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png`;
      pokemons.push(poke);
    }
  }

  getPokemon(pokemonIds).then( () => res.send(pokemons))

})


app.get('/pokemon/search/:name', (req, res) => {

  fetch(`https://pokeapi.co/api/v2/pokemon/${req.params.name}`)
  .then( response => {
    if(response.status == '404') return '404';
    else return response.json();
  })
  .then( response => {
    res.send(response)
  })
  .catch(err => console.error(err));

})


app.listen(port, () => {
  console.log(`Example app at http://localhost:${port}`)
})
