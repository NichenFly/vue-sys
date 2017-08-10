<template>
  <div class="contain">
    <div class="leftnav">
      <el-menu theme="dark" unique-opened class="el-menu-vertical-demo" default-active="index" router v-for="(left,index) in topItems" :key="left.index" v-if="nowIndex===index">
        <el-submenu v-for="item in left.items" :key="item.index" :index="item.index">
          <template slot="title">
            <i :class="item.icon"></i>{{item.title}}
          </template>
          <el-menu-item v-for="subitem in item.subs" :key="subitem.index" :index="subitem.index" @click="addTab(subitem)">{{subitem.title}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="rightmain">
      <router-link :to="nowPages">
        <el-tabs :value="tabsList" type="card" closable @tab-remove="removeTab" @tab-click="tabsCut" v-if="tabsList">
          <el-tab-pane v-for="(item, index) in editableTabs" :key="item.name" :label="item.title" :name="item.name">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </el-tab-pane>
        </el-tabs>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'nowIndex',
      'topItems',
      'tabsList',
      'editableTabs',
      'tabIndex',
      'nowPages',
      'getItems'
    ])
  },
  methods: {
    ...mapActions([
      'addTab',
      'removeTab',
      'tabsCut'
    ])
  }
}
</script>

<style scoped lang="scss">
.contain {
  width: 100%;
  height: 100%;
  .leftnav {
    background-color: #324157;
    color: #bfcbd9;
    float: left;
    height: 100%;
    width: 20%;
    overflow-y: auto;
    ul {
      height: 100%;
    }
  }
  .rightmain {
    width: 80%;
    margin-left: 20%;
    position: absolute;
    top: 80px;
    bottom: 40px;
    padding: 1%;
    overflow-y: auto;
  }
}
</style>