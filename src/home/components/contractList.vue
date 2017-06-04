<template>
    <div>
        <div class="ui-menu-select">
            <div class="ui-menu-title">
                <p>新建合同</p>
                <ul>
                    <li class="ui-menu-title-icon-output">生成合同</li>
                    <li class="ui-menu-title-icon-print">打印合同</li>
                    <li class="ui-menu-title-icon-preview">合同预览</li>
                </ul>
            </div>
            <div class="ui-contractList-msg">
				<p>合同信息</p>
				<div class="ui-contractList-msgBox">
					<Form :model="formItem" :label-width="80">
						<Form-item label="合同客户:">
							<Input style="width: 200px" :icon="icon.input" @on-change="clearInput('input')" @on-click="formItem.input='',icon.input=''" v-model="formItem.input" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="业务类型:">
							<Input style="width: 200px" :icon="icon.input2" @on-change="clearInput('input2')" @on-click="formItem.input2='',icon.input2=''" v-model="formItem.input2" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="经手人:">
							<Input style="width: 200px" :icon="icon.input3" @on-change="clearInput('input3')" @on-click="formItem.input3='',icon.input3=''"   v-model="formItem.input3" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="提成金额:">
							<Input style="width: 200px" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="介绍人:">
							<Input style="width: 200px" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="支付周期:">
							<Input style="width: 200px" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="合同号:">
							<Input style="width: 200px" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="服务费:">
							<Input style="width: 200px" placeholder="请输入"></Input>
						</Form-item>
						
						<Form-item label="是否预付">
							<Radio-group v-model="formItem.radio">
								<Radio label="yes">是</Radio>
								<Radio label="no">否</Radio>
							</Radio-group>
						</Form-item>
						<Form-item label="支付金额:">
							<Input style="width: 200px" placeholder="请输入"></Input>
						</Form-item>
						<Form-item style="width: 100%" label="备注:">
							<Input style="width: 98%"  v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入"></Input>
						</Form-item>
					</Form>
				</div>
			</div>
			<div class="ui-contractList-transfer">
				<div class="ui-contractList-transfer-left">
					<p>选择项目</p>
					<Tree :data="baseData" show-checkbox></Tree>
				</div>
				<div class="ui-contractList-transfer-go"></div>
				<div class="ui-contractList-transfer-right">
					<p>已选服务</p>
				</div>
			</div>
			<div class="ui-contractList-coll">
				<p>代收信息</p>
				<div class="ui-contractList-collBox">
					<Button type="primary">添加</Button>
					<table>
						<tr>
							<th>费用名称</th>
							<th>费用金额</th>
							<th>应收日期</th>
							<th>收款频率</th>
							<th>操作</th>
						</tr>
						<tr>
							<td>
								<Select>
									<Option>123123123</Option>
								</Select>
							</td>
							<td>
								<Input placeholder="请输入"></Input>
							</td>
							<td>
								<Date-picker type="date" placeholder="选择日期"></Date-picker>
							</td>
							<td>
								<Select>
									<Option>123123123</Option>
								</Select>
							</td>
							<td class="ui-contractList-coll-del">
								<p>删除</p>
							</td>
						</tr>
					</table>
				</div>
			</div>
        </div>
    </div>
</template>

<script>
const log = console.log;
import { mapState } from 'vuex'
export default {
    data () {
        return {
            formItem: {
				input: '',
				input2: '',
				input3: '',
				radio: 'yes',
				textarea: ''
			},
			icon:{},
			baseData: [{
				expand: true,
				title: '法人变更',
				children: [{
					title: '地址变更',
					expand: true,
					disabled: false
				}]
			}]
        };
    },
    components:{},
    computed: mapState('homeStore', {
        list: state => state.listData.data,
    }),
    methods : {
		clearInput(me){
			this.formItem[me]==''?this.icon[me]='':this.icon[me]='close-circled'
		}
	}
}

</script>

<style lang='less' scoped>
    @import '../../styles/style.less';
.ui-menu-title{
    padding:20px 10px;
	border-bottom: 1px solid #dddddd;
    p{
        display: inline-block;
        font-size: 18px;
        font-weight: bold;
    }
    ul,li{
        display: inline-block;
		float: right;
    }
	ul{
		margin-right: 20px;
	}
	li{
		padding: 5px 20px;
		cursor: pointer;
		margin: 0 10px;
	}
	.ui-menu-title-icon-preview{
		background: url("@{img}icon-preview.png") left no-repeat;
	}
	.ui-menu-title-icon-print{
		background: url("@{img}icon-print.png") left no-repeat;
	}
	.ui-menu-title-icon-output{
		background: url("@{img}icon-output.png") left no-repeat;
	}
}
.ui-contractList-msg{
	padding: 10px;
}
.ui-contractList-msgBox{
	margin-top: 10px;
	background: #fff;
	border: 1px solid #ddd;
	padding-top: 10px;
}
.ivu-form-item{
	display: inline-block;
	width: 49%;
}
.ui-contractList-transfer,
.ui-contractList-collBox{
	width: 97%;
	margin: 0 auto;
	padding: 10px;
	background: #fff;
	border-bottom: 1px solid #dddddd;
}
.ui-contractList-coll{
	margin-bottom: 20px;
	p{
		margin-left: 10px;
		padding: 10px 0;
	}
	button{
		float: right;
		margin-bottom: 10px;
	}
	table{
		table-layout: fixed;
        width: 100%;
		border: 1px solid #dddddd;
		th{
			padding: 10px 0;
			background: #f7f7f7;
		}
		td{
			padding: 10px;
		}
	}
}
.ui-contractList-coll-del{
	text-align: center;
	color: red;
	cursor: pointer;
}
.ui-contractList-transfer{
	background: #F5F5F5;
	border-bottom: none;
}
.ui-contractList-transfer-left,
.ui-contractList-transfer-right{
	width: 44%;
	display: inline-block;
	background: #fff;
	padding: 10px;
	vertical-align: top;
	min-height: 200px;
	p{
		padding: 5px 0;
		border-bottom: 2px solid #F5F5F5;
	}
}
.ui-contractList-transfer-go{
	width: 10%;
	display: inline-block;
	min-height: 200px;
	background: url("@{img}icon-tree.png") center no-repeat;
}

</style>