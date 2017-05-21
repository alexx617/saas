<template>
	<div>
        <div class="ui-home-menu">
            <Menu @on-select="$go" width="84px" theme="dark" active-name="home" on-select>
				<div class='ui-home-logo'></div>
				<Menu-item name="home" on-select>
					<Icon class="ui-home-icon ui-home-icon0"></Icon>
				</Menu-item>
				<Menu-item name="talk">
					<Icon class="ui-home-icon ui-home-icon ui-home-icon1"></Icon>
					洽谈
				</Menu-item>
				<Menu-item name="customer">
					<Icon class="ui-home-icon ui-home-icon ui-home-icon2"></Icon>
					客户
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
		go(page){
			log(page);
		}
	},
}

</script>

<style lang='less' scoped>
    @import '../../style/style';

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
	height:60px;
	background:url("@{w-img}logo.png") 50% no-repeat;
	background-color:@blue;
	background-size: 40%;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){
	border-right:4px solid #39f;
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
    height: 25px;
	margin-bottom: 7px;
	background:url("@{w-img}icon-home.png") center no-repeat;
	background-size: 30px;
}
.ui-home-icon1{
	background:url("@{w-img}icon-talk.png") center no-repeat;
	background-size: contain;
}
.ui-home-icon2{
	background:url("@{w-img}icon-customer.png") center no-repeat;
}
.ivu-menu-item{
	text-align: center;
}
</style>