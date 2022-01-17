<template>
	<div v-if="!sidebarOpen">
		<!-- Header -->
		<div class="header">
			<div class="header_info">
				<a class="header_info_text" href="#">TELEPON : (0285) 381921</a>
				<a class="header_info_text" href="#"
					>EMAIL : dindukcapil@pekalongankab.go.id</a
				>
			</div>
			<div id="nav" :class="toggleNavClass">
				<img class="header_logo" src="images/logo_capil_small.png" alt="" />
				<div class="header_navbar_link">
					<router-link class="header_navbar_link_text" to="/"
						>PENGAJUAN</router-link
					>
					<div v-if="isLoggedIn" class="header_navbar_link">
						<router-link class="header_navbar_link_text" to="/lihat-pengajuan"
							>LIHAT PENGAJUAN</router-link
						>
						<div class="header_navbar_link_text" @click="logout">LOGOUT</div>
					</div>
					<router-link v-else class="header_navbar_link_text active" to="/login"
						>LOGIN</router-link
					>
				</div>
				<i @click.prevent="toggleSidebar" class="pi pi-bars icon_nav icon"></i>
			</div>
		</div>
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" />
			</transition>
		</router-view>
		<div class="footer">
			<div class="footer_deskripsi">
				<h1 class="footer_judul">SISTEM SAPU JAGAD</h1>
				<h3 class="footer_ket">
					Inovasi Dinas Kependudukan dan Pencatatan Sipil Kabupaten Pekalongan
				</h3>
			</div>
			<div class="footer_info">
				<div class="footer_kontak">
					<a class="footer_info_text" href="#">TELEPON : (0285) 381921</a>
					<a class="footer_info_text" href="#"
						>EMAIL : dindukcapil@pekalongankab.go.id</a
					>
				</div>
				<a href="" class="footer_info_alamat"
					>ALAMAT: JL. SINDORO NO 5 KAJEN, KAB. PEKALONGAN</a
				>
			</div>
		</div>
	</div>
	<div v-if="sidebarOpen" class="sidebar">
		<div class="align-right">
			<i @click.prevent="toggleSidebar" class="pi pi-times icon_nav icon"></i>
		</div>
		<div class="col">
		    <router-link
				@click.prevent="toggleSidebar"
				class="header_navbar_link_text"
				to="/"
				>PENGAJUAN</router-link
			>
			<div class="col" v-if="isLoggedIn">
			    <router-link
					@click.prevent="toggleSidebar"
					class="header_navbar_link_text"
					to="/lihat-pengajuan"
					>LIHAT PENGAJUAN</router-link
				>
				<div @click.prevent="logout" class="header_navbar_link_text">
					LOGOUT
				</div>
			</div>
			<router-link v-else
				@click.prevent="toggleSidebar"
				class="header_navbar_link_text active"
				to="/login"
				>LOGIN</router-link
			>
		</div>
	</div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
	data() {
		return {
			active: false,
			sidebarOpen: false,
		};
	},
	computed: {
		...mapGetters({
			isLoggedIn: "isLoggedIn",
		}),
		toggleNavClass() {
			return this.active === false ? "nav" : "sticky-nav";
		},
	},
	methods: {
		toggleSidebar() {
			this.sidebarOpen = !this.sidebarOpen;
		},
		logout() {
			this.$store.dispatch("logout").then((res) => {
				this.$router.push("/login");
			});
		},
	},
	mounted() {
		window.document.onscroll = () => {
			let navBar = document.getElementById("nav");
			if (!this.sidebarOpen) {
				if (window.scrollY > navBar.offsetTop) {
					this.active = true;
				} else {
					this.active = false;
				}
			}
		};
	},
};
</script>
<style scoped>
.icon {
	display: none;
	font-size: 2.5rem;
}
@media screen and (max-width: 775px) {
	.icon {
		display: block;
	}
}
.header_navbar_link_text {
	cursor: pointer;
}
</style>