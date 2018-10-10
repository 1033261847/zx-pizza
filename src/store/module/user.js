const state={
	currentUser:null,
	isLogin:false
}

const getters={
 	getCurrentUser:state=>state.currentUser,
 	getIsLogin:state=>state.isLogin
}

const mutations={
	//更改用户的状态信息
	userStatus(state,user){	
		if(user){
			state.currentUser=user;
			state.isLogin=true;
		}else{
			state.currentUser=null;
			state.isLogin=false;
		}
	},
	exit(state){
		state.isLogin=false;
		state.currentUser=null;
	}
}

const actions={
	setUser({commit},user){
		commit("userStatus",user);
	}
}

export default{
	state,
	getters,
	mutations,
	actions
}