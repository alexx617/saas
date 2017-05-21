<template>
   <div class="ui-menu">
        <!--<div class="ui-menu-bg"></div>-->
        <div class="ui-menu-box ui-menu-active">
            <div class="ui-menu-select">
                123
            </div>
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
.ui-menu-box{
        position: fixed;
        top: 0;
        bottom: 0;
        width: 45%;
        background-repeat: no-repeat;
        background-color: #f5f5f5;
        background-size: cover;
        transition: all 0.3s ease;
        z-index: 19;
        -webkit-transform:translateX(220%) translate3d(0, 0, 0);
        box-shadow: -1px -1px 5px @blue;
    }
    .ui-menu-bg{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom:0;
        display: block;
        opacity: 1;
        z-index: 5;
        transition: opacity ease-in-out 0.38s, visibility ease-in-out 0.38s;
        background-color: rgba(0, 0, 0, 0.01);
    }
    .ui-menu-close{
        display: none;
        opacity: 0;
    }
    .ui-menu-active{
        transform: translateX(111%);
    }
    .ui-menu-select{
    }
</style>