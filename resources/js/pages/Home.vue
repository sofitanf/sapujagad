<template>
	<div>
		<div class="pengajuan">
			<h1 class="pengajuan_judul">PILIH PENGAJUAN</h1>
			<div class="pengajuan_daftar">
				<div class="pengajuan-1">
					<div class="pengajuan_tipe">
						<img
							class="pengajuan_gambar"
							src="../../../public/images/ktp.jpeg"
							alt=""
						/>
						<div class="pengajuan_deskripsi">
							<h2 class="pengajuan_tipe_judul">CETAK KTP-EL</h2>
							<div class="pengajuan_persyaratan">
								<p>PERSYARATAN</p>
								<ol>
									<li>Kartu Keluarga</li>
									<li>Surat kehilangan dari kepolisian jika KTP-El hilang</li>
									<li>KTP-El lama jika rusak atau ada perubahan data.</li>
								</ol>
							</div>
						</div>
						<div class="pengajuan_button_wrap">
							<router-link to="/cetak-ktp-el" class="pengajuan_button"
								>DAFTAR</router-link
							>
						</div>
					</div>
					<div class="pengajuan_tipe">
						<img
							class="pengajuan_gambar"
							src="../../../public/images/rekam-ktp.jpg"
							alt=""
						/>
						<div class="pengajuan_deskripsi">
							<h2 class="pengajuan_tipe_judul">REKAM KTP-EL</h2>
							<div class="pengajuan_persyaratan">
								<p>PERSYARATAN</p>
								<ol>
									<li>Kartu Keluarga</li>
									<li>
										Surat permohonan rekam KTP-El dari institusi penanggung
										jawab
									</li>
									<li>
										F-1.01 Form Biodata Keluarga (Jika belum mempunyai Kartu
										Keluarga,
										<a href="f-1.01.pdf" target="blank">DOWNLOAD FILE</a>)
									</li>
								</ol>
							</div>
						</div>
						<div class="pengajuan_button_wrap">
							<router-link to="/rekam-ktp-el" class="pengajuan_button"
								>DAFTAR</router-link
							>
						</div>
					</div>
				</div>
				<div class="pengajuan-2">
					<div class="pengajuan_tipe">
						<img
							class="pengajuan_gambar"
							src="../../../public/images/kia.jpeg"
							alt=""
						/>
						<div class="pengajuan_deskripsi">
							<h2 class="pengajuan_tipe_judul">KARTU IDENTITAS ANAK</h2>
							<div class="pengajuan_persyaratan">
								<p>PERSYARATAN</p>
								<ol>
									<li>Akta Kelahiran</li>
									<li>
										Anak usia 5 tahun ke atas pas photo berwarna ukuran 2 x 3,
										bila tahun kelahiran genap background warna biru, tahun
										kelahiran ganjil background warna merah.
									</li>
									<li>Anak usia 0 - 5 tahun tanpa pas photo.</li>
								</ol>
							</div>
						</div>
						<div class="pengajuan_button_wrap">
							<router-link to="/kia" class="pengajuan_button"
								>DAFTAR</router-link
							>
						</div>
					</div>
					<div class="pengajuan_tipe">
						<img
							class="pengajuan_gambar"
							src="../../../public/images/akta.jpeg"
							alt=""
						/>
						<div class="pengajuan_deskripsi">
							<h2 class="pengajuan_tipe_judul">AKTA KELAHIRAN</h2>
							<div class="pengajuan_persyaratan">
								<p>PERSYARATAN</p>
								<ol>
									<li>Kartu Keluarga</li>
									<li>Surat nikah orang tua</li>
									<li>
										Surat kelahiran dari fasilitas kesehatan / Surat Pernyataan
										Tanggung Jawab Mutlak (<a href="sptjm.docx" target="_blank"
											>DOWNLOAD FILE</a
										>)
									</li>
								</ol>
							</div>
						</div>
						<div class="pengajuan_button_wrap">
							<router-link to="/akta" class="pengajuan_button"
								>DAFTAR</router-link
							>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="total">
			<h1 class="total_judul">JUMLAH PENGAJUAN</h1>
			<div class="total_pengajuan_wrap">
				<div class="total_pengajuan">
					<p class="total_angka">{{ total.cetakKTP }}</p>
					<h4>CETAK KTP-EL</h4>
				</div>
				<div class="total_pengajuan">
					<p class="total_angka">{{ total.rekamKTP }}</p>
					<h4>REKAM KTP-El</h4>
				</div>
				<div class="total_pengajuan">
					<p class="total_angka">{{ total.kia }}</p>
					<h4>KIA</h4>
				</div>
				<div class="total_pengajuan">
					<p class="total_angka">{{ total.akta }}</p>
					<h4>AKTA</h4>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters({ total: "totalKategori" }),
	},
	methods: {
		download(url) {
			window.open(url, "_blank");
		},
	},
	created() {
		this.$store.dispatch("getTotalKategori");
	},
};
</script>