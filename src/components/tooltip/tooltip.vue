<template>
	<div class="tooltip">
		<el-row>
			<h4>基础用法</h4>
			<el-col :span="12">
				<div class="box">
				  <div class="top">
				    <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
				      <el-button>上左</el-button>
				    </el-tooltip>
				    <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
				      <el-button>上边</el-button>
				    </el-tooltip>
				    <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
				      <el-button>上右</el-button>
				    </el-tooltip>
				  </div>
				  <div class="left">
				    <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
				      <el-button>左上</el-button>
				    </el-tooltip>
				    <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
				      <el-button>左边</el-button>
				    </el-tooltip>
				    <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
				      <el-button>左下</el-button>
				    </el-tooltip>
				  </div>

				  <div class="right">
				    <el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
				      <el-button>右上</el-button>
				    </el-tooltip>
				    <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
				      <el-button>右边</el-button>
				    </el-tooltip>
				    <el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
				      <el-button>右下</el-button>
				    </el-tooltip>
				  </div>
				  <div class="bottom">
				    <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
				      <el-button>下左</el-button>
				    </el-tooltip>
				    <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
				      <el-button>下边</el-button>
				    </el-tooltip>
				    <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
				      <el-button>下右</el-button>
				    </el-tooltip>
				  </div>
				</div>
			</el-col>
		</el-row>
		<el-row>
			<h4>主题</h4>
			<el-col :span="12">
				<el-tooltip content="Top center" placement="top">
				  <el-button>Dark</el-button>
				</el-tooltip>
				<el-tooltip content="Bottom center" placement="bottom" effect="light">
				  <el-button>Light</el-button>
				</el-tooltip>
			</el-col>
		</el-row>
		<el-row>
			<h4>更多内容</h4>
			<el-col :span="12">
				<el-tooltip placement="top">
				  <div slot="content">多行信息<br/>第二行信息</div>
				  <el-button>Top center</el-button>
				</el-tooltip>
			</el-col>
		</el-row>
		<el-row>
			<h4>关闭打开提示</h4>
			<el-col :span="12">
				<el-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light">
			       <el-button @click="disabled = !disabled">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</el-button>
			    </el-tooltip>
			</el-col>
		</el-row>
		<el-row>
			<h4>弹出框</h4>
			<el-col :span="12">
				<el-popover
				    placement="top-start"
				    title="标题"
				    width="200"
				    trigger="hover"
				    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
				    <el-button slot="reference">hover 激活</el-button>
				  </el-popover>

				  <el-popover
				    placement="bottom"
				    title="标题"
				    width="200"
				    trigger="click"
				    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
				    <el-button slot="reference">click 激活</el-button>
				  </el-popover>

				  <el-popover
				    ref="popover"
				    placement="right"
				    title="标题"
				    width="200"
				    trigger="focus"
				    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
				  </el-popover>
				  <el-button v-popover:popover>focus 激活</el-button>

				  <el-popover
				    placement="bottom"
				    title="标题"
				    width="200"
				    trigger="manual"
				    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
				    v-model="visible">
				    <el-button slot="reference" @click="visible = !visible">手动激活</el-button>
				  </el-popover>
			</el-col>
		</el-row>
		<el-row>
			<h4>嵌套信息</h4>
			<el-col :span="12">
				<el-popover
				  placement="right"
				  width="400"
				  trigger="click">
				  <el-table :data="gridData">
				    <el-table-column width="150" property="date" label="日期"></el-table-column>
				    <el-table-column width="100" property="name" label="姓名"></el-table-column>
				    <el-table-column width="300" property="address" label="地址"></el-table-column>
				  </el-table>
				  <el-button slot="reference">click 激活</el-button>
				</el-popover>
			</el-col>
		</el-row>
		<el-row>
			<h4>嵌套操作</h4>
			<el-col :span="12">
				<el-popover
				  placement="top"
				  width="160"
				  v-model="visible2">
				  <p>这是一段内容这是一段内容确定删除吗？</p>
				  <div style="text-align: right; margin: 0">
				    <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
				    <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
				  </div>
				  <el-button slot="reference">删除</el-button>
				</el-popover>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				disabled:false,
				 visible: false,
				 visible2: false,
				 gridData: [{
		           date: '2016-05-02',
		           name: '王小虎',
		           address: '上海市普陀区金沙江路 1518 弄'
		         }, {
		           date: '2016-05-04',
		           name: '王小虎',
		           address: '上海市普陀区金沙江路 1518 弄'
		         }, {
		           date: '2016-05-01',
		           name: '王小虎',
		           address: '上海市普陀区金沙江路 1518 弄'
		         }, {
		           date: '2016-05-03',
		           name: '王小虎',
		           address: '上海市普陀区金沙江路 1518 弄'
		         }]
			}
		}
	}
</script>
<style>
  .box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }
  }
</style>