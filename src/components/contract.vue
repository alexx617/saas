<template>
	<div class="all">
		<div class="ui-title">
			<span class="ui-title-logo ui-title-logo-service"></span>
			<p>合同</p>
		</div>
		<div class="ui-main">
			<ul class="ui-contractinput">
				<li>
					<p>会计人员:</p>
					<Select style="width:200px">
						<Option>123123</Option>
					</Select>
				</li>
				<li>
					<p>经手人:</p>
					<Select style="width:200px">
						<Option>123123</Option>
					</Select>
				</li>
				<li>
					<p>公司名称:</p>
					<Input placeholder="请输入" style="width: 200px"></Input>
				</li>
				<li>
					<Button type="primary" size="large">统计</Button>
				</li>
			</ul>

			<div class="ui-contracttable">
				<div class="ui-contracttable-left">
					<Menu active-name="1">
						<Menu-group title="合同编号">
							<Menu-item name="1">
								阿里巴巴集团
							</Menu-item>
							<Menu-item name="2">
								阿里巴巴集团
							</Menu-item>
							<Menu-item name="3">
								阿里巴巴集团
							</Menu-item>
							<Menu-item name="4">
								阿里巴巴集团
							</Menu-item>
							<Menu-item name="5">
								阿里巴巴集团
							</Menu-item>
						</Menu-group>
					</Menu>
				</div>
				<div class="ui-contracttable-right">
					<Table width="10%" height="615" :columns="columns1" :data="data2" @on-row-click="changeMenu"></Table>
				</div>

				<div class="ui-contracttable-page">
					<div class="ui-contracttable-page-left">
						<p>当前第 1 到 8 条  共  8 条</p>
					</div>
					<div class="ui-contracttable-page-right">
						<Page :total="100" show-elevator></Page>
					</div>
				</div>
			</div>
		</div>
		<pullbox></pullbox>
	</div>
</template>

<script>
const log = console.log;
import pullbox from 'widgets/pullbox.vue'
import ajax from '../utils/ajax.js';
import { mapActions } from 'vuex'

export default {
	data () {
		return {
				columns1: [
                    {
                        title: '客户简称',
                        key: 'name'
                    },
                    {
                        title: '客户级别',
                        key: 'age'
                    },
                    {
                        title: '登记时间',
                        key: 'address'
                    },
                    {
                        title: '企业类型',
                        key: 'address'
                    },
                    {
                        title: '行业类型',
                        key: 'address'
                    },
                    {
                        title: '所属会计',
                        key: 'address'
                    },
                    {
                        title: '审账会计',
                        key: 'address'
                    },
                    {
                        title: '客户特点',
                        key: 'address'
                    },
                    {
                        title: '联系人',
                        key: 'address'
                    },
                    {
                        title: '联系人电话',
                        key: 'address'
                    }
                ],
				data2: [
                    {
                        name: '王小明1',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '王小明2',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
				],
				form:{
					page:0,
					paras:{},
					size:0
				}
		};
	},
	components:{pullbox},
	created() {
		this.SET_MENU(false);
		
	},
	methods : {
		...mapActions(['SET_MENU','SET_COMPONENT']),
		changeMenu(row){
			this.SET_MENU(true);
			this.SET_COMPONENT(['contractList',row])
		}
	},
}

</script>

<style lang='less' scoped>
    @import '../styles/style.less';
.ui-contractinput{
	background: #fff;
	padding: 20px 20px 58px 20px;
	p,li{
		display: inline-block;
	}
	li:not(:first-child){
		margin-left: 20px;
	}
	li:last-child{
		margin-left: 40px;
	}
}
.ui-contracttable{
	.pd(10px);
	width: 100%;
	height: 635px;
	position: absolute;
	top:60px;
	left:5px;
	ul{
		height: 100%;
	}
}

.ivu-menu{
	overflow: auto;
}
.ui-contracttable-left{
	float: left;
	width: 16%;
	height: 100%;
}
.ui-contracttable-right{
	width: 82%;
	float: left;
}
.ui-contracttable-page-left{
	padding: 30px 0;
	float: left;
	p{
		margin-left: 230px;
	}
}
.ui-contracttable-page-right{
	padding: 20px 0;
	float: right;
}
.ivu-table-wrapper{
    // margin-left: -5px;
    border-left: 1px solid @blue;
    z-index: 3;
}
</style>