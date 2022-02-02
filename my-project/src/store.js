import { createStore } from 'vuex'

const mutations = {
    increment(state) {
      state.counter += +1
      // console.log(state.counter)
    },
    increase(state) {
      state.counter += +1
      // console.log(state.counter)
    },
    decrease(state) {
      state.counter += -1
      // console.log(state.counter)
    }
  },
  state = {
    counter: 0
  }

export default createStore({
  mutations,
  state,
  strict: true
})
