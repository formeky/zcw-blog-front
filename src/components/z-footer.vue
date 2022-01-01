<template>
  <div class="z-footer">
    <el-main class="main">
      <el-row>
        <!--<el-col :span="8" class="item-col">
          <div class="title">常用工具</div>
          <div class="item"><a href="#" class="out-link">aaa</a></div>
          <div class="item"><a href="#" class="out-link">aa</a></div>
        </el-col>-->
        <el-col :span="8" class="item-col">
          <div class="title">{{$t('footer.expressLane')}}</div>
<!--          <div class=""><a href="https://gitee.com/fengziy" class="out-link">{{$t('footer.gitee')}}</a></div>-->
          <div class=""><a href="https://blog.csdn.net/Accept666" target="_blank" class="out-link">CSDN</a></div>
          <div class=""><a href="https://juejin.cn/user/2955908861657661" target="_blank" class="out-link">掘金</a></div>
<!--          <div class=""><a href="#" class="out-link">{{$t('footer.admin')}}</a></div>-->
        </el-col>
        <el-col :span="8" class="item-col weside">
          <div class="item">
            <i class="el-icon-caret-right"></i>
            本站已稳定运行123天4时36分22秒
          </div>
          <div class="item">
            <i class="el-icon-caret-right"></i>
            2352427469@qq.com
          </div>
          <div class="item">
            <i class="el-icon-caret-right"></i>
            Copyright © 2021 sherry | <a class="out-link" href="http://www.beian.miit.gov.cn">蜀ICP备2020034677号</a>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
export default {
  name: 'z-footer'
}
</script>

<style scoped>
.z-footer{
  padding: 20px;
  text-align: center;
  color: #fff;
  background-color: #555;
}
.main{
  width: 70%;
  margin: 0 auto;
  color: #ccc;
}
.out-link{
  text-decoration: none;
  color: #ccc;
}
.out-link:hover{
  color: #ffffff;
}
.item-col{
  text-align: left;
}
.item-col.weside{
  font-size: 14px;
}
.item-col .title{
  color: #ddd;
  margin-bottom: 10px;
}
.item span{
  margin-right: 5px;
}
</style>