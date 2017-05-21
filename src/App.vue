<template>
	<div id="app">
		<ui-head></ui-head>
		<div class="ui-app-main">
			<router-view></router-view>
		</div>
		<ui-menu></ui-menu>
	</div>
</template>

<script>

import uiHead from 'widgets/header.vue'
import uiMenu from 'widgets/menu.vue'
export default {
	data () {
		return {
		};
	},
	components:{uiHead,uiMenu},
	created() {
		
	},
	methods : {
		
	},
}
</script>

<style lang='less'>
    @import './style/style';
.ui-app-main{
	padding-left: 80px;
	background: @gray;
	height: 100%;
}
</style>