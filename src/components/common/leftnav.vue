<template>
  <div class="leftnav">
    <el-menu theme="dark" unique-opened default-active="index" router v-for="(left,index) in topItems" :key="left.index">
      <el-submenu v-for="item in left.items" :key="item.index" :index="item.index">
        <template slot="title">
          <i :class="item.icon"></i>{{item.title}}
        </template>
        <el-menu-item v-for="subitem in item.subs" :key="subitem.index" :index="subitem.index" @click="addTab(subitem)">{{subitem.title}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'topItems'
    ])
  },
  methods: {
    ...mapActions([
      'addTab'
    ])
  }
}
</script>

<style scoped lang="scss">
.leftnav {
  background-color: #324157;
  color: #bfcbd9;
  height: 100%;
  width: 20%;
  overflow: hidden;
  ul {
    height: 100%;
  }
  .el-menu-item.is-active {
    background-color: #fff;
  }
}
</style>