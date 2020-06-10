<template>
    <div class="leftMenu">
        <ul>
            <li @click="handleClick">手机</li>
            <li @click="handleRedirect">平板</li>
            <li @click="handleAlias">电脑</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'bar',
    methods: {
        handleClick: function() {
            this.$router.push({ name: 'user', query: { id: 56 }})
        },
        handleRedirect: function() {
            this.$router.push('a')
        },
        handleAlias: function() {
            this.$router.push('b')
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