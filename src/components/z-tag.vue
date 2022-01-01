<template>
  <div class="tag">
    <el-card class="box-card">
      <div slot="header" class="d-flex align-items-center">
        <img class="card-icon" src="../assets/biaoqian.png"/>
        <span>{{ $t('tag.tag') }}</span>
      </div>
      <div class="text item">
        <el-tag size="mini" class="tag-item" v-for="item in tags" :key="item.id" @click="tag(item.tag)" >{{item.tag}}</el-tag>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'tag',
  created(){
    this.tagList()
  },
  methods: {

    tag(name) {
      this.$router.push({
        name: 'tag',
        params: {
          'name': name
        }
      });
    },
    tagList(){
      axios.get(
          'http://sherry.formeky.xyz:8091/tag'
      ).then(
          response => {
            console.log(response.data.data)
            this.tags = response.data.data
          }, error => {
            console.log(error.message)
          }
      )
    }
  },
  data() {
    return {
      tags:[]
    }
  }
}
</script>

<style scoped>
.box-card .item:hover {
  color: #409EFF;
  cursor: pointer;
}

.box-card span {
  font-weight: bold;
}

.card-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.tag-item {
  margin-right: 10px;
}

</style>
