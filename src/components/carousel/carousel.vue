<template>
  <div class="carousel">
  	<el-row class="block" :gutter="20">
  	  <el-col :span="12">
  	  	<h4 class="demonstration">默认 Hover 指示器触发</h4>
	  	  <el-carousel height="300px">
	  	    <el-carousel-item v-for="item in 4" :key="item">
	  	      <h3>{{ item }}</h3>
	  	    </el-carousel-item>
	  	  </el-carousel>
	  </el-col>
  	  <el-col :span="12">
  	  	 <h4 class="demonstration">Click 指示器触发</h4>
	  	  <el-carousel trigger="click" height="300px">
	  	    <el-carousel-item v-for="item in 4" :key="item">
	  	      <h3>{{ item }}</h3>
	  	    </el-carousel-item>
	  	  </el-carousel>
	  </el-col>
	  <el-col :span="12">
  	  	 <h4 class="demonstration"> 指示器位置</h4>
	  	  <el-carousel trigger="click" height="300px" indicator-position="outside">
	  	    <el-carousel-item v-for="item in 4" :key="item">
	  	      <h3>{{ item }}</h3>
	  	    </el-carousel-item>
	  	  </el-carousel>
	  </el-col>
	   <el-col :span="12">
  	  	 <h4 class="demonstration"> 切换剪头的显示和隐藏</h4>
	  	  <el-carousel trigger="click" height="300px" arrow="always">
	  	    <el-carousel-item v-for="item in 4" :key="item">
	  	      <h3>{{ item }}</h3>
	  	    </el-carousel-item>
	  	  </el-carousel>
	  </el-col>
	   <el-col :span="24">
  	  	 <h4 class="demonstration"> 卡片化</h4>
	  	  <el-carousel trigger="click" height="300px" type="card">
	  	    <el-carousel-item v-for="item in 4" :key="item">
	  	      <h3>{{ item }}</h3>
	  	    </el-carousel-item>
	  	  </el-carousel>
	  </el-col>
  	</el-row>
  </div>
</template>
<script>
	export default {
		data(){
			return{

			}
		}
	}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
