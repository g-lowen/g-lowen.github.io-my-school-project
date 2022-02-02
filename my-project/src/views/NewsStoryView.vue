<script>
  import InShortsNews from '../components/InShortsNews.vue'

  export default {
    components: {
      InShortsNews
    }
  }
</script>

<template class="black">
  <p><InShortsNews :amount-of-news="5" /></p>
  <p>{{ $route.params.content }}</p>
</template>
