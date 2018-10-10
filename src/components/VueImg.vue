<template>
  <div >
   	 <ul v-for="i in 100">
   	 	<li>
   	 		<img src="../assets/1.jpg" />
   	 		<img v-lazy="path[0]" />
        <img v-lazy="path[1]" />
        <img v-lazy="path[2]" />
        <img v-lazy="path[3]" />
   	 		<img v-lazy="path[4]" />
   	 	</li>
     
   	 </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      path:[
        require("@/assets/2.jpg"),
        require("@/assets/3.jpg"),
        require("@/assets/4.jpg"),
        require("@/assets/5.jpg"),
        require("@/assets/6.jpg"),
      ]
    }
  }
 
}
</script>

<style scoped>
  li{
    width: 500px;
  }
  img{
    width: 500px;
    height: 100px;
    border: 1px solid #eee;
  }
</style>
