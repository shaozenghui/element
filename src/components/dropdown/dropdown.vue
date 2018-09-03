<template>
	<div class="dropdown">
		<el-row>
			<h4>基本用法</h4>
			<el-col :span="12">
				<el-dropdown>
				  <span class="el-dropdown-link">
				    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
				  </span>
				  <el-dropdown-menu slot="dropdown">
				    <el-dropdown-item>黄金糕</el-dropdown-item>
				    <el-dropdown-item>狮子头</el-dropdown-item>
				    <el-dropdown-item>螺蛳粉</el-dropdown-item>
				    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
				    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
				  </el-dropdown-menu>
				</el-dropdown>	
			</el-col>
		</el-row>
		<el-row>
			<h4>触发对象</h4>
			<el-col :span="12">
				<el-dropdown>
				  <el-button type="primary">
				    更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
				  </el-button>
				  <el-dropdown-menu slot="dropdown">
				    <el-dropdown-item>黄金糕</el-dropdown-item>
				    <el-dropdown-item>狮子头</el-dropdown-item>
				    <el-dropdown-item>螺蛳粉</el-dropdown-item>
				    <el-dropdown-item>双皮奶</el-dropdown-item>
				    <el-dropdown-item>蚵仔煎</el-dropdown-item>
				  </el-dropdown-menu>
				</el-dropdown>
			</el-col>
			<el-col :span="12">
				<el-dropdown split-button type="primary" @click="handleClick">
				  更多菜单
				  <el-dropdown-menu slot="dropdown">
				    <el-dropdown-item>黄金糕</el-dropdown-item>
				    <el-dropdown-item>狮子头</el-dropdown-item>
				    <el-dropdown-item>螺蛳粉</el-dropdown-item>
				    <el-dropdown-item>双皮奶</el-dropdown-item>
				    <el-dropdown-item>蚵仔煎</el-dropdown-item>
				  </el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-row>
		<el-row>
			<h4>触发方式</h4>
			<el-col :span="12">
				<h4 class="demonstration">hover 激活</h4>
				    <el-dropdown>
				      <span class="el-dropdown-link">
				        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
				      </span>
				      <el-dropdown-menu slot="dropdown">
				        <el-dropdown-item>黄金糕</el-dropdown-item>
				        <el-dropdown-item>狮子头</el-dropdown-item>
				        <el-dropdown-item>螺蛳粉</el-dropdown-item>
				        <el-dropdown-item>双皮奶</el-dropdown-item>
				        <el-dropdown-item>蚵仔煎</el-dropdown-item>
				      </el-dropdown-menu>
				    </el-dropdown>
			</el-col>
			<el-col :span="12">
				<h4 class="demonstration">click 激活</h4>
				    <el-dropdown trigger="click">
				      <span class="el-dropdown-link">
				        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
				      </span>
				      <el-dropdown-menu slot="dropdown">
				        <el-dropdown-item>黄金糕</el-dropdown-item>
				        <el-dropdown-item>狮子头</el-dropdown-item>
				        <el-dropdown-item>螺蛳粉</el-dropdown-item>
				        <el-dropdown-item>双皮奶</el-dropdown-item>
				        <el-dropdown-item>蚵仔煎</el-dropdown-item>
				      </el-dropdown-menu>
				    </el-dropdown>
			</el-col>
			<el-col :span="12">
				<h4 class="demonstration">菜单隐藏方式</h4>
				    <el-dropdown trigger="click" :hide-on-click="false">
				      <span class="el-dropdown-link">
				        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
				      </span>
				      <el-dropdown-menu slot="dropdown">
				        <el-dropdown-item>黄金糕</el-dropdown-item>
				        <el-dropdown-item>狮子头</el-dropdown-item>
				        <el-dropdown-item>螺蛳粉</el-dropdown-item>
				        <el-dropdown-item>双皮奶</el-dropdown-item>
				        <el-dropdown-item>蚵仔煎</el-dropdown-item>
				      </el-dropdown-menu>
				    </el-dropdown>
			</el-col>
			<el-col :span="12">
			    <h4 class="demonstration">指令事件</h4>
			    <el-dropdown @command="handleCommand">
			      <span class="el-dropdown-link">
			        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
			      </span>
			      <el-dropdown-menu slot="dropdown">
			        <el-dropdown-item command="a">黄金糕</el-dropdown-item>
			        <el-dropdown-item command="b">狮子头</el-dropdown-item>
			        <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
			        <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
			        <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
			      </el-dropdown-menu>
			    </el-dropdown>
			</el-col>
			<el-col :span="24">
			    <h4 class="demonstration">尺寸大小</h4>
			    <el-dropdown split-button type="primary">
			      默认尺寸
			      <el-dropdown-menu slot="dropdown">
			        <el-dropdown-item>黄金糕</el-dropdown-item>
			        <el-dropdown-item>狮子头</el-dropdown-item>
			        <el-dropdown-item>螺蛳粉</el-dropdown-item>
			        <el-dropdown-item>双皮奶</el-dropdown-item>
			        <el-dropdown-item>蚵仔煎</el-dropdown-item>
			      </el-dropdown-menu>
			    </el-dropdown>

			    <el-dropdown size="medium" split-button type="primary">
			      中等尺寸
			      <el-dropdown-menu slot="dropdown">
			        <el-dropdown-item>黄金糕</el-dropdown-item>
			        <el-dropdown-item>狮子头</el-dropdown-item>
			        <el-dropdown-item>螺蛳粉</el-dropdown-item>
			        <el-dropdown-item>双皮奶</el-dropdown-item>
			        <el-dropdown-item>蚵仔煎</el-dropdown-item>
			      </el-dropdown-menu>
			    </el-dropdown>

			    <el-dropdown size="small" split-button type="primary">
			      小型尺寸
			      <el-dropdown-menu slot="dropdown">
			        <el-dropdown-item>黄金糕</el-dropdown-item>
			        <el-dropdown-item>狮子头</el-dropdown-item>
			        <el-dropdown-item>螺蛳粉</el-dropdown-item>
			        <el-dropdown-item>双皮奶</el-dropdown-item>
			        <el-dropdown-item>蚵仔煎</el-dropdown-item>
			      </el-dropdown-menu>
			    </el-dropdown>

			    <el-dropdown size="mini" split-button type="primary">
			      超小尺寸
			      <el-dropdown-menu slot="dropdown">
			        <el-dropdown-item>黄金糕</el-dropdown-item>
			        <el-dropdown-item>狮子头</el-dropdown-item>
			        <el-dropdown-item>螺蛳粉</el-dropdown-item>
			        <el-dropdown-item>双皮奶</el-dropdown-item>
			        <el-dropdown-item>蚵仔煎</el-dropdown-item>
			      </el-dropdown-menu>
			    </el-dropdown>
			</el-col>
		</el-row>
	</div>
</template>
<script>
  export default {
    methods: {
      handleClick() {
        alert('button click');
      },
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }
</script>
<style>
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
    .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>