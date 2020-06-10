<template>
  <div id="app">
    <router-view></router-view>
    <div class="content">
      <router-view name="a"></router-view>
      <router-view name="b"></router-view>
    </div>
    <!-- <router-link to="/foo" tag="p">Go to Foo</router-link><br>
    <router-link to="/bar" tag="p">Go to Bar</router-link>
    <router-link to="/user/foo" tag="p">user foo</router-link>
    <router-link to="/user/bar" tag="p">user bar</router-link>
    <router-link to="/user/even/post/123" tag="p">user even post 123</router-link>
    <router-link to="/user-admin">user admin</router-link> -->
    <!-- <router-view></router-view> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content{
  width: 1000px;
  margin: 0 auto;
  border-top:1px solid #eee;
}
p{
  color:red;
}
</style>
