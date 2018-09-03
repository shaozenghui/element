<template>
   <div id="app">
       <el-row :gutter="20" >
        <el-col :span="5" class="slider" >
            <el-menu
              default-active="default"
              class="el-menu-vertical-demo"
              active-text-color="#3da8f5"
              text-color="#aaa"
              :router="true">
              <el-menu-item index="/button"  >
                <span slot="title">按钮</span>
              </el-menu-item>
              <el-menu-item index="/radio"  >
                <span slot="title">单选框</span>
              </el-menu-item>
              <el-menu-item index="/checkbox"  >
                <span slot="title">多选框</span>
              </el-menu-item>
              <el-menu-item index="/input"  >
                <span slot="title">输入框</span>
              </el-menu-item>
              <el-menu-item index="/inputnumber"  >
                <span slot="title">计数器</span>
              </el-menu-item>
              <el-menu-item index="/select"  >
                <span slot="title">选择框</span>
              </el-menu-item>
              <el-menu-item index="/cascader"  >
                <span slot="title">城际联动</span>
              </el-menu-item>
               <el-menu-item index="/switch"  >
                <span slot="title">开关</span>
              </el-menu-item>
              <el-menu-item index="/slider"  >
                <span slot="title">滑块</span>
              </el-menu-item>
              <el-menu-item index="/timepick"  >
                <span slot="title">时间选择器</span>
              </el-menu-item>
              <el-menu-item index="/datepick"  >
                <span slot="title">日期选择器</span>
              </el-menu-item>
              <el-menu-item index="/datetimepick"  >
                <span slot="title">日期时间选择器</span>
              </el-menu-item>
              <el-menu-item index="/upload"  >
                <span slot="title">上传</span>
              </el-menu-item>
              <el-menu-item index="/rate"  >
                <span slot="title">评分/颜色选择器</span>
              </el-menu-item>
              <el-menu-item index="/transfer"  >
                <span slot="title">穿梭框</span>
              </el-menu-item>
              <el-menu-item index="/form"  >
                <span slot="title">表单</span>
              </el-menu-item>
               <el-menu-item index="/table"  >
                <span slot="title">表格</span>
              </el-menu-item>
              <el-menu-item index="/tag"  >
                <span slot="title">标签/进度条</span>
              </el-menu-item>
              <el-menu-item index="/tree"  >
                <span slot="title">树形控件/标记/面包屑</span>
              </el-menu-item>
              <el-menu-item index="/pagination"  >
                <span slot="title">分页</span>
              </el-menu-item>
              <el-menu-item index="/alert"  >
                <span slot="title">警告</span>
              </el-menu-item>
              <el-menu-item index="/loading"  >
                <span slot="title">加载</span>
              </el-menu-item>
              <el-menu-item index="/message"  >
                <span slot="title">消息提示</span>
              </el-menu-item>
               <el-menu-item index="/messagebox"  >
                <span slot="title">弹框</span>
              </el-menu-item>
               <el-menu-item index="/notification"  >
                <span slot="title">通知</span>
              </el-menu-item>
              <el-menu-item index="/navmenu"  >
                <span slot="title">导航菜单</span>
              </el-menu-item>
              <el-menu-item index="/tabs"  >
                <span slot="title">标签切换</span>
              </el-menu-item>
              <el-menu-item index="/dropdown"  >
                <span slot="title">下拉菜单</span>
              </el-menu-item>
              <el-menu-item index="/steps"  >
                <span slot="title">步骤条</span>
              </el-menu-item>
              <el-menu-item index="/dialog"  >
                <span slot="title">模态框</span>
              </el-menu-item>
              <el-menu-item index="/tooltip"  >
                <span slot="title">文字提示</span>
              </el-menu-item>
               <el-menu-item index="/cards"  >
                <span slot="title">卡片</span>
              </el-menu-item>
               <el-menu-item index="/carousel"  >
                <span slot="title">轮播图</span>
              </el-menu-item>
               <el-menu-item index="/collapse"  >
                <span slot="title">折叠面板</span>
              </el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="19" class="slider">
            <router-view></router-view>
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
#app{
    padding: 40px 0;
}
.slider{
     height: 600px;
     overflow-y: scroll;
     padding-right: 0px !important;
      overflow-x:hidden;
      padding-left: 40px !important;
}
html,body{
   overflow-x:hidden;
    overflow-y:hidden;
}
::-webkit-scrollbar{
  background:#fff;
  width: 8px;
}

::-webkit-scrollbar-thumb { 
    background:#cacaca;
    border-radius: 5px;
}

</style>
