<template>
	<div>
		<div class="pengajuan">
			<h1 class="pengajuan_judul">PILIH PENGAJUAN</h1>
			<div class="pengajuan_daftar">
				<div class="pengajuan-1">
					<pengajuan-item
						image="images/ktp.jpeg"
						judul="CETAK KTP-EL"
						link="/cetak-ktp-el"
					>
						<li>Kartu Keluarga</li>
						<li>Surat kehilangan dari kepolisian jika KTP-El hilang</li>
						<li>KTP-El lama jika rusak atau ada perubahan data.</li>
					</pengajuan-item>
					<pengajuan-item
						image="images/rekam-ktp.jpg"
						judul="REKAM KTP-EL"
						link="/rekam-ktp-el"
					>
						<li>Kartu Keluarga</li>
						<li>
							Surat permohonan rekam KTP-El dari institusi penanggung jawab
						</li>
						<li>
							F-1.01 Form Biodata Keluarga (Jika belum mempunyai Kartu Keluarga,
							<a href="f-1.01.pdf" target="blank">DOWNLOAD FILE</a>)
						</li>
					</pengajuan-item>
				</div>
				<div class="pengajuan-2">
					<pengajuan-item
						image="images/kia.jpeg"
						judul="KARTU IDENTITAS ANAK"
						link="/kia"
					>
						<li>Akta Kelahiran</li>
						<li>
							Anak usia 5 tahun ke atas pas photo berwarna ukuran 2 x 3, bila
							tahun kelahiran genap background warna
							<span style="color: blue">BIRU</span>, tahun kelahiran ganjil
							background warna <span style="color: red">MERAH</span>.
						</li>
						<li>Anak usia 0 - 5 tahun tanpa pas photo.</li>
					</pengajuan-item>
					<pengajuan-item
						image="images/akta.jpeg"
						judul="AKTA KELAHIRAN"
						link="/akta"
					>
						<li>Kartu Keluarga</li>
						<li>Surat nikah orang tua</li>
						<li>
							Surat kelahiran dari fasilitas kesehatan / Surat Pernyataan
							Tanggung Jawab Mutlak (<a href="sptjm.docx" target="_blank"
								>DOWNLOAD FILE</a
							>)
						</li>
					</pengajuan-item>
				</div>
			</div>
		</div>
		<div class="total">
			<h1 class="total_judul">JUMLAH PENGAJUAN</h1>
			<div class="total_pengajuan_wrap">
				<jml-kategori-item :total="total.cetakKTP" kategori="CETAK KTP-El" />
				<jml-kategori-item :total="total.rekamKTP" kategori="REKAM KTP-El" />
				<jml-kategori-item :total="total.kia" kategori="KIA" />
				<jml-kategori-item :total="total.akta" kategori="AKTA" />
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import PengajuanItem from "../components/PengajuanItem.vue";
import JmlKategoriItem from "../components/JmlKategoriItem.vue";

export default {
	components: { PengajuanItem, JmlKategoriItem },
	computed: {
		...mapGetters({ total: "totalKategori" }),
	},
	methods: {
		...mapActions(["getTotalKategori"]),
		download(url) {
			window.open(url, "_blank");
		},
	},
	mounted() {
		this.getTotalKategori();
		Echo.channel("refresh").listen("RefreshData", () =>
			this.getTotalKategori()
		);
	},
};
</script>