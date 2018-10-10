<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
    	<div class="card">
    		<div class="card-body">
    			<!-- <img src="" class="mx-auto d-block" /> -->
    			<form @submit.prevent="onSubmit">
    				<div class="form-group">
    					<label for="email">邮箱</label>
    					<input type="email" class="form-control" v-model="email">
    				</div>
    				<div class="form-group">
    					<label for="password">密码</label>
    					<input type="password" class="form-control" v-model="password">
    				</div>
    				
    				<button class="btn btn-block btn-success">
    					登录
    				</button>
    			</form>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs' 

export default {
 	data(){
 		return {
 			email:"1033261847@qq.com",
 			password:"123"
 			
 		}
 	},
    /*组件内守卫*/
   /* beforeRouteEnter:(to,from,next)=>{
        // 这里 this不能识别
        //this.$store.dispatch("setUser",null);  

        //利用next()方法的 回调函数
        next(vm=>vm.$store.dispatch("setUser",null));
    },*/
 	methods:{
 		onSubmit(){
            let formData={
                  "email":this.email,
                  "password":this.password  
            };

            axios.post("/zx/userInfo",qs.stringify(formData)).then((result)=>{

                if(result.data.length>0){
                   this.$store.dispatch("setUser",formData);   
                   this.$router.push({name:"homeLink"});
                }else{
                   this.$store.dispatch("setUser",null);     
                    alert("你输入的账号或者密码不正确");
                };

                //数组一个方法  数组过滤
                /*let users=[];
                let resultData=users.filter((user)=>{
                    return user.email===this.email&&user.password=this.password;
                });*/
                
            });
 		}
 	}
  
}
</script>

<style>

</style>
