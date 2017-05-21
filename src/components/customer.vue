<template>
	<div class="all">
		<div class="ui-title">
			<span class="ui-title-logo ui-title-logo-service"></span>
			<p>服务</p>
		</div>
		<div class="ui-main">
			<ul class="ui-home-input">
				<li>
					<p>会计人员:</p>
					<Select v-model="model1" style="width:200px">
						<Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					</Select>
				</li>
				<li>
					<p>审账人员:</p>
					<Select v-model="model1" style="width:200px">
						<Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					</Select>
				</li>
				<li>
					<p>公司名称:</p>
					<Input v-model="value" placeholder="请输入..." style="width: 200px"></Input>
				</li>
				<li>
					<Button type="primary" size="large" @click="openMenu">统计</Button>
				</li>
			</ul>

			<div class="ui-home-table">
				<div class="ui-home-table-left">
					<Menu active-name="1">
						<Menu-group title="客户名称">
							<Menu-item name="1">
								领商致远有限公司
							</Menu-item>
							<Menu-item name="2">
								领商致远有限公司
							</Menu-item>
							<Menu-item name="3">
								领商致远有限公司
							</Menu-item>
							<Menu-item name="4">
								领商致远有限公司
							</Menu-item>
							<Menu-item name="5">
								领商致远有限公司
							</Menu-item>
							
						</Menu-group>
					</Menu>
				</div>
				<div class="ui-home-table-right">
					<Table width="10%" height="615" :columns="columns1" :data="data2"></Table>
				</div>

				<div class="ui-home-table-page">
					<div class="ui-home-table-page-left">
						<p>当前第 1 到 8 条  共  8 条</p>
					</div>
					<div class="ui-home-table-page-right">
						<Page :total="100" show-elevator></Page>
					</div>
				</div>
			</div>
		</div>
		<uimenu :menuShow='menuShow'></uimenu>
	</div>
</template>

<script>
const log = console.log;
import uimenu from 'widgets/menu.vue'
export default {
	data () {
		return {
			menuShow:false,
			cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model1: '',
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
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
				]
				
		};
	},
	components:{uimenu},
	created() {
		
	},
	methods : {
		openMenu(){
			this.menuShow = !this.menuShow;
		}
	},
}

</script>

<style lang='less' scoped>
    @import '../style/style';
.ui-home-input{
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
.ui-home-table{
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
.ui-home-table-left{
	float: left;
	width: 16%;
	height: 100%;
}
.ui-home-table-right{
	width: 82%;
	float: left;
}
.ui-home-table-page-left{
	padding: 30px 0;
	float: left;
	p{
		margin-left: 230px;
	}
}
.ui-home-table-page-right{
	padding: 20px 0;
	float: right;
}
</style>