<template>

  <div class="row">
    <div class="col-lg-12">
      <div class="input-group search-container">
        <input type="text" class="form-control search-input" placeholder="Search by name, id" 
          v-model="search" 
          @keyup.enter="searchPokemon">        
        <button type="button" class="search-btn" @click="searchPokemon">Search</button>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-12">

      <div class="box-container">
        <div :class="'box-item-container shadow '+pokemonTypeBackground(pokemon.types[0].type.name)" v-for="pokemon in pokemonList" :key="pokemon.id">

          <div class="box-item" @click="showPokemonPage(pokemon.id)">
            <p class="clearfix">
              <span class="pokemon-id rounded-pill">#{{ pokemon.id }}</span>
            </p>
            <div class="grid-item-image-container">
              <img :src="pokemon.image" alt="" srcset="">
            </div>

            <p class="text-center">{{ capitalizeFirstLetter(pokemon.name) }} </p>

            <div class="pokemon-type-container">
              <span v-for="(type, id) in pokemon.types" :key="id" :class="pokemonTypeBackground(type.type.name)">
                <span class="pokemon-type rounded-pill">{{ capitalizeFirstLetter(type.type.name) }}</span>
              </span>
            </div>

          </div>

        </div>
      </div>  

    </div>
  </div>

</template>

<script>
const axios = require('axios');

export default {
  name: 'Home',
  data(){
    return {

      pokemonList: {},
      pokemonData: {},
      pageOffSet: 0,
      disabledNextButton: false,
      disabledPrevButton: false,
      search: ""

    }
  },
  mounted(){

    this.searchPokemon();

  },
  methods: {
    searchPokemon(){

      if (this.search.length === 0) this.loadPokemonHomePage();
      if (this.search.length !== 0) this.searchSinglePokemon();

    },
    loadPokemonHomePage() {

      axios
      .get(`/pokemon`)
      .then( response => this.pokemonList = response.data )
      .catch( err => console.error(err) ) 

    },
    searchSinglePokemon(){

      let data = [];
      let search = this.search;
      search = search.toLowerCase();

      axios
      .get(`/pokemon/search/${search}`)
      .then( response => {
        data = response.data;
        data.image = `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`;
        this.pokemonList = [];
        this.pokemonList.push(data);
      })
      .catch( err => console.error(err) ) 

    },
    showPokemonPage(id){

      this.$router.push({ path: `/pokemon/${id}`})  
      
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

<style lang="scss" scoped>
.search-container {
  width: 100%;
  margin: 0 auto;

  .search-input {
    padding-left: 20px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  .search-btn {
    background: #2c3e50;
    border: none;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    color: #e1e0e0;
    width: 30%;
    outline: none;
    transition: all 0.3s;
  }

  .search-btn:hover {
    background: #233240;
  }
}

.box-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
  min-height: 380px;
}

.box-item-container {
  position: relative;
  top: 0;
  width: 100%;
  margin: 20px;
  overflow: hidden;
  transition: all 0.2s;
  border-radius: 4%;
  cursor: pointer;
}

.box-item {
  height: 100%;

  p {
    padding: 20px 20px 0 20px;
    margin: 0;
    text-align: left;
  }

  .grid-item-image-container {
    padding: 20px;
    overflow: hidden;
  }

  img {
    transition: all 0.8s ease;
    height: 150px;
  }
}

.box-item-container:hover {
  top: -10px;
}

.box-item:hover img {
  transform: scale(1.2, 1.2);
}

.pokemon-list-container {
  margin-top: 200px;
  
  h2 {
    font-size: 20px;
  }
  
  .pokemon-list {
    margin-top: 40px;
  }

  a {
    font-style: italic;
    text-decoration: none;
    padding: 0 10px;
    display: inline-block;
    font-size: 14px;
  }
}

.data-provider {
  margin-top: 50px;
}

.pagination-container-button {
  padding-top: 40px;
}

@media only screen and (min-width: 768px) {
  .search-container {
    width: 50%;

    .search-btn {
      width: 20%;
      margin-left: 20px;
      height: 38px;
    }    
  }

  .search-btn:hover, .search-btn:focus {
    background: #233240;
    color: #fff;
  }
  
  .box-item-container {
    width: 20%;
  }

}

</style>
