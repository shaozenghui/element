<template>
	<div class="tag">
		<el-row>
			<el-col :span="24">
				<h4>基础展示</h4>
				<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
			</el-col>
			<el-col :span="24">
				<h4>可选择</h4>
				<el-tree :data="data" :props="defaultProps" show-checkbox @check-change="handleCheckChange"></el-tree>
			</el-col>
		</el-row>
    <el-row>
      <el-col :span="24">
        <h4>基础用法</h4>
        <el-badge :value="value" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="3" class="item">
          <el-button size="small">回复</el-button>
        </el-badge>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item class="clearfix">
              评论
              <el-badge class="mark" :value="12" />
            </el-dropdown-item>
            <el-dropdown-item class="clearfix">
              回复
              <el-badge class="mark" :value="3" />
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="24">
        <h4>设置最大值</h4>
        <el-badge :value="200" :max="99" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="100" :max="10" class="item">
          <el-button size="small">回复</el-button>
        </el-badge>
      </el-col>
      <el-col :span="24">
        <h4>自定义内容</h4>
        <el-badge value="new" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge value="hot" class="item">
          <el-button size="small">回复</el-button>
        </el-badge>
      </el-col>
      <el-col :span="24">
        <h4>小红点</h4>
        <el-badge is-dot class="item">数据查询</el-badge>
        <el-badge is-dot class="item">
          <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
        </el-badge>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <h4>基础用法</h4>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <h4>图标分隔符</h4>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        
      </el-col>
    </el-row>
	</div>
</template>
<script>
  export default {
    data() {
      return {
         value:10,
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        },
        {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, 
          {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, 
        {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, 
          {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
       
      };
    },
    methods: {
	    handleNodeClick(data) {
	        console.log(data);
	    },
	    handleCheckChange(data, checked, indeterminate) {
		      console.log(data, checked, indeterminate);
		},
		
    }
  };
</script>
<style>
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>