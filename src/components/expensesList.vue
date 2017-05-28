<template>
    <div>
        <div class="ui-menu-select">
            <div class="ui-menu-title">
                <p>费用明细:<span>客户名称：百度人</span><b>一般纳税人</b></p>
            </div>
        </div>
        <div class="ui-menu-tabs">
            <div class="ui-exp-contrec">
                <ul>
                    <li>
                        <p>会计人员:</p>
                        <Select style="width: 150px" small v-model="model1">
                            <Option small>123123</Option>
                        </Select>
                    </li>
                    <li>
                        <p>时间范围:</p>
                        <Date-picker type="date" placeholder="选择日期" style="width: 130px"></Date-picker>
                        至
                        <Date-picker type="date" placeholder="选择日期" style="width: 130px"></Date-picker>
                    </li>
                    <li>
                        <p>费用类别:</p>
                        <Select v-model="model1" style="width:150px">
                            <Option small>123123</Option>
                        </Select>
                    </li>
                    <li>
                        <p>审账人员:</p>
                        <Select v-model="model1" style="width:130px">
                            <Option small>123123</Option>
                        </Select>
                    </li>
                    <li>
                        <p>逾期缴费:</p>
                        <Checkbox v-model="single">&nbsp;</Checkbox>
                    </li>
                </ul>
                <Button type="primary" size="large">查询</Button>
                <div class="ui-exp-table">
                    <div class="ui-exp-table-title">
                        <p>剩余应收款:1234元</p>
                        <p>本月应收款:1234元</p>
                    </div>
                    <div>
                        <Table :columns="columns1" :data="data1"></Table>
                        <div class="ui-exp-table-page">
                            <div class="ui-exp-table-page-left">
                                <p>当前第 1 到 8 条  共  8 条</p>
                            </div>
                            <div class="ui-exp-table-page-right">
                                <Page :total="100"></Page>
                            </div>
                        <div class="clear"></div>
                        </div>
                    </div>
                </div>
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
    color:@blue;
    span{
        font-size: 15px;
        color:#000;
        margin-left: 20px;
    }
    b{
        font-size: 10px;
        background: #77ab41;
        border-radius:5px;
        color: #fff;
        margin-left: 20px;
        padding: 5px;
        font-weight: normal;
    }
}
.ui-menu-tabs{
    width: 100%;
}



.ui-exp-contrec{
    padding: 20px;
    font-size: 13px;
    >ul{
        width: 88%;
        display: inline-block;
        vertical-align: middle;
        li{
            display: inline-block;
            vertical-align: middle;
            padding-bottom: 10px;
            padding-right: 10px;
        }
        p{
            display: inline-block;
        }
    }
    Button{
        width: 10%;
        margin-top: 30px;
    }
}
.ivu-date-picker,
.ivu-select{
    display: inline-block;
}

.ui-exp-table{
    background: #FfF;
    border: 1px solid #dcdcdc;
    .ui-exp-table-title{
        padding: 10px 0;
        text-align: center;
        p{
            display: inline-block;
            margin-right: 50px;
            font-size: 14px;
            font-weight: bold;
        }
    }
}
.ui-exp-table-page{
    padding: 10px;
    .ui-exp-table-page-left{
        float: left;
        margin-top: 10px;
    }
    .ui-exp-table-page-right{
        float: right;
    }
}
</style>