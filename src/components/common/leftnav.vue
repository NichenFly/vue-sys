<template>
  <div class="leftnav">
    <el-menu theme="dark" unique-opened router :default-active="nowPages">
      <el-submenu v-for="item in data[nowIndex].leftNav" :key="item.index" :index="item.name">
        <template slot="title">
          <i :class="item.icon"></i>{{item.title}}
        </template>
        <el-menu-item v-for="subitem in item.subs" :key="subitem.index" :index="subitem.link" @click.self="addTab(subitem)">{{subitem.title}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'data',
      'nowPages',
      'nowIndex'
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