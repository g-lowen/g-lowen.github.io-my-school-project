<script>
  import InShortsNews from '../components/InShortsNews.vue'

  export default {
    components: {
      InShortsNews
    }
  }
</script>

<template class="black">
  <p><InShortsNews /></p>
  <p>{{ $route.params.content }}</p>
</template>
