import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
    state:{
        show:'vuex练习啊',
        tip: '(温馨提示)',
    },
    mutations:{
      switch_dialog(state){
        state.show = '点就修改了呢';
      },
      switch_tip(state){
        state.tip = '888888'
      },
    },
    actions:{
      xianxin(context){//这里的context和我们使用的$store拥有相同的对象和方法
        context.commit('switch_dialog');
        context.commit('switch_tip');
      }
    }
})
