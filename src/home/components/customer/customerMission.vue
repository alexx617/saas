<template>
    <div>
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

</style>