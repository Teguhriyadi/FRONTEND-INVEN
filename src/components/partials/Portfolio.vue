<template>
	<section id="data" class="data">
		<div class="container">
			
			<div class="section-title" data-aos="fade-up">
				<p align="center">Portfolio</p>
			</div>
		
			<div class="row" data-aos="fade-left">
				<div class="col-md-4" v-for="portfolio in portfolios" :key="portfolio.id">
					<div class="card" :style="{'background-color': portfolio.warna}">
						<div class="card-body">
							<img :src="portfolio.foto" class="img-fluid">
						</div>
					</div>
					<p>
						<div id="nama-portfolio">
							{{ portfolio.nama_portfolio }}
						</div>
						<div id="kategori">
							{{ portfolio.id_kategori }}
						</div>
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import axios from 'axios'
	export default {
		name: "Portfolio Components",
		data() {
			return {
				portfolios: []
			}
		},
		created() {
			this.getPortfolio();
		},
		methods: {
			async getPortfolio() {
				try {
					const response = await axios.get('portfolio');
					this.portfolios = response.data
				} catch (error) {
					console.log("Error");
				}
			}
		}
	}
</script>

<style type="text/css" scoped>

	#nama-portfolio {
		font-family: Quicksand;
		text-transform: uppercase;
		font-size: 20px;
		color: #604B9E;
	}

	#kategori {
		font-family: Quicksand;
		padding-top: 3px;
		font-weight: bold;
	}

	.img-fluid {
		width: 100%;
		padding: 20px;
	}

	.card {
		height: 350px;
	}

</style>