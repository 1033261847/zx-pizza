<template>
  <div class="row">
    <!-- 新增 -->
    <div class="col-sm-12 col-md-8">
         <app-new-pizza></app-new-pizza>  
    </div>
  
    <!-- 展示 -->
   <div class="col-sm-12 col-md-4">
       <h3 class="text-muted my-5">菜单</h3>    
        <table class="table">
            <thead class="table table-default">
              <tr>
                <th>品种</th>
                <th>删除</th>
              </tr>
            </thead>
            <tbody v-for="item in getMenuItems" :key="item.id">
               <tr>
                 <td>
                   {{item.name}}
                 </td>
                 <td><button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">删除</button></td>
               </tr>
            </tbody>
        </table>
   </div>
  

  </div>
</template>

<script>
import NewPizza from './NewPizza'
export default {
  data(){
    return {
      //getMenuItems:[]
    }
  },
  components:{
    "app-new-pizza":NewPizza
  },
  methods:{
    /*删除*/
    deleteData(item){
      this.$http({
         url:"/zx/menu",
         method:"post",
         data:`method=deleteMenu&id=${item.id}`
      }).then(result=>{
          if(result.data){
              //从Vuex数组中删除当前item
              this.$store.commit("removeMenuItems",item);
          };
      });

    }
  },
  created(){
      this.$http.get("/zx/menu?method=getMenuItems")
      .then((result)=>{      
        let menuArray=[];      
         result=result.data;     
         for(let index=0;index<result.length; index++){
            let obj=result[index];
            menuArray.push({
              name:obj.name,
              description:obj.description,
              id:obj.id,
              options:obj.items             
            });
         }      
         //数据同步    
         this.$store.commit("setMenuItems",menuArray);
      });
  },
  computed:{
    getMenuItems:{
      //在vuex中获取数据
      get(){
        //方式1
        //return this.$store.state.menuItems;
        
        //方式2
        return this.$store.getters.getMenuItems;
      },
      set(){ }
      
    }
  }

  /*组件内守卫*/
  /*进入组件时*/
  /*beforeRouteEnter:(to,from,next)=>{
  	//alert("Hello "+this.name); //获取不到name值
  	next(vm=>{
  		alert("Hello "+vm.name);
  	});
  }	*/

  /*离开组件时*/
 /* beforeRouteLeave:(to,from,next)=>{
  	if(confirm("确定离开吗?")==true){
  		next();
  	}else{
  		next(false);
  	}
  }*/

}
</script>

<style>

</style>
