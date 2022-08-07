<template>
	<Header/>
	<Slider/>
	<main id="main">
		<About/>
		<Portfolio/>
		<Blog/>
		<HubungiKami/>
	</main>
</template>

<script>
	import Header from '@/components/partials/Header.vue'
	import Slider from '@/components/partials/Slider.vue'
	import About from '@/components/partials/About.vue'
	import Portfolio from '@/components/partials/Portfolio.vue'
	import Blog from '@/components/partials/Blog.vue'
	import HubungiKami from '@/components/partials/HubungiKami.vue'
	export default {
		name: "TemplateComponents",
		components: {
			Header,
			Slider,
			About,
			Portfolio,
			Blog,
			HubungiKami
		}
	}
</script>