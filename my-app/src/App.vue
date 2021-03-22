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
  background: #f3fcff;
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

.pokeball-loading {
  width: 400px;
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

.back-button { 
  text-decoration: none;
  color: #242424;
}

.type-normal {
  path {
    fill: #b5b5b5;
  }

  .box-item {
    background-image: linear-gradient(to bottom right, #e6e6e6, #b5b5b5);
  }

  > .pokemon-type {
    background: #b5b5b5;
  }

  .back-button {
    color: #fff;
  } 
}

.type-fire {
  path {
    fill: #ff8351;
  }

  .box-item {
    background-image: linear-gradient( to bottom right, #ffba8b, #ff7f27);
  }

  > .pokemon-type {
    background: #ff6427;
  }

  .back-button {
    color: #fff;
  }  
}

.type-fighting {
  path {
    fill: #d56723;
  }

  .box-item {
    background-image: linear-gradient(to bottom right, #f4ac80, #d56723);
  }

  > .pokemon-type {
    background: #d56723;
  }

  .back-button {
    color: #fff;
  }   
}

.type-flying {

  > .pokemon-type {
    background: #72cece;
    color: #222;
  }

}

.type-fairy {
  path {
    fill: #fdb9e9;
  }

  .box-item {
    background-image: linear-gradient(to bottom right, #ffe0f6, #e384c7);
  }

  > .pokemon-type {
    background: #fdb9e9;
    color: #222;
  }
}

.type-water {
  path {
    fill: #4592c4;
  }

  .box-item {
    background-image: linear-gradient(to bottom right, #9bd6fd, #4592c4);
  }

  > .pokemon-type {
    background: #4592c4;
  }

  .back-button {
    color: #fff;
  }
}

.type-grass {
  path {
    fill: #9ed78e;
  }

  .box-item {
    background-image: linear-gradient( to bottom right, #b8df7d, #80a843);
  }

  > .pokemon-type {
    background: #548a45;
  }

  .back-button {
    color: #fff;
  }
}

.type-poison {
  path {
    fill: #975aa8;
  }

  .box-item {
    background-image: linear-gradient(to bottom right, #eab0fb, #975aa8);
  }

  > .pokemon-type {
    background: #975aa8;
  }

  .back-button {
    color: #fff;
  }  
}

.type-bug {
  path {
    fill: #699339;
  }

  .box-item {
    background-image: linear-gradient(to bottom right, #b8e386, #699339);
  }

  > .pokemon-type {
    background: #699339;
    color: #fff;
  }

  .back-button {
    color: #fff;
  }  
}

.type-electric {
  .content-value {
    color: #fd0;
  }

  path {
    fill: #ffe53c;
  }

  .box-item {
    background-image: linear-gradient( to bottom right, #ffe88c, #ff8f00);
  }

  > .pokemon-type {
    background: #ffe53c;
    color: #222;
  }
}

.type-ground {
  path {
    fill: #cca04b;
  }

  .box-item {
    background-image: linear-gradient(to bottom right, #f9d48d, #cca04b);
  }

  > .pokemon-type {
    background: #cca04b;
    color: #fff;
  }

  .back-button {
    color: #fff;
  }  
}

.type-psychic {
  path {
    fill: #b9607d;
  }

  .box-item {
    background-image: linear-gradient(to bottom right, #f2aac1, #b9607d);
  }

  > .pokemon-type {
    background: #b9607d;
    color: #fff;
  }

  .back-button {
    color: #fff;
  }
}

.type-ghost {
  path {
    fill: #6a5093;
  }

  .box-item {
    background-image: linear-gradient(to bottom right, #ba9de8, #6a5093);
  }

  > .pokemon-type {
    background: #6a5093;
    color: #fff;
  }

  .back-button {
    color: #fff;
  }
}

.type-ice {
  path {
    fill: #51c4e7;
  }

  .box-item {
    background-image: linear-gradient(to bottom right, #a6eaff, #51c4e7);
  }

  > .pokemon-type {
    background: #51c4e7;
    color: #fff;
  }

  .back-button {
    color: #fff;
  }
}

.type-rock {
  path {
    fill: #8f7a18;
  }

  .box-item {
    background-image: linear-gradient(to bottom right, #dbc55f, #8f7a18);
  }

  > .pokemon-type {
    background: #8f7a18;
    color: #fff;
  }

  .back-button {
    color: #fff;
  }  
}

.type-steel {
  path {
    fill: #9eb7b8;
  }

  .box-item {
    background-image: linear-gradient(to bottom right, #d2e9ea, #9eb7b8);
  }

  > .pokemon-type {
    background: #9eb7b8;
    color: #fff;
  }

  .back-button {
    color: #fff;
  }  
}

.type-dragon {
  path {
    fill: #d90a0a;
  }

  .box-item {
    background-image: linear-gradient(to bottom right, #f48585, #d90a0a);
  }

  > .pokemon-type {
    background: #d90a0a;
    color: #fff;
  }

  .back-button {
    color: #fff;
  }  
}

.type-dark {
  path {
    fill: #3e3d3d;
  }

  .box-item {
    background-image: linear-gradient(to bottom right, #606060, #3e3d3d);
    
    .pokemon-name {
      color: #fff;
    }
  }

  > .pokemon-type {
    background: #3e3d3d;
    color: #fff;
  }

  .back-button {
    color: #fff;
  }  
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

  .pokeball-loading {
    width: 500px;
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
