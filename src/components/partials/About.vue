<template>
	<section id="features" class="features">
		<div class="container">
			
			<div class="section-title" data-aos="fade-up">
				<p align="center">About</p>
			</div>
			
			<div class="row" data-aos="fade-left">
				<p class="text-center detail-about">
					Perusahaan IT yang bergerak di bidang jasa Penyedia sistem aplikasi & Pengembangan software house yang sudah bekerja sama dengan Bank-Bank Besar.
				</p>
				
				<div class="col-md-4 text-center" v-for="about in abouts" :key="about.id">
					<img src="landing/icon/icon.png">
					<p class="pt-2" id="deskripsi">
						{{ about.deskripsi }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import axios from 'axios'

	export default {
		name: "AboutComponents",
		data() {
			return {
				abouts: []
			}
		},
		created() {
			this.getAbouts();
		},
		methods: {
			async getAbouts() {
				try {
					const response = await axios.get("layanan")
					this.abouts = response.data
				} catch (error) {
					console.log("Error");
				}
			}
		}
	}
</script>

<style type="text/css" scoped>
	#deskripsi {
		font-family: Montserrat;
		font-size: 18px;
		color: #4D4D4F;
	}

	.detail-about {
		font-family: Montserrat;
		font-size: 24px;
		padding-bottom: 20px;
		color: #4D4D4F;
	}
</style>