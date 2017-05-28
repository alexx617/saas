<template>
    <div>
        <div class="ui-menu-select">
            <div class="ui-menu-title">
                <p>费用明细:<span>客户名称:百度人</span><i>一般纳税人</i></p>
            </div>
        </div>
        <div class="ui-menu-tabs">

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
    @import '../styles/style.less';
.ui-menu-title{
    padding:20px 20px 0 20px;
    font-size: 18px;
    font-weight: bold;
    p{
        display: inline-block;
    }
}
.ui-menu-tabs{
    width: 100%;
}
</style>