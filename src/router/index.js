import VueRouter from "vue-router";
import TopHeader from '../components/Header'
import LeftMenu from '../components/LeftMenu'
import MainContent from '../components/MainContent'
import User from '../components/User'
import UserProfile from '../components/UserProfile'
import UserPosts from '../components/UserPosts'
import UserAdmin from '../components/UserAdmin'
import A from '../components/A'
import B from '../components/B'

const router = new VueRouter({
    routes: [
    {
        path: '/',
        components: {
            default: TopHeader,
            a: LeftMenu,
            b: MainContent
        }
    },{
    //     path:'/foo',
    //     component: Foo
    // },{
        path: '/bar/:userId',
        name: 'bar',
        component: LeftMenu
    // },{
    //     path: '/a',
    //     redirect: '/b'
    },{
        path: '/a',
        component: A,
        alias: '/b'
    },{
        path: '/b',
        component: B
    },{
        path: '/user/:id',
        name: 'user',
        component: User,
        children: [{
            path: 'profile',
            component: UserProfile
        },{
            path: 'posts',
            component: UserPosts
        },{
            path: '',
            component: UserProfile
        }]
    },{
        path: '/user/:username/post/:post_id',
        component: User
    },{
        path: '/user-*',
        component: UserAdmin
    },
    {
        path: '*' //会匹配所有路径
        //path: '/user-*' //会匹配以`/user-`开头的任意路径
    }]
})

export default router;

//一个路径参数使用冒号：标记。当匹配到一个路由时，参数值会被设置到this.$route.params,
//可以在每个组件内使用。于是，我们可以更新User的模板，输出当前用户的ID。
























