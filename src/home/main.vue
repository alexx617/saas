<template>
	<div id="account-main">
		<ui-head></ui-head>
		<div class="ui-app-main">
			<router-view></router-view>
		</div>
		<ui-sidebar></ui-sidebar>
	</div>
</template>
<script>
import uiHead from './components/widgets/header.vue'
import uiSidebar from './components/widgets/sidebar.vue'
export default {
	name: "home-main",
	data() {
		return {

		}
	},
	components: {
		uiHead,
		uiSidebar
	}
}
</script>
<style lang="less" scoped>
@import '../styles/style.less';
#account-main {
	height: 100%;
}

.ui-app-main {
	margin-left: 80px;
	background: @gray;
	height: 100%;
	padding-top: 55px;
}
</style>