<template>
  <div class="rightmain">
    <router-link :to="nowPages">
      <el-tabs type="card" closable :value="nowTab" @tab-remove="removeTab" @tab-click="tabCut" v-if="nowTab">
        <el-tab-pane v-for="(item, index) in tabList" :key="item.name" :label="item.title" :name="item.name">
          <el-breadcrumb separator="/" v-if="breadcrumb">
            <el-breadcrumb-item v-for="li in breadcrumb" :key="li.index">{{li}}</el-breadcrumb-item>
          </el-breadcrumb>
          <transition name="fold">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
        </el-tab-pane>
      </el-tabs>
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'nowPages',
      'nowTab',
      'tabList',
      'breadcrumb'
    ])
  },
  methods: {
    ...mapActions([
      'removeTab',
      'tabCut'
    ])
  }
}
</script>

<style scoped lang="scss">
.rightmain {
  width: 78%;
  margin-left: 20%;
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 1%;
  overflow-y: auto;
  .el-breadcrumb{
    padding-bottom: 15px;
  }
  .ivu-breadcrumb {
    margin-bottom: 10px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0
  }
}
</style>