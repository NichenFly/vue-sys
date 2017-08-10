<template>
  <ul class="topnav">
    <li @click='to' v-for="link in routernav" :key="link.index">
      <router-link :to="link.to">{{link.name}}</router-link>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'routernav'
    ])
  },
  methods: {
    ...mapActions([
      'to'
    ])
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
