<template>
	<div>
		<div class="ui-menu-select">
				
			<div class="ui-customerAdd-msg">
				<Form ref="formItem" :model="formItem" :rules="ruleValidate" :label-width="80">
					
					<p class="ui-customerAdd-icon0">基本信息:</p>
					<div class="ui-customerAdd-btn-right">
						<template v-if="list==='add'">
							<div class="ui-customerAdd-save" @click="reset('formItem')">
								<Button type="primary">重置</Button>
							</div>
						</template>
						<div class="ui-customerAdd-save" @click="save('formItem')">
							<Button :loading="loadingSave" type="primary">保存</Button>
						</div>
					</div>
					<div class="clear"></div>
					<div class="ui-customerAdd-msgBox">
						<Form-item label="客户名称:" prop="name">
							<Input style="width: 200px" :icon="icon.name" @on-change="clearInput('name')" @on-click="formItem.name='',icon.name=''" v-model="formItem.name" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="客户编号:" prop="no">
							<Input maxlength="8" style="width: 200px" :icon="icon.no" @on-change="clearInput('no')" @on-click="formItem.no='',icon.no=''" v-model="formItem.no" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="客户等级:" prop="level">
							<Select v-model="formItem.level" clearable style="width:200px">
								<Option v-for="item in selectList.level" :value="item.code" :key="item">{{ item.name }}</Option>
							</Select>
						</Form-item>
						<Form-item label="注册类型:" prop="zclx">
							<Select v-model="formItem.zclx" clearable style="width:200px">
								<Option v-for="item in selectList.zclx" :value="item.code" :key="item">{{ item.name }}</Option>
							</Select>
						</Form-item>
						<Form-item label="创建时间:">
							<Input style="width: 200px" disabled v-model="formItem.createDate"></Input>
						</Form-item>
						<Form-item label="客户来源:" prop="source">
							<Select v-model="formItem.source" clearable style="width:200px">
								<Option v-for="item in selectList.source" :value="item.code" :key="item">{{ item.name }}</Option>
							</Select>
						</Form-item>
						<Form-item label="客户行业:" prop="industry">
							<Select v-model="formItem.industry" clearable style="width:200px">
								<Option v-for="item in selectList.industry" :value="item.code" :key="item">{{ item.name }}</Option>
							</Select>
						</Form-item>
	
						<Form-item label="客户状态:" prop="status">
							<Radio-group v-model="formItem.status">
								<Radio label="1">签约</Radio>
								<Radio label="-1">解约</Radio>
							</Radio-group>
						</Form-item>
	
						<Form-item style="width: 100%" label="客户特征:" prop="feature">
							<Input style="width: 92%" v-model="formItem.feature" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入"></Input>
						</Form-item>
					</div>
	
					<p class="ui-customerAdd-icon0">取票信息:</p>
					<div class="ui-customerAdd-msgBox">
						<Form-item label="取票方式:" prop="fetchType">
							<Select v-model="formItem.fetchType" clearable style="width:200px">
								<Option v-for="item in selectList.fetchType" :value="item.code" :key="item">{{ item.name }}</Option>
							</Select>
						</Form-item>
						<Form-item label="取票人:" prop="fetchPerson">
							<Input style="width: 200px" :icon="icon.fetchPerson" @on-change="clearInput('fetchPerson')" @on-click="formItem.fetchPerson='',icon.fetchPerson=''" v-model="formItem.fetchPerson" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="取票人电话:" prop="fetchTel">
							<Input style="width: 200px" :icon="icon.fetchTel" @on-change="clearInput('fetchTel')" @on-click="formItem.fetchTel='',icon.fetchTel=''" v-model="formItem.fetchTel" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="省:" prop="fetchProvince">
							<Select @on-change="getCity" v-model="formItem.fetchProvince" clearable style="width:200px">
								<Option v-for="item,i in linkageCity.provinceList" :value="i" :key="item">{{item}}</Option>
							</Select>
						</Form-item>
						<Form-item label="市:" prop="fetchCity">
							<Select @on-change="getDistrict" v-model="formItem.fetchCity" clearable style="width:200px">
								<Option v-for="item,i in linkageCity.cityList" :value="i" :key="item">{{item}}</Option>
							</Select>
						</Form-item>
						<Form-item label="区:" prop="fetchArea">
							<Select v-model="formItem.fetchArea" clearable style="width:200px">
								<Option v-for="item,i in linkageCity.districtList" :value="i" :key="item">{{item}}</Option>
							</Select>
						</Form-item>
	
						<Form-item style="width: 100%" label="街道:" prop="fetchAddress">
							<Input style="width: 92%" v-model="formItem.fetchAddress" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入"></Input>
						</Form-item>
					</div>
	
					<p class="ui-customerAdd-icon0">工商信息:</p>
					<div class="ui-customerAdd-msgBox">
						<Form-item label="工商编号:" prop="gsbh">
							<Input style="width: 200px" :icon="icon.gsbh" @on-change="clearInput('gsbh')" @on-click="formItem.gsbh='',icon.gsbh=''" v-model="formItem.gsbh" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="注册资本:" prop="zczb">
							<Input style="width: 200px" :icon="icon.zczb" @on-change="clearInput('zczb')" @on-click="formItem.zczb='',icon.zczb=''" v-model="formItem.zczb" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="经营期限:" prop="rjqx">
							<Input style="width: 200px" :icon="icon.rjqx" @on-change="clearInput('rjqx')" @on-click="formItem.rjqx='',icon.rjqx=''" v-model="formItem.rjqx" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="成立时间:" prop="clsj">
							<Input style="width: 200px" :icon="icon.clsj" @on-change="clearInput('clsj')" @on-click="formItem.clsj='',icon.clsj=''" v-model="formItem.clsj" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="登记机关:" prop="djjg">
							<Select v-model="formItem.djjg" clearable style="width:200px">
								<Option v-for="item in selectList.registerJG" :value="item.code" :key="item">{{ item.name }}</Option>
							</Select>
						</Form-item>
						<Form-item label="组织机构编码:" prop="zzjg">
							<Input style="width: 200px" :icon="icon.zzjg" @on-change="clearInput('zzjg')" @on-click="formItem.zzjg='',icon.zzjg=''" v-model="formItem.zzjg" placeholder="请输入"></Input>
						</Form-item>
	
						<Form-item style="width: 100%" label="经营范围:" prop="jyfw">
							<Input style="width: 92%" v-model="formItem.jyfw" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入"></Input>
						</Form-item>
	
						<Form-item style="width: 100%" label="注册地址:" prop="zcdz">
							<Input style="width: 92%" :icon="icon.zcdz" @on-change="clearInput('zcdz')" @on-click="formItem.zcdz='',icon.zcdz=''" v-model="formItem.zcdz" placeholder="请输入"></Input>
						</Form-item>
					</div>
	
					<!--<p style="display:inline-block" class="ui-customerAdd-icon0">股东信息:</p>
					<div class="ui-customerAdd-msgBox ui-customerAdd-Share">
						<Button style="float:right;margin-right:20px;margin-bottom:10px;" type="primary" @click="addShare">添加</Button>
						<div class="clear"></div>
						<template v-for="item,i in formItem.partners">
							<div>
								<Form-item style="width:30%">
									<Input style="width: 170px" v-model="item.name" placeholder="股东姓名"></Input>
								</Form-item>
								<Form-item style="width:30%">
									<Input style="width: 170px" v-model="item.ratio" placeholder="出资比例"></Input>
								</Form-item>
								<Form-item style="width:31%">
									<Select placeholder='股东类型' clearable style="width:190px">
										<Option v-for="item in selecttype" :value="item.code" :key="item">{{ item.name }}</Option>
									</Select>
								</Form-item>
								<div class="ui-customerAdd-del" @click="delShare(i)">
									<Icon :type="shareIcon"></Icon>
								</div>
							</div>
						</template>
					</div>-->
	
					<p class="ui-customerAdd-icon0">银行信息:</p>
					<div class="ui-customerAdd-msgBox">
						<Form-item label="银行开户许可证明:" prop="bankProve">
							<Input style="width: 200px" :icon="icon.bankProve" @on-change="clearInput('bankProve')" @on-click="formItem.bankProve='',icon.bankProve=''" v-model="formItem.bankProve" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="银行开户行:" prop="bankOpen">
							<Select v-model="formItem.bankOpen" clearable style="width:200px">
								<Option v-for="item in selectList.bank" :value="item.code" :key="item">{{ item.name }}</Option>
							</Select>
						</Form-item>
						<Form-item label="银行账号:" prop="bankNo">
							<Input style="width: 200px" :icon="icon.bankNo" @on-change="clearInput('bankNo')" @on-click="formItem.bankNo='',icon.bankNo=''" v-model="formItem.bankNo" placeholder="请输入"></Input>
						</Form-item>
					</div>
	
					<p class="ui-customerAdd-icon0">税务信息:</p>
					<div class="ui-customerAdd-msgBox">
						<Form-item label="税务登记证号码:" prop="taxNo">
							<Input style="width: 200px" :icon="icon.taxNo" @on-change="clearInput('taxNo')" @on-click="formItem.taxNo='',icon.taxNo=''" v-model="formItem.taxNo" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="所属国税:" prop="stateTax">
							<Select v-model="formItem.stateTax" clearable style="width:200px">
								<Option v-for="item in selectList.stateTax" :value="item.code" :key="item">{{ item.name }}</Option>
							</Select>
						</Form-item>
						<Form-item label="所属地税:" prop="localTax">
							<Select v-model="formItem.localTax" clearable style="width:200px">
								<Option v-for="item in selectList.localTax" :value="item.code" :key="item">{{ item.name }}</Option>
							</Select>
						</Form-item>
						<Form-item label="个税密码:" prop="personTaxPassword">
							<Input style="width: 200px" :icon="icon.personTaxPassword" @on-change="clearInput('personTaxPassword')" @on-click="formItem.personTaxPassword='',icon.personTaxPassword=''" v-model="formItem.personTaxPassword" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="国税下载密码:" prop="stateTaxPassword">
							<Input style="width: 200px" :icon="icon.stateTaxPassword" @on-change="clearInput('stateTaxPassword')" @on-click="formItem.stateTaxPassword='',icon.stateTaxPassword=''" v-model="formItem.stateTaxPassword" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="综合申报密码:" prop="declarePassword">
							<Input style="width: 200px" :icon="icon.declarePassword" @on-change="clearInput('declarePassword')" @on-click="formItem.declarePassword='',icon.declarePassword=''" v-model="formItem.declarePassword" placeholder="请输入"></Input>
						</Form-item>
					</div>
	
				</Form>

				<div class="ui-customerAdd-btn-right">
					<template v-if="list==='add'">
						<div class="ui-customerAdd-save" @click="reset('formItem')">
							<Button type="primary">重置</Button>
						</div>
					</template>
					<div class="ui-customerAdd-save" @click="save('formItem')">
						<Button :loading="loadingSave" type="primary">保存</Button>
					</div>
				</div>
				
			</div>
	
		</div>
	</div>
</template>

<script>
const log = console.log;
import dateFormat from 'dateFormat'
import ajax from 'utils/ajax'
import city from 'utils/city'
import rule from 'utils/rule'
import homeRule from 'home-utils/homeRule'
import { mapState,mapActions } from 'vuex'

export default {
	data() {
		return {
			formItem: {
				//基本信息
				name: '',
				no: '',
				level: '',
				zclx: '',
				createDate: '',
				source: '',
				industry: '',
				feature: '',
				status: '1',
				//取票方式
				fetchPerson: '',
				fetchType: '',
				fetchTel: '',
				fetchProvince: '',
				fetchCity: '',
				fetchArea: '',
				fetchAddress: '',
				//工商信息
				gsbh: '',
				zczb: '',
				rjqx: '',
				clsj: '',
				djjg: '',
				zzjg: '',
				jyfw: '',
				zcdz: '',
				//银行信息
				bankProve: '',
				bankOpen: '',
				bankNo: '',
				//税务信息
				taxNo: '',
				stateTax: '',
				localTax: '',
				personTaxPassword: '',
				stateTaxPassword: '',
				declarePassword: '',
				// 股东信息
				// partners: [
				// 	{
				// 		name: '',
				// 		ratio: '',
				// 		type: ''
				// 	}
				// ]
			},
			icon: {},//清除input
			shareIcon: '',//股东删除icon
			selectList:{},//存所有返回的select
			selecttype:[{//股东下拉框
				"code": "1",
				"name": "法人"
			},{
				"code": "2",
				"name": "监视"
			},{
				"code": "3",
				"name": "普通"
			}],
			linkageCity:{//省市联动
				provinceList:null,
				cityList:[]
			},
			ruleValidate :{},//验证规则
			loadingSave:false//保存按钮置灰
		};
	},
	computed: mapState('homeStore', {
        list: state => state.listData.data, //判断从哪个位置进入基本信息页
    }),
	created() {
		let now = new Date();
		this.formItem.createDate = dateFormat(now, "isoDate");//创建时间
		this.ruleValidate = rule.chk(homeRule.customerAdd_list);//验证规则
		this.loadingSave = false;
		//init时获取所有select
		ajax.customer_Add()
			.then(rs => {
				if (rs.success) {
					this.selectList = rs.data;
				} else {
					this.$tip(rs.message);
				};
			})
			.catch(error => {
				this.$tip('请稍候重试');
			});

		if(this.list!=='add'){
			//init时获取所有基本信息回显
			ajax.customer_Basic(this.list)
			.then(rs => {
				if (rs.success) {
					this.formItem = rs.data;
				} else {
					this.$tip(rs.message);
				};
			})
			.catch(error => {
				this.$tip('请稍候重试');
			});
		}
	},
	mounted(){
		setTimeout(()=>{
			this.linkageCity.provinceList = city.provinceList;//省市区列表
		},0)
	},
	components: {},
	methods: {
        ...mapActions('homeStore', ['SET_MENU','SET_COMPONENT','GET_CUSTOMER']),
		//清除输入框
		clearInput(me) {
			this.formItem[me] == '' ? this.icon[me] = '' : this.icon[me] = 'close-circled'
		},
		//新增股东
		addShare() {
			let shareList = {
				name: '',
				ratio: '',
				type: ''
			}
			this.formItem.partners.push(shareList);
			if (this.formItem.partners.length > 1) {
				this.shareIcon = 'minus-circled'
			}
		},
		//删除股东
		delShare(me) {
			if (this.formItem.partners.length > 1) {
				this.formItem.partners.splice(me, 1);
				if (this.formItem.partners.length == 1) {
					this.shareIcon = '';
				}
			}
		},
		//省市区联动(市)
		getCity(row){
			this.linkageCity.cityList = [];
			this.linkageCity.cityList = city.cityList[row];
		},
		//省市区联动(区)
		getDistrict(row){
			this.linkageCity.districtList = [];
			this.linkageCity.districtList = city.districtList[row];
		},
		//输完所有信息后保存
		save(name){
			if(this.loadingSave == true) return;
            this.$refs[name].validate(valid=>{
				if (valid==false) return
				this.loadingSave = true;//验证完成后保存按钮置灰
				ajax.customer_AddSave(this.formItem)
				.then(rs=>{
					if (rs.success) {
						this.loadingSave = false;
						this.$true('保存成功!');
						this.SET_MENU(false);
            			this.SET_COMPONENT([null,null]);
						this.GET_CUSTOMER();
					} else {
						this.$tip(rs.message);
					};
				})
				.catch(error => {
					this.loadingSave = false;
					this.$tip('请稍候重试');
				});
            })
		},
		reset(name){
			if(this.loadingSave == true) return;//保存时重置不可点击
			this.$refs[name].resetFields();
		}
	}
}

</script>

<style lang='less' scoped>
	@import '../../../../styles/style';
.ui-menu-title {
	padding: 20px 10px;
	border-bottom: 1px solid #dddddd;
	p {
		display: inline-block;
		font-size: 18px;
		font-weight: bold;
	}
	>ul {
		display: inline-block;
		float: right;
	}
	>li {
		display: inline-block;
		float: right;
	}
	ul {
		margin-right: 20px;
	}
	>li {
		padding: 5px 20px;
		cursor: pointer;
		margin: 0 10px;
	}
	.ui-menu-title-icon-preview {
		background: url("@{c-img}icon-preview.png") left no-repeat;
	}
	.ui-menu-title-icon-print {
		background: url("@{c-img}icon-print.png") left no-repeat;
	}
	.ui-menu-title-icon-output {
		background: url("@{c-img}icon-output.png") left no-repeat;
	}
}

.ui-customerAdd-msg {
	padding: 10px;
}

.ui-customerAdd-msgBox {
	margin-bottom: 20px;
	background: #fff;
	border: 1px solid #ddd;
	padding-top: 20px;
}

.ivu-form-item {
	display: inline-block;
	width: 49%;
}

.ui-customerAdd-transfer,
.ui-customerAdd-collBox {
	width: 97%;
	margin: 0 auto;
	padding: 10px;
	background: #fff;
	border-bottom: 1px solid #dddddd;
}

.ui-customerAdd-coll {
	margin-bottom: 20px;
	p {
		margin-left: 10px;
		padding: 10px 0;
	}
	button {
		float: right;
		margin-bottom: 10px;
	}
	table {
		table-layout: fixed;
		width: 100%;
		border: 1px solid #dddddd;
		th {
			padding: 10px 0;
			background: #f7f7f7;
		}
		td {
			padding: 10px;
		}
	}
}

.ui-customerAdd-coll-del {
	text-align: center;
	color: red;
	cursor: pointer;
}

.ui-customerAdd-transfer {
	background: #F5F5F5;
	border-bottom: none;
}

.ui-customerAdd-transfer-left,
.ui-customerAdd-transfer-right {
	width: 44%;
	display: inline-block;
	background: #fff;
	padding: 10px;
	vertical-align: top;
	min-height: 200px;
	p {
		padding: 5px 0;
		border-bottom: 2px solid #F5F5F5;
	}
}

.ui-customerAdd-transfer-go {
	width: 10%;
	display: inline-block;
	min-height: 200px;
	background: url("@{c-img}icon-tree.png") center no-repeat;
}

.ui-customerAdd-icon0 {
	background: url("@{c-img}icon-infor.png") 2% no-repeat;
	text-indent: 40px;
	padding: 10px;
	width: 60%;
	display: inline-block;
}

.ui-customerAdd-save {
	margin-right: 30px;
	margin-bottom: 10px;
	text-align: right;
	display: inline-block;
}

.ui-customerAdd-del {
	display: inline-block;
	vertical-align: middle;
	width: 30px;
	padding-top: 7px;
	text-align: center;
	i {
		font-size: 20px;
	}
}
.ui-customerAdd-btn-right{
	float: right;
}
</style>