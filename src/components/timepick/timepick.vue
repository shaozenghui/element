<template>
	<div class="timepick">
		<el-row>
			<el-col :span="12">
				<p>固定时间点</p>
				<el-time-select
				  v-model="value1"
				  :picker-options="{
				    start: '08:30',
				    step: '00:15',
				    end: '18:30'
				  }"
				  placeholder="选择时间" @change="change">
				</el-time-select>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="12">
				<p>固定时间点</p>
				<el-time-picker
				  v-model="value2"
				  :picker-options="{
				      selectableRange: '18:30:00 - 20:30:00'
				    }"
				  placeholder="选择时间" @change="change">
				</el-time-picker>
			</el-col>
			<el-col :span="12">
				<p>固定时间点(箭头)</p>
				<el-time-picker
				  v-model="value3"
				  :picker-options="{
				      selectableRange: '18:30:00 - 20:30:00'
				    }"
				    arrow-control
				  placeholder="选择时间" @change="change">
				</el-time-picker>
			</el-col>
		</el-row>
		<el-row>
			<p>固定时间范围</p>
			<el-col :span="12">
				<p>开始时间</p>
				<el-time-select
				  v-model="startTime"
				  :picker-options="{
				    start: '08:30',
				    step: '00:15',
				    end: '18:30'
				  }"
				  placeholder="选择时间" @change="change">
				</el-time-select>
			</el-col>
			<el-col :span="12">
				<p>结束时间</p>
				<el-time-select
				  v-model="endTime"
				  :picker-options="{
				    start: '08:30',
				    step: '00:15',
				    end: '18:30',
				    minTime: startTime
				  }"
				  placeholder="选择时间" @change="change">
				</el-time-select>
			</el-col>
		</el-row>
		<el-row>
			<p>固定时间范围</p>
			<el-time-picker
			    is-range
			    v-model="value4"
			    range-separator="至"
			    start-placeholder="开始时间"
			    end-placeholder="结束时间"
			    placeholder="选择时间范围">
			  </el-time-picker>
			  <el-time-picker
			    is-range
			    arrow-control
			    v-model="value5"
			    range-separator="至"
			    start-placeholder="开始时间"
			    end-placeholder="结束时间"
			    placeholder="选择时间范围">
			  </el-time-picker>
		</el-row>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				value1:'',
				value2:'',
				value3:'',
				startTime:"",
				endTime:"",
				value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
       			value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
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