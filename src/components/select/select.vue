<template>
   <div class="select">
     <el-row class="row">
        <el-row class="row">基本用法</el-row>
        <el-col :span="12">
           <el-select v-model="value" @change="change">
              <el-option v-for="(item,k) in options" :label="item.label" :value="item.value" :key="item.value"></el-option>  
           </el-select>
        </el-col>  
     </el-row>
     <el-row class="row">
        <el-row class="row">禁用项</el-row>
        <el-col :span="12">
           <el-select v-model="value2" @change="change">
              <el-option v-for="(item,k) in options2" :label="item.label" :value="item.value" :key="item.value" :disabled="item.disabled"></el-option>  
           </el-select>
        </el-col>  
     </el-row>
     <el-row class="row">
        <el-row class="row">禁用选择</el-row>
        <el-col :span="12">
           <el-select v-model="value2" @change="change" disabled>
              <el-option v-for="(item,k) in options2" :label="item.label" :value="item.value" :key="item.value" :disabled="item.disabled"></el-option>  
           </el-select>
        </el-col>  
     </el-row>
     <el-row class="row">
        <el-row class="row">可清空选项</el-row>
        <el-col :span="12">
           <el-select v-model="value2" @change="change" clearable>
              <el-option v-for="(item,k) in options2" :label="item.label" :value="item.value" :key="item.value" :disabled="item.disabled"></el-option>  
           </el-select>
        </el-col>  
     </el-row>
     <el-row class="row">
        <el-row class="row">多选</el-row>
        <el-col :span="12">
           <el-select v-model="value3" @change="change" clearable multiple>
              <el-option v-for="(item,k) in options" :label="item.label" :value="item.value" :key="item.value" :disabled="item.disabled"></el-option>  
           </el-select>
        </el-col>  
     </el-row>
     <el-row class="row">
        <el-row class="row">多选tag</el-row>
        <el-col :span="12">
           <el-select v-model="value3" @change="change" clearable multiple  collapse-tags>
              <el-option v-for="(item,k) in options" :label="item.label" :value="item.value" :key="item.value" :disabled="item.disabled"></el-option>  
           </el-select>
        </el-col>  
     </el-row>
     <el-row class="row">
        <el-row class="row">自定义模板</el-row>
        <el-col :span="12">
           <el-select v-model="value6" @change="change"  multiple  collapse-tags>
              <el-option v-for="(item,k) in cities" :label="item.label" :value="item.value" :key="item.value" :disabled="item.disabled">
                <span style="float: left;">{{item.label}}</span>
                <span style="float: right;">{{item.value}}</span>
              </el-option>  
           </el-select>
        </el-col>  
     </el-row>
     <el-row class="row">
        <el-row class="row">搜索</el-row>
        <el-col :span="12">
           <el-select v-model="value6" @change="change"  multiple  filterable>
              <el-option v-for="(item,k) in cities" :label="item.label" :value="item.value" :key="item.value" :disabled="item.disabled">
              </el-option>  
           </el-select>
        </el-col>  
     </el-row>
      <el-row class="row">
        <el-row class="row">创建项目</el-row>
        <el-col :span="12">
           <el-select v-model="value6" @change="change"  multiple  filterable  allow-create default-first-option > 
              <el-option v-for="(item,k) in cities" :label="item.label" :value="item.value" :key="item.value" :disabled="item.disabled">
              </el-option>  
           </el-select>
        </el-col>  
     </el-row>
      <el-row class="row">
        <el-row class="row">限制选择的条数</el-row>
        <el-col :span="12">
           <el-select v-model="value6" @change="change"  multiple  filterable  allow-create default-first-option multiple-limit="3"> 
              <el-option v-for="(item,k) in cities" :label="item.label" :value="item.value" :key="item.value" :disabled="item.disabled">
              </el-option>  
           </el-select>
        </el-col>  
     </el-row>
   </div>
</template>

<script>
    export default {
        data(){
            return{
              options: [{
                value: '选项1',
                label: '黄金糕'
              }, {
                value: '选项2',
                label: '双皮奶'
              }, {
                value: '选项3',
                label: '蚵仔煎'
              }, {
                value: '选项4',
                label: '龙须面'
              }, {
                value: '选项5',
                label: '北京烤鸭'
              }],
               options2: [{
                value: '选项1',
                label: '黄金糕'
              }, {
                value: '选项2',
                label: '双皮奶'
              }, {
                value: '选项3',
                label: '蚵仔煎',
                disabled:true
              }, {
                value: '选项4',
                label: '龙须面'
              }, {
                value: '选项5',
                label: '北京烤鸭'
              }],
              cities: [{
                value: 'Beijing',
                label: '北京'
              }, {
                value: 'Shanghai',
                label: '上海'
              }, {
                value: 'Nanjing',
                label: '南京'
              }, {
                value: 'Chengdu',
                label: '成都'
              }, {
                value: 'Shenzhen',
                label: '深圳'
              }, {
                value: 'Guangzhou',
                label: '广州'
              }],
              value6: [],
              value: '',
              value2: '',
              value3: ["选项一","选项三"],
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
    margin: 20px 0;
  }
</style>