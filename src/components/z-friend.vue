<template>
  <div class="friend">
    <el-card class="box-card">
      <div slot="header" class="d-flex align-items-center">
        <img class="card-icon" src="../assets/lianjie.png"/>
        <span>{{ $t('friend.friend') }}</span>
        <el-button class="ml-auto" style="padding: 3px 0" type="text">
          <router-link to="/apply" tag="span">{{ $t('friend.exchange') }}</router-link>
        </el-button>
      </div>
      <div class="text item" v-for="item in links" :key="item.id">
        <a :href=item.link target="_blank">{{item.name}}的博客</a>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'z-friend',
  data(){
    return{
      links:[{
       id:1,
       name:'sherry',
       link:'http://sherry.formeky.xyz/'
      },{
        id:2,
        name:'jealh',
        link:'https://jealh.xyz/'
      }]
  }
}
}
</script>

<style scoped>
.box-card .item a {
  text-decoration: none;
  /*color: #F56C6C;*/
}

.box-card span {
  font-weight: bold;
}

.card-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>