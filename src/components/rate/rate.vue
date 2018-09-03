<template>
	<div class="rate">
		<el-row >
			<el-col :span="12">
				<p>默认不区分颜色</p>
				 <el-rate v-model="value1" ></el-rate>
			</el-col>
			<el-col :span="12">
				<p>区分颜色</p>
				 <el-rate v-model="value2"  :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
			</el-col>
			<el-col :span="12">
				<p>辅助文字</p>
				<el-rate v-model="value3" show-text :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
				</el-rate>
			</el-col>
			<el-col :span="12">
				<p>其他图标</p>
				<el-rate
				  v-model="value4"
				  :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
				  void-icon-class="icon-rate-face-off"
				  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
				</el-rate>
			</el-col>
			<el-col :span="12">
				<p>只读</p>
				<el-rate
				  v-model="value5"
				  disabled
				  show-score
				  text-color="#ff9900"
				  score-template="{value}">
				</el-rate>
			</el-col>
			<el-col :span="12">
				<p>颜色选择器(默认值)</p>
				<el-color-picker v-model="color1"></el-color-picker>
			</el-col>
			<el-col :span="12">
				<p>颜色选择器(无默认值)</p>
				<el-color-picker v-model="color2"></el-color-picker>
			</el-col>
			<el-col :span="12">
				<p>透明度</p>
				<el-color-picker v-model="color3" show-alpha></el-color-picker>
			</el-col>
			<el-col :span="12">
				<p>预定义颜色</p>
				<el-color-picker
				  v-model="color5"
				  show-alpha
				  :predefine="predefineColors">
				</el-color-picker>
			</el-col>
			<el-col :span="12">
				<p>不同尺寸</p>
				<el-color-picker v-model="color4"></el-color-picker>
				<el-color-picker v-model="color4" size="medium"></el-color-picker>
				<el-color-picker v-model="color4" size="small"></el-color-picker>
				<el-color-picker v-model="color4" size="mini"></el-color-picker>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				value1:null,
				value2:null,
				value3:null,
				value4:null,
				value5: 3.7,
				color1: '#409EFF',
				color2:null,
				color3: 'rgba(19, 206, 102, 0.8)',
				color4: '#409EFF',
				color5: 'rgba(255, 69, 0, 0.68)',
		        predefineColors: [
		          '#ff4500',
		          '#ff8c00',
		          '#ffd700',
		          '#90ee90',
		          '#00ced1',
		          '#1e90ff',
		          '#c71585',
		          'rgba(255, 69, 0, 0.68)',
		          'rgb(255, 120, 0)',
		          'hsv(51, 100, 98)',
		          'hsva(120, 40, 94, 0.5)',
		          'hsl(181, 100%, 37%)',
		          'hsla(209, 100%, 56%, 0.73)',
		          '#c7158577'
		        ]
			}
		},
		methods:{

		}
	}
</script>
<style>
	
</style>