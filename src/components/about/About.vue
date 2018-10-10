<template>
  <div id="about">
    	<div class="row mb-5">
    		<!-- 导航 -->
    		<div class="col-4">
    			<div class="list-group mb-5">
    				<router-link :to="{name:'historyLink'}" tag="li" class="nav-link">
    					<a class="list-group-item list-group-item-action">历史订单</a>
    				</router-link>
    				<router-link :to="{name:'contactLink'}" tag="li" class="nav-link">
    					<a class="list-group-item list-group-item-action">联系我们</a>
    				</router-link>
    				<router-link :to="{name:'orderingGuideLink'}" tag="li" class="nav-link">
    					<a class="list-group-item list-group-item-action">点餐文档</a>
    				</router-link>
    				<router-link :to="{name:'deliveryLink'}" tag="li" class="nav-link">
    					<a class="list-group-item list-group-item-action">快递信息</a>
    				</router-link>
    			</div>
    		</div>
    		<!-- 导航所对应的内容 -->
    		<div class="col-8">
    			<router-view></router-view>
    		</div>
    	</div>
  </div>
</template>

<script>

export default {
  name: 'about',
  components: {
    
  }
}
</script>

<style>

</style>
