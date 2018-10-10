<template>
  <div>
   	<form>
   		<h3 class="text-muted my-5">添加新的Pizza</h3>
   		<div class="form-group row">
   			<label class="col-sm-1" >
   				品种
   			</label>
   			<div class="col-sm-11">
   				<input v-model="newPizza.name" type="text" class="form-control" />
   			</div>
   		</div>
   		<div class="form-group row">
   			<label class="col-sm-1" >
   				描述
   			</label>
   			<div class="col-sm-11">
   				<textarea v-model="newPizza.description" class="form-control" rows="5"></textarea>
   			</div>
   		</div>

   		<p><strong>选项1</strong></p>
   		<div class="form-group row">
   			<label class="col-sm-1" >
   				尺寸
   			</label>
   			<div class="col-sm-11">
   				<input v-model="newPizza.size1" type="text" class="form-control" />
   			</div>
   		</div>
   		<div class="form-group row">
   			<label class="col-sm-1" >
   				价格
   			</label>
   			<div class="col-sm-11">
   				<input v-model="newPizza.price1" type="text" class="form-control" />
   			</div>
   		</div>


		<p><strong>选项2</strong></p>
   		<div class="form-group row">
   			<label class="col-sm-1" >
   				尺寸
   			</label>
   			<div class="col-sm-11">
   				<input v-model="newPizza.size2" type="text" class="form-control" />
   			</div>
   		</div>
   		<div class="form-group row">
   			<label class="col-sm-1" >
   				价格
   			</label>
   			<div class="col-sm-11">
   				<input v-model="newPizza.price2" type="text" class="form-control" />
   			</div>
   		</div>
		<div class="form-groud row">
			<button @click="addMenuItem" type="button" class="btn btn-success btn-block">添加</button>
		</div>
   	</form>
  </div>
</template>

<script>
import axios from 'axios'	
import qs from 'qs'
export default {
	data(){
		return {
			newPizza:{
				name:"名称",
				description:"评论",				
				size1:6,
				price1:12,
				size2:8,
				price2:15						
			}
		}
	},
	methods:{
		addMenuItem(){

			let data={
				name:this.newPizza.name,
				description:this.newPizza.description,
				options:[
					{
						size:this.newPizza.size1,
						price:this.newPizza.price1
					},
					{
						size:this.newPizza.size2,
						price:this.newPizza.price2
					}
				]
			}

			/*添加*/		
            axios({
            	url:"/zx/menu",
				method:"post",
				data:`method=addMenu&name=${this.newPizza.name}&description=${this.newPizza.description}&price=${this.newPizza.price1}&&price=${this.newPizza.price2}&size=${this.newPizza.size1}&&size=${this.newPizza.size2}`			
			}).then((result)=>{
				//console.log(result);
				if(result.data){
					this.newPizza.name="";
					this.newPizza.description="";
					this.newPizza.price1="";
					this.newPizza.price2="";
					this.newPizza.size1="";
					this.newPizza.size2="";
					
					data.id=result.data;
					 //数据同步到Vuex中  
				    this.$store.commit("pushToMenuItems",data);
				}
				
			}).catch(err=>{});


			/*传递JSON 格式 */
			/* axios({
            	url:"/zx/menuJson",
				method:"post",
				headers:{
					"Content-type":"application/json;charset=utf-8"
				},
				data:data			
			}).then((result)=>{
				//console.log(result);
				if(result.data){
					this.newPizza.name="";
					this.newPizza.description="";
					this.newPizza.price1="";
					this.newPizza.price2="";
					this.newPizza.size1="";
					this.newPizza.size2="";
				}
				//this.$router.push({name:'menuLink'});
			}).catch(err=>{});*/


			/*es6*/
			/*fetch({
				url:"http://127.0.0.1:8080/VueData/menu",
				method:"post",
				headers:{					
					"Content-type":"application/x-www-form-urlencoded"				
				},
				data:`method=addMenu&name=${this.newPizza.name}&description=${this.newPizza.description}&price=${this.newPizza.price1}&&price=${this.newPizza.price2}&size=${this.newPizza.size1}&&size=${this.newPizza.size2}`
			}).then((result)=>{
				console.log(result);
				if(result.ok){
					this.newPizza.name="";
					this.newPizza.description="";
					this.newPizza.price1="";
					this.newPizza.price2="";
					this.newPizza.size1="";
					this.newPizza.size2="";
				}
			}).catch(err=>{//错误
				
			});*/

			/*fetch({
				url:"http://127.0.0.1:8080/VueData/menuJson",
				method:"post",
				headers:{
					"Content-type":"application/json",
					"origin":"http://localhost:8081/admin",
					"Access-Control-Allow-Origin":"http://localhost:8081/admin"
				},
				body:data
			}).then((result)=>{
				alert(result);
				console.log(result);
					
			}).catch(err=>{//错误
				
			});*/
		}
	}
 
}
</script>

<style scoped>

</style>
