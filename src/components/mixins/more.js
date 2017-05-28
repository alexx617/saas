export default {
    data() {
        return {
            showMore: {
                infor: false,
                account: false
            },
            moreString: {
                infor: '更多',
                account: '更多'
            }
        }
    },
    methods: {
        lookMore(me) {
            this.showMore[me] = !this.showMore[me];
            this.showMore[me] ? this.moreString[me] = '收起' : this.moreString[me] = '更多';
        }
    },

}