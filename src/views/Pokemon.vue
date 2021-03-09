<template>
  <div class="container">
    <div class="row">    
      <div class="col-lg-12">
        <div class="pokemon-container">
          
          <div class="pokemon-content bor">
            <img :src="pokemon.image" alt="">
            <div>
              <h1>{{ pokemon.name }}</h1>
              <p>
                #{{ pokemon.id }}
              </p>
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
    display: flex;

    //flex-grow: 8
  }

  img {
    height: 250px;
  }
}
</style>
