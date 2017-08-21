<template>
  <ul class="topnav">
    <li v-for="(li,index) in data" :key="li.index" @click="reset(index)">
      <router-link :to="li.link">{{li.title}}</router-link>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'data'
    ])
  },
  methods: {
    ...mapActions([
      'reset'
    ])
  },
  created () {
    this.$store.dispatch('getItems')
  }
}
</script>

<style scoped lang="scss">
.topnav {
  width: 100%;
  text-align: center;
  background-color: #eef1f6;
  font-size: 0;
  li {
    display: inline-block;
    margin: 0 10px;
    a {
      padding: 0 20px;
      display: block;
      font-size: 14px;
      height: 50px;
      line-height: 50px;
      color: #48576a;
    }
    .router-link-active,
    .router-link-exact-active {
      color: #20a0ff;
    }
  }
}
</style>
