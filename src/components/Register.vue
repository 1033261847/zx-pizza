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
    				<div class="form-group">
    					<label for="confirm-password">确认密码</label>
    					<input type="password" class="form-control" v-model="confirmPassword">
    				</div>
    				<button class="btn btn-block btn-success">
    					注册
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
 			email:"",
 			password:"",
 			confirmPassword:""
 		}
 	},
 	methods:{
 		onSubmit(){
 			if(this.password===this.confirmPassword){
 				
 				const formData={
 					email:this.email,
 					password:this.password,
 					confirmPassword:this.confirmPassword
 				}
 				
 				/*保存数据*/	
 				
 				/*后台接收到参数*/
 				/*axios.post("/zx/users","email="+this.email+"&password="+this.password+"&confirmPassword="+this.confirmPassword)
 					.then(result=>{
 						//alert(JSON.stringify(result));
 						console.log(result.data);
 					});*/

 				/*
 				
 				使用qs模块(axios中自带),使用qs.stringify()序列化params
				*/	
 				axios({
 					url:"/zx/users",
 					method:"post",	
 					data:qs.stringify(formData) 					
 				})
 					.then(result=>{
                        // console.log(result);
                         if(result.data){
                            this.$router.push({name:'loginLink'});
                         }
                         
                                              	
 					})
 					.catch(err=>{
 						alert(err);
 					});	
 			}else{
 				alert("两次密码不一致");
 			}
 		}
 	}
  
}
</script>

<style>

</style>
