<template>
  <input
    :disabled="$store.state.counter === 1"
    @click="$store.commit('decrease')"
    type="button"
    value="-"
    class="btn btn-warning"
  />
  <input
    type="button"
    :value="$store.state.counter"
    @click="$store.commit('increment')"
    class="btn btn-primary"
  />
  <input
    type="button"
    value="+"
    @click="$store.commit('increase')"
    class="btn btn-success"
  />
</template>

<script>
  export default {}
</script>
