<template>
  <div class="logo-container">
   <img src="../assets/pokemon-logo.png" alt="" srcset="" class="logo">
  </div>

  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <input type="text" class="form-control search-input" placeholder="Search Pokemon Here!">        
        <input type="button" value="Search" class="search-btn">
      </div>
    </div>

  </div>
  

</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss">


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
  animation: bounce 1.2s linear infinite;  /* animation set */
}

.logo {
  width: 250px;
}

.search-input, 
.search-btn 
{
  display: inline-block;
}

.search-input {
  width: 70%;
  margin: 0 auto;
  font-family: 'DotGothic16', sans-serif;
}

.search-btn {
  width: 20%;
  margin-left: 10px;
  font-family: 'DotGothic16', sans-serif;
}

@media only screen and (min-width: 768px) {
  .search-input {
    width: 30%;
  }

  .search-btn {
    width: 10%;
    margin-left: 20px;
    font-family: 'DotGothic16', sans-serif;
    height: 38px;
  }
}

</style>
