<template>
	<div>
		<div>
			<Row :gutter="24" class="ui-home-menu">
				<Menu width="85px" theme="dark" active-name="1">
					<div class='ui-home-logo'></div>
						<Menu-item name="1">
							<Icon class="ui-home-icon ui-home-icon0"></Icon>							
						</Menu-item>
						<Menu-item name="2">
							<Icon class="ui-home-icon ui-home-icon ui-home-icon1"></Icon>
							洽谈
						</Menu-item>
						<Menu-item name="3">
							<Icon class="ui-home-icon ui-home-icon ui-home-icon2"></Icon>
							客户
						</Menu-item>
				</Menu>
			</Row>
		</div>
	</div>
</template>

<script>
const log = console.log;
export default {
	data () {
		return {
		};
	},
	components:{},
	created() {
		
	},
	methods : {
		
	},
}

</script>

<style lang='less' scoped>
    @import '../style/style';

.ui-home-menu{
	position:absolute;
	height:100%;
	overflow:hidden;
	position: absolute;
	top: 0px;
	bottom: 0px;
}
.ivu-menu{
	height:100%;
}
.ui-home-logo{
	width:100%;
	height:50px;
	background:url("../../static/images/logo.png") 60% no-repeat;
	background-color:@blue;
	background-size: 40%;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){
	border-right:5px solid #39f;
}
.ui-home-icon{
	width: 100%;
    display: block;
    height: 20px;
	margin-bottom: 7px;
}
.ui-home-icon0{
	width: 100%;
    display: block;
    height: 30px;
	margin-bottom: 7px;
	background:url("../../static/images/icon-home.png") center no-repeat;
	background-size: contain;
}
.ui-home-icon1{
	background:url("../../static/images/icon-talk.png") center no-repeat;
	background-size: contain;
}
.ui-home-icon2{
	background:url("../../static/images/icon-customer.png") center no-repeat;
}
.ivu-menu-item{
	text-align: center;
}
</style>