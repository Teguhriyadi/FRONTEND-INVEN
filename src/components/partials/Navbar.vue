<template>
	<div class="container d-flex align-items-center justify-content-between">
		<div class="logo">
			<h1>
				<a href="index.html" v-for="profil in profils" :key="profil.id">
					<img :src="profil.logo" class="logo-profil">
					<span class="singkatan" style="font-size: 16px;">
						{{ profil.singkatan }}
					</span>
				</a>
			</h1>
		</div>
		<nav id="navbar" class="navbar">
			<ul>
				<li>
					<a href="#hero" class="nav-link scrollto active">Home</a>
				</li>
				<li>
					<a class="nav-link scrollto" href="#about">About</a>
				</li>
				<li>
					<a class="nav-link scrollto" href="#features">Portfolio</a>
				</li>
				<li>
					<a class="nav-link scrollto" href="#gallery">Blog</a>
				</li>
				<li>
					<a class="nav-link scrollto" href="#team">Kontak Kami</a>
				</li>
			</ul>
			<i class="bi bi-list mobile-nav-toggle"></i>
		</nav>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: "NavbarComponents",
		data() {
			return {
				profils: []
			}
		},
		created() {
			this.getProfil();
		},
		methods: {
			async getProfil() {
				try {
					const response = await axios.get("profil_perusahaan");
					this.profils = response.data;
				} catch (error) {
					console.log("Error");
				}
			}
		}
	}
</script>

<style type="text/css">
	.singkatan {
		margin-left: 10px;
		letter-spacing: 5px;
		color: black;
	}

	.navbar ul li a {
		color: black;
	}

	.navbar ul li a .active {
		color: black;
	}
</style>