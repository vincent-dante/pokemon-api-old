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
        <div class="grid-container rounded-1">

          <div class="grid-item rounded-1 shadow" v-for="(pokemon, id) in pokemonList" :key="id">
            <div class="grid-item-image-container">
              <img :src="pokemon.image" alt="" srcset="">
            </div>
            <p>{{ capitalizeFirstLetter(pokemon.name) }}</p>
            <div class="pokemon-type-container">
              <span v-for="(type, id) in pokemon.types" :key="id" class="pokemon-type rounded-1">
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
      .then( () => this.getPokemonImage() )
      .catch( err => console.error(err) )
    },
    capitalizeFirstLetter(name){
      return name.charAt(0).toUpperCase() + name.slice(1);
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
  padding: 20px;
  background: #ececec66;
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
  width: 100%;
  background: #fff;
/*   background: #222;
  color: #fff; */

  p {
    padding: 20px 20px 0 20px;
    margin: 0;
    text-align: left;
  }

  .grid-item-image-container {
    padding: 20px;
    background: #f2f2f2;
  }
  img {
    width: 80%;
  }
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
