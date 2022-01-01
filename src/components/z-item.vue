<template>

  <el-row class="art-item">
    <el-card shadow="hover">
      <h5>
        <router-link :to="{
          name:'essay',
          params:{
            essayId:id
          }
        }" tag="span" class="art-title">
          {{ title }}
        </router-link>
      </h5>
      <el-row class="art-info d-flex align-items-center justify-content-start">
        <div class="art-time"><i class="el-icon-time"></i>：{{ date }}</div>
        <div class="d-flex align-items-center"><img class="tag" src="../assets/tag.png"/>：
          <el-tag size="mini">{{ tag }}</el-tag>
        </div>
      </el-row>
      <el-row class="art-body">
        <div class="side-img hidden-sm-and-down"><img class="art-banner" src="../assets/vue.jpg"></div>
        <div class="side-abstract">
          <div class="art-abstract">
            {{ briefIntroduction }}
          </div>
          <div class="art-more">
            <router-link :to="{
              name:'essay',
              params:{
                essayId:id
              }
            }" tag="span">
              <el-button plain>{{ $t('home.readMore') }}</el-button>
            </router-link>
            <div class="view"><i class="el-icon-view"></i>{{ view }}</div>
          </div>
        </div>
      </el-row>
    </el-card>
  </el-row>

</template>

<script>
export default {
  name: "z-item",
  props: ['title', 'date', 'briefIntroduction', 'view', 'tag', 'id']
}
</script>

<style scoped>
.art-item {
  margin-bottom: 30px;
  position: relative;
}

.art-item .star {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 0;
  right: 0;
}

img.tag {
  width: 16px;
  height: 16px;
}

.art-title {
  border-left: 3px solid #F56C6C;
  padding-left: 5px;
  cursor: pointer;
}

.art-title:hover {
  padding-left: 10px;
  color: #409EFF;
}

.art-time {
  margin-right: 20px;
}

.art-body {
  display: flex;
  padding: 10px 0;
}

.side-img {
  height: 150px;
  width: 270px;
  overflow: hidden;
  margin-right: 10px;
}

img.art-banner {
  width: 100%;
  height: 100%;
  transition: all 0.6s;
}

img.art-banner:hover {
  transform: scale(1.4);
}

.side-abstract {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.art-abstract {
  flex: 1;
  color: #1a1616;
}

.art-more {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.art-more .view {
  color: #aaa;
}
</style>
