<template>
	<section id="hero">
		<div class="container">
			<div class="row">
				<div class="col-md-7 mb-5">
					<h5 class="nama-perusahaan">
						PT. INOVASI INTERMATIKA NUSANTARA
					</h5>
					<p class="deskripsi-singkat">
						Perusahaan <span class="text-danger">IT</span> yang bergerak di <span class="text-danger">bidang</span> jasa Penyedia sistem <span class="text-danger">aplikasi</span>
					</p>
					<p class="deskripsi">
						Perusahaan IT yang bergerak di bidang jasa 
						Penyedia sistem aplikasi & Pengembangan
						software house yang sudah bekerja sama 
						dengan Bank-Bank Besar.
					</p>
					<div class="text-center text-lg-start">
						<a href="#about" class="btn btn-danger btn-sm scrollto button-produk-layanan">
							Produk & Layanan
						</a>
						<a href="#about" class="btn btn-sm scrollto button-contact-us">
							Contact Us
						</a>
					</div>
				</div>
				<div class="col-md-5">
					<img src="@/assets/remove-bg.png" style="width: 100%; height: 100%;">
				</div>
			</div>
		</div>
	</section>
</template>

<script type="text/javascript">
	export default {
		name: "SliderComponents"
	}
</script>

<style type="text/css" scoped>

#hero {
	background-image: url("@/assets/bg-dashboard.png");
	background-size: cover;
}

.scrollto {
	padding-top: 7px;
	padding-bottom: 7px;
	padding-left: 20px;
	padding-right: 20px;
	border-radius: 15px;
	font-family: Montserrat;
	font-weight: bold;
	margin-right: 25px;
}

.button-produk-layanan {
	background-color: #FF2B2B;
}

.button-contact-us {
	border: 3px solid red;
	color: red;
}

.deskripsi {
	font-family: Montserrat;
	font-size: 24px;
}

.nama-perusahaan {
	font-size: 24px;
	font-family: Montserrat;
	color: #4D4D4F;
}

.deskripsi-singkat {
	padding: 0px;
	margin: 0px;
	font-size: 40px;
	font-family: Montserrat;
	font-weight: bold;
}

</style>