<style scoped lang='scss'>
.vuetable {}
</style>

<template>
  <div class="vuetable">
    <el-table :data="tableData" border stripe style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template scope="scope">
          <el-button @click="handleClick(scope.$index, scope.row)" type="text" size="small">查看</el-button>
          <el-dialog v-model="visible">
            <p>{{scope.$index, scope.row}}</p>
          </el-dialog>
          <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      tableData: [{
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
      }]
    }
  },
  methods: {
    handleClick (index, row) {
      const h = this.$createElement
      this.$msgbox({
        title: '消息',
        message: h('div', [
          h('p', row.date),
          h('p', row.name),
          h('p', row.address)
        ]),
        confirmButtonText: '确定'
      })
    },
    deleteRow (index, rows) {
      rows.splice(index, 1)
    }
  }
}
</script>