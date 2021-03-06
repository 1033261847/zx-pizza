export const setMenuItems=(state,data)=>{
	state.menuItems=data;
}

//将配匹到对象,在menuItems数组中删除
export const removeMenuItems=(state,data)=>{
	state.menuItems.forEach((item,index)=>{
		if(item==data){
			state.menuItems.splice(index,1);
		}
	})
}

//新添加的对象 添加到menuItems数组中
export const pushToMenuItems=(state,data)=>{
	state.menuItems.push(data);
}

//更改用户的状态信息
export const userStatus=(state,user)=>{	
	if(user){
		state.currentUser=user;
		state.isLogin=true;
	}else{
		state.currentUser=null;
		state.isLogin=false;
	}
}