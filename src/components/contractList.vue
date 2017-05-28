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
				<div>
					<Form :model="formItem" :label-width="80">
						<Form-item label="输入框">
							<Input v-model="formItem.input" placeholder="请输入"></Input>
						</Form-item>
						<Form-item label="是否预付">
							<Radio-group v-model="formItem.radio">
								<Radio label="yes">是</Radio>
								<Radio label="no">否</Radio>
							</Radio-group>
						</Form-item>
						<Form-item label="文本域">
							<Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
						</Form-item>
					</Form>
				</div>
			</div>
        </div>
    </div>
</template>

<script>
const log = console.log;
export default {
    data () {
        return {
            formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
        };
    },
    components:{},
    created() {
        
    },
    methods : {
        
    },
}

</script>

<style lang='less' scoped>
    @import '../styles/style.less';
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
	padding: 20px 10px;
}
</style>