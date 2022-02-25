<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        newsCategory: '',
        news: [],
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
        ],
        searchValue: '',
        searchedNews: []
      }
    },
    computed: {
      searchedValue() {
        return this.searchedNews.length
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
        // this.$emit('news-clicked')
        alert('*Länk till hemsidan*')
      }
    },
    watch: {
      searchValue() {
        const searchedString = this.news.filter((x) => {
          return x.title.toLowerCase().includes(this.searchValue.toLowerCase())
        })
        this.searchedNews = []
        for (let i = 0; i < searchedString.length; i++) {
          this.searchedNews.push(searchedString[i])
        }
      }
    }
  }
</script>

<template>
  <h1>News categories</h1>
  <p>Select or type what category you're interested in</p>

  <input v-model="newsCategory" />
  <input
    v-if="newsCategory !== ''"
    class="btn btn-primary"
    @click="fetchNews"
    type="button"
    placeholder="test"
    :value="'Show ' + this.newsCategory + ' news'"
  />
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

  <div class="searchBar" v-if="this.news.length !== 0">
    <input type="text" placeholder="Search title" v-model="searchValue" />
    <div v-if="searchedNews.length !== 0">
      <div>Showing {{ searchedValue }} news</div>
    </div>
    <div v-else>Showing 10 news</div>
  </div>
  <div v-if="searchedNews.length !== 0">
    <ol class="hide-bullet">
      <li :key="newsStory" v-for="newsStory in searchedNews">
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
  </div>
  <div v-else>
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
  </div>
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
