<template>
  <div class="checkbox">
     <el-row class="row">
     	 <el-checkbox v-model="checked">A</el-checkbox>
	     <el-checkbox v-model="checked" disabled>B</el-checkbox>
	     <el-checkbox v-model="checked">C</el-checkbox>
     </el-row>
      <el-row class="row">
      	 <el-checkbox-group v-model="checkedList" @change="change()">
	     	 <el-checkbox  label="上海"></el-checkbox>
		     <el-checkbox  label="北京"></el-checkbox>
		     <el-checkbox  label="深圳"></el-checkbox>
		     <el-checkbox  label="广州"></el-checkbox>
		     <el-checkbox  label="香港" disabled></el-checkbox>
		</el-checkbox-group>
     </el-row>
	 <el-row class="row"><el-button>多选组</el-button></el-row>
     <el-row class="row">
     	  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选 </el-checkbox>
		  <div style="margin: 15px 0;"></div>
		  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
		    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
		  </el-checkbox-group>
     </el-row>
     <el-row class="row"><el-button>数量限制</el-button></el-row>
     <el-row class="row">
		  <el-checkbox-group v-model="checkedCities" :min="1" :max="3">
		    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
		  </el-checkbox-group>
     </el-row>
      <el-row class="row"><el-button>按钮样式</el-button></el-row>
     <el-row class="row">
		  <el-checkbox-group v-model="checkedCities" >
		    <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
		  </el-checkbox-group>
     </el-row>
     <el-row class="row"><el-button>边框样式</el-button></el-row>
     <el-row class="row">
		  <el-checkbox-group v-model="checkedCities" >
		    <el-checkbox  border v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
		  </el-checkbox-group>
     </el-row>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
	data(){
		return{
			checked:true,
			checkedList:["上海","广州"],
			checkAll: false,
	        checkedCities: ['上海', '北京'],
	        cities: cityOptions,
	        isIndeterminate: true
		}
	},
	methods:{
		change(){
			console.log(this.checkedList)
		},
		handleCheckAllChange(val) {
			console.log(val)
	        this.checkedCities = val ? cityOptions : [];
	        this.isIndeterminate = false;
	    },
	    handleCheckedCitiesChange(value) {
	    	console.log(value)
	        let checkedCount = value.length;
	        this.checkAll = checkedCount === this.cities.length;
	        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
	    }
	}
}
</script>

<style>
  .row{
  	margin: 20px 0px ;
  }
</style>
