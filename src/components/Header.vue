<template>
    <div class="container">
       <div class="main">
           <div class="logo"></div>
            <!-- <ul>
                <li @click="handleClick">编程式导航</li>
            </ul> -->
        </div>
    </div>
</template>
<script>
export default {
    name: 'foo',
    methods: {
        handleClick: function() {
            // this.$router.push('bar')
            //this.$router.push({ path: 'bar' })
            //this.$router.push({ name: 'bar', params: { userId: 123 }})
            //this.$router.push({ path: 'register', query: { plan: 'private'}})
            //this.$router.push({ path: '/bar', replace: true})
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.container{
    width: 100%;
    height:150px;
    background: #eee;
}
.main{
    margin: 0 auto;
    width: 1000px;
}
.logo{
    float:left;
    width:100px;
    height: 150px;
    background: url(../assets/logo.png) no-repeat left center;
    background-size: 100px auto;
}
</style>