<template>
  <div class="archive">
    <div class="count">{{ this.$route.params.name || $t('header.archive') }}：234{{ $t('archive.article') }}</div>
    <el-timeline>
      <el-timeline-item v-for="(activity, index) in activities" :key="index" :color="activity.color"
                        :timestamp="activity.date" placement="top" @mouseenter="hoverLine(activity)">
        <div class="line-item">
          <router-link :to="{
          name:'essay',
          params:{
            essayId:activity.id
          }
        }" tag="span">{{ activity.title }}
          </router-link>
        </div>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'archive',
  created() {
    this.archive()
  },
  data() {
    return {
      activities: []
    };
  },
  methods: {
    hoverLine(activity) {
      activity.color = "#409eff"
    },
    archive() {
      axios.get(
          'http://sherry.formeky.xyz:8091/archive'
      ).then(
          response => {
            console.log(response.data.data)
            this.activities = response.data.data
          }, error => {
            console.log(error.message)
          }
      )
    }
  }
}
</script>

<style scoped>
.line-item {
  display: inline-block;
}

.line-item:hover {
  cursor: pointer;
  color: #80b2f5;
}

.count {
  margin-bottom: 20px;
  font-size: 20px;
  color: #E6A23C;
}
</style>
