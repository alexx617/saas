<template>
	<div id="app">
		<ui-head></ui-head>
		<div class="ui-app-main">
			<router-view></router-view>
		</div>
		<ui-sidebar></ui-sidebar>
	</div>
</template>

<script>

import uiHead from 'widgets/header.vue'
import uiSidebar from 'widgets/sidebar.vue'
export default {
	data () {
		return {
		};
	},
	components:{uiHead,uiSidebar},
	created() {
		
	},
	methods : {
		
	},
}
</script>

<style lang='less'>
    @import 'styles/style.less';
.ui-app-main{
	margin-left: 80px;
	background: @gray;
	height: 100%;
	padding-top: 55px;
}
</style>