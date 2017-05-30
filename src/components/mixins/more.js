export default {
    data() {
        return {
            showMore: {
                // infor: false, //客户:基本信息=>基本信息
                // account: false, //客户:基本信息=>记账信息
                // contract: false, //客户:合同
                // task: false //客户:任务协同
            },
            moreString: {
                infor: '更多',
                account: '更多'
            }
        }
    },
    methods: {
        lookMore(me) {
            this.$set(this.showMore, me, !this.showMore[me])
            this.showMore[me] ? this.moreString[me] = '收起' : this.moreString[me] = '更多';
        }
    },
}