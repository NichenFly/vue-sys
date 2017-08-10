<style scoped lang='scss'>
	.vueslider{
		padding: 10px;
	}
</style>

<template>
	<div class="vueslider">
		<div class="block">
			<el-progress :percentage="0"></el-progress>
			<el-progress :percentage="70"></el-progress>
			<el-progress :percentage="100" status="success"></el-progress>
			<el-progress :percentage="50" status="exception"></el-progress>
		</div>
        <div class="block">
            <span class="demonstration">不显示间断点</span>
            <el-slider
            v-model="value6"
            :step="5">
            </el-slider>
        </div>
        <div class="block">
            <span class="demonstration">显示间断点</span>
            <el-slider
            v-model="value7"
            :step="10"
            show-stops>
            </el-slider>
        </div>
		<div class="block">
            <el-progress type="circle" :percentage="0"></el-progress>
            <el-progress type="circle" :percentage="25"></el-progress>
            <el-progress type="circle" :percentage="100" status="success"></el-progress>
            <el-progress type="circle" :percentage="50" status="exception"></el-progress>
		</div>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        value6: 0,
        value7: 0
      }
    },
    methods: {
      formatTooltip (val) {
        return val / 100
      }
    }
  }
</script>
