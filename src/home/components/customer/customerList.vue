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
                        <customerAdd></customerAdd>
                        <!--<Button style="float:right;margin-right:20px;" type="primary">保存</Button>
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
                        </ul>-->
                    </Tab-pane>


                    <Tab-pane label="联系人">
                        <customerContacts></customerContacts>
                    </Tab-pane>


                    <Tab-pane label="记账/报税">
                        <div class="ui-Contactslist-tax">
                            <Button type="primary">进账簿</Button>
                            <div class="clear"></div>
                            <h3>票据-记账</h3>
                        </div>
                    </Tab-pane>


                    <Tab-pane label="缴费记录">
                        <customerPay></customerPay>
                    </Tab-pane>


                    <Tab-pane label="合同">
                        <customerContract></customerContract>
                    </Tab-pane>


                    <Tab-pane label="任务协同">
                        <customerMission></customerMission>
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
import moreMixin from 'home-mixins/more';
import customerAdd from './customerAdd';//基本信息
import customerPay from './customerPay';//缴费记录
import customerContacts from './customerContacts';//联系人
import customerMission from './customerMission';//任务协同
import customerContract from './customerContract';//合同
import ajax from 'utils/ajax';
import { mapState } from 'vuex'
export default {
    mixins: [moreMixin],
    data () {
        return {};
    },
    components:{customerAdd,customerContract,customerContacts,customerPay,customerMission},
    computed: mapState('homeStore', {
        list: state => state.listData.data,
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
@import '../../../styles/style.less';
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
.ui-Contactslist-tax{
    padding: 10px 20px;
    button{
        float: right;
    }
}

</style>