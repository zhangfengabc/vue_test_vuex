//安装vuex
//npm install vuex --save

//在一个模块化的打包系统中，您必须显式地通过Vue.use()来按装Vuex:
import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import store from './src/store'

Vue.use(Vuex)

//Vuex依赖Promise。 需要安装Promise
// npm install es6-promise --save



//Vuex是一个专为Vue.js应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则
//保证状态以一种可预测的方式发生变化。

//每一个Vuex应用的核心就是store(仓库)，store基本上就是一个容器，它包含着你的应用中大部分的状态（state）
//


//1.Vuex的状态存储式响应式的。当Vue组件从store中读取状态的时候，若store中的状态发生变化，那么相应的组件也会
//相应地得到高效更新。



//2.你不能直接改变store中的状态。改变store中的状态的唯一途径就是显式的提交（commit）mutation。
//  这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。



// this.$router.push({
//     path: '/xxx',
//     query: {
//       id: "2"
//     }
//   })
// },//接收参数  this.$route.query.id
// rou2: function() {
//   this.$router.push({
//     name: 'xxx',
//     params: {
//       id: '2'
//     }
//   })
// }//接收参数： this.$route.params.id 
// 注意：params传参，push里面只能时 name: 'xxx', 不能是 path: '/xxx',因为params只能用name来引入路由，
//如果这里写成了path,接收参数页面会是undefined !!

//* 另外，二者还有点区别，直白的来说query相当于get请求，页面跳转的时候，可以在地址栏看到请求参数，而params
//* 相当于post 请求，参数不会在地址栏显示
//* 注意：传参是 this.$router, 接收参数是 this.$route, 这里千万要看清了














//在Vue组件中获得Vuex状态

//由于Vuex的状态存储式响应式的，从store实例中读取状态最简单的方法就是在计算属性中返回某个状态：
// computed: {
//     count () {
//         return Store.state.count
//     }
// }


//Vuex通过 store 选项，提供了一种机制将状态从跟组件注入到每一个子组件中(Vue.use(Vuex))

//通过在根实例中注册 store 选项，该store实例会注入到跟组件下的所有的子组件中，且子组件能通过
// this.$store 访问到

//当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。
//为了解决这个问题，我们可以使用mapState辅助函数帮助我们生成计算属性，让你少按几次键：



//更改Vuex 的store中的状态唯一的方法是提交mutation. Vuex中的mutation非常类似与事件；
//每个mutation都有一个字符串的事件类型和一个回调函数。
//这个回调函数就是我们实际进行状态更改的地方，并且它回接受state作为第一个参数：






//不能直接调用一个mutation。需要以相应的type调用 store.commit方法
store.commit('increment')




//可以向store.commit传入额外的参数，即mutation 的载荷
mutations: {
    increment(state, n) {
        state.count += n
    }
}

store.commit('increment', 10)







mutations: {
    increment (state, payload) {
        state.count += payload.amount
    }
}

store.commit('increment',{
    amount: 10
})


//对象风格的提交方式
//提交mutatiion的另一种方式是直接使用包含type属性的对象：

store.commit({
    type: 'increment',
    amount: 10
})

mutations: {
    increment (state, payload) {
        state.count += payload.amount
    }
}



//Action类似与mutation,不同在于：
//-Action 提交的是mutation,而不是直接变更状态
//-Action 可以包含任意异步操作


//Action 通过store.dispatch 方法触发：

store.dispatch('increment')

//乍一眼看上去感觉多此一举，我们直接分发mutation岂不更方便？实际上并非如此
//还记得mutation必须同步执行这个限制么？ Action就不受约束！我们可以在action内部执行异步操作

actions: {
    incrementAsync ({ commit }) {
        setTimeout(() => {
            coommit('increment')
        })
    }
}

//Actions支持同样的荷载方式和对象方式进行分发

//以荷载形式分发
store.dispatch('incrementAsync', {
    amount: 10
})

//以对象形式分发
store.dispatch({
    type: 'incrementAsync',
    amount: 10
})

//来看一个更加实际的购物车实例，涉及到调用异步API和分发多重mutation

actions: {
    checkout ({ commit, state }) {
        //把当前购物车的物品备份起来
        const savedCardItems = [...state.cart.added]
        //发出结账请求，然后乐观地清空购物车
        commit(types.CHECKOUT_REQUEST)
        //购物API接受一个成功回调和一个失败回调
        shop.buyProducts(
            products,
            //成功操作
            () => commit(types.CHECKOUT_SUCCESS),
            //失败操作
            () => commit(types.CHECKOUT_FILURE, savedCartItems)
        )
    }
}


//webpack-dev-server是一个基于Express的本地开发服务器
//在开发中，我们希望边写代码，边看到代码的执行情况，webpack-dev-server提供自动刷新页面的功能可以满足我们的需求。
//webpack-dev-server支持两种模式的自动刷新页面。

//iframe模式，页面被放到一个iframe内，当发生变化时，会重新加载。
//inline模式，将webpack-dev-server的重载代码添加到产出的bundle中。

//两种模式都支持模块热替换。模块热替换的好处是只替换更新的部分，而不是整个页面都重新加载。
























const config = {
    output: {

    },
    modules:{
        rules:[{
            test: /\.txt$/,
            use: 'raw-loader'
        }]
    }
}


//想要使用一个插件，你只需require()它，然后把它添加到plugins数组中。
//多数插件可以通过选项（option）自定义。
//你也可以在一个配置文件中因为不同目的而多次使用同一个插件，这时需要使用new操作符来创建他的一个实例

plugin:[
    new HtmlWebpackPlugin({
        template: './src/index.html'
    })
]


const config = {
    entry: ''
}


const config = {
    entry: {
        app: '',
        vendors: ''
    },
    output: {
        filename: '[name].js',
        path: ''
    }
}





const config = {
    module:{
        rules:[{
            test: /\.css$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }
            ]
        }]
    }
}






let webpack = require('webpack');
const config = {
    module:{
        rules:[{
            test:/\.css$/,
            use: [{
                loader: 'style-loader',
                options: {
                    modules: true
                }
            }]
        }]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin()
    ]
}