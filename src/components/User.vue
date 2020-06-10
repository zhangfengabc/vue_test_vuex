<template>
    <div>
        <!-- {{ $route.params.id }} -->
        User----------{{ $route.params.username }}------{{ $route.params.id}}
        <div class="left-menu">
            <router-link to="/user/24/profile" tag="div" class="menu-item">个人信息---profile</router-link>
            <router-link to="/user/89/posts" tag="div" class="menu-item">数据展示----posts</router-link>
            
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
        <p>{{ $route.params.id }}</p>
    </div>
</template>
<script>
export default {
    name: 'user'
}
</script>
<style scoped>
.left-menu{
    float: left;
    width:200px;
    border-right: 1px solid #666;
    padding-bottom: 50px;
}
.menu-item{
    height:35px;
    line-height: 35px;
    border-bottom: 1px dashed #ccc;
    text-align: center;
}
.content{
    padding-left: 130px;
}
.router-link-active{
    color:#0026fb;
}
</style>