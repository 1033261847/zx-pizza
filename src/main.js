// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
/*import router from './router'*/
import VueRouter from 'vue-router'
import App from './App'
import {routes} from './routers'
import axios from 'axios'
import {store} from './store/store.js'
import Vuelazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuelazyload,{
	loading:require("./assets/mi1.jpg"),
	error:require("./assets/mi1.jpg")
})

/*axios.defaults.baseURL="http://127.0.0.1:8080/VueData"*/
//配置Vue原型(在任何组件中都可以使用)
Vue.prototype.$http=axios

//axios.defaults.baseURL="http://127.0.0.1:8080/VueData"

const router=new VueRouter({
	routes,
	mode:"history",
	/*必须是浏览器的回退功能有效果 savedPosition 保存当前浏览的具体滚动条的位置*/
	scrollBehavior(to,from,savedPosition){
		//return { x:0, y:100} 
		//return {selector:".btn"}
		if(savedPosition){
			return savedPosition ;
		}else{
			return {x:0,y:0} ;
		}
	}
})

/*全局守卫*/
router.beforeEach((to,from,next)=>{
	if(to.path=="/login"||to.path=="/register"){
		next();//放行
	}else{
		//alert("还没有登陆,请先登陆");
		if(!store.getters.getIsLogin){
			next("/login");
		}else{
			next();
		}
	}

})


//后置钩子
/*router.afterEach((to,from)=>{
	alert("after");
})*/



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})