<template>
	<header id="header" class="fixed-top d-flex align-items-center ">
		<Navbar/>
	</header>
</template>

<script>
	import Navbar from '@/components/partials/Navbar.vue'
	export default {
		name: "HeaderComponents",
		components: {
			Navbar
		}
	}
</script>

<style type="text/css" scoped>
#header {
	background-image: url("@/assets/header.png");
	background-size: cover;
	box-shadow: 5px;
}
</style>