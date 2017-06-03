<template>
	<div class="all">
		<div class="ui-title">
			<span class="ui-title-logo ui-title-logo-expenses"></span>
			<p>费用总览</p>
		</div>
		<div class="ui-main">
			<ul class="ui-home-input">
				<li>
					<p>会计人员:</p>
					<Select style="width:120px">
						<Option>123123</Option>
					</Select>
				</li>
				<li>
					<p>审账人员:</p>
					<Select style="width:120px">
						<Option>123123</Option>
					</Select>
				</li>
				<li>
					<p>费用类别:</p>
					<Select style="width:120px">
						<Option>123123</Option>
					</Select>
				</li>
				<li>
					<p>公司名称:</p>
					<Input placeholder="请输入" style="width: 150px"></Input>
				</li>
				<li class="ui-exp-time">
					<p>时间范围:</p>
					<Date-picker type="date" placeholder="选择日期" style="width: 110px"></Date-picker>
					至
					<Date-picker type="date" placeholder="选择日期" style="width: 110px"></Date-picker>
				</li>
				<Button type="primary" size="large">统计</Button>
			</ul>

			<div class="ui-home-table">
				<div class="ui-home-table-right">
					<Table highlight-row width='100px' height="450" :columns="columns1" :data="data2" @on-row-click="changeMenu"></Table>
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
		<pullbox></pullbox>
	</div>
</template>

<script>
const log = console.log;
import pullbox from 'widgets/pullbox'
import { mapActions } from 'vuex'

export default {
	data () {
		return {
				columns1: [
                    {
                        title: '客户名称',
                        key: 'name'
                    },
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
				]
				
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
			this.SET_COMPONENT(['expensesList',row])
		}
	},
}

</script>

<style lang='less' scoped>
    @import '../styles/style.less';
.ui-exp-time{
	margin-right: 30px;
	p{
		display: inline-block;
	}
}
.ivu-date-picker{
	display: inline-block;
}
</style>