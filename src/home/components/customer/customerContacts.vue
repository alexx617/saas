<template>
    <div>
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
@import '../../../styles/style.less';
.ui-menu-infor-Contactslist-add{
    margin-right: 35px;
    float: right;
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
.ui-menu-infor-Contactslist-active{
    border-left: 2px solid @blue;
}
.ui-menu-infor-app{
    background: url("@{w-img}icon-app.png") 95% 5% no-repeat;
}
.ui-menu-infor-Contactslist-add{
    margin-right: 35px;
    float: right;
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
</style>