import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import NewsStoryView from './views/NewsStoryView.vue'
// import CitiesList from './components/'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: '/'
    },
    {
      component: NewsStoryView,
      path: '/:content'
    }
  ]
})
