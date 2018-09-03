<template>
	<div class="datepick">
		<el-row>
			<p>基本用法</p>
			<el-col :span='12'>
			    <p class="demonstration">默认</p>
			    <el-date-picker
			      v-model="value1"
			      type="date"
			      placeholder="选择日期">
			    </el-date-picker>
			</el-col>
			<el-col :span='12'>
			    <p class="demonstration">带快捷选项</p>
			    <el-date-picker
			      v-model="value2"
			      align="right"
			      type="date"
			      placeholder="选择日期"
			      :picker-options="pickerOptions1">
			    </el-date-picker>
			</el-col>
		</el-row>
		<el-row >
			  <el-col :span="12">
			    <p class="demonstration">周</p>
			    <el-date-picker
			      v-model="value3"
			      type="week"
			      format="yyyy 第 WW 周"
			      placeholder="选择周">
			    </el-date-picker>
			  </el-col>
			  <el-col :span="12">
			    <p class="demonstration">月</p>
			    <el-date-picker
			      v-model="value4"
			      type="month"
			      placeholder="选择月">
			    </el-date-picker>
			  </el-col>
			<el-col :span="12">
			    <p class="demonstration">年</p>
			    <el-date-picker
			      v-model="value5"
			      type="year"
			      placeholder="选择年">
			    </el-date-picker>
			 </el-col>
			 <el-col :span="12">
			    <p class="demonstration">多个日期</p>
			    <el-date-picker
			      type="dates"
			      v-model="value14"
			      placeholder="选择一个或多个日期">
			    </el-date-picker>
			</el-col>
		</el-row>
		<el-row >
			<p>选择日期范围</p>
			<el-col :span="12">
			   <p class="demonstration">默认</p>
			    <el-date-picker
			      v-model="value6"
			      type="daterange"
			      range-separator="至"
			      start-placeholder="开始日期"
			      end-placeholder="结束日期">
			    </el-date-picker>
			</el-col>
			<el-col :span="12">
			   <p class="demonstration">带快捷选项</p>
			       <el-date-picker
			         v-model="value7"
			         type="daterange"
			         align="right"
			         unlink-panels
			         range-separator="至"
			         start-placeholder="开始日期"
			         end-placeholder="结束日期"
			         :picker-options="pickerOptions2">
			       </el-date-picker>
			</el-col>
		</el-row>
		<el-row >
			
			<el-col :span="12">
			   <p>选择日期范围(设置默认日期)</p>
			    <el-date-picker
			      v-model="value13"
			      type="daterange"
			      start-placeholder="开始日期"
			      end-placeholder="结束日期"
			      :default-time="['00:00:00', '23:59:59']">
			    </el-date-picker>
			</el-col>
		</el-row>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value14: [],
         pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value6: '',
        value7: '',
        value13: [],
      };
  }
   }
</script>
<style>
	
</style>