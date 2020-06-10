<template>
    <div class="main-content">
        有时候想同时 (同级) 展示多个视图，而不是嵌套展示，例如创建一个布局，有 sidebar (侧导航) 和 main (主内容) 两个视图，这个时候命名视图就派上用场了。你可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口。如果 router-view 没有设置名字，那么默认为 default。
        <hr/>
        <div>点击按钮获取圆的周长和半径<button @click="handleClick">获取</button></div>
        <div>计算的圆的周长是：{{area}}</div>
        <div>计算的圆的面积是是：{{circumference}}</div>
    </div>
</template>
<script>
// import { streamV1 as v1 } from '../util'
import * as circle from '../util'
export default {
    name: 'bar',
    data: function() {
        return {
            area: '',
            circumference: ''
        }
    },
    created: function() {

    },
    mounted: function() {
        // v1()
    },
    methods: {
        handleClick: function() {
            this.area = circle.area(4)
            this.circumference = circle.circumference(4)
        }
    }
}
</script>
<style scoped>
.main-content{
    padding-left:210px;
    padding-top:30px;
    height: auto;
    border-right: 1px solid #ccc;
}
</style>