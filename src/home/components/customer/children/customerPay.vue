<template>
    <div>
        <div class="ui-Contactslist-contrec">
            <ul>
                <li>
                    <p>会计人员:</p>
                    <Select style="width: 100px" small>
                        <Option small>213123</Option>
                    </Select>
                </li>
                <li>
                    <p>时间范围:</p>
                    <Date-picker type="date" placeholder="选择日期" style="width: 110px"></Date-picker>
                    至
                    <Date-picker type="date" placeholder="选择日期" style="width: 110px"></Date-picker>
                </li>
                <li>
                    <p>费用类别:</p>
                    <Select style="width:100px">
                        <Option>213123</Option>
                    </Select>
                </li>
                <li>
                    <p>审账人员:</p>
                    <Select style="width:110px">
                        <Option>213123</Option>
                    </Select>
                </li>
                <li>
                    <p>逾期缴费:</p>
                    <Checkbox v-model="single">&nbsp;</Checkbox>
                </li>
            </ul>
            <Button type="primary">查询</Button>
            <div class="ui-Contactslist-table">
                <div class="ui-Contactslist-table-title">
                    <p>剩余应收款:1234元</p>
                    <p>本月应收款:1234元</p>
                </div>
                <div>
                    <Table :columns="columns1" :data="data1"></Table>
                    <div class="ui-Contactslist-table-page">
                        <div class="ui-Contactslist-table-page-left">
                            <p>当前第 1 到 8 条  共  8 条</p>
                        </div>
                        <div class="ui-Contactslist-table-page-right">
                            <!--<Page :total="100"></Page>-->
                        </div>
                    <div class="clear"></div>
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
.ui-Contactslist-contrec{
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

.ui-Contactslist-table{
    background: #FfF;
    border: 1px solid #dcdcdc;
    .ui-Contactslist-table-title{
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
.ui-Contactslist-table-page{
    padding: 10px;
    .ui-Contactslist-table-page-left{
        float: left;
        margin-top: 10px;
    }
    .ui-Contactslist-table-page-right{
        float: right;
    }
}
.ivu-date-picker,
.ivu-select{
    display: inline-block;
}
</style>