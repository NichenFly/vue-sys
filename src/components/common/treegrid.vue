<template>
  <div class="treelist">
    <dl class="bar" v-for="li in bar" :key="li.index">
      <dt>{{li.name}}</dt>
      <dd v-for="i in li.types" :key="i.index">{{i.title}}</dd>
      <dd>操作</dd>
    </dl>
    <ul>
      <li class="list" v-for="li in tree" :key="li.index">
        <dl class="title">
          <dt :class="['lev-'+ li.indent]" @click="li.expanded=!li.expanded">
            <i v-if="li.children" :class="[li.expanded ? 'el-icon-arrow-down':'el-icon-arrow-right']" ></i>
            <i v-else class="el-icon-document"></i>
            {{li.name}}
          </dt>
          <dd v-for="i in li.types" :key="i.index">{{i.li}}</dd>
          <dd class="btn">
            <el-button type="primary" size="small">查看</el-button>
            <el-button type="danger" size="small">删除</el-button>
          </dd>
        </dl>
        <tree v-show="li.expanded" :tree="li.children"></tree>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tree',
  props: [
    'tree',
    'bar'
  ]
}
</script>

<style scoped lang="scss">
.treelist {
  .bar {
    border-bottom: 1px solid #e9eaec;
    text-align: right;
    background-color: #f8f8f9;
    dd,
    dt {
      display: inline-block;
      height: 40px;
      line-height: 40px;
      vertical-align: middle;
    }
    dt {
      user-select: none;
      float: left;
      margin-left: 20px;
    }
    dd {
      width: 10%;
      text-align: center;
      border-left: 1px solid #e9eaec;
      &:last-child{
        min-width: 100px;
      }
    }
  }
  .list {
    .title {
      text-align: right;
      border-bottom: 1px solid #e9eaec;
      dt {
        float: left;
        user-select: none;
        cursor: pointer;
      }
      dt,
      dd {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        vertical-align: middle;
      }
      dd {
        width: 10%;
        text-align: center;
        border-left: 1px solid #e9eaec;
      }
      .btn {
        min-width: 100px;
        button {
          margin-left: 4px;
          &:first-child {
            margin-left: 0;
          }
        }
      }

      @for $n from 0 through 10 {
        .lev-#{$n} {
          margin-left: 20px * $n;
        }
      }
    }
  }
}
</style>
