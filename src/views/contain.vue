<template>
  <div class="contain">
    <left-nav></left-nav>
    <right-main></right-main>
  </div>
</template>

<script>
import leftNav from 'components/common/leftnav'
import rightMain from 'components/common/rightmain'
export default {
  components: {
    leftNav,
    rightMain
  }
  // created () {
  //   this.$store.dispatch('getItems')
  // }
}
</script>

<style scoped lang="scss">
.contain {
    width: 100%;
    position: absolute;
    top: 80px;
    bottom: 40px;
    border-top: 1px solid #d7dde4;
    border-bottom: 1px solid #d7dde4;
}
</style>