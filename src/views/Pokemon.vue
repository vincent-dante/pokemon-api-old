<template>
  <div class="container">
    <div class="row">    
      <div class="col-lg-12">
        <div class="pokemon-container rounded-1">
          
          <div>
            <p class="clearfix">
              <span class="pokemon-id rounded-1">#{{ pokemon.id }}</span>
            </p>

            <div class="pokemon-content">
              <img :src="pokemon.image" alt="">
              <div>
                <h1>{{ capitalizeFirstLetter(''+pokemon.name+'') }}</h1>
                <p>
                  
                </p>
                <div class="pokemon-type-container">
                  <span v-for="(type, id) in pokemon.types" :key="id" :class="'pokemon-type rounded-1 '+pokemonTypeBackground(type.type.name)">
                    {{ capitalizeFirstLetter(type.type.name) }}
                  </span>
                </div>
                <p>Abilities: 
                  <span v-for="(ability, id) in pokemon.abilities" :key="id">
                    {{ ability.ability.name }} /
                  </span>
                </p>
                <p>
                  Height: {{ pokemon.height }}, 
                  Weight: {{ pokemon.weight }}
                </p>
                <p>
                  Based Experience: {{ pokemon.base_experience }}
                </p>
                <p>
                  Stats:
                </p>
                <div class="stats-container">
                  <div v-for="(stats, id) in pokemon.stats" :key="id">
                    <p>
                      {{ stats.base_stat }}
                    </p>                  
                    <p>
                      {{ stats.stat.name }}
                    </p>
                  </div>

                </div>
              </div>              
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  </div>
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
    }
  }
}
</script>

<style lang="scss" scoped>
.pokemon-container {
  background: #fff;
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
}

.pokemon-type-container {
  justify-content: left;
  padding: 20px 0;
}
</style>
