<template>
  <div class="mainBody">
    <h1>{{ msg }}</h1>
    <div class="output">
      <Output/>
    </div>
  </div>
</template>

<script>
import Output from './Output.vue'

export default {
  name: 'MainBody',
  components: {
    Output
  },
  data () {
    return {
      msg: 'Welcome to Spooky House'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

.output{
  margin-top: 5%;
}
</style>
