<template>
	<div class="all">
		<div class="ui-title" @click="closeMenu()">
			<span class="ui-title-logo ui-title-logo-service"></span>
			<p>合同</p>
		</div>
		<div class="ui-main">
			<ul class="ui-home-input">
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

			<div class="ui-home-table">
				<div class="ui-home-table-right">
					<Table highlight-row width="10%" height="450" :columns="columns1" :data="data2" @on-row-click="changeMenu"></Table>
				</div>

				<div class="ui-home-table-page">
					<div class="ui-home-table-page-right">
						<!--<Page :total="page.totalElements" :current="page.number" show-elevator show-total @on-change="gopage"></Page>-->
					</div>
				</div>
			</div>
		</div>
		<pullbox></pullbox>
	</div>
</template>

<script>
const log = console.log;
import pullbox from 'home-widgets/pullbox'
import ajax from 'utils/ajax'
import { mapActions } from 'vuex'

export default {
	data () {
		return {
				columns1: [
                    {
                        title: '合同编号',
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
		this.closeMenu();
	},
	methods : {
		...mapActions('homeStore', ['SET_MENU','SET_COMPONENT']),
		changeMenu(row){
			this.SET_MENU(true);
			this.SET_COMPONENT(['contractList',row])
		},
        closeMenu(){
			this.SET_MENU(false);
		},
	},
}

</script>

<style lang='less' scoped>
    @import '../../styles/style.less';

</style>