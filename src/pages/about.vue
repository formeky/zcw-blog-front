<template>
	<div class="about">
		<el-row class="main" type="flex" justify="center">
			<el-col :span="16">
				<h5 class="title"><i class="el-icon-star-on"></i>{{$t('about.aboutMe')}}</h5>
				<div class="statement">
					<div class="item">雪莉酒,来自西南科技大学数据与知识工程后端组的一名小菜鸟。</div>
					<div class="item">目标彩虹海，出发！</div>
				</div>
				<div class="statement">
					<div class="item">Email：2352427469@qq.com</div>
					<div class="item">QQ：2352427469</div>
					<div class="item">juejin：
						<a target="_blank" href="https://juejin.cn/user/2955908861657661/posts">https://juejin.cn/user/2955908861657661/posts</a>
					</div>
				</div>
				<h5 class="title"><i class="el-icon-star-on"></i>{{$t('about.aboutBlog')}}</h5>
				<el-card shadow="always">
					<dl class="dl-blog">
						<dt>{{$t('about.blogSource')}}</dt>
						<dd>
							后端由我独立开发，前端依据<a target="_blank" href="https://gitee.com/fengziy/Fblog">fengziy的开源项目</a>进行改造而来
						</dd>
						<dt>{{$t('about.technology')}}</dt>
						<dd>Vue、Vue-Router、Element-ui、Vue-i18n、springboot、redis、mysql、mybatis</dd>
						<dt>{{$t('about.other')}}</dt>
						<dd>百度分享、点击爱心特效、复制追加版权信息</dd>
					</dl>
				</el-card>
				<h5 class="title"><i class="el-icon-star-on"></i>{{$t('about.contactMe')}}</h5>
				<el-card shadow="always">
					<el-form label-position="left" :rules="rules" label-width="80px" ref="formLabelAlign" :model="formLabelAlign">
						<el-form-item :label="$t('about.yourName')" prop="name">
							<el-input v-model="formLabelAlign.name"></el-input>
						</el-form-item>
						<el-form-item :label="$t('about.email')" prop="email">
							<el-input v-model="formLabelAlign.email"></el-input>
						</el-form-item>
						<el-form-item :label="$t('about.content')" prop="content">
							<el-input type="textarea" v-model="formLabelAlign.content"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="submitForm('formLabelAlign')">{{$t('about.submit')}}</el-button>
						</el-form-item>
					</el-form>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'about',
		data() {
			return {
				formLabelAlign: {
					name: '',
					email: '',
					content: ''
				},
				rules: {
					name: [{
						required: true,
						message: this.$t('about.nameTip'),
						trigger: 'blur'
					}],
					email: [{
							required: true,
							message: this.$t('about.emailTip1'),
							trigger: 'blur'
						},
						{
							type: 'email',
							message: this.$t('about.emailTip2'),
							trigger: ['blur', 'change']
						}
					],
					content: [{
						required: true,
						message: this.$t('about.contentTip'),
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						alert('submit!');
					} else {
						return false;
					}
				});
			}
		}
	}
</script>

<style scoped>
	.dl-blog dd {
		margin-left: 30px;
	}
	
	.dl-blog .icon {
		width: 20px;
		height: 20px;
	}
	
	.title {
		margin-top: 40px;
	}
	
	.statement {
		border-left: 3px solid #F56C6C;
		padding: 20px;
		background-color: #EBEEF5;
		margin-top: 20px;
	}

  .about{
    opacity: 0.85;
  }
</style>