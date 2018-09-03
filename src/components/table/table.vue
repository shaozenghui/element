<template>
	<div class="table">
		<el-row  :gutter="20">
			<el-col :span="24">
				<h4>基本用法</h4>
				<template>
				    <el-table :data="tableData" style="width: 100%" >
				      <el-table-column prop="date" label="日期" width="180"></el-table-column>
				      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
				      <el-table-column prop="address" label="地址"></el-table-column>
				    </el-table>
				</template>
			</el-col>
			<el-col :span="24">
				<h4>边框</h4>
				<template>
				    <el-table :data="tableData" style="width: 100%" border >
				      <el-table-column prop="date" label="日期" width="180"></el-table-column>
				      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
				      <el-table-column prop="address" label="地址"></el-table-column>
				    </el-table>
				</template>
			</el-col>
			<el-col :span="24">
				<h4>斑马纹</h4>
				<template>
				    <el-table :data="tableData" style="width: 100%" stripe >
				      <el-table-column prop="date" label="日期" width="180"></el-table-column>
				      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
				      <el-table-column prop="address" label="地址"></el-table-column>
				    </el-table>
				</template>
			</el-col>
			<el-col :span="24">
				<h4>带高亮</h4>
				<template>
				    <el-table
					    :data="tableData"
					    style="width: 100%"
					    :row-class-name="tableRowClassName">
					    <el-table-column
					      prop="date"
					      label="日期"
					      width="180">
					    </el-table-column>
					    <el-table-column
					      prop="name"
					      label="姓名"
					      width="180">
					    </el-table-column>
					    <el-table-column
					      prop="address"
					      label="地址">
					    </el-table-column>
					</el-table>
				</template>
			</el-col>
			<el-col :span="24">
				<h4>固定表头</h4>
				<template>
				    <el-table
					    :data="tableData2"
					    style="width: 100%"
					    height="250" 
					    border stripe>
					    <el-table-column
					      prop="date"
					      label="日期"
					      width="180">
					    </el-table-column>
					    <el-table-column
					      prop="name"
					      label="姓名"
					      width="180">
					    </el-table-column>
					    <el-table-column
					      prop="address"
					      label="地址">
					    </el-table-column>
					</el-table>
				</template>
			</el-col>
		     <el-col :span="24">
				<h4>固定列</h4>
			    <el-table
				    :data="tableData"
				    border
				    style="width: 100%">
				    <el-table-column fixed prop="date" label="日期" width="150">
				    </el-table-column>
				    <el-table-column prop="name" label="姓名" width="120">
				    </el-table-column>
				    <el-table-column prop="province" label="省份" width="120">
				    </el-table-column>
				    <el-table-column prop="city" label="市区" width="120">
				    </el-table-column>
				    <el-table-column prop="address" label="地址" width="300">
				    </el-table-column>
				    <el-table-column prop="zip" label="邮编" width="120">
				    </el-table-column>
				    <el-table-column fixed="right" label="操作" width="100">
				      <template slot-scope="scope">
				        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
				        <el-button type="text" size="small">编辑</el-button>
				      </template>
				    </el-table-column>
				  </el-table>
			</el-col>
		   <el-col :span="24">
				<h4>固定列和表头</h4>
			    <el-table
				    :data="tableData2"
				    border
				    style="width: 100%"
				    height="250">
				    <el-table-column fixed prop="date" label="日期" width="150">
				    </el-table-column>
				    <el-table-column prop="name" label="姓名" width="120">
				    </el-table-column>
				    <el-table-column prop="province" label="省份" width="120">
				    </el-table-column>
				    <el-table-column prop="city" label="市区" width="120">
				    </el-table-column>
				    <el-table-column prop="address" label="地址" width="300">
				    </el-table-column>
				    <el-table-column prop="zip" label="邮编" width="120">
				    </el-table-column>
				    <el-table-column fixed="right" label="操作" width="100">
				      <template slot-scope="scope">
				        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
				        <el-button type="text" size="small">编辑</el-button>
				      </template>
				    </el-table-column>
			    </el-table>
		   </el-col>
		   <el-col :span="24">
				<h4>自适应高度</h4>
			    <el-table
				    :data="tableData4"
				    style="width: 100%"
				    
				    max-height="250">
				    <el-table-column
				      fixed
				      prop="date"
				      label="日期"
				      width="150">
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="姓名"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="province"
				      label="省份"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="city"
				      label="市区"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="address"
				      label="地址"
				      width="300">
				    </el-table-column>
				    <el-table-column
				      prop="zip"
				      label="邮编"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      fixed="right"
				      label="操作"
				      width="120">
				      <template slot-scope="scope">
				        <el-button
				          @click.native.prevent="deleteRow(scope.$index, tableData4)"
				          type="text"
				          size="small">
				          移除
				        </el-button>
				      </template>
				    </el-table-column>
				  </el-table>
		   </el-col>
		    <el-col :span="24">
				<h4>多级表头</h4>
                <el-table
                   :data="tableData3"
                   style="width: 100%">
                   <el-table-column
                     prop="date"
                     label="日期"
                     width="150" fixed>
                   </el-table-column>
                   <el-table-column label="配送信息">
                     <el-table-column
                       prop="name"
                       label="姓名"
                       width="120">
                     </el-table-column>
                     <el-table-column label="地址">
                       <el-table-column
                         prop="province"
                         label="省份"
                         width="120">
                       </el-table-column>
                       <el-table-column
                         prop="city"
                         label="市区"
                         width="120">
                       </el-table-column>
                       <el-table-column
                         prop="address"
                         label="地址"
                         width="300">
                       </el-table-column>
                       <el-table-column
                         prop="zip"
                         label="邮编"
                         width="120">
                       </el-table-column>
                     </el-table-column>
                   </el-table-column>
                 </el-table>
			</el-col>
			 <el-col :span="24">
				<h4>单选</h4>
				<el-table
				    ref="singleTable"
				    :data="tableData"
				    highlight-current-row
				    @current-change="handleCurrentChange"
				    style="width: 100%">
				    <el-table-column
				      type="index"
				      width="50">
				    </el-table-column>
				    <el-table-column
				      property="date"
				      label="日期"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      property="name"
				      label="姓名"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      property="address"
				      label="地址">
				    </el-table-column>
				</el-table>
				<div style="margin-top: 20px">
				    <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
				    <el-button @click="setCurrent()">取消选择</el-button>
				</div>
			</el-col>
			<el-col :span="24">
				<h4>多选</h4>
				<el-table
				    ref="multipleTable"
				    :data="tableData3"
				    tooltip-effect="dark"
				    style="width: 100%"
				    @selection-change="handleSelectionChange">
				    <el-table-column
				      type="selection"
				      width="55">
				    </el-table-column>
				    <el-table-column
				      label="日期"
				      width="120">
				      <template slot-scope="scope">{{ scope.row.date }}</template>
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="姓名"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="address"
				      label="地址"
				      show-overflow-tooltip>
				    </el-table-column>
				  </el-table>
				  <div style="margin-top: 20px">
				    <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
				    <el-button @click="toggleSelection()">取消选择</el-button>
				  </div>
			</el-col>
			<el-col :span="24">
				<h4>排序</h4>
				<el-table
				    :data="tableData"
				    style="width: 100%"
				    :default-sort = "{prop: 'date', order: 'descending'}"
				    >
				    <el-table-column
				      prop="date"
				      label="日期"
				      sortable
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="姓名"
				      sortable
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="address"
				      label="地址"
				      :formatter="formatter">
				    </el-table-column>
				</el-table>
			</el-col>
			<el-col :span="24">
				<h4>筛选</h4>
				<el-table
				    :data="tableData11"
				    style="width: 100%">
				    <el-table-column
				      prop="date"
				      label="日期"
				      sortable
				      width="180"
				      :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
				      :filter-method="filterHandler"
				    >
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="姓名"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="address"
				      label="地址"
				      :formatter="formatter">
				    </el-table-column>
				    <el-table-column
				      prop="tag"
				      label="标签"
				      width="100"
				      :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
				      :filter-method="filterTag"
				      filter-placement="bottom-end">
				      <template slot-scope="scope">
				        <el-tag
				          :type="scope.row.tag === '家' ? 'primary' : 'success'"
				          disable-transitions>{{scope.row.tag}}</el-tag>
				      </template>
				    </el-table-column>
				</el-table>
			</el-col>
			<el-col :span="24">
				<h4>自定义模板</h4>
				<el-table
				    :data="tableData"
				    style="width: 100%">
				    <el-table-column
				      label="日期"
				      width="180">
				      <template slot-scope="scope">
				        <i class="el-icon-time"></i>
				        <span style="margin-left: 10px">{{ scope.row.date }}</span>
				      </template>
				    </el-table-column>
				    <el-table-column
				      label="姓名"
				      width="180">
				      <template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				          <p>姓名: {{ scope.row.name }}</p>
				          <p>住址: {{ scope.row.address }}</p>
				          <div slot="reference" class="name-wrapper">
				            <el-tag size="medium">{{ scope.row.name }}</el-tag>
				          </div>
				        </el-popover>
				      </template>
				    </el-table-column>
				    <el-table-column label="操作">
				      <template slot-scope="scope">
				        <el-button
				          size="mini"
				          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
				        <el-button
				          size="mini"
				          type="danger"
				          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				      </template>
				    </el-table-column>
				  </el-table>
			</el-col>
			<el-col :span="24">
				<h4>展开行</h4>
				<el-table
				    :data="tableData5"
				    style="width: 100%">
				    <el-table-column type="expand">
				      <template slot-scope="props">
				        <el-form label-position="left" inline class="demo-table-expand">
				          <el-form-item label="商品名称">
				            <span>{{ props.row.name }}</span>
				          </el-form-item>
				          <el-form-item label="所属店铺">
				            <span>{{ props.row.shop }}</span>
				          </el-form-item>
				          <el-form-item label="商品 ID">
				            <span>{{ props.row.id }}</span>
				          </el-form-item>
				          <el-form-item label="店铺 ID">
				            <span>{{ props.row.shopId }}</span>
				          </el-form-item>
				          <el-form-item label="商品分类">
				            <span>{{ props.row.category }}</span>
				          </el-form-item>
				          <el-form-item label="店铺地址">
				            <span>{{ props.row.address }}</span>
				          </el-form-item>
				          <el-form-item label="商品描述">
				            <span>{{ props.row.desc }}</span>
				          </el-form-item>
				        </el-form>
				      </template>
				    </el-table-column>
				    <el-table-column
				      label="商品 ID"
				      prop="id">
				    </el-table-column>
				    <el-table-column
				      label="商品名称"
				      prop="name">
				    </el-table-column>
				    <el-table-column
				      label="描述"
				      prop="desc">
				    </el-table-column>
				  </el-table>
			</el-col>
			<el-col :span="24">
				<h4>表尾合计行</h4>
				<el-table
				    :data="tableData6"
				    border
				    show-summary
				    style="width: 100%">
				    <el-table-column
				      prop="id"
				      label="ID"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="姓名">
				    </el-table-column>
				    <el-table-column
				      prop="amount1"
				      sortable
				      label="数值 1">
				    </el-table-column>
				    <el-table-column
				      prop="amount2"
				      sortable
				      label="数值 2">
				    </el-table-column>
				    <el-table-column
				      prop="amount3"
				      sortable
				      label="数值 3">
				    </el-table-column>
				  </el-table>

				  <el-table
				    :data="tableData6"
				    border
				    height="200"
				    :summary-method="getSummaries"
				    show-summary
				    style="width: 100%; margin-top: 20px">
				    <el-table-column
				      prop="id"
				      label="ID"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="姓名">
				    </el-table-column>
				    <el-table-column
				      prop="amount1"
				      label="数值 1（元）">
				    </el-table-column>
				    <el-table-column
				      prop="amount2"
				      label="数值 2（元）">
				    </el-table-column>
				    <el-table-column
				      prop="amount3"
				      label="数值 3（元）">
				    </el-table-column>
				  </el-table>
			</el-col>
			<el-col :span="24">
				<h4>合并行或者列</h4>
				<div>
				    <el-table
				      :data="tableData6"
				      :span-method="arraySpanMethod"
				      border
				      style="width: 100%">
				      <el-table-column
				        prop="id"
				        label="ID"
				        width="180">
				      </el-table-column>
				      <el-table-column
				        prop="name"
				        label="姓名">
				      </el-table-column>
				      <el-table-column
				        prop="amount1"
				        sortable
				        label="数值 1">
				      </el-table-column>
				      <el-table-column
				        prop="amount2"
				        sortable
				        label="数值 2">
				      </el-table-column>
				      <el-table-column
				        prop="amount3"
				        sortable
				        label="数值 3">
				      </el-table-column>
				    </el-table>

				    <el-table
				      :data="tableData8"
				      :span-method="objectSpanMethod"
				      border
				      style="width: 100%; margin-top: 20px">
				      <el-table-column
				        prop="id"
				        label="ID"
				        width="180">
				      </el-table-column>
				      <el-table-column
				        prop="name"
				        label="姓名">
				      </el-table-column>
				      <el-table-column
				        prop="amount1"
				        label="数值 1（元）">
				      </el-table-column>
				      <el-table-column
				        prop="amount2"
				        label="数值 2（元）">
				      </el-table-column>
				      <el-table-column
				        prop="amount3"
				        label="数值 3（元）">
				      </el-table-column>
				    </el-table>
				  </div>
			</el-col>
			<el-col :span="24">
				<h4>全部功能</h4>
				<el-table
				  :data="tableData2"
			      style="width: 100%;margin-bottom: 40px"
			      border
			      stripe
			      height='350'
			      >
			      
			      <el-table-column
				      type="selection"
				      width="55">
				   </el-table-column>
			      <el-table-column
			        prop="date"
			        label="日期"
			        width="180"
			        sortable 
			        :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
      				:filter-method="filterHandler">
			      </el-table-column>
			      <el-table-column
			        prop="name"
			        label="姓名"
			        width="180"
			        sortable :filters="[{text: '王小虎', value: '王小虎'}, {text: '王小虎1', value: '王小虎1'}, {text: '王小虎2', value: '王小虎2'}, {text: '王小虎3', value: '王小虎3'}]"
                    :filter-method="filterHandler">
			      </el-table-column>
			      <el-table-column
			        prop="address"
			        label="地址"
			        sortable >
			      </el-table-column>
			      <el-table-column label="操作">
			        <template slot-scope="scope">
			          <el-button
			            size="mini"
			            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
			          <el-button
			            size="mini"
			            type="danger"
			            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
			        </template>
			      </el-table-column>
				</el-table>
			</el-col>
		</el-row>
	</div>
</template>
<script>
export default {  
    data() {
      return {
      	tableData8: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }],
      	tableData: [{
	        date: '2016-05-02',
	        name: '王小虎1',
	        address: '上海市普陀区金沙江路 1518 弄'
	    }, {
	        date: '2016-05-04',
	        name: '王小虎',
	        address: '上海市普陀区金沙江路 1517 弄'
	    }, {
	        date: '2016-05-01',
	        name: '王小虎2',
	        address: '上海市普陀区金沙江路 1519 弄'
	    }, {
	        date: '2016-05-03',
	        name: '王小虎3',
	        address: '上海市普陀区金沙江路 1516 弄'
	    }],
	    tableData2: [{
	        date: '2016-05-02',
	        name: '王小虎',
	        address: '上海市普陀区金沙江路 1518 弄'
	    }, {
	        date: '2016-05-04',
	        name: '王小虎',
	        address: '上海市普陀区金沙江路 1517 弄'
	    }, {
	        date: '2016-05-01',
	        name: '王小虎',
	        address: '上海市普陀区金沙江路 1519 弄'
	    }, {
	        date: '2016-05-03',
	        name: '王小虎',
	        address: '上海市普陀区金沙江路 1516 弄'
	    },{
	        date: '2016-05-02',
	        name: '王小虎',
	        address: '上海市普陀区金沙江路 1518 弄'
	    }, {
	        date: '2016-05-04',
	        name: '王小虎',
	        address: '上海市普陀区金沙江路 1517 弄'
	    }, {
	        date: '2016-05-01',
	        name: '王小虎',
	        address: '上海市普陀区金沙江路 1519 弄'
	    }, {
	        date: '2016-05-03',
	        name: '王小虎',
	        address: '上海市普陀区金沙江路 1516 弄'
	    }],
	     tableData4: [{
	        date: '2016-05-02',
	        name: '王小虎',
	        address: '上海市普陀区金沙江路 1518 弄'
	    }, {
	        date: '2016-05-04',
	        name: '王小虎',
	        address: '上海市普陀区金沙江路 1517 弄'
	    }, {
	        date: '2016-05-01',
	        name: '王小虎',
	        address: '上海市普陀区金沙江路 1519 弄'
	    }, {
	        date: '2016-05-03',
	        name: '王小虎',
	        address: '上海市普陀区金沙江路 1516 弄'
	    },{
	        date: '2016-05-02',
	        name: '王小虎',
	        address: '上海市普陀区金沙江路 1518 弄'
	    }, {
	        date: '2016-05-04',
	        name: '王小虎',
	        address: '上海市普陀区金沙江路 1517 弄'
	    }, {
	        date: '2016-05-01',
	        name: '王小虎',
	        address: '上海市普陀区金沙江路 1519 弄'
	    }, {
	        date: '2016-05-03',
	        name: '王小虎',
	        address: '上海市普陀区金沙江路 1516 弄'
	    }],
	    tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }],
        tableData11: [{
         date: '2016-05-02',
         name: '王小虎',
         address: '上海市普陀区金沙江路 1518 弄',
         tag: '家'
       }, {
         date: '2016-05-04',
         name: '王小虎',
         address: '上海市普陀区金沙江路 1517 弄',
         tag: '公司'
       }, {
         date: '2016-05-01',
         name: '王小虎',
         address: '上海市普陀区金沙江路 1519 弄',
         tag: '家'
       }, {
         date: '2016-05-03',
         name: '王小虎',
         address: '上海市普陀区金沙江路 1516 弄',
         tag: '公司'
       }],
       tableData5: [{
         id: '12987122',
         name: '好滋好味鸡蛋仔',
         category: '江浙小吃、小吃零食',
         desc: '荷兰优质淡奶，奶香浓而不腻',
         address: '上海市普陀区真北路',
         shop: '王小虎夫妻店',
         shopId: '10333'
       }, {
         id: '12987123',
         name: '好滋好味鸡蛋仔',
         category: '江浙小吃、小吃零食',
         desc: '荷兰优质淡奶，奶香浓而不腻',
         address: '上海市普陀区真北路',
         shop: '王小虎夫妻店',
         shopId: '10333'
       }, {
         id: '12987125',
         name: '好滋好味鸡蛋仔',
         category: '江浙小吃、小吃零食',
         desc: '荷兰优质淡奶，奶香浓而不腻',
         address: '上海市普陀区真北路',
         shop: '王小虎夫妻店',
         shopId: '10333'
       }, {
         id: '12987126',
         name: '好滋好味鸡蛋仔',
         category: '江浙小吃、小吃零食',
         desc: '荷兰优质淡奶，奶香浓而不腻',
         address: '上海市普陀区真北路',
         shop: '王小虎夫妻店',
         shopId: '10333'
       }],
       tableData6: [{
         id: '12987122',
         name: '王小虎',
         amount1: '234',
         amount2: '3.2',
         amount3: 10
       }, {
         id: '12987123',
         name: '王小虎',
         amount1: '165',
         amount2: '4.43',
         amount3: 12
       }, {
         id: '12987124',
         name: '王小虎',
         amount1: '324',
         amount2: '1.9',
         amount3: 9
       }, {
         id: '12987125',
         name: '王小虎',
         amount1: '621',
         amount2: '2.2',
         amount3: 17
       }, {
         id: '12987126',
         name: '王小虎',
         amount1: '539',
         amount2: '4.1',
         amount3: 15
       }]
      }
    },
    methods: {
    	tableRowClassName({row, rowIndex}) {
	        if (rowIndex === 1) {
	          return 'warning-row';
	        } else if (rowIndex === 3) {
	          return 'success-row';
	        }
	        return '';
	    },
	    handleClick(row) {
           console.log(row);
        },
        deleteRow(index, rows) {
          rows.splice(index, 1);
      	},
      	setCurrent(row) {
           this.$refs.singleTable.setCurrentRow(row);
        },
	    handleCurrentChange(val) {
	       this.currentRow = val;
	    },
	     toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
	    },
	    handleSelectionChange(val) {
	        this.multipleSelection = val;
	    },
	    formatter(row, column) {
          return row.address;
        },
         filterTag(value, row) {
           return row.tag === value;
         },
         filterHandler(value, row, column) {
           const property = column['property'];
           return row[property] === value;
         },
         handleEdit(index, row) {
            console.log(index, row);
          },
          handleDelete(index, row) {
            console.log(index, row);
          },
          getSummaries(param) {
             const { columns, data } = param;
             const sums = [];
             columns.forEach((column, index) => {
               if (index === 0) {
                 sums[index] = '总价';
                 return;
               }
               const values = data.map(item => Number(item[column.property]));
               if (!values.every(value => isNaN(value))) {
                 sums[index] = values.reduce((prev, curr) => {
                   const value = Number(curr);
                   if (!isNaN(value)) {
                     return prev + curr;
                   } else {
                     return prev;
                   }
                 }, 0);
                 sums[index] += ' 元';
               } else {
                 sums[index] = 'N/A';
               }
             });

             return sums;
         },
         arraySpanMethod({ row, column, rowIndex, columnIndex }) {
                 if (rowIndex % 2 === 0) {
                   if (columnIndex === 0) {
                     return [1, 2];
                   } else if (columnIndex === 1) {
                     return [0, 0];
                   }
                 }
               },

               objectSpanMethod({ row, column, rowIndex, columnIndex }) {
                 if (columnIndex === 0) {
                   if (rowIndex % 2 === 0) {
                     return {
                       rowspan: 2,
                       colspan: 1
                     };
                   } else {
                     return {
                       rowspan: 0,
                       colspan: 0
                     };
                   }
                 }
               }
         }
  }
</script>
<style>
.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .demo-table-expand {
      font-size: 0;
    }
    .demo-table-expand label {
      width: 90px;
      color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 50%;
    }
</style>
