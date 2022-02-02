<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        newsCategory: '',
        news: '',
        categories: [
          'all',
          'national',
          'business',
          'sports',
          'world',
          'politics',
          'technology',
          'startup',
          'entertainment',
          'miscellaneous',
          'hatke',
          'science',
          'automobile'
        ]
      }
    },
    methods: {
      fetchNews() {
        // eslint-disable-next-line no-undef
        axios(
          'https://inshortsapi.vercel.app/news?category=' + this.newsCategory
        ).then((result) => {
          this.news = result.data.data
          this.news = this.news.slice(0, 10)
          // console.log(this.news)
        })
      },
      readMore() {
        this.$emit('news-clicked')
        alert('*Länk till hemsidan*')
      }
    }
  }
</script>

<template>
  <h1>News categories</h1>
  <p>Select or type what category you're interested in</p>

  <div class="container">
    <div class="row">
      <div class="col-sm">
        <ul class="hide-bullet wide-screen">
          <li :key="category" v-for="category in categories">
            <input type="radio" v-model="newsCategory" :value="category" />
            <label :value="category">{{ category }}</label>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <input v-model="newsCategory" />
  <input
    v-if="newsCategory !== ''"
    class="btn btn-primary"
    @click="fetchNews"
    type="button"
    placeholder="test"
    :value="'Show ' + this.newsCategory + ' news'"
  />
  <ol class="hide-bullet">
    <li :key="newsStory" v-for="newsStory in news">
      <h2>{{ newsStory.title }}</h2>
      <p>{{ newsStory.content }}</p>
      <img :src="newsStory.imageUrl" alt="News image" height="200" />
      <p>
        <input
          type="button"
          @click="readMore"
          value="Read more"
          class="btn btn-primary"
        />
      </p>
    </li>
  </ol>
  <p><router-link to="/NewsStory">News story page</router-link></p>
</template>

<style>
  @media screen and (min-width: 575px) {
    .wide-screen {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>
