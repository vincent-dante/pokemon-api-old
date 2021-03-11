<template>
  <div class="container">
    <div class="row">    
      <div class="col-lg-12">
        <div class="pokemon-container rounded-1 shadow">
          
          <div>
            <p class="clearfix">
              <span class="pokemon-id rounded-1">#{{ pokemon.id }}</span>
            </p>

            <div class="pokemon-content">
              <img :src="pokemon.image" alt="">
              <div>
                <h1>{{ capitalizeFirstLetter(''+pokemon.name+'') }}</h1>

                <div class="content-div pokemon-type-size">
                  <span class="content-title">Type: </span>
                  <span v-for="(type, id) in pokemon.types" :key="id" :class="'pokemon-type rounded-1 '+pokemonTypeBackground(type.type.name)">
                    {{ capitalizeFirstLetter(type.type.name) }}
                  </span>
                </div>

                <div class="content-div">
                  <span class="content-title">Abilities: </span> 
                  <span v-for="(ability, id) in pokemon.abilities" :key="id" class="pokemon-ability rounded-1">
                    {{ capitalizeFirstLetter(ability.ability.name) }}
                  </span>
                </div>

                <div class="content-div">
                  <span class="content-title">Height: </span> 
                  <span class="content-value">{{ pokemon.height }}</span>
                </div>

                <div class="content-div">
                  <span class="content-title">Weight: </span> 
                  <span class="content-value">{{ pokemon.weight }}</span>
                </div>
                
                <div class="content-div">
                  <span class="content-title">Based Experience: </span> 
                  <span class="content-value">{{ pokemon.base_experience }}</span>
                </div>

                <hr>
                
                <div>
                  <span class="content-title">Stats:</span>
                  <div class="stats-container">
                    <div v-for="(stats, id) in pokemon.stats" :key="id" class="stats-item">
                      <span>
                        <b>{{ statsFormatName(stats.stat.name) }}: </b> 
                        <span class="content-value">{{ stats.base_stat }}</span>
                      </span>                  
                    </div>
                  </div>                
                </div>

              </div>              
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
import { useRoute } from 'vue-router'
const axios = require('axios');

export default {
  'name': 'Pokemon',
  data(){
    return {
      pokemon: {}
    }
  },
  setup(){
    const route = useRoute();
    const id = route.params.id;

    return {
      id
    };
  },
  mounted(){

    this.loadPokemonData(this.id);

  },
  methods: {
    loadPokemonData(id) {
      let data = null;

      axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then( response => response.data )
      .then( response => {
        
        data = response;
        data.image = `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`;
        this.pokemon = data;

      })
      .then(() => {
        this.disabledNextButton = false;
        this.disabledPrevButton = false;
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
    },
    statsFormatName(name) {
      if(name.includes('special-attack')) return 'sp. attack';
      if(name.includes('special-defense')) return 'sp. defense';
      return name;
    }
  }
}
</script>

<style lang="scss" scoped>
.pokemon-container {
  background: #f2f2f2;
  padding: 20px;
  width: 80%;
  margin: 0 auto;

  .pokemon-content {
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    text-align: left;
  }

  img {
    height: 250px;
    display: block;
    margin: 0 auto;
  }
}

.stats-container {
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  margin-bottom: 40px;
}

.stats-item {
  padding: 10px 20px 0 0;  
}

.pokemon-type-container {
  justify-content: left;
  padding: 20px 0;
}

.content-title {
  color: #2c3e50;
  font-weight: bold;
}

.content-value {
  color: #d6317e;
}

.content-div {
  padding-top: 20px;
}

.pokemon-ability {
  padding: 2px 20px;
  margin-right: 5px;
  background: #567080;
  color: #fff;
  font-size: 14px;
}

.pokemon-type-size span:last-child {
  font-size: 14px;
  padding: 2px 20px;
}

.pokemon-type-size {
  color: #fff;
}
</style>
