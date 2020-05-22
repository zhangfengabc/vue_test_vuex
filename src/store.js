import Vue from 'vue'
import Vuex from  'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        }
        //可以以属性的形式访问这些值  store.getters.doneTodos
    },
    mutations: {
        increment (state) {
            state.count ++ 
        }
    },
    // actions: {
    //     increment (context) {
    //         context.commit('increment')
    //     }
    // },
    actions: {
        increment ({ commit }) {
            commit('increment')
        }
    }
})

export default store