import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
    	islogin:false
	},
	getters: {
	
	},
	mutations: {
				login:(state)=>state.islogin=!state.islogin
	},
	actions: {

	}
})
export default store  