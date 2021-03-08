<template>
  <div class="logo-container">
   <img src="../assets/pokemon-logo.png" alt="" srcset="" class="logo">
  </div>

  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <input type="text" class="form-control search-input" placeholder="Search Pokemon Here!">        
        <input type="button" value="Search" class="search-btn">
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="grid-container rounded-3">

          <div class="grid-item rounded-1 shadow" v-for="pokemon in pokemonList" :key="pokemon.id">
            <div class="grid-item-image-container">
              <img :src="pokemon.image" alt="" srcset="">
            </div>
            <p>{{ capitalizeFirstLetter(pokemon.name) }}</p>
            <div class="pokemon-type-container">
              <span v-for="(type, id) in pokemon.types" :key="id" :class="'pokemon-type rounded-1 '+pokemonTypeBackground(type.type.name)">
                {{ type.type.name }}
              </span>
            </div>

          </div>
        </div>  

      </div>
    </div>
  </div>
  
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
</template>

<script>
const axios = require('axios');

export default {
  name: 'Home',
  data(){
    return {
      pokemonList: []
    }
  },
  mounted(){
    this.loadPokemon()
  },
  methods: {
    loadPokemon() {
      let pokemonData = this.pokemonList;
      let data = "";

      axios
      .get('https://pokeapi.co/api/v2/pokemon/')
      .then( response => response.data.results )
      .then( response => {

        for( let pokemon of response ){
          fetch(pokemon.url)
          .then( response => response.json() )
          .then( response => {
            data = response;
            data.image = `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`;
            return data
          })
          .then( response => pokemonData.push(response) )
          .catch( err => console.error(err) )
        }

      })
      .catch( err => console.error(err) )
    },
    capitalizeFirstLetter(name){
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
    pokemonTypeBackground(type){
      if(type === "normal") return 'type-normal'
      if(type === "fire")   return 'type-fire'
      if(type === "water")  return 'type-water'
      if(type === "grass")  return 'type-grass'
      if(type === "poison") return 'type-poison'
      if(type === "flying") return 'type-flying'
      if(type === "bug")    return 'type-bug'
      if(type === "electric") return 'type-electric'
      if(type === "fairy")  return 'type-fairy'
      if(type === "ground") return 'type-ground'
      if(type === "fighting") return 'type-fighting'
      if(type === "psychic") return 'type-psychic'
      if(type === "ghost")  return 'type-ghost'
      if(type === "ice")    return 'type-ice'
      if(type === "rock")   return 'type-rock'
      if(type === "steel")  return 'type-steel'
      if(type === "dragon") return 'type-dragon'
      if(type === "dark")   return 'type-dark'
    }
  }
}
</script>

<style lang="scss">


@keyframes bounce {
  0%, 100% {
    bottom: 0;
  }
  50% {
    bottom: 10px;
  }
}

.logo-container {
  position: relative;
  bottom: 0;
  animation: bounce 1.2s linear infinite;
}

.logo {
  width: 250px;
}

.search-input, 
.search-btn 
{
  display: inline-block;
}

.search-input {
  width: 70%;
  margin: 0 auto;
}

.search-btn {
  width: 20%;
  margin-left: 10px;
}

.grid-container {
  position: relative;
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  width: 100%;
  margin-top: 50px;
}

/* .grid-container::after {
  content: "";
  position: absolute;
  top: 25%;
  right: -50px;
  width: 0;
  height: 50%;
  border-left: solid #ececec 50px;
  border-right: solid transparent 0;
  border-bottom: solid transparent 100px;
  border-top: solid transparent 100px;
}

.grid-container::before {
  content: "";
  position: absolute;
  top: 25%;
  left: -50px;
  width: 0;
  height: 50%;
  border-right: solid #ececec 50px;
  border-left: solid transparent 0;
  border-bottom: solid transparent 100px;
  border-top: solid transparent 100px;
} */

.grid-item {
  position: relative;
  top: 0;
  width: 100%;
  background: #fff;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s;

  p {
    padding: 20px 20px 0 20px;
    margin: 0;
    text-align: left;
  }

  .grid-item-image-container {
    padding: 20px;
    background: #ebebeb;
    overflow: hidden;
  }
  img {
    transition: all 0.8s ease;
    height: 120px;
  }
}

.grid-item:hover {
  top: -10px;
}

.grid-item:hover img {
  transform: scale(1.2, 1.2);
}

.pokemon-type-container {
  text-align: left;
  font-size: 14px;
  padding: 20px;
  color: #fff;
}

.pokemon-type {
  background: #222;
  padding: 2px 20px;
  margin-right: 5px;
}

.type-normal {
  background: #b5b5b5;
  color: #2c3e50;
}

.type-fire {
  background: #ff7f27;
}

.type-fighting {
  background: #d56723;
}

.type-flying {
  background: #8f75ea;
}

.type-fairy {
  background: #fdb9e9;
  color: #222;
}

.type-water {
  background: #4592c4;
}

.type-grass {
  background: #80a843;
}

.type-poison {
  background: #975aa8;
}

.type-bug {
  background: #699339;
}

.type-electric {
  background: #eed535;
  color: #222;
}

.type-ground {
  background: #cca04b;
}

.type-psychic {
  background: #b9607d;
}

.type-ghost {
  background: #6a5093;
}

.type-ice {
  background: #51c4e7;
  color: #222;
}

.type-rock {
  background: #8f7a18;
}

.type-steel {
  background: #9eb7b8;
}

.type-dragon {
  background: #d90a0a;
}

.type-dark {
  background: #3e3d3d;
  color: #fff;
}



@media only screen and (min-width: 768px) {
  .search-input {
    width: 30%;
  }

  .search-btn {
    width: 10%;
    margin-left: 20px;
    font-family: 'DotGothic16', sans-serif;
    height: 38px;
  }
}

</style>
