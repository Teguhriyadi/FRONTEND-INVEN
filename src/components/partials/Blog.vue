<template>
	<section id="blog" class="blog">
		<div class="container">
			<div class="section-title" data-aos="fade-up">
				<p class="text-center">Blog</p>
			</div>

			<div class="row">
				<div class="col-md-4" v-for="blog_terbaru in blogs_terbaru" :key="blog_terbaru.id">
					<img :src="blog_terbaru.foto" alt="" class="img-fluid">
					<p>
						<b>{{ blog_terbaru.judul }}</b>
						<br>
						{{ blog_terbaru.deskripsi }}
					</p>
				</div>
				<div class="col-md-8" >
					<div class="row">
						<div class="col-md-12" v-for="blog in blogs" :key="blog.id">
							<div class="row" style="margin-bottom: 20px;">
								<div class="col-md-4">
									<img :src="blog.foto" alt="" class="img-fluid">
								</div>
								<div class="col-md-8">
									<p>
										<b>
											{{ blog.judul }}
										</b>
										<br>
										{{ blog.deskripsi }}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import axios from 'axios'
	export default {
		name: "BlogComponents",
		data() {
			return {
				blogs: [],
				blogs_terbaru: []
			}
		},
		created() {
			this.getBlog();
			this.getBlogTerbaru();
		},
		methods: {
			async getBlog() {
				try {
					const response = await axios.get('blog');
					this.blogs = response.data
				} catch (error) {
					console.log("Error");
				}
			},

			async getBlogTerbaru() {
				try {
					const response = await axios.get("blog_terbaru");
					this.blogs_terbaru = response.data	
				} catch (error) {
					console.log("Error");
				}
			}
		}
	}
</script>