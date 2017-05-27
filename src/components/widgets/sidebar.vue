<template>
	<div>
        <div class="ui-sidebar-menu">
            <Menu @on-select="$go" width="84px" theme="dark" :active-name="$router.name">
				<div class='ui-sidebar-logo'></div>
				<Menu-item name="home">
					<Icon style="background-size: 80%;"  class="ui-sidebar-icon ui-sidebar-icon0"></Icon>
				</Menu-item>
				<Menu-item name="talk">
					<Icon class="ui-sidebar-icon ui-sidebar-icon ui-sidebar-icon1"></Icon>
					洽谈
				</Menu-item>
				<Menu-item name="customer">
					<Icon style="background-size: 70%;" class="ui-sidebar-icon ui-sidebar-icon ui-sidebar-icon2"></Icon>
					客户
				</Menu-item>
				<Menu-item name="contract">
					<Icon style="background-size: 70%;" class="ui-sidebar-icon ui-sidebar-icon ui-sidebar-icon3"></Icon>
					合同
				</Menu-item>
            </Menu>
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
@import "../../styles/style.less";
.ui-sidebar-menu{
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
.ui-sidebar-logo{
	width:100%;
	height:60px;
	background:url("@{w-img}logo.png") 50% no-repeat;
	background-color:@blue;
	background-size: 40%;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){
	border-right:4px solid #39f;
}
.ui-sidebar-icon{
	width: 100%;
    display: block;
    height: 20px;
	margin-bottom: 7px;
}
.ui-sidebar-icon0{
	width: 100%;
    display: block;
    height: 25px;
	margin-bottom: 7px;
	background:url("@{w-img}icon-home.png") center no-repeat;
	background-size: 30px;
}
.ui-sidebar-icon1{
	background:url("@{w-img}icon-talk.png") center no-repeat;
	background-size: contain;
}
.ui-sidebar-icon2{
	background:url("@{w-img}icon-customer.png") center no-repeat;
}
.ui-sidebar-icon3{
	background:url("@{w-img}icon-contract.png") center no-repeat;
}
.ivu-menu-item{
	text-align: center;
}
</style>