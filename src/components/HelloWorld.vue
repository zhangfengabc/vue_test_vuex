<template>
  <div class="hello">
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
    </p>
    <p>{{count}}</p>
    <button @click="handleClick">点击我</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import {mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // computed: {
  //   count () {
  //     return this.$store.state.count
  //   }
  // },
  // computed: mapState({
  //   count: state => state.count,
  // }),
  computed: {
    ...mapGetters([
      'doneTodeCount',
      'anotherGetter',
      
    ]),
    //如果你想将一个getter属性另取一个名字，使用对象形式：
    ...mapGetters({
      doneCount: 'doneTodoCount'
    })
  },
  methods: {
    handleClick: function() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
