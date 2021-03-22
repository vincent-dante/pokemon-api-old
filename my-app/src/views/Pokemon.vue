<template>

  <img v-if="showLoading == true" src="../assets/pokeball-800x600.gif" alt="" srcset="" class="pokeball-loading">

  <div v-if="showLoading != true" class="row">    
    <div class="col-lg-12">
      <div class="pokemon-container shadow-lg">
        
        <div :class="'pokemon-svg-top '+pokemonTypeBackground(pokemon.types[0].type.name)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="svg-path">
            <path  fill-opacity="1" d="M0,128L48,149.3C96,171,192,213,288,229.3C384,245,480,235,576,213.3C672,192,768,160,864,165.3C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
            </path>
          </svg>
        </div>

        <div :class="'pokemon-header '+ pokemonTypeBackground(pokemon.types[0].type.name)">
          <a @click.prevent="goBack()" class="back-button">
            <i class="bi bi-arrow-left"></i>
            Back
          </a>
          <span class="pokemon-id rounded-pill">
            #{{ pokemon.id }}
          </span>
        </div>

        <img :src="pokemon.image" alt="" srcset="">

        <div class="pokemon-body">
          <h1 class="text-capitalize">{{ pokemon.name }}</h1>
          
          <div class="pokemon-type-container">
            <span v-for="(type, id) in pokemon.types" :key="id" :class="pokemonTypeBackground(type.type.name)">
              <span class="pokemon-type rounded-pill text-capitalize">{{ type.type.name }}</span>
            </span>
          </div>

          <div class="pokemon-content">
            <div class="content-ability">
              <div>
                <span v-for="(ability, id) in pokemon.abilities" :key="id" class="text-capitalize">
                  <span v-if="id != 0"> | </span> {{ ability.ability.name }}
                </span>
                
              </div>
              <div>Abilities</div>
            </div>
                 
            <div class="content-div">
              <div>
                <span class="content-value">{{ pokemon.base_experience }}</span>  
                <span class="content-title">Based Exp.</span>                                      
              </div>
              <div>
                <span class="content-value">{{ pokemon.height }}</span>
                <span class="content-title">Height</span>                   
              </div>
              <div>
                <span class="content-value">{{ pokemon.weight }}</span>
                <span class="content-title">Weight</span>                    
              </div>
            </div>

            <div class="content-div">
              <div v-for="(stats, id) in pokemon.stats" :key="id">                
                <span class="content-value">{{ stats.base_stat }}</span>          
                <span>{{ statsFormatName(stats.stat.name) }}</span>      
              </div>
            </div>
          </div>

        </div>
        

        <div :class="pokemonTypeBackground(pokemon.types[0].type.name)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill-opacity="1" d="M0,128L48,149.3C96,171,192,213,288,229.3C384,245,480,235,576,213.3C672,192,768,160,864,165.3C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
          </svg>         
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
      },
      showLoading: true

    }
  },
  setup(){
    const route = useRoute();
    const id = route.params.id;
    const search = route.query.search;

    return {
      id,
      search
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
      .then( () => this.showLoading = false )
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

      this.$router.push({ path: '/', query: { search: this.search } }) 

    }
  }
}
</script>

<style lang="scss" scoped>
.pokemon-container {
  position: relative;
  width: 100%;
  min-height: 500px;
  margin: 0px auto;
  border-radius: 1rem !important;
  overflow: hidden;
  background: #fff;
  

  .pokemon-header {
    position: absolute;
    top: 10px;
    width: 100%;
    padding: 0 20px;

    a {
      float: left;
      cursor: pointer;
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
    padding: 40px 0 20px 0;
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
    width: 100%;
    text-align: left;
    margin: 0 auto;
    padding: 20px 0 50px 0;

    .content-div {
      display: inline-grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: center;
      width: 100%;
      margin: 0 auto;

      div {
        padding-top: 30px;
      }

      span {
        display: block;
        text-align: center;
      }
    }

    .content-ability {
      display: grid;
      width: 100%;
      justify-items: center;

      span {
        color: #d6317e;
      }
    }

    .pokemon-type-container {
      justify-content: left;
      padding: 20px 0;
    }

    .content-title {
      color: #2c3e50;
    }

    .content-value {
      color: #d6317e;
      font-size: 32px;
    }

    .pokemon-type-size {
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

  .pokemon-id {
    font-size: 20px;
  }

  .pokemon-svg-top {
    height: 200px;
  }

}


@media only screen and (min-width: 768px) {
  .pokemon-container {
    width: 80%;

    .pokemon-header {
      top: 20px;
    }

    .pokemon-content {
      width: 70%;
    }
  }
}
</style>