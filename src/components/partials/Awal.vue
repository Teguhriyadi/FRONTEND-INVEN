<template>
	<section>
		<div class="container">
			<div class="swiper mySwiper">
				<div class="swiper-wrapper">
					<div class="swiper-slide" style="color: green">
						Slider 9
					</div>
					<div class="swiper-slide" style="color: green">
						Slider 29
					</div>
					<div class="swiper-slide" style="color: green">
						Slider 2
					</div>
					<div class="swiper-slide" style="color: green">
						Slider 2
					</div>
					<div class="swiper-slide" style="color: green">
						Slider 2
					</div>
					<div class="swiper-slide" style="color: green">
						Slider 2
					</div>
					<div class="swiper-slide" style="color: green">
						Slider 2
					</div>
					<div class="swiper-slide" style="color: green">
						Slider 2
					</div>
					<div class="swiper-slide" style="color: green">
						Slider 2
					</div>
				</div>
				<div class="swiper-pagination" style="background-color: red;"></div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "AwalComponents"
	}
	var swiper = new Swiper(".mySwiper", {
		spaceBetween: 30,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
</script>