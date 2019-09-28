import Vue from 'vue'
import Vuex from 'vuex'
import {state} from './states'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
//使用Vuex
Vue.use(Vuex)

//创建Vuex实例
const store =new Vuex.Store({
   state,//共同维护的一个状态
   getters,//获取数据并渲染
   mutations,//处理数据的唯一途径，state的改变或赋值只能在这里
   actions//数据的异步操作
})

export default store  //导出store

