<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <input type="text" class="form-control search-input" placeholder="Search pokemon...." 
          v-model="search" 
          @keyup.enter="searchPokemon">        
        <input type="button" value="Search" class="search-btn" @click="searchPokemon">
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="pagination-container">
          <a href="#" @click.prevent="prevPage">
            <i class="bi bi-arrow-left-square-fill"></i>
          </a>
          <a href="#" @click.prevent="nextPage">
            <i class="bi bi-arrow-right-square-fill"></i>
          </a>
        </div>
      </div>      
      <div class="col-lg-12">
        <div class="grid-container rounded-3">
          <div class="grid-item rounded-1 shadow" v-for="pokemon in pokemonList" :key="pokemon.id" @click="showPokemonPage(pokemon.id)">
            <p class="clearfix">
              <span class="pokemon-id rounded-1">#{{ pokemon.id }}</span>
            </p>
            <div class="grid-item-image-container">
              <img :src="pokemon.image" alt="" srcset="">
            </div>

            <p class="text-center">{{ capitalizeFirstLetter(pokemon.name) }} </p>

            <div class="pokemon-type-container">
              <span v-for="(type, id) in pokemon.types" :key="id" :class="'pokemon-type rounded-1 '+pokemonTypeBackground(type.type.name)">
                {{ capitalizeFirstLetter(type.type.name) }}
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
      pokemonList: [],
      pageOffSet: 0,
      disabledNextButton: false,
      disabledPrevButton: false,
      search: ""
    }
  },
  mounted(){

    this.loadPokemon(this.pageOffSet);

  },
  methods: {
    searchPokemon(){

      (this.search.length === 0) ? this.loadPokemon() : this.searchSinglePokemon();

    },
    searchSinglePokemon(){
      this.pokemonList = [];
      this.disabledNextButton = true;
      this.disabledPrevButton = true;
      let pokemonData = this.pokemonList;
      let data = [];
      let search = this.search;
      search = search.toLowerCase();

      axios
      .get(`/pokemon/${search}`)
      .then( response => {
        data = response;
        data.image = `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`;
        pokemonData.push(data)
      })
      .then(() => {
        this.disabledNextButton = false;
        this.disabledPrevButton = false;
      })
      .catch( err => console.error(err) ) 
    },
    loadPokemon(offset) {
      this.pokemonList = [];
      this.disabledNextButton = true;
      this.disabledPrevButton = true;
      
      axios
      .get('/pokemon', {
        params: {
          offset: `${offset}`
        }
      })
      .then( response => {
        this.pokemonList = response.data;
      })
      .then( () => {
        this.disabledNextButton = false;
        this.disabledPrevButton = false;
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
    },
    nextPage(){
      if(this.disabledNextButton) return;
      if(this.pokemonList.length === 1) return;
      this.pageOffSet+=20;
      this.loadPokemon(this.pageOffSet);
    },
    prevPage(){
      if(this.disabledPrevButton) return;
      if(this.pageOffSet === 0) return;
      if(this.pokemonList.length === 0) return;
      this.pageOffSet-=20;
      this.loadPokemon(this.pageOffSet);
    }
  }
}
</script>

<style lang="scss" scoped>
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
  background: #2c3e50;
  border: none;
  border-radius: 4px;
  color: #e1e0e0;
  width: 20%;
  margin-left: 10px;
  transition: all 0.3s;
}

.grid-container {
  position: relative;
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  width: 100%;
  margin-top: 20px;
}

.grid-item {
  position: relative;
  top: 0;
  width: 100%;
  background: #f2f2f2;
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



.pagination-container {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  a {
    font-size: 30px;
    color: #2c3e50;
    outline: none;
  }

  a:first-child {
    margin-right: 20px;
  }

  i {
    transition: all 0.3s;
  }

  a:hover i, a:focus i {
    color: #202020;
  }
}



@media only screen and (min-width: 768px) {
  .search-input {
    width: 30%;
  }

  .search-btn {
    width: 10%;
    margin-left: 20px;
    height: 38px;
  }

  .search-btn:hover, .search-btn:focus {
    background: #202020;
    color: #fff;
  }
}

</style>
