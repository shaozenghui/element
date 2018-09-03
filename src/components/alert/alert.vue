<template>
    <div class="tag">
        <el-row :gutter="20">
            <el-col :span="24">
                <h4>基本用法</h4>
                <el-alert
                    title="成功提示的文案"
                    type="success">
                </el-alert>
                <el-alert
                    title="消息提示的文案"
                    type="info">
                </el-alert>
                <el-alert
                    title="警告提示的文案"
                    type="warning">
                </el-alert>
                <el-alert
                    title="错误提示的文案"
                    type="error">
                </el-alert>
            </el-col>
            <el-col :span="24">
                <h4>自定义关闭按钮</h4>
                <el-alert
                    title="不可关闭的 alert"
                    type="success"
                    :closable="false">
                  </el-alert>
                  <el-alert
                    title="自定义 close-text"
                    type="info"
                    close-text="知道了">
                  </el-alert>
                  <el-alert
                    title="设置了回调的 alert"
                    type="warning"
                    @close="hello">
                  </el-alert>
            </el-col>
            <el-col :span="24">
                <h4>带有icon</h4>
                  <el-alert
                    title="成功提示的文案"
                    type="success"
                    show-icon>
                  </el-alert>
                 <el-alert 
                    title="消息提示的文案"
                    type="info"
                    show-icon>
                  </el-alert>
                  <el-alert
                    title="警告提示的文案"
                    type="warning"
                    show-icon>
                  </el-alert>
                  <el-alert
                    title="错误提示的文案"
                    type="error"
                    show-icon>
                  </el-alert>
            </el-col>
            <el-col :span="24">
                <h4>文字居中</h4>
                  <el-alert
                    title="成功提示的文案"
                    type="success"
                    show-icon
                    center >
                  </el-alert>
                 <el-alert 
                    title="消息提示的文案"
                    type="info"
                    show-icon
                    center >
                  </el-alert>
                  <el-alert
                    title="警告提示的文案"
                    type="warning"
                    show-icon
                    center >
                  </el-alert>
                  <el-alert
                    title="错误提示的文案"
                    type="error"
                    show-icon
                    center >
                  </el-alert>
            </el-col>
            <el-col :span="24">
                <h4>带有描述性文字介绍</h4>
                <el-alert
                    title="带辅助性文字介绍"
                    type="success"
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
                </el-alert>
            </el-col>
            <el-col :span="24">
                <h4>带有icon和描述性文字介绍</h4>
                 <el-alert
                    title="成功提示的文案"
                    type="success"
                    description="文字说明文字说明文字说明文字说明文字说明文字说明"
                    show-icon>
                  </el-alert>
                  <el-alert
                    title="消息提示的文案"
                    type="info"
                    description="文字说明文字说明文字说明文字说明文字说明文字说明"
                    show-icon>
                  </el-alert>
                  <el-alert
                    title="警告提示的文案"
                    type="warning"
                    description="文字说明文字说明文字说明文字说明文字说明文字说明"
                    show-icon>
                  </el-alert>
                  <el-alert
                    title="错误提示的文案"
                    type="error"
                    description="文字说明文字说明文字说明文字说明文字说明文字说明"
                    show-icon>
                  </el-alert>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                 
            }
        },
        methods: {

        }
         
    }
</script>
<style>
    .el-alert{
        margin: 10px;
    }
</style>