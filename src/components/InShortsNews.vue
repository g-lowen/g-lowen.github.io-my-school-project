<script>
  import axios from 'axios'
  export default {
    created() {
      // eslint-disable-next-line no-undef
      axios
        .get('https://inshortsapi.vercel.app/news?category=all')
        .then((result) => {
          this.news = result.data.data
          this.news = this.news.slice(0, this.amountOfNews)
          // console.log(this.news)
        })
    },
    data() {
      return {
        news: null,
        n: '',
        test: ''
      }
    },
    watch: {
      n() {
        console.log(this.n)
      }
    },
    props: {
      amountOfNews: {
        type: Number,
        default() {
          return 2
        }
      }
    }
  }
</script>

<template>
  <ol>
    <li
      :key="newsStory"
      v-for="newsStory in news"
      class="hide-bullet link-style"
    >
      <router-link :to="`/${newsStory.content}`" class="link-style">
        <h2>{{ newsStory.title }}</h2>
      </router-link>
    </li>
  </ol>
</template>
