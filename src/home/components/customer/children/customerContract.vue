<template>
    <div>
        <div class="ui-Contactslist-contract">
            <div class="ui-Contactslist-contract-bottom">
                <Button type="primary">添加合同</Button>
            </div>
            <div class="clear"></div>
            <div class="ui-Contactslist-contract-table">
                <table>
                    <tr>
                        <th style="width:15%">合同编号</th> 
                        <th>合同类型</th>
                        <th>合同周期</th>
                        <th>合同状态</th>
                        <th>签约时间</th>
                        <th>实收费用</th>
                        <th>优惠金额</th>
                        <th>客户代表</th>
                        <th>公司代表</th>
                    </tr>
                    <tr @click="lookMore('contract')">
                        <td :class="[ showMore.contract ? 'ui-sele-bottom' : 'ui-sele-right']">HT20170514</td>
                        <td>代理记账</td>
                        <td>年</td>
                        <td>进行中</td>
                        <td>2017-05-14</td>
                        <td>5000元</td>
                        <td>500元</td>
                        <td>宋先生</td>
                        <td>刘先生</td>
                        <tr>
                            <template v-if="showMore.contract">
                                <td colspan='9' class="ui-Contactslist-contract-table-detail">
                                    <ul>
                                        <li>办理事项:小规模记账</li>
                                        <li style="width:15%">付款周期:月付</li>
                                        <li>账本费:200元</li>
                                        <li>纸质合同:签订</li>
                                        <li>开具发票:否</li>
                                        <div>
                                            <p>代收明细:</p>
                                            <table class="ui-Contactslist-contract-table-table">
                                                <tr>
                                                    <th>代收项</th>
                                                    <th>代收金额</th>
                                                    <th>有效期</th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        地税CA
                                                    </td>
                                                    <td>
                                                        500
                                                    </td>
                                                    <td>
                                                        2017-05-14
                                                    </td>
                                                </tr>
                                            </Table>
                                        </div>
                                    </ul>
                                </td>
                            </template>
                        </tr>
                    </tr>
                    
                </table>
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
	@import '../../../../styles/style';
.ui-Contactslist-contract{
    padding: 15px;
    font-size: 12px;
    .ui-Contactslist-contract-bottom{
        float: right;
        margin-bottom: 10px;
    }
    .ui-Contactslist-contract-table{
        border: 1px solid #dddddd; 
        background: #ededed;
        width: 100%;
        table{
            table-layout: fixed;
            text-align: center;
            width: 100%;
            tr{
                border: 1px solid #dddddd; 
                th,td{
                    padding: 10px 5px;
                }
                > td{
                    cursor: pointer;
                }
            }
        }
    }
}
.ui-Contactslist-contract-table-detail{
    text-align: left;
    background: #fff;
    width: 100%;
    li{
        display: inline-block;
        width: 20%;
        padding: 10px 0; 
    }
    div{
        padding: 10px 0;
        p{
            padding: 5px 0;
        }
        table{
            background: #ededed;
            border: 1px solid #dddddd; 
            td{
                background: #fff;
            }
        }
    }
}
.ui-Contactslist-contract-table-table{
    width: 80%!important;
    margin: 0 auto;
}
.ui-sele-bottom{
    background: url("@{c-img}icon-sele-bottom.png") 2% no-repeat;
    background-size: 12%;
}

.ui-sele-right{
    background: url("@{c-img}icon-sele-right.png") 2% no-repeat;
    background-size: 9%;
}
</style>