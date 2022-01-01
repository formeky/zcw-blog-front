<template>
  <div class="home">
    <el-row id="artList" type="flex" justify="space-around">
      <el-col :span="16">
        <div v-for="item in essayList" :key="item.id">
          <z-item v-bind="item"></z-item>
        </div>


        <div class="block pagination">
          <el-pagination layout="prev, pager, next" :total="50">
          </el-pagination>
        </div>
      </el-col>
      <el-col :span="6" class="hidden-sm-and-down" id="side">
        <div class="item">
          <tag></tag>
        </div>
        <div class="item">
          <friend></friend>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import friend from '../components/z-friend'
import tag from '../components/z-tag'
import ZItem from "@/components/z-item";
import axios from 'axios'

export default {
  name: 'home',
  components: {
    ZItem,
    friend,
    tag
  },
  created() {
    this.listEssay()
  },
  data() {
    return {
      essayList: []
    }
  },
  methods: {
    listEssay() {
      axios.get(
          'http://sherry.formeky.xyz:8091/essayList?page=1&rows=10'
      ).then(
          response => {
            this.essayList = response.data.data
          }, error => {
            console.log(error.message)
          }
      )
    }
  }
}
</script>

<style scoped>
#side .item {
  margin-bottom: 30px;
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

img.art-banner {
  width: 100%;
  height: 100%;
  transition: all 0.6s;
}

img.art-banner:hover {
  transform: scale(1.4);
}


.art-more .view {
  color: #aaa;
}

h5 {
  font-size: 18px;
}

.pagination {
  background-color: #F9F9F9;
}

.home {
  opacity: 0.7;
}
</style>
