<template>
   <div class="ui-menu">
        <!--<div class="ui-menu-bg"></div>-->
        <div class="ui-menu-box ui-menu-active">
            <div class="ui-menu-select">
                <div class="ui-menu-title">
                    <p>客户123</p>
                    <span></span>
                </div>
            </div>
            <div class="ui-menu-tabs">
                <Tabs size="small">
                    <Tab-pane label="基本信息">
                        <ul class="ui-menu-infor">
                            <li>
                                <p class="ui-menu-infor-icon0">基本信息:</p>
                                <table cellSpacing="0" cellPadding="0" border="1">
                                    <tr>
                                        <td>公司名称:</td>
                                        <td>编号:</td>
                                    </tr>
                                    <tr>
                                        <td  colspan="2" class="ui-menu-more">更多</td>
                                    </tr>
                                </table>
                            </li>
                            <li>
                                <p class="ui-menu-infor-icon0">基本信息:</p>
                                <table cellSpacing="0" cellPadding="0" border="1">
                                    <tr>
                                        <td>公司名称:</td>
                                        <td>编号:</td>
                                    </tr>
                                    <tr>
                                        <td  colspan="2" class="ui-menu-more">更多</td>
                                    </tr>
                                </table>
                            </li>
                        </ul>
                    </Tab-pane>
                    <Tab-pane label="联系人">

                        <ul>
                            <li>
                                <ul>
                                    <li>
                                        <p>头衔：</p><span>xxxx</span>
                                    </li>
                                    <li>
                                        <p>头衔：</p><span>xxxx</span>
                                    </li>
                                    <li>
                                        <p>头衔：</p><span>xxxx</span>
                                    </li>
                                    <li>
                                        <p>头衔：</p><span>xxxx</span>
                                    </li>
                                    <li>
                                        <p>头衔：</p><span>xxxx</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </Tab-pane>
                    <Tab-pane label="记账/报税">标签三的内容</Tab-pane>
                    <Tab-pane label="合同/缴费">标签三的内容</Tab-pane>
                    <Tab-pane label="任务进度">标签三的内容</Tab-pane>
                    <Tab-pane label="客户APP管理">标签三的内容</Tab-pane>
                    <Tab-pane label="物品记录">标签三的内容</Tab-pane>
                    <Tab-pane label="交接记录">标签三的内容</Tab-pane>
                </Tabs>
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
.ui-menu-title{
    padding:20px 20px 0 20px;
    font-size: 18px;
    font-weight: bold;
    p{
        display: inline-block;
    }
    span{
        display: inline-block;
        float: right;
        width: 30px;
        height: 30px;
        background: url("@{img}icon-close.png") center no-repeat;
        background-size: cover;
        cursor: pointer;
    }
}
.ui-menu-tabs{
    width: 100%;
}
.ui-menu-infor{
    li{
        margin-bottom: 50px;
        padding: 0 20px;
    }
    p{
        text-indent: 40px;
        padding: 5px 0;
        margin: 10px 0;
    }
    table{
        background: #fff;
        width:100%;
        border: 1px solid @gray;
        td{
            width:49%;
            padding: 15px;
            border-bottom: 1px solid @gray;
        }
        td:not(:last-child){
            border-right: 1px solid @gray;
        }
    }
}
.ui-menu-infor-icon0{
    background: url("@{img}icon-infor.png") left no-repeat;
}
.ui-menu-more{
    text-align: center;
    cursor: pointer;
}
</style>