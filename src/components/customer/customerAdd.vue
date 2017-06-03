<template>
    <div>
        <div class="ui-menu-select">
            <div class="ui-customerAdd-msg">
				<p class="ui-customerAdd-icon0">基本信息:</p>
				<div class="ui-customerAdd-msgBox">
					<Form :model="formItem" :label-width="80">
						<Form-item label="客户名称:">
							<Input style="width: 200px" :icon="icon.input" @on-change="clearInput('input')" @on-click="formItem.input='',icon.input=''" v-model="formItem.input" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="客户编号:">
							<Input style="width: 200px" :icon="icon.input2" @on-change="clearInput('input2')" @on-click="formItem.input2='',icon.input2=''" v-model="formItem.input2" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="客户等级:">
							<Select clearable style="width:200px">
								<Option>123123</Option>
							</Select>
						</Form-item>
						<Form-item label="注册类型:">
							<Select clearable style="width:200px">
								<Option>123123</Option>
							</Select>
						</Form-item>
						<Form-item label="创建时间:">
							<Date-picker type="date" style="width:200px" placeholder="选择日期"></Date-picker>
						</Form-item>
						<Form-item label="客户来源:">
							<Select clearable style="width:200px">
								<Option>123123</Option>
							</Select>
						</Form-item>
						<Form-item label="客户行业:">
							<Select clearable style="width:200px">
								<Option>123123</Option>
							</Select>
						</Form-item>
						
						<Form-item label="客户状态:">
							<Radio-group v-model="formItem.radio">
								<Radio label="yes">签约</Radio>
								<Radio label="no">解约</Radio>
							</Radio-group>
						</Form-item>

						<Form-item style="width: 100%" label="客户特征:">
							<Input style="width: 90%"  v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入"></Input>
						</Form-item>
					</Form>
				</div>


				<p class="ui-customerAdd-icon0">取票信息:</p>
				<div class="ui-customerAdd-msgBox">
					<Form :model="formItem" :label-width="80">
						<Form-item label="取票人:">
							<Input style="width: 200px" :icon="icon.input" @on-change="clearInput('input')" @on-click="formItem.input='',icon.input=''" v-model="formItem.input" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="取票人电话:">
							<Input style="width: 200px" :icon="icon.input2" @on-change="clearInput('input2')" @on-click="formItem.input2='',icon.input2=''" v-model="formItem.input2" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="取票方式:">
							<Select clearable style="width:200px">
								<Option>123123</Option>
							</Select>
						</Form-item>
						<Form-item label="省:">
							<Select clearable style="width:200px">
								<Option>123123</Option>
							</Select>
						</Form-item>
						<Form-item label="市:">
							<Select clearable style="width:200px">
								<Option>123123</Option>
							</Select>
						</Form-item>
						<Form-item label="区:">
							<Select clearable style="width:200px">
								<Option>123123</Option>
							</Select>
						</Form-item>

						<Form-item style="width: 100%" label="街道:">
							<Input style="width: 90%"  v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入"></Input>
						</Form-item>
					</Form>
				</div>


				<p class="ui-customerAdd-icon0">工商信息:</p>
				<div class="ui-customerAdd-msgBox">
					<Form :model="formItem" :label-width="80">
						<Form-item label="工商编号:">
							<Input style="width: 200px" :icon="icon.input" @on-change="clearInput('input')" @on-click="formItem.input='',icon.input=''" v-model="formItem.input" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="注册资本:">
							<Input style="width: 200px" :icon="icon.input2" @on-change="clearInput('input2')" @on-click="formItem.input2='',icon.input2=''" v-model="formItem.input2" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="经营期限:">
							<Input style="width: 200px" :icon="icon.input" @on-change="clearInput('input')" @on-click="formItem.input='',icon.input=''" v-model="formItem.input" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="成立时间:">
							<Input style="width: 200px" :icon="icon.input" @on-change="clearInput('input')" @on-click="formItem.input='',icon.input=''" v-model="formItem.input" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="登记机关:">
							<Select clearable style="width:200px">
								<Option>123123</Option>
							</Select>
						</Form-item>
						<Form-item label="组织机构编码:">
							<Input style="width: 200px" :icon="icon.input" @on-change="clearInput('input')" @on-click="formItem.input='',icon.input=''" v-model="formItem.input" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="经营范围:">
							<Input style="width: 90%"  v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入"></Input>
						</Form-item>

						<Form-item style="width: 100%" label="注册地址:">
							<Input style="width: 200px" :icon="icon.input" @on-change="clearInput('input')" @on-click="formItem.input='',icon.input=''" v-model="formItem.input" placeholder="请输入"></Input>
						</Form-item>
					</Form>
				</div>


				<p class="ui-customerAdd-icon0">股东信息:</p>
				<div class="ui-customerAdd-msgBox">
					<Form :model="formItem" :label-width="80">
						<Form-item label="股东姓名:">
							<Input style="width: 200px" :icon="icon.input" @on-change="clearInput('input')" @on-click="formItem.input='',icon.input=''" v-model="formItem.input" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="银行开户行:">
							<Radio-group v-model="formItem.radio">
								<Radio label="1">女</Radio>
								<Radio label="0">男</Radio>
							</Radio-group>
						</Form-item>
						<Form-item label="身份证号码:">
							<Input style="width: 200px" :icon="icon.input" @on-change="clearInput('input')" @on-click="formItem.input='',icon.input=''" v-model="formItem.input" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="出资比例:">
							<Input style="width: 200px" :icon="icon.input" @on-change="clearInput('input')" @on-click="formItem.input='',icon.input=''" v-model="formItem.input" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="股东类型:">
							<Select clearable style="width:200px">
								<Option>123123</Option>
							</Select>
						</Form-item>
						<Form-item label="股东电话:">
							<Input style="width: 200px" :icon="icon.input" @on-change="clearInput('input')" @on-click="formItem.input='',icon.input=''" v-model="formItem.input" placeholder="请输入"></Input>
						</Form-item>
					</Form>
				</div>



				<p class="ui-customerAdd-icon0">银行信息:</p>
				<div class="ui-customerAdd-msgBox">
					<Form :model="formItem" :label-width="80">
						<Form-item label="银行开户许可证明:">
							<Input style="width: 200px" :icon="icon.input" @on-change="clearInput('input')" @on-click="formItem.input='',icon.input=''" v-model="formItem.input" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="银行开户行:">
							<Select clearable style="width:200px">
								<Option>123123</Option>
							</Select>
						</Form-item>
						<Form-item label="银行账号:">
							<Input style="width: 200px" :icon="icon.input" @on-change="clearInput('input')" @on-click="formItem.input='',icon.input=''" v-model="formItem.input" placeholder="请输入"></Input>
						</Form-item>
					</Form>
				</div>


				<p class="ui-customerAdd-icon0">税务信息:</p>
				<div class="ui-customerAdd-msgBox">
					<Form :model="formItem" :label-width="80">
						<Form-item label="税务登记证号码:">
							<Input style="width: 200px" :icon="icon.input" @on-change="clearInput('input')" @on-click="formItem.input='',icon.input=''" v-model="formItem.input" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="所属国税:">
							<Select clearable style="width:200px">
								<Option>123123</Option>
							</Select>
						</Form-item>
						<Form-item label="所属地税:">
							<Input style="width: 200px" :icon="icon.input" @on-change="clearInput('input')" @on-click="formItem.input='',icon.input=''" v-model="formItem.input" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="个税密码:">
							<Input style="width: 200px" :icon="icon.input" @on-change="clearInput('input')" @on-click="formItem.input='',icon.input=''" v-model="formItem.input" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="国税下载密码:">
							<Input style="width: 200px" :icon="icon.input" @on-change="clearInput('input')" @on-click="formItem.input='',icon.input=''" v-model="formItem.input" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="综合申报密码:">
							<Input style="width: 200px" :icon="icon.input" @on-change="clearInput('input')" @on-click="formItem.input='',icon.input=''" v-model="formItem.input" placeholder="请输入"></Input>
						</Form-item>
					</Form>
				</div>


				
				<div class="ui-customerAdd-save">
					<Button type="primary">保存</Button>
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
    computed: mapState({
        list: state => state.doc.listData.data,
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
    > ul{
        display: inline-block;
		float: right;
    }
	> li{
        display: inline-block;
		float: right;
    }
	ul{
		margin-right: 20px;
	}
	> li{
		padding: 5px 20px;
		cursor: pointer;
		margin: 0 10px;
	}
	.ui-menu-title-icon-preview{
		background: url("@{w-img}icon-preview.png") left no-repeat;
	}
	.ui-menu-title-icon-print{
		background: url("@{w-img}icon-print.png") left no-repeat;
	}
	.ui-menu-title-icon-output{
		background: url("@{w-img}icon-output.png") left no-repeat;
	}
}
.ui-customerAdd-msg{
	padding: 10px;
}
.ui-customerAdd-msgBox{
	margin-bottom: 20px;
	background: #fff;
	border: 1px solid #ddd;
	padding-top: 20px;
}
.ivu-form-item{
	display: inline-block;
	width: 49%;
}
.ui-customerAdd-transfer,
.ui-customerAdd-collBox{
	width: 97%;
	margin: 0 auto;
	padding: 10px;
	background: #fff;
	border-bottom: 1px solid #dddddd;
}
.ui-customerAdd-coll{
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
.ui-customerAdd-coll-del{
	text-align: center;
	color: red;
	cursor: pointer;
}
.ui-customerAdd-transfer{
	background: #F5F5F5;
	border-bottom: none;
}
.ui-customerAdd-transfer-left,
.ui-customerAdd-transfer-right{
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
.ui-customerAdd-transfer-go{
	width: 10%;
	display: inline-block;
	min-height: 200px;
	background: url("@{w-img}icon-tree.png") center no-repeat;
}
.ivu-form-item{
	margin-bottom: 12px;
}

.ui-customerAdd-icon0{
    background: url("@{w-img}icon-infor.png") 2% no-repeat;
	text-indent: 40px;
	padding: 10px;
	margin-top: 20px;
}
.ui-customerAdd-save{
	float: right;
	margin-bottom: 30px;
}
</style>