<template>
    <div>
        <div class="ui-menu-select">
                <div class="ui-menu-title">
                    <p>客户123</p>
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
                                        <td colspan="2" class="ui-menu-more">更多</td>
                                    </tr>
                                </table>
                            </li>
                        </ul>
                    </Tab-pane>


                    <Tab-pane label="联系人">
                        <div class="ui-menu-infor-Contactslist-add">
                            <Button type="primary">添加合同</Button>
                        </div>
                        <div class="clear"></div>
                        <ul class="ui-menu-infor-Contactslist">
                            <li class="ui-menu-infor-Contactslist-active">
                                <ul class="ui-menu-infor-Contactslist-p ui-menu-infor-app">
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
                            <li class="ui-menu-infor-Contactslist-active">
                                <ul class="ui-menu-infor-Contactslist-p ui-menu-infor-app">
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
                    <Tab-pane label="缴费记录">标签三的内容</Tab-pane>
                    <Tab-pane label="合同">标签三的内容</Tab-pane>
                    <Tab-pane label="任务协同">标签三的内容</Tab-pane>
                    <Tab-pane label="证件收取">标签三的内容</Tab-pane>
                    <Tab-pane label="沟通记录">标签三的内容</Tab-pane>
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
.ui-menu-infor-Contactslist{
    &>li{
        width: 43%;
        margin: 20px;
        display: inline-block;
        background: #fff;
        padding: .5px;
        box-shadow: 2px 2px 5px #eee;
        
    }
}
.ui-menu-infor-Contactslist-p{
    padding: 5px;
    p{
        font-weight: bold;
        display: inline-block;
    }
    span{
        display: inline-block;
        text-indent: 2px;
    }
    li{
        padding: 10px;
    }
}
.ui-menu-infor-Contactslist-active{
    border-left: 2px solid @blue;
}
.ui-menu-infor-app{
    background: url("@{img}icon-app.png") 95% 5% no-repeat;
}
.ui-menu-infor-Contactslist-add{
    margin-right: 35px;
    float: right;
}
</style>