<template>
  <div class="button">
     
     <el-row class="row">
     	<el-button >默认</el-button>
     	<el-button type="success">按钮</el-button>
     	<el-button type="info">按钮</el-button>
     	<el-button type="warning">按钮</el-button>
     	<el-button type="danger">按钮</el-button>
     	<el-button type="primary">按钮</el-button>
     </el-row>
     <el-row class="row">
     	<el-button plain>朴素</el-button>
     	<el-button type="success" plain>按钮</el-button>
     	<el-button type="info" plain>按钮</el-button>
     	<el-button type="warning" plain>按钮</el-button>
     	<el-button type="danger" plain>按钮</el-button>
     	<el-button type="primary" plain>按钮</el-button>
     </el-row>
     <el-row class="row">
     	<el-button round>圆角</el-button>
     	<el-button type="success" round>按钮</el-button>
     	<el-button type="info" round>按钮</el-button>
     	<el-button type="warning" round>按钮</el-button>
     	<el-button type="danger" round>按钮</el-button>
     	<el-button type="primary" round>按钮</el-button>
     </el-row>
     <el-row class="row">
     	<el-button round>小图标</el-button>
     	<el-button circle icon="el-icon-search"></el-button>
     	<el-button type="success" circle icon="el-icon-edit"></el-button>
     	<el-button type="info" circle icon="el-icon-check"></el-button>
     	<el-button type="warning" circle icon="el-icon-message"></el-button>
     	<el-button type="danger" circle icon="el-icon-star-off"></el-button>
     	<el-button type="primary" circle icon="el-icon-delete"></el-button>
     </el-row>
      <el-row class="row">
     	<el-button  disabled>禁止</el-button>
     	<el-button type="success" disabled>按钮</el-button>
     	<el-button type="info" disabled>按钮</el-button>
     	<el-button type="warning" disabled>按钮</el-button>
     	<el-button type="danger" disabled>按钮</el-button>
     	<el-button type="primary" disabled>按钮</el-button>
     </el-row>
     <el-row class="row">
     	<el-button  >文本</el-button>
     	<el-button type="text" >按钮</el-button>
     	<el-button type="text" >按钮</el-button>
     	<el-button type="text" disabled>按钮</el-button>
     	<el-button type="text" disabled>按钮</el-button>
     	<el-button type="text" disabled>按钮</el-button>
     </el-row>
     <el-row class="row">
     	<el-button  icon="el-icon-search">图标加文本</el-button>
     	<el-button type="success"  icon="el-icon-edit">编辑</el-button>
     	<el-button type="info"  icon="el-icon-check">选中</el-button>
     	<el-button type="warning"  icon="el-icon-message">信息</el-button>
     	<el-button type="danger"  icon="el-icon-star-off">收藏</el-button>
     	<el-button type="primary"  icon="el-icon-delete">删除</el-button>
     </el-row>
     <el-row class="row">
     	<el-button type="primary" >按钮组</el-button>
     	<el-button-group>
	     	<el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
	     	<el-button type="primary">1</el-button>
	     	<el-button type="primary">2</el-button>
	     	<el-button type="primary">3</el-button>
	     	<el-button type="primary">4</el-button>
	     	<el-button type="primary" >下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
     	</el-button-group>
     </el-row>
     <el-row class="row">
     	<el-button type="primary" >图标按钮组</el-button>
     	<el-button-group>
	     	<el-button type="primary" icon="el-icon-search"></el-button>
	     	<el-button type="success" icon="el-icon-edit"></el-button>
	     	<el-button type="danger" icon="el-icon-check"></el-button>
	     	<el-button type="info" icon="el-icon-message"></el-button>
	     	<el-button type="warning" icon="el-icon-message"></el-button>
     	</el-button-group>
     </el-row>
     <el-row class="row">
     	<el-button >加载按钮</el-button>
     	<el-button type="success" :loading="true">按钮</el-button>
     	<el-button type="info" :loading="true">按钮</el-button>
     	<el-button type="warning" :loading="true">按钮</el-button>
     	<el-button type="danger" :loading="true">按钮</el-button>
     	<el-button type="primary" :loading="true">按钮</el-button>
     </el-row>
     <el-row class="row">
     	<el-button >不同尺寸</el-button>
     	<el-button type="success" size="medium">按钮</el-button>
     	<el-button type="info" size="small">按钮</el-button>
     	<el-button type="warning" size="mini">按钮</el-button>
     </el-row>
     <el-row class="row">
     	<el-button :autofocus="true">原生属性</el-button>
     	<el-button type="success"  navtive-type="button" >按钮</el-button>
     	<el-button type="info"  navtive-type="submit">提交</el-button>
     	<el-button type="warning"  navtive-type="reset">重置</el-button>
     </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style >
 	.row{
 		margin: 20px 0;
 	}
</style>
