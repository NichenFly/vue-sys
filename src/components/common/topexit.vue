<template>
	<div class="topexit">
		<div class="topexit-main">
			<router-link to="/user">{{user.name}}</router-link>
			<a href="" @click='logOut'>退出</a>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        name: '123'
      }
    }
  },
  methods: {
    logOut () {
      sessionStorage.clear()
      location.reload()
    }
  }
}
</script>

<style scoped lang='scss'>
.topexit {
	background-color: #324157;
	height: 30px;
	line-height: 30px;
	overflow: hidden;
	.topexit-main {
		float: right;
		margin-right: 15px;
		color: #9ba7b5;
		a {
			color: #9ba7b5;
			padding-left: 10px;
			margin-left: 10px;
			border-left: 1px solid #9ba7b5;
			&:first-child{
				border-left: none;
				padding-left: 0;
				margin-left: 0;
			}
		}
	}
}
</style>
