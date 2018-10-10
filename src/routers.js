import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'
import VueImg from './components/VueImg'

//二级路由
import Contact from './components/about/Contact'
import Deivery from './components/about/Deivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'


/*注意  routes 必须是这个 不能写错*/
export const routes=[
	{
		path:"/",
		name:"homeLink",
		/*设置主页进入默认组件 和 其他组件  组件复用*/
		components:{
			default:Home,
			"orderingGuide":OrderingGuide,
			"delivery":Deivery,
			"history":History
		}
	},
	{
		path:"/menu",
		name:'menuLink',
		component:Menu
	},
	{
		path:"/admin",
		component:Admin,
		/*路由独享守卫*/
		/*beforeEnter:(to,from,next)=>{
			//alert("必须登陆");	
			//next(false);
			if(to.path=="/login"||to.path=="/register"){
				next();//放行
			}else{
				//alert("还没有登陆,请先登陆");
				next("/login");
			}
		}*/
	},
	{
		path:"/about",
		component:About,
		/*默认展示 about/contact 下的组件内容*/
		redirect:"/about/contact",
		/*children 配置二级路由*/
		children:[
			{
				path:"/about/contact",
				name:'contactLink',
				component:Contact,
				/*默认展示 /personname 下的组件内容*/
				redirect:"/personname",
				/*配置三级路由*/
				children:[
					{
						path:"/phone",
						name:'phoneNumber',
						component:Phone
					},
					{
						path:"/personname",
						name:'personName',
						component:PersonName
					}
				]
			},
			{
				path:"/history",
				name:'historyLink',
				component:History
			},
			{
				path:"/orderingGuide",
				name:'orderingGuideLink',
				component:OrderingGuide
			},
			{
				path:"/deivery",
				name:'deliveryLink',
				component:Deivery
			}
		]
		
	},
	{
		path:"/login",
		name:"loginLink",
		component:Login
	},
	{
		path:"/register",
		component:Register
	},
	/*当路径不正确的时候,会跳转到根路径下*/
	{
		path:"*",
		redirect:"/"
	},
	{
		path:"/vueImg",
		component:VueImg
	}

]