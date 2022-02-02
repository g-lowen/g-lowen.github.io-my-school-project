<script>
  // import CitiesList from './components/CitiesList.vue'
  // import HelloWorld from './components/HelloWorld.vue'
  // import InShortsNews from './components/InShortsNews.vue'
  import CounterButton from './components/CounterButton.vue'

  export default {
    components: {
      // CitiesList,
      // HelloWorld,
      // InShortsNews,
      CounterButton
    },
    data() {
      return {
        test: 'testar'
      }
    }
  }
</script>

<template>
  <RouterLink to="/" class="link-style white">
    <header class="background-color">
      <h1 class="header-center">News around the globe</h1>
    </header>
  </RouterLink>
  <main class="background-color">
    <div class="container">
      <div class="row">
        <div class="col-md frame-color center white">
          <h2 class="frame-heading">News around the globe</h2>
          <RouterLink to="/">
            <img alt="Logo" src="/assets/globe-500px.jpeg" id="logo-globe" />
          </RouterLink>
          <p>Access news from all around the globe</p>
        </div>
        <div class="col-md-9 center hide-bullet main-color">
          <RouterView /><CounterButton />
        </div>
      </div>
    </div>
  </main>
  <footer class="white">
    <div class="container">
      <div class="row">
        <div class="col-md"><h1 id="footer" class="center">FOOTER</h1></div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
  $background-color: #181716;
  $frame-color: #0f302a;
  $main-color: #e1ece6;
  $detail-color: #b9314f;
  .main-color {
    background-color: $main-color;
  }
  .background-color {
    background-color: $background-color;
  }
  .frame-color {
    background-color: $frame-color;
  }
  .center {
    border: 10;
    align-items: center;
    text-align: center;
  }
  .hide-bullet {
    list-style: none;
    padding: 0;
  }

  [v-cloak] {
    display: none;
  }

  #logo-globe {
    width: 100%;
  }
  .hide-bullet {
    list-style: none;
  }
  footer {
    background-color: $background-color;
    height: 500px;
  }
  #footer {
    margin: 0;
  }
  .container {
    margin: 0;
  }
  .link-style {
    text-decoration: none;
    color: black;
  }

  .header-center {
    margin-bottom: 0;
    padding-top: 10px;
    text-align: center;
    height: 75px;
  }
  .frame-heading {
    margin-top: 50px;
  }
  .white {
    color: white;
  }
</style>
