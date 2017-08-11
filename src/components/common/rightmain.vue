<template>
  <div class="rightmain">
    <router-link :to="nowPages">
      <el-tabs :value="tabsList" type="card" closable @tab-remove="removeTab" @tab-click="tabsCut" v-if="tabsList">
        <el-tab-pane v-for="(item, index) in editableTabs" :key="item.name" :label="item.title" :name="item.name">
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
      'tabsList',
      'editableTabs'
    ])
  },
  methods: {
    ...mapActions([
      'removeTab',
      'tabsCut'
    ])
  }
}
</script>

<style scoped lang="scss">
.rightmain {
  width: 80%;
  margin-left: 20%;
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 1%;
  overflow-y: auto;
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