<template>  
  <div id="app-container">
    <router-view/>
  </div>

  <div class="background-container">
    <img src="./assets/background.gif" alt="" srcset="">  
  </div>  
</template>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-container {
  position: relative;
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
