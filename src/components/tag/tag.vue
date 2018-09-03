<template>
	<div class="tag">
		<el-row>
			<el-col :span="24">
				<h4>基本用法</h4>
				<el-tag>标签一</el-tag>
				<el-tag type="success">标签二</el-tag>
				<el-tag type="info">标签三</el-tag>
				<el-tag type="warning">标签四</el-tag>
				<el-tag type="danger">标签五</el-tag>
			</el-col>
			<el-col :span="24">
				<h4>动态可编辑标签</h4>
				<el-tag
				  :key="tag"
				  v-for="tag in dynamicTags"
				  closable
				  :disable-transitions="false"
				  @close="handleClose(tag)">
				  {{tag}}
				</el-tag>
				<el-input
				  class="input-new-tag"
				  v-if="inputVisible"
				  v-model="inputValue"
				  ref="saveTagInput"
				  size="small"
				  @keyup.enter.native="handleInputConfirm"
				  @blur="handleInputConfirm"
				>
				</el-input>
				<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
			</el-col>
			<el-col :span="24">
				<h4>不同尺寸</h4>
				<el-tag closable>标签一</el-tag>
				<el-tag type="info" size="medium" closable>标签三</el-tag>
				<el-tag type="warning" size="small" closable>标签四</el-tag>
				<el-tag type="danger" size="mini" closable>标签五</el-tag>
			</el-col>
			<el-row>
				<el-col :span="12">
					<h4>线形进度条 — 百分比外显</h4>
					<el-progress :stroke-width="18" :percentage="0"></el-progress>
					<el-progress :stroke-width="18" :percentage="70"></el-progress>
					<el-progress :stroke-width="18" :percentage="80" color="#8e71c7"></el-progress>
					<el-progress :stroke-width="18" :percentage="100" status="success"></el-progress>
					<el-progress :stroke-width="18" :percentage="50" status="exception"></el-progress>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<h4>线形进度条 — 百分比内显</h4>
					<el-progress  :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
					<el-progress  :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
					<el-progress  :text-inside="true" :stroke-width="18" :percentage="80" color="#8e71c7"></el-progress>
					<el-progress  :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
					<el-progress  :text-inside="true"  :stroke-width="18" :percentage="50" status="exception"></el-progress>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<h4>环形进度条 — 百分比内显</h4>
					<el-progress type="circle" :percentage="0"></el-progress>
					<el-progress type="circle" :percentage="25"></el-progress>
					<el-progress type="circle" :percentage="80" color="#8e71c7"></el-progress>
					<el-progress type="circle" :percentage="100" status="success"></el-progress>
					<el-progress type="circle" :percentage="50" status="exception"></el-progress>
				</el-col>
			</el-row>
		</el-row>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				 dynamicTags: ['标签一', '标签二', '标签三'],
		        inputVisible: false,
		        inputValue: ''
			}
		},
		methods: {
	      handleClose(tag) {
	        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
	      },

	      showInput() {
	        this.inputVisible = true;
	        this.$nextTick(_ => {
	          this.$refs.saveTagInput.$refs.input.focus();
	        });
	      },

	      handleInputConfirm() {
	        let inputValue = this.inputValue;
	        if (inputValue) {
	          this.dynamicTags.push(inputValue);
	        }
	        this.inputVisible = false;
	        this.inputValue = '';
	      }
	    }
	}
</script>
<style>
	.el-tag + .el-tag {
	    margin-left: 10px;
	  }
	  .button-new-tag {
	    margin-left: 10px;
	    height: 32px;
	    line-height: 30px;
	    padding-top: 0;
	    padding-bottom: 0;
	  }
	  .input-new-tag {
	    width: 90px;
	    margin-left: 10px;
	    vertical-align: bottom;
	  }
	  .el-progress{
	  	margin: 10px;
	  }
</style>