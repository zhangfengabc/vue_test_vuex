<template>
    <div class="leftMenu">
        <ul>
            <li @click="handleClick">手机</li>
            <li @click="handleRedirect">平板</li>
            <li @click="handleAlias">电脑</li>
        </ul>
        <p>{{firstName}}----{{lastName}}-----{{year}}</p>
        <p>
            <button @click="btn1">按钮1</button>
            <button @click="btn2">按钮2</button>
        </p>
    </div>
</template>
<script>
// import { firstName, lastName, year } from '../js/a'
import { firstName as fN, lastName as lN, year, stream1, stream2 } from '../js/a'
export default {
    name: 'bar',
    data: () => {
        return {
            firstName: fN ,
            lastName: lN,
            year: year
        }
    },
    methods: {
        handleClick: function() {
            this.$router.push({ name: 'user', query: { id: 56 }})
        },
        handleRedirect: function() {
            this.$router.push('a')
        },
        handleAlias: function() {
            this.$router.push('b')
        },
        btn1: () => {
            stream1()
            class Point {
                constructor(x, y) {
                    this.x = x;
                    this.y = y;
                }
                toString() {
                    return '(' + this.x + this.y + ')'
                }
            }
            new Point()
        },
        btn2: () => {
            stream2()
        }
    }
}
</script>
<style scoped>
.leftMenu{
    width:200px;
    height: auto;
    float:left;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
}
.leftMenu ul{
    width:200px;
    height: auto;
    float:left;
    padding: 0;
}
.leftMenu ul li{
    width:200px;
    height: 36px;
    line-height:36px;
    text-align: center;
    float:left;
    border-bottom: 1px solid #ccc;
    list-style-type: none;
}
</style>