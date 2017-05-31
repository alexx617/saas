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
					<Select style="width:200px">
						<Option>123123</Option>
					</Select>
				</li>
				<li>
					<p>审账人员:</p>
					<Select style="width:200px">
						<Option>123123</Option>
					</Select>
				</li>
				<li>
					<p>公司名称:</p>
					<Input placeholder="请输入" v-model="form.name" style="width: 200px"></Input>
				</li>
				<li>
					<Button type="primary" size="large" @click="getAjax">统计</Button>
				</li>
			</ul>

			<div class="ui-home-table">
				<!--<div class="ui-home-table-left">
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
				</div>-->
				<div class="ui-home-table-right">
					<Table highlight-row width="10%" height="450" :columns="columns1" :data="content" @on-row-click="changeMenu"></Table>
				</div>

				<div class="ui-home-table-page">
					<div class="ui-home-table-page-left">
						<p>当前第 1 到 {{form.size}} 条  共  {{form.totalElements}} 条</p>
					</div>
					<div class="ui-home-table-page-right">
						<Page :total="form.totalElements" show-elevator @on-change="gopage"></Page>
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
                        title: '客户名称',
                        key: 'name'
                    },
                    {
                        title: '客户简称',
                        key: 'name'
                    },
                    {
                        title: '客户级别',
                        key: 'level'
                    },
                    {
                        title: '登记时间',
                        key: 'createDate'
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
				form:{//客户列表分页
					page:0,
					size:10,
					name:''//公司名称
				},
				content:[],//客户列表
				
		};
	},
	components:{pullbox},
	created() {
		this.SET_MENU(false);
		this.getAjax();
	},
	methods : {
		...mapActions(['SET_MENU','SET_COMPONENT']),
		changeMenu(row){
			this.SET_MENU(true);
			this.SET_COMPONENT(['customerList', row])
		},
		getAjax(){
			ajax.contractList(this.form)
			.then(rs => {
				if (rs.success) {
					this.content = rs.data.content;//客户列表
					this.form = rs.data;//客户列表分页
				} else {
					this.$tip(rs.message);
				};
			})
			.catch(error => {
				this.$tip(error);
			});
		},
		gopage(page){
			this.form.page = page-1;
			this.getAjax();
		},
		query(){

		}
	},
}

</script>

<style lang='less' scoped>
    @import '../styles/style.less';


</style>