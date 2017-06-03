<template>
    <div>
        <div class="ui-menu-select">
            <div class="ui-customerAdd-msg">
				<div class="ui-customerAdd-msgBox">
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
	margin-top: 10px;
	background: #fff;
	border: 1px solid #ddd;
	padding-top: 10px;
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
</style>