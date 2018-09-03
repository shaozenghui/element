<template>
	<div class="datetimepick">
		<el-row>
			<p>默认用法</p>
			<el-col :span="8">
			   <p class="demonstration">默认</p>
			    <el-date-picker
			      v-model="value1"
			      type="datetime"
			      placeholder="选择日期时间">
			    </el-date-picker>
			</el-col>
			<el-col :span="8">
			    <p class="demonstration">带快捷选项</p>
			    <el-date-picker
			      v-model="value2"
			      type="datetime"
			      placeholder="选择日期时间"
			      align="right"
			      :picker-options="pickerOptions1">
			    </el-date-picker>
			</el-col>
			<el-col :span="8">
			    <p class="demonstration">设置默认时间</p>
			    <el-date-picker
			      v-model="value3"
			      type="datetime"
			      placeholder="选择日期时间"
			      default-time="12:00:00">
			    </el-date-picker>
			</el-col>
		</el-row>
		<el-row>
			<p>范围用法</p>
			<el-col :span="12">
			   <p class="demonstration">默认</p>
			    <el-date-picker
			      v-model="value4"
			      type="datetimerange"
			      range-separator="至"
			      start-placeholder="开始日期"
			      end-placeholder="结束日期">
			    </el-date-picker>
			</el-col>
			<el-col :span="12">
			    <p class="demonstration">带快捷选项</p>
			    <el-date-picker
			      v-model="value5"
			      type="datetimerange"
			      :picker-options="pickerOptions2"
			      range-separator="至"
			      start-placeholder="开始日期"
			      end-placeholder="结束日期"
			      align="right">
			    </el-date-picker>
			</el-col>
		</el-row>
		<el-row>
			<p>默认的其实与结束时刻</p>
			<el-col :span="12">
			   <p class="demonstration">起始日期时刻为 12:00:00</p>
			    <el-date-picker
			      v-model="value6"
			      type="datetimerange"
			      start-placeholder="开始日期"
			      end-placeholder="结束日期"
			      :default-time="['12:00:00']">
			    </el-date-picker>
			</el-col>
			<el-col :span="12">
			    <p class="demonstration">起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</p>
			    <el-date-picker
			      v-model="value7"
			      type="datetimerange"
			      align="right"
			      start-placeholder="开始日期"
			      end-placeholder="结束日期"
			      :default-time="['12:00:00', '08:00:00']">
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
        value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value5: ''
      };
    }
  };
</script>
<style>
	
</style>