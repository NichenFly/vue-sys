<template>
  <div class="login">
    <div class="look">{{form}}</div>
    <button @click="logIn">sdsa</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'form'
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
