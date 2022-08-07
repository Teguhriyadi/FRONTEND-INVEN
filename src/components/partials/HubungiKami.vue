<template>
	<section id="contact" class="contact">
		<div class="container">
			<div class="section-title" data-aos="fade-up">
				<p class="text-center pt-5">
					Hubungi Kami
				</p>
			</div>
			<div class="row">
				<div class="col-md-8">
					<p class="deskripsi-hubungi-kami">
						Contact us about anything related to our company or services, including request for demo and presentation. We'll do our best to get back to you as soon as possible.
					</p>
					<form @submit.prevent="saveKirimanPertanyaan">
						<div class="mb-3 row">
							<label for="nama" class="col-sm-3 col-form-label text-danger">Your Name</label>
							<div class="col-sm-9">
								<input type="text" v-model="nama" class="form-control" id="nama">
							</div>
						</div>
						<div class="mb-3 row">
							<label for="no_hp" class="col-sm-3 col-form-label text-danger">Phone Number</label>
							<div class="col-sm-9">
								<input type="Number" min="1" v-model="no_hp" class="form-control" id="no_hp">
							</div>
						</div>
						<div class="mb-3 row">
							<label for="email" class="col-sm-3 col-form-label text-danger">Email</label>
							<div class="col-sm-9">
								<input type="email" v-model="email" class="form-control" id="email">
							</div>
						</div>
						<div class="mb-3 row">
							<label for="perusahaan" class="col-sm-3 col-form-label text-danger">Your Company</label>
							<div class="col-sm-9">
								<input type="text" v-model="perusahaan" class="form-control" id="perusahaan">
							</div>
						</div>
						<div class="mb-3 row">
							<label for="subjek" class="col-sm-3 col-form-label text-danger">Subject</label>
							<div class="col-sm-9">
								<input type="text" v-model="subjek" class="form-control" id="subjek">
							</div>
						</div>
						<div class="mb-3 row">
							<label for="pertanyaan" class="col-sm-3 col-form-label text-danger"> Your Question </label>
							<div class="col-sm-9">
								<input type="text" v-model="pertanyaan" class="form-control" id="pertanyaan">
							</div>
						</div>
						<div class="mb-3 row">
							<div class="col-sm-3">
								&nbsp;
							</div>
							<div class="col-sm-9">
								<button type="submit" class="btn btn-danger button-kirim">
									Send
								</button>
							</div>
						</div>
					</form>
				</div>
				<div class="col-md-4">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7814271551792!2d106.82998651430964!3d-6.160021262088197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5c3712ffacb%3A0xb0bbab9930144b5f!2sJl.%20Krekot%20Bunder%20Raya%20No.26%2C%20RT.2%2FRW.6%2C%20Ps.%20Baru%2C%20Kecamatan%20Sawah%20Besar%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010710!5e0!3m2!1sid!2sid!4v1657871297794!5m2!1sid!2sid" width="350" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					<p v-for="profil in profils" :key="profil.id">
						{{ profil.nama }}
						<br>
						{{ profil.alamat }}
						<br>
						{{ profil.no_hp }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import axios from 'axios'
	export default {
		name: "HubungiKamiView",
		data() {
			return {
				nama: "",
				no_hp: "",
				email: "",
				perusahaan: "",
				subjek: "",
				pertanyaan: "",
				profils: []
			}
		},
		created() {
			this.getProfil();
		},
		methods: {
			async saveKirimanPertanyaan() {
				try {
					await axios.post("contact_us", {
						nama: this.nama,
						no_hp: this.no_hp,
						email: this.email,
						perusahaan: this.perusahaan,
						subjek: this.subjek,
						pertanyaan: this.pertanyaan
					});
					(this.nama = ''), (this.no_hp = ''), (this.email = ''), (this.perusahaan = ''), (this.subjek = ''), (this.pertanyaan = ''), this.$router.push("/");
				} catch (error) {
					console.log("Error");
				}
			},

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

<style scoped>
	.contact {
		background-image: url("@/assets/bg-contact-us.png");
		background-size: cover;
	}

	.text-danger {
		color: #FF2B2B;
	}

	.button-kirim {
		background-color: #FF2B2B;
		border-radius: 7px;
		padding: 7px 15px 7px 15px;
	}

	.deskripsi-hubungi-kami {
		font-family: Montserrat;
		font-size: 18px;
	}
</style>