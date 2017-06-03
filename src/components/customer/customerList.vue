<template>
    <div>
        <div class="ui-menu-select">
                <div class="ui-menu-title">
                    <p>{{list.name}}</p>
                </div>
            </div>
            <div class="ui-menu-tabs">
                <Tabs size="small">
                    <Tab-pane label="基本信息">
                        <Button style="float:right;margin-right:20px;" type="primary">保存</Button>
                        <div class="clear"></div>
                        <ul class="ui-menu-infor">
                            <li>
                                <p class="ui-menu-infor-icon0">基本信息:</p>
                                <table cellSpacing="0" cellPadding="0" border="1">
                                    <tr>
                                        <td>公司名称:</td>
                                        <td>编号:</td>
                                    </tr>
                                    <template v-if="!showMore.infor">
                                        <tr>
                                            <td colspan='2'>客户来源:</td>
                                        </tr>
                                        <tr>
                                            <td colspan='2'>所在地区:</td>
                                        </tr>
                                        <tr>
                                            <td colspan='2'>详细地址:</td>
                                        </tr>
                                        <tr>
                                            <td>客户行业:</td>
                                            <td>客户邮箱:</td>
                                        </tr>
                                        <tr>
                                            <td>联系电话:</td>
                                            <td>联系人:</td>
                                        </tr>
                                    </template>
                                    <tr>
                                        <td colspan="2" class="ui-menu-more" @click="lookMore('infor')">{{moreString.infor}}</td>
                                    </tr>
                                </table>
                            </li>
                            <li>
                                <p class="ui-menu-infor-icon0">记账信息:</p>
                                <table cellSpacing="0" cellPadding="0" border="1">
                                    <tr>
                                        <td>记账类别:</td>
                                        <td>邮寄方式:</td>
                                    </tr>
                                    <template v-if="!showMore.account">
                                        <tr>
                                            <td colspan='2'>客户来源:</td>
                                        </tr>
                                        <tr>
                                            <td colspan='2'>所在地区:</td>
                                        </tr>
                                        <tr>
                                            <td colspan='2'>详细地址:</td>
                                        </tr>
                                        <tr>
                                            <td>客户行业:</td>
                                            <td>客户邮箱:</td>
                                        </tr>
                                        <tr>
                                            <td>联系电话:</td>
                                            <td>联系人:</td>
                                        </tr>
                                    </template>
                                    <tr>
                                        <td colspan="2" class="ui-menu-more" @click="lookMore('account')">{{moreString.account}}</td>
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


                    <Tab-pane label="记账/报税">
                        <div class="ui-Contactslist-tax">
                            <Button type="primary">进账簿</Button>
                            <div class="clear"></div>
                            <h3>票据-记账</h3>
                        </div>
                    </Tab-pane>


                    <Tab-pane label="缴费记录">
                        <div class="ui-Contactslist-contrec">
                            <ul>
                                <li>
                                    <p>会计人员:</p>
                                    <Select style="width: 150px" small>
                                        <Option small>213123</Option>
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
                                    <Select style="width:150px">
                                        <Option>213123</Option>
                                    </Select>
                                </li>
                                <li>
                                    <p>审账人员:</p>
                                    <Select style="width:130px">
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
                                            <Page :total="100"></Page>
                                        </div>
                                    <div class="clear"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab-pane>


                    <Tab-pane label="合同">
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
                    </Tab-pane>


                    <Tab-pane label="任务协同">
                        <div class="ui-Contactslist-contrec">
                            <ul>
                                <li>
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;发起人:</p>
                                    <Select style="width: 110px" small>
                                        <Option small>3333</Option>
                                    </Select>
                                </li>
                                <li>
                                    <p>发起时间:</p>
                                    <Date-picker type="date" placeholder="选择日期" style="width: 110px"></Date-picker>
                                </li>
                                <li>
                                    <p>&nbsp;&nbsp;&nbsp;紧急度:</p>
                                    <Select style="width:110px">
                                        <Option>3333</Option>
                                    </Select>
                                </li>
                                <li>
                                    <p>执行状态:</p>
                                    <Select style="width:110px">
                                        <Option>3333</Option>
                                    </Select>
                                </li>
                                <li>
                                    <p>是否延期:</p>
                                    <Select style="width:110px">
                                        <Option>3333</Option>
                                    </Select>
                                </li>
                                <li>
                                    <p>任务类型:</p>
                                    <Select style="width:110px">
                                        <Option>3333</Option>
                                    </Select>
                                </li>
                            </ul>
                            <Button type="primary">查询</Button>
                            <div class="ui-Contactslist-task">
                                <table>
                                    <tr>
                                        <th style="width:20%">任务类型</th> 
                                        <th>发起人</th>
                                        <th>发起时间</th>
                                        <th>状态</th>
                                        <th>紧急度</th>
                                    </tr>
                                    <tr @click="lookMore('task')">
                                        <td :class="[ showMore.task ? 'ui-task-bottom' : 'ui-task-right']">开发票</td>
                                        <td>客户</td>
                                        <td>2018-04-02</td>
                                        <td>未处理</td>
                                        <td>高</td>
                                        <tr>
                                            <template v-if="showMore.task">
                                                <td colspan='5' class="ui-Contactslist-contract-table-detail">
                                                    <p style="margin-left: 40px;display:inline-block;font-weight: bold;">流程图:</p>
                                                    <div class="ui-task-lct">
                                                        <Steps :current="1" status="error">
                                                            <Step title="已完成" content="完成"></Step>
                                                            <Step title="进行中" content="项目经历审批"></Step>
                                                            <Step title="待进行" content="部门经历审批"></Step>
                                                            <Step title="待进行" content="完成"></Step>
                                                        </Steps>
                                                    </div>
                                                    <p class="ui-task-lct-tip">* 距离约定到期时间还有1天</p>
                                                </td>
                                            </template>
                                        </tr>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </Tab-pane>
                    <Tab-pane label="证件收取">证件收取</Tab-pane>
                    <Tab-pane label="沟通记录">沟通记录</Tab-pane>
                </Tabs>
            </div>
        </div>
    </div>
</template>

<script>
const log = console.log;
import moreMixin from 'mixins/more';
import ajax from 'utils/ajax.js';
import { mapState } from 'vuex'
export default {
    mixins: [moreMixin],
    data () {
        return {};
    },
    components:{},
    computed: mapState({
        list: state => state.doc.listData.data,
    }),
    created() {
        this.getAjax();
	},
    methods : {
        getAjax(){
            ajax.customer_PullInit(this.list)
			.then(rs => {
				if (rs.success) {
                    
				} else {
					this.$tip(rs.message);
				};
			})
			.catch(error => {
				this.$tip(error);
			});
        }
    }
}

</script>

<style lang='less' scoped>

    @import '../../styles/style.less';
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
    font-size: 13px;
    li{
        margin-bottom: 30px;
        padding: 0 20px;
    }
    p{
        text-indent: 40px;
        padding: 6px 0;
        margin: 5px 0;
    }
    table{
        background: #fff;
        width:100%;
        border: 1px solid @gray;
        td{
            width:49%;
            padding: 10px;
            border-bottom: 1px solid @gray;
        }
        td:not(:last-child){
            border-right: 1px solid @gray;
        }
    }
}
.ui-menu-infor-icon0{
    background: url("@{w-img}icon-infor.png") left no-repeat;
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
    background: url("@{w-img}icon-app.png") 95% 5% no-repeat;
}
.ui-menu-infor-Contactslist-add{
    margin-right: 35px;
    float: right;
}
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
.ivu-date-picker,
.ivu-select{
    display: inline-block;
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
    background: url("@{w-img}icon-sele-bottom.png") 2% no-repeat;
    background-size: 12%;
}

.ui-sele-right{
    background: url("@{w-img}icon-sele-right.png") 2% no-repeat;
    background-size: 9%;
}
.ui-task-bottom{
    background: url("@{w-img}icon-sele-bottom.png") 2% no-repeat;
    background-size: 11%;
}
.ui-task-right{
    background: url("@{w-img}icon-sele-right.png") 2% no-repeat;
    background-size: 8%;
}
.ui-Contactslist-task{
    width: 100%;
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
.ui-task-lct{
    width: 80%;
    display: inline-block;
    vertical-align: middle;
    margin-left: 40px;
}
.ui-task-lct-tip{
    text-align: center;
    color: red;
}
.ui-Contactslist-tax{
    padding: 10px 20px;
    button{
        float: right;
    }
}
</style>