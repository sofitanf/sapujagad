<template>
	<div class="card grid p-fluid">
		<h4 class="col-12">Data Pengajuan</h4>
		<div class="col-12 md:col-6">
			<table>
				<tr>
					<td>Tanggal Pengajuan</td>
					<td>:</td>
					<td v-if="detail.created_at">
						{{ $d(new Date(detail.created_at), "long", "id-ID") }}
					</td>
				</tr>
				<tr>
					<td>Kategori</td>
					<td>:</td>
					<td>{{ detail.kategori }}</td>
				</tr>
				<tr>
					<td>Diupdate oleh</td>
					<td>:</td>
					<td v-if="detail.id_administrator">
						{{ detail.nama_administrator }} ({{ detail.bagian_administrator }})
					</td>
				</tr>
			</table>
		</div>
		<div class="col-12 md:col-6">
			<table>
				<tr>
					<td>Tanggal Pelayanan</td>
					<td>:</td>
					<td v-if="detail.jadwal">
						{{ $d(new Date(detail.jadwal), "long", "id-ID") }}
					</td>
				</tr>
				<tr>
					<td>Jam Pelayanan</td>
					<td>:</td>
					<td v-if="detail.jadwal">
						{{ $d(new Date(detail.jadwal), "short", "id-ID") }}
					</td>
				</tr>
				<tr>
					<td>Status</td>
					<td>:</td>
					<td v-if="detail.status === 'Terkirim'">Pengajuan Baru</td>
					<td v-else>{{ detail.status }}</td>
				</tr>
			</table>
		</div>
		<div class="col-12 md:col-4">
			<Divider align="left">
				<span>Pelapor</span>
			</Divider>
			<table>
				<tr>
					<td>NIK</td>
					<td>:</td>
					<td>
						{{ detail.nik_pelapor }}
					</td>
				</tr>
				<tr>
					<td>Nama</td>
					<td>:</td>
					<td>
						{{ detail.nama_pelapor }}
					</td>
				</tr>
				<tr>
					<td>Nomor WA</td>
					<td>:</td>
					<td>
						{{ detail.telepon }}
					</td>
				</tr>
				<tr>
					<td>Hubungan Thd Pemohon</td>
					<td>:</td>
					<td>
						{{ detail.hubungan }}
					</td>
				</tr>
			</table>
		</div>
		<div class="col-12 md:col-4">
			<Divider align="left">
				<span>Pemohon</span>
			</Divider>
			<table>
				<tr>
					<td>NIK</td>
					<td>:</td>
					<td>
						{{ detail.nik }}
					</td>
				</tr>
				<tr>
					<td>Nama</td>
					<td>:</td>
					<td>
						{{ detail.nama }}
					</td>
				</tr>
				<tr v-if="detail.kategori === 'Rekam KTP-El'">
					<td>Ibu</td>
					<td>:</td>
					<td>
						{{ detail.ibu }}
					</td>
				</tr>
				<tr v-if="detail.kategori === 'Rekam KTP-El'">
					<td>Ayah</td>
					<td>:</td>
					<td>
						{{ detail.ayah }}
					</td>
				</tr>
				<tr>
					<td>Jenis Kecacatan</td>
					<td>:</td>
					<td>
						{{ detail.kecacatan }}
					</td>
				</tr>
			</table>
		</div>
		<div class="col-12 md:col-4">
			<Divider align="left">
				<span>Tempat Pelayanan</span>
			</Divider>
			<table>
				<tr>
					<td>Alamat</td>
					<td>:</td>
					<td>
						{{ detail.alamat }}
					</td>
				</tr>
				<tr>
					<td>Desa/Kelurahan</td>
					<td>:</td>
					<td>
						{{ detail.nama_kelurahan }}
					</td>
				</tr>
				<tr>
					<td>Kecamatan</td>
					<td>:</td>
					<td>
						{{ detail.nama_kecamatan }}
					</td>
				</tr>
			</table>
		</div>
		<div v-if="detail.lampiran5" class="col-12 sm:col-4">
			<Button
				label="Bukti keterkaitan pelapor dan pemohon"
				@click="showLampiran(detail.lampiran5)"
				class="p-button-raised"
			/>
		</div>
		<div class="col-12">
			<Divider align="left">
				<span>Data Pendukung</span>
			</Divider>
		</div>
		<div class="col-12 sm:col-3">
			<Button
				:label="label1"
				@click="showLampiran(detail.lampiran1)"
				class="p-button-raised"
			/>
		</div>
		<div class="col-12 sm:col-3">
			<Button
				v-if="detail.lampiran2"
				:label="label2"
				@click="showLampiran(detail.lampiran2)"
				class="p-button-raised"
			/>
		</div>
		<div class="col-12 sm:col-3">
			<Button
				v-if="detail.lampiran3"
				:label="label3"
				@click="showLampiran(detail.lampiran3)"
				class="p-button-raised"
			/>
		</div>
		<div class="col-12 sm:col-3">
			<Button
				v-if="detail.lampiran4"
				:label="label4"
				@click="showLampiran(detail.lampiran4)"
				class="p-button-raised"
			/>
		</div>
		<div class="col-12">
			<div class="flex">
				<p>Catatan</p>
				<div class="mr-2">
					<p>:</p>
				</div>
				<p v-if="detail.catatan">{{ detail.catatan }}</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		detail: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			lampiran: [],
		};
	},
	computed: {
		label1() {
			if (
				this.detail.kategori == "Cetak KTP-El" ||
				this.detail.kategori == "Rekam KTP-El" ||
				this.detail.kategori == "AKTA"
			)
				return "Kartu Keluarga";
			if (this.detail.kategori == "KIA") return "AKTA";
		},
		label2() {
			if (this.detail.kategori == "Cetak KTP-El") return "Kartu Kehilangan";
			if (this.detail.kategori == "Rekam KTP-El") return "Surat Permohonan";
			if (this.detail.kategori == "AKTA")
				return "Surat Nikah Orang Tua (Lembar 1)";
			if (this.detail.kategori == "KIA") return "Pas Foto";
		},
		label3() {
			if (this.detail.kategori == "Cetak KTP-El") return "KTP Lama";
			if (this.detail.kategori == "Rekam KTP-El") return "F-1.01 (Lembar 1)";
			if (this.detail.kategori == "AKTA")
				return "Surat Nikah Orang Tua (Lembar 2)";
		},
		label4() {
			if (this.detail.kategori == "Rekam KTP-El") return "F-1.01 (Lembar 2)";
			if (this.detail.kategori == "AKTA") return "Surat Kelahiran / SPTJM";
		},
	},
	methods: {
		showLampiran(file) {
			this.lampiran = [];
			this.lampiran.push(`/storage/pengajuan/${file}`);
			this.$viewerApi({
				images: this.lampiran,
			});
		},
	},
};
</script>