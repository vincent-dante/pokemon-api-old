<template>

  <div class="row">    
    <div class="col-lg-12">
      <div class="pokemon-container shadow-lg">
        
        <div :class="pokemonTypeBackground(pokemon.types[0].type.name)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,256C672,288,768,288,864,250.7C960,213,1056,139,1152,106.7C1248,75,1344,85,1392,90.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
            </path>
          </svg>
        </div>

        <div class="pokemon-header">
          <a @click="$router.go(-1)">
            <i class="bi bi-arrow-left"></i>
            Back
          </a>
        </div>

        <div class="pokemon-left-text-design text-uppercase">
          <h1>{{ pokemon.name }}</h1>
        </div>

        <img :src="pokemon.image" alt="" srcset="">

        <div class="pokemon-body">
          <h1 class="text-capitalize">{{ pokemon.name }}</h1>
          
          <div class="pokemon-type-container">
            <span v-for="(type, id) in pokemon.types" :key="id" :class="pokemonTypeBackground(type.type.name)">
              <span class="pokemon-type rounded-pill text-capitalize">{{ type.type.name }}</span>
            </span>
          </div>

          <div :class="'pokemon-content '+pokemonTypeBackground(pokemon.types[0].type.name)">


            <div class="content-div">
              <div>
                <span v-for="(ability, id) in pokemon.abilities" :key="id" class="text-capitalize">
                  {{ ability.ability.name }}
                </span>
                <h2 class="content-title">Abilities</h2>
              </div>
            </div>

            <div class="content-div first-grid">
              <div>
                <span class="content-value">{{ pokemon.base_experience }}</span>
                <h2 class="content-title">Based Exp.</h2> 
              </div>              
              <div>
                <span class="content-value">{{ pokemon.height }}</span>
                <h2 class="content-title">Height</h2> 
              </div>
              <div>            
                <span class="content-value">{{ pokemon.weight }}</span>
                <h2 class="content-title">Weight</h2> 
              </div>
            </div>


            <div>
              <div class="stats-container">
                <div v-for="(stats, id) in pokemon.stats" :key="id" class="stats-item">
                  <span class="content-value">{{ stats.base_stat }}</span>
                  <span>
                    {{ statsFormatName(stats.stat.name) }}
                  </span>                  
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
      pokemon: {
        name: "",
        image: "",
        types: [
          {
            type: {
              name: ""
            }
          }
        ]
      }
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
      .catch( err => console.error(err) )        

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

    },
    goBack(){

      this.$router.go(-1)

    }
  }
}
</script>

<style lang="scss" scoped>
.pokemon-container {
  position: relative;
  width: 80%;
  min-height: 500px;
  margin: 0px auto;
  border-radius: 1rem !important;
  overflow: hidden;
  background: #fff;
  

  .pokemon-header {
    position: absolute;
    top: 20px;
    left: 20px;

    a {
      cursor: pointer;
    }
  }

  .pokemon-left-text-design {
    position: absolute;
    transform: rotate(-90deg);
    left: -100px;
    bottom: 100px;

    h1 {
      padding: 0;
    }

    h1::before {
      content: "";
      display: inline-block;
      background: #d5d5d5;
      width: 200px;
      height: 1px;
      transform: translateY(-9px);
      margin-right: 20px;
    }
  }

  .pokemon-body {
    height: 100%;
    width: 100%;
    border-top-right-radius: 60px;
    border-top-left-radius: 60px;
    margin-top: 50px;
  }

  h1 {
    padding: 40px 0;
    font-size: 28px;
  }

  img {
    position: absolute;
    top: 0px;
    right: 0;
    left: 0;
    display: block;
    margin: 50px auto 0 auto;
    height: 200px;
  }

  .pokemon-content {
    width: 70%;
    text-align: left;
    margin: 0 auto;
    padding: 20px 0 50px 0;

    .content-div {
      text-align: center;
      padding-top: 20px;
      width: 70%;
      margin: 0 auto;
    }

    .first-grid {
      display: inline-grid;
      grid-template-columns: 1fr 1fr 1fr;
      width: 100%;

    }

    .stats-container {
      display: inline-grid;
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
      width: 100%;
      margin-bottom: 40px;
    }

    .stats-item {
      /* padding: 10px 20px 0 0;   */

      span {
        display: block;
        text-align: center;
      }
    }

    .pokemon-type-container {
      justify-content: left;
      padding: 20px 0;
    }

    .content-title {
      color: #2c3e50;
      font-size: 16px;
      text-align: center;
    }

    .content-value {
      font-size: 32px;
    }

    .pokemon-ability {
      padding: 2px 20px;
      margin-right: 5px;
      background: #567080;
      color: #fff;
      font-size: 14px;
    }

    .pokemon-type-size{
      font-size: 14px;
      padding: 2px 20px;
      text-align: center;
      color: #fff;
    }
  }

  .btn-back {
    float: left;
    padding: 0 10px;
    text-decoration: none;
  } 


}


</style>
