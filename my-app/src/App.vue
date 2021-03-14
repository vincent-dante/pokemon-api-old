<template>  
  
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="container app-container">
          <div class="logo-container">
            <img src="./assets/pokemon-logo.png" alt="" srcset="" class="logo">
          </div>

          <router-view/>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">

        <div class="data-provider">
          <p class="text-muted">Data provided by PokeApi</p>
          <small class="text-muted">Project By: Vincent Dante</small>
        </div>
        
      </div>
    </div>
  </div>
 
</template>

<style lang="scss">
body {
  background: #f0f0f0;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-container {
  position: relative;
  margin: 50px 0;
}

.background-container {
  position: relative;
  z-index: -1;
  overflow: hidden;

  img {
    position: fixed;
    top: 0;
    left: -120px;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 1100px;
  }  
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

.pokemon-type-container {
  text-align: left;
  font-size: 14px;
  padding: 20px;
  display: flex;
  justify-content: center;
  color: #fff;
}

.pokemon-id {
  background: #fff;
  padding: 0 10px;
  float: right;
  font-size: 14px;
}

.pokemon-type {
  background: #222;
  padding: 2px 20px;
  margin-right: 5px;
}

.type-normal {
  fill: #b5b5b5;

  background: #b5b5b5;
  color: #2c3e50;
}

.type-fire {
  path {
    fill: #ff8351;
  }

  .box-item {
    background-image: linear-gradient( to bottom right, #ffba8b, #ff7f27);
  }

  .pokemon-type {
    background: #ff6427;
  }
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
  path {
    fill: #9ed78e;
  }

  .box-item {
    background-image: linear-gradient( to bottom right, #b8df7d, #80a843);
  }

  .pokemon-type {
    background: #548a45;
  }
}

.type-poison {
/*   background: #975aa8;

  path {
    fill: #9ed78e;
  }

  .box-item {
    background-image: linear-gradient( to bottom right, #b8df7d, #80a843);
  } */

  .pokemon-type {
    background: #975aa8;
  }
}

.type-bug {
  background: #699339;
}

.type-electric {
  path {
    fill: #ffe53c;
  }

  .box-item {
    background-image: linear-gradient( to bottom right, #ffe88c, #ff8f00);
  }

  .pokemon-type {
    background: #ffe53c;
    color: #222;
  }
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
  fill: #3e3d3d;
  background: #3e3d3d;
}

.data-provider {
  margin-bottom: 100px;
}

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

@media only screen and (min-width: 768px) {
  .background-container {

    img {
      left: 0;
      width: 100%;
    }  
  }
}

@media only screen and (min-width: 992px) {
  .background-container {

    img {
      height: 100%;
      left: 0;
      width: 100%;
    }  
  } 
}
</style>
