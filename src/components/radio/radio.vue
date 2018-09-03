<template>
  <div class="radio">
  	 <el-row class="row"><el-button>单选</el-button></el-row>
     <el-row class="row">
         <el-radio v-model="radio" label="1">A</el-radio>
         <el-radio v-model="radio" label="2">B</el-radio>
         <el-radio v-model="radio" label="3">C</el-radio>
     </el-row>
     <el-row class="row"><el-button>单选禁用</el-button></el-row>
     <el-row class="row">
         <el-radio disabled v-model="radio2" label="禁用">A</el-radio>
         <el-radio disabled v-model="radio2" label="选中禁用">B</el-radio>
     </el-row>
	<el-row class="row"><el-button>单选组</el-button></el-row>
     <el-row class="row">
     	 <el-radio-group v-model="radio3">
	         <el-radio   label="1">A</el-radio>
	         <el-radio disabled  label="2">B</el-radio>
	          <el-radio   label="3">C</el-radio>
	          <el-radio   label="4">D</el-radio>
         </el-radio-group>
     </el-row>
     <el-row class="row"><el-button>按钮单选组</el-button></el-row>
     <el-row class="row">
     	 <el-radio-group v-model="radio4" fill="red" text-color="blue">
	          <el-radio-button   label="北京"></el-radio-button>
	          <el-radio-button   disabled  label="上海"></el-radio-button>
	          <el-radio-button   label="广州"></el-radio-button>
	          <el-radio-button   label="深圳"></el-radio-button>
         </el-radio-group>
     </el-row>
     <el-row class="row"><el-button>按钮单选组尺寸</el-button></el-row>
     <el-row class="row">
     	 <el-radio-group v-model="radio5" size="mini">
	          <el-radio-button   label="北京"></el-radio-button>
	          <el-radio-button   label="上海"></el-radio-button>
	          <el-radio-button   label="广州"></el-radio-button>
	          <el-radio-button   label="深圳"></el-radio-button>
         </el-radio-group>
     </el-row>
     <el-row class="row">
     	 <el-radio-group v-model="radio6" size="medium">
	          <el-radio-button   label="北京"></el-radio-button>
	          <el-radio-button   label="上海"></el-radio-button>
	          <el-radio-button   label="广州"></el-radio-button>
	          <el-radio-button   label="深圳"></el-radio-button>
         </el-radio-group>
     </el-row>
      <el-row class="row"><el-button>带有边框的单选</el-button></el-row>
     <el-row class="row">
     	 <el-radio-group v-model="radio7" @change="change()">
	          <el-radio  border  label="1">备选项1</el-radio>
	          <el-radio  border  label="2">备选项2</el-radio>
	          <el-radio  border  label="3">备选项3</el-radio>
	          <el-radio  border  label="4">备选项4</el-radio>
         </el-radio-group>
     </el-row>
  </div>
</template>

<script>
export default {
	data(){
		return{
			radio:'1',
			radio3:'1',
			radio7:'1',
			radio2:'选中禁用',
			radio4:'广州',
			radio5:'上海',
			radio6:'深圳',
		}
	},
	methods:{
		change(){
			console.log(this.radio7)
		}
	}
}
</script>

<style>
	.row{
		margin: 20px 0px;
	}
</style>
