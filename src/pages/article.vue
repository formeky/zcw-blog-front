<template>
  <div>
    <el-row class="main" type="flex" justify="center">
      <el-col :span="16">
        <div id="artcle-info">
          <h2 class="text-center"><strong>{{essay.title}}</strong></h2>
          <!-- 描述：文章信息 -->
          <div class="text-center timeAndView">
						<span class="article-time">
							<i class="el-icon-time"></i>
							发表于：<span>{{essay.date}}</span>
						</span>
            &nbsp;|&nbsp;
            <span class="article-views">
							<i class="el-icon-view"></i>
							阅读量：<span>1</span>万
						</span>
          </div>
          <p class="abstract">
            前言：{{essay.briefIntroduction}}
          </p>
        </div>
        <hr/>
        <div id="artcle-content">
          <div v-html="essay.content"></div>
        </div>
        <div id="statement">
          <div class="item">{{ $t('article.author') }}：{{essay.author}}</div>
          <div class="item">{{ $t('article.originalLink') }}：
            <a href="http://sherry.formeky.xyz/">http://sherry.formeky.xyz/</a>
          </div>
          <div class="item">{{ $t('article.copyright') }}：本博客所有文章除特别声明外,转载请注明出处!</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'essay',
  created() {
    this.getEssay(this.$route.params.essayId)
  },
  data() {
    return {
      essay: {
        author: 'zcw',
        briefIntroduction: "前言以下只是我个人在学习设计模式的过程中的笔记，并不专业，各位大佬如果发现错误的话，欢迎在评论区指出。单例模式介绍在开发过程中，很多对象其实我们只需要一个（线程池，缓存.......），而单例模式确保一个类只有一个实例，并提供一个全局访问点，如果想要访问此实例就必须通过全局访问点。单例模式的实现过程",
        classifyIds: "1",
        content: null,
        date: "2021-12-28T13:11:36.000+00:00",
        del: null,
        id: 1,
        tagIds: "1",
        title: "单例模式"
      }
    }
  },
  methods: {
    getEssay(id) {
      axios.get(
          'http://sherry.formeky.xyz:8091/essay?essayId='+id
      ).then(
          response => {
            this.essay = response.data.data
          }, error => {
            console.log(error.message)
          }
      )
    }
  }
}
</script>

<style scoped>
#artcle-info {
  padding: 20px;
  background-image: url(../assets/vue.jpg);
  margin-bottom: 40px;
}

#artcle-info .abstract {
  color: #ffffff;
  border-left: 3px solid #F56C6C;
  padding: 10px;
  background-color: rgba(126, 129, 135, 0.3);
}

#artcle-info .timeAndView {
  padding: 20px;
  line-height: 30px;
  font-size: 16px;
  color: #ffffff;
}

pre.has {
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.8);
}

img.has {
  width: 100%;
}

#statement {
  border-left: 3px solid #F56C6C;
  padding: 20px;
  background-color: #EBEEF5;
}
</style>
