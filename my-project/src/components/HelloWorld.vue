<script>
  export default {
    props: {
      msg: String
    }
  }
</script>

<style></style>

<template>
  <ol id="header">
    <li class="hide-bullet">
      {{ msg }}
    </li>
    <li class="hide-bullet"><h1>HEADER</h1></li>
  </ol>
</template>
