<template>
    <div class="ui-menu">
        <!--<div class="ui-menu-bg"></div>-->
        <div class="ui-menu-box" :class="{'ui-menu-active' : changeMenu }">
            <span @click="closeMenu" class="close"></span>
            <component :is="showList"></component>
        </div>
    </div>
</template>

<script>
const log = console.log;
import customerList from '../customerList'
import contractList from '../contractList'
import { mapState, mapActions } from 'vuex'
export default {
    data() {
        return {
            showList:'contractList'
        };
    },
    components: { customerList,contractList },
    computed: mapState({
        changeMenu: state => state.doc.changeMenu,
    }),
    methods: {
        ...mapActions(['SET_MENU']),
        closeMenu() {
            this.SET_MENU(false);
        }
    },
}

</script>

<style lang='less' scoped>
@import "../../styles/style.less";
.ui-menu-box {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 45%;
    background-repeat: no-repeat;
    background-color: #f5f5f5;
    background-size: cover;
    transition: all 0.3s ease;
    z-index: 8;
    overflow: auto;
    -webkit-transform: translateX(220%) translate3d(0, 0, 0);
    box-shadow: -1px -1px 5px @blue;
}

// .ui-menu-bg{
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom:0;
//     display: block;
//     opacity: 1;
//     z-index: 5;
//     transition: opacity ease-in-out 0.38s, visibility ease-in-out 0.38s;
//     background-color: rgba(0, 0, 0, 0.01);
// }
.ui-menu-close {
    display: none;
    opacity: 0;
}

.close {
    display: inline-block;
    float: right;
    width: 30px;
    height: 30px;
    margin-right: 20px;
    margin-top: 15px;
    background: url("@{w-img}icon-close.png") center no-repeat;
    background-size: cover;
    cursor: pointer;
}

.ui-menu-active {
    transform: translateX(111%);
}
</style>