<template>
  <div class="login">
    <div class="look">{{user}}</div>
    <button @click="logIn">sdsa</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  methods: {
    ...mapActions([
      'logIn'
    ])
  }
}
</script>

<style scoped lang="scss">

</style>
