<template>
	<div class="layout-profile">
		<div>
			<Avatar :image="avatar" size="xlarge" shape="circle" />
		</div>
		<button class="p-link layout-profile-link" @click="onClick">
			<span class="username">{{ user?.nama }}</span>
			<i class="pi pi-fw pi-cog"></i>
		</button>
		<transition name="layout-submenu-wrapper">
			<ul v-show="expanded">
				<li>
					<router-link to="/admin/edit-user">
						<button class="p-link">
							<i class="pi pi-fw pi-user"></i><span>Akun</span>
						</button>
					</router-link>
				</li>
				<li>
					<button class="p-link" @click="logout">
						<i class="pi pi-fw pi-power-off"></i><span>Keluar</span>
					</button>
				</li>
			</ul>
		</transition>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	data() {
		return {
			expanded: false,
		};
	},

	computed: {
		...mapGetters({
			user: "user",
			avatar: "avatar",
		}),
	},
	methods: {
		onClick(event) {
			this.expanded = !this.expanded;
			event.preventDefault();
		},
		logout() {
			this.$store
				.dispatch("logout")
				.then(() => this.$router.push("/admin/login"));
		},
	},
};
</script>

<style scoped>
</style>