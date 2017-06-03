<template>
    <div class="ui-header-box" @click="$closePullBox()">
        <!--<div class="ui-header-left"></div>-->
        <div class="ui-header-right">
            <ul>
                <li class="ui-header-icon ui-header-icon0">
                    <p>反馈</p>
                </li>
                <li class="ui-header-icon ui-header-icon1">
                    <p>帮助</p>
                </li>
                <li class="ui-header-icon ui-header-icon2">
                    <p>客服</p>
                </li>
                <li>
                    <span class="ui-header-icon ui-header-icon3"></span>
                    <p style="display: inline-block">admin</p>
                </li>
            </ul>
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
.ui-header-box{
    width: 100%;
    height: 50px;
    padding-left: 80px;
    padding-right: 20px;
    position: absolute;
    color: #8d8c8c;
    background: #fff;
	z-index: 1;
}
.ui-header-left{
    margin-left: 20px;
    width: 220px;
    height: 50px;
    display: inline-block;
    background: url("@{w-img}logo-oa.png") left 50% no-repeat;
}
.ui-header-right{
    display: inline-block;
    float: right;
    li{
        display: inline-block;
        min-width:80px; 
        height: 50px;
        line-height: 4;
        text-align: center;
        cursor: pointer;
    }
}
.ui-header-icon{
    width: 10px;
}
.ui-header-icon0{
    background: url("@{w-img}icon-feedback.png") left 50% no-repeat;
}
.ui-header-icon1{
    background: url("@{w-img}icon-help.png") left 50% no-repeat;
}
.ui-header-icon2{
    background: url("@{w-img}icon-qq.png") left 50% no-repeat;
}
.ui-header-icon3{
    width: 40px;
    height: 40px;
    vertical-align: middle;
    display: inline-block;
    background: url("@{w-img}icon-header.png") left 50% no-repeat;
}
</style>