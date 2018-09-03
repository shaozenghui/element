<template>
	  <div class="inputnumber">
	  	<h4>基本</h4>
		<el-row>
			<el-input-number v-model="number1" :min="1" :max="10" @change="change" label="描述"></el-input-number>
		</el-row>
		 <h4>禁止</h4>
		 <div class="inputnumber">
			<el-row>
				<el-input-number disabled v-model="number2" :min="1" :max="10" @change="change" label="描述"></el-input-number>
			</el-row>
		  </div> 
		  <h4>步长</h4>
		 <div class="inputnumber">
			<el-row>
				<el-input-number :step="2" v-model="number3" :min="1" :max="10" @change="change" label="描述"></el-input-number>
			</el-row>
		  </div> 
		  <h4>精度</h4>
		 <div class="inputnumber">
			<el-row>
				<el-input-number :precision="2" :step="2" v-model="number4" :min="1" :max="10" @change="change" label="描述"></el-input-number>
			</el-row>
		  </div>
		  <h4>尺寸</h4>
		 <div class="inputnumber">
			<el-row>
				<el-input-number  :precision="2" :step="2" v-model="number5" :min="1" :max="10" @change="change" label="描述"></el-input-number>
				<el-input-number size="medium" :precision="2" :step="2" v-model="number6" :min="1" :max="10" @change="change" label="描述"></el-input-number>
				<el-input-number size="small" :precision="2" :step="2" v-model="number7" :min="1" :max="10" @change="change" label="描述"></el-input-number>
				<el-input-number size="mini" :precision="2" :step="2" v-model="number8" :min="1" :max="10" @change="change" label="描述"></el-input-number>
			</el-row>
		  </div>
		  <h4>箭头位置</h4>
		 <div class="inputnumber">
			<el-row>
				<el-input-number controls-position="right" :precision="2" :step="2" v-model="number9" :min="1" :max="10" @change="change" label="描述"></el-input-number>
				
			</el-row>
		  </div>
	  </div>
</template>

<script>
export default {
	data(){
		return{
			number1:1,
			number2:1,
			number3:1,
			number4:1,
			number5:1,
			number6:1,
			number7:1,
			number8:1,
			number9:1,
		}
	},
	methods:{
		change(val){
			console.log(val)
		}
	}
}
</script>

<style>
	.row{
		margin: 20px 0px;
	}
</style>
