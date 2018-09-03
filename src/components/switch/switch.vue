<template>
	<div class="switch">
			<el-row>
				<el-col :span="12">
					<h3>基本用法</h3>
					<el-switch
					  v-model="value2"
					  active-color="#13ce66"
		              inactive-color="#ff4949">
					</el-switch>
				</el-col>
				<el-col :span="12">
					<h3>文字描述</h3>
					<el-switch
					  v-model="value3"
					  active-text="按月付费"
					  inactive-text="按年付费">
					</el-switch @change="change">
				</el-col>
				<el-col :span="12">
					<h3>扩展的value值</h3>
					<el-tooltip :content="'Switch value: ' + value5" placement="top">
					  <el-switch
					    v-model="value5"
					    active-color="#13ce66"
					    inactive-color="#ff4949"
					    active-value="100"
					    inactive-value="0">
					  </el-switch>
					</el-tooltip>
				</el-col>
				<el-col :span="12">
					<h3>禁用</h3>
					<el-tooltip :content="'Switch value: ' + value5" placement="top">
					  <el-switch
					    v-model="value5"
					    active-color="#13ce66"
					    inactive-color="#ff4949"
					    active-value="100"
					    inactive-value="0"
					    disabled>
					  </el-switch>
					</el-tooltip>
				</el-col>
			</el-row>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				 value2:true,
				 value3:true,
				 value5:'100'
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
	
</style>