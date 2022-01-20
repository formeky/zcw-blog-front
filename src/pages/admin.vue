<template>
  <div class="home">
    <div class="tool">
      <el-input class="searchInput" v-model="keyword" placeholder="请输入内容" clearable></el-input>
      <el-button type="primary" @click="search">搜索</el-button>
      <el-button type="primary" @click="handleTag">添加标签</el-button>
      <el-button type="primary" @click="handleFriend">添加友链</el-button>
      <el-button type="primary" @click="handleItem">添加文章</el-button>
    </div>

    <el-row id="artList" type="flex" justify="space-around">
      <el-col :span="16">
        <el-table
            :data="essayList"
            style="width: 100%">
          <el-table-column
              prop="date"
              label="日期"
              width="180">
          </el-table-column>
          <el-table-column
              prop="title"
              label="标题"
              width="180">
          </el-table-column>
          <el-table-column
              prop="briefIntroduction"
              label="简介"
              show-overflow-tooltip>
          </el-table-column>
          <el-table-column align="center" class-name="small-padding fixed-width" label="操作">
            <template slot-scope="scope">
              <el-button
                  size="mini"
                  type="text"
                  icon="el-icon-edit"
                  @click="handleUpdate(scope.row)"
              ></el-button>
              <el-button
                  size="mini"
                  type="text"
                  icon="el-icon-delete"
                  @click="handleDelete(scope.row)"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
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

<!--    修改或添加文章-->
    <el-dialog :title="title" :visible.sync="open" width="1200px" append-to-body>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title" placeholder="请输入标题" />
        </el-form-item>
        <el-form-item label="摘要" prop="briefIntroduction">
          <el-input v-model="form.briefIntroduction" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="文章内容">
          <vue-editor v-model="form.content"  > </vue-editor>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submit">确定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import axios from "axios";
import friend from '../components/z-friend'
import tag from '../components/z-tag'
import { VueEditor } from "vue2-editor";

export default {
  name: "admin",
  components: {
    friend,
    tag,
    VueEditor
  },
  data() {
    return {
      essayList: [],
      keyword:'',
      title:'编辑',
      open:false,
      form:{},
      isUpdate:true
    }
  },
  created() {
    this.listEssay()
  },
  methods: {
    listEssay() {
      axios.get(
          // 'http://sherry.formeky.xyz:8091/essayList?page=1&rows=10'
          'http://localhost:8080/admin/essayList?page=1&rows=10&title='+this.keyword
      ).then(
          response => {
            this.essayList = response.data.data
          }, error => {
            console.log(error.message)
          }
      )
    },
    corsTest(){
      axios.get(
          'http://222.196.35.21:9011/search/v1/techCategory'
      ).then(
          response => {
            this.essayList = response.data.data
          }, error => {
            console.log(error.message)
          }
      )
    },
    search(){
      this.listEssay();
    },
    submit(){
      if (this.isUpdate){
        this.update()
      }else{
        this.add()
      }
    },
    update(){
      axios.put(
          'http://localhost:8080/admin/essay',
          {
            id:this.form.id,
            title:this.form.title,
            briefIntroduction:this.form.briefIntroduction,
            content:this.form.content
          })
          .then(
              response => {
                if (response.data.code == 200) {
                  this.$message.success('修改成功');
                  this.open=false
                  this.listEssay();
                }else{
                  this.$message.error('修改失败了哦亲');
                }
              }, error => {
                this.$message.error('出现了一点小意外哦，请稍后再试');
                console.log(error.message)
              })
    },
    add(){
      axios.post(
          'http://localhost:8080/admin/essay',
          {
            id:this.form.id,
            title:this.form.title,
            briefIntroduction:this.form.briefIntroduction,
            content:this.form.content
          })
          .then(
              response => {
                if (response.data.code == 200) {
                  this.$message.success('新增成功');
                  this.open=false
                  this.listEssay();
                }else{
                  this.$message.error('新增失败了哦亲');
                }
              }, error => {
                this.$message.error('出现了一点小意外哦，请稍后再试');
                console.log(error.message)
              })
    },
    handleUpdate(row){
      this.isUpdate = true
      this.detail(row)
      console.log(row)
      this.open = true
    },
    handleDelete(row){
      console.log(row)
      axios.get('http://localhost:8080/admin/essay/'+row.id)
      .then(
          response => {
            if (response.data.code == 200) {
              this.$message.success('删除成功');
              this.listEssay()
            }else{
              this.$message.error('删除失败了哦亲');
            }
      }, error => {
            this.$message.error('出现了一点小意外哦，请稍后再试');
        console.log(error.message)
      })
    },
    handleItem(){
      this.form={}
      this.isUpdate=false
      this.open=true
    },
    handleTag(){
      this.isUpdate=false
      this.open=true
    },
    handleFriend(){
      this.isUpdate=false
      this.open=true
    },
    cancel(){
      this.open=false
      this.form={}
    },
    detail(row){
      axios.get('http://localhost:8080/admin/essay?essayId='+row.id)
          .then(
              response => {
                if (response.data.code == 200) {
                  console.log(response.data)
                  this.form = response.data.data
                }else{
                  this.$message.error('获取失败了哦亲');
                }
              }, error => {
                this.$message.error('出现了一点小意外哦，请稍后再试');
                console.log(error.message)
              })
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
.searchInput{
  width: 25%;
  margin: 20px;
}
.tool{
  display: flex;
  align-items: center;
}
</style>
