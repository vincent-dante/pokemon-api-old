const express = require('express');
const fetch = require('node-fetch');


const app = express()
const port = 3000


app.get('/pokemon', (req, res) => {

  fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${req.query.offset}`)
  .then( response => {
    return response.json()
  })
  .then( response => {
    let data = response.results;
    let pokemonData = [];

    async function getPokemon() {
      for( let pokemon of data ){
        let poke = await fetch(pokemon.url)
        poke = await poke.json();
        poke.image = await `https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png`;
        pokemonData.push(poke);
      }
    }

    getPokemon().then( () => res.send(pokemonData))
    
  })
  .catch(err => console.error(err));

})


app.get('/pokemon/:name', (req, res) => {

  fetch(`https://pokeapi.co/api/v2/pokemon/${req.params.name}`)
  .then(res => {
    return res.json()
  })
  .then(json => {
    console.log(json)
    res.send(json)
  })
  .catch(err => console.error(err));

})


app.listen(port, () => {
  console.log(`Example app at http://localhost:${port}`)
})
