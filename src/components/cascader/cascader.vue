<template>
   <div class="cascader">
      <el-row>
         <el-col :span="12">
           <h3>click事件触发</h3>
            <el-cascader
              :options="options"
              v-model="selectedOptions"
              @change="handleChange">
            </el-cascader>
         </el-col>
         <el-col :span="12">
           <h3>hover事件触发</h3>
            <el-cascader
              :options="options"
              expand-trigger="hover"
              v-model="selectedOptions"
              @change="handleChange">
            </el-cascader>
         </el-col>
         <el-col :span="12">
           <h3>禁用性</h3>
            <el-cascader
              :options="options2"
              expand-trigger="hover"
              v-model="selectedOptions2"
              @change="handleChange">
            </el-cascader>
         </el-col>
         <el-col :span="12">
           <h3>是否显示全部路径</h3>
            <el-cascader
              :options="options2"
              expand-trigger="hover"
              v-model="selectedOptions2"
              @change="handleChange"
              :show-all-levels="false">
            </el-cascader>
            
         </el-col>
         <el-col :span="12">
           <h3>设置默认值</h3>
            <el-cascader
              :options="options2"
              expand-trigger="hover"
              v-model="selectedOptions3"
              @change="handleChange"
              :show-all-levels="true">
            </el-cascader>
         </el-col>
         <el-col :span="12">
           <h3>选择即改变</h3>
            <el-cascader
              :options="options2"
              v-model="selectedOptions4"
              @change="handleChange"
              change-on-select
              :show-all-levels="true">
            </el-cascader>
         </el-col>
         <el-col :span="12">
           <h3>可搜索</h3>
            <el-cascader
              :options="options2"
              filterable
              v-model="selectedOptions4"
              @change="handleChange"
              change-on-select
              :show-all-levels="true">
            </el-cascader>
         </el-col>
      </el-row>
   </div>
</template>

<script>
    export default {
        data(){
            return{
              options: [
                {
                  value: 'zhinan',
                  label: '指南',
                  children: [
                    {
                      value: 'shejiyuanze',
                      label: '设计原则',
                      children: [
                        {
                          value: 'yizhi',
                          label: '一致'
                        },
                        {
                          value: 'erzhi',
                          label: '二致'
                        }

                      ]
                    },
                    {
                      value: 'shejiyuanze2',
                      label: '设计原则2',
                      children: [
                        {
                          value: 'yizhi2',
                          label: '一致2'
                        },
                        {
                          value: 'erzhi2',
                          label: '二致2'
                        }

                      ]
                    }
                  ]
                },
                {
                  value: 'zhinan',
                  label: '指南2',
                  children: [
                    {
                      value: 'shejiyuanze',
                      label: '设计原则2',
                      children: [
                        {
                          value: 'yizhi2',
                          label: '一致2'
                        },
                        {
                          value: 'erzhi2',
                          label: '二致2'
                        }

                      ]
                    },
                    {
                      value: 'shejiyuanze2',
                      label: '设计原则2',
                      children: [
                        {
                          value: 'yizhi2',
                          label: '一致2'
                        },
                        {
                          value: 'erzhi2',
                          label: '二致2'
                        }

                      ]
                    }
                  ]
                },
              ],
              selectedOptions:[],
              options2: [
                {
                  value: 'zhinan',
                  label: '指南',
                  disabled:true,
                  children: [
                    {
                      value: 'shejiyuanze',
                      label: '设计原则',
                      children: [
                        {
                          value: 'yizhi',
                          label: '一致'
                        },
                        {
                          value: 'erzhi',
                          label: '二致'
                        }

                      ]
                    },
                    {
                      value: 'shejiyuanze2',
                      label: '设计原则2',
                      children: [
                        {
                          value: 'yizhi2',
                          label: '一致2'
                        },
                        {
                          value: 'erzhi2',
                          label: '二致2'
                        }

                      ]
                    }
                  ]
                },
                {
                  value: 'zhinan2',
                  label: '指南2',
                  children: [
                    {
                      value: 'shejiyuanze',
                      label: '设计原则2',
                      children: [
                        {
                          value: 'yizhi2',
                          label: '一致2'
                        },
                        {
                          value: 'erzhi2',
                          label: '二致2',

                        }

                      ]
                    },
                    {
                      value: 'shejiyuanze2',
                      label: '设计原则2',
                      children: [
                        {
                          value: 'yizhi2',
                          label: '一致2'
                        },
                        {
                          value: 'erzhi2',
                          label: '二致2'
                        }

                      ]
                    }
                  ]
                },
              ],
              selectedOptions2:[],
              selectedOptions4:[],
              selectedOptions3:["zhinan","shejiyuanze","yizhi"],
            }
        },
        methods:{
          handleChange(value){
            console.log(value)
          }
        }
    }
</script>

<style>

</style>
