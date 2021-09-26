<template>
  <div class="layout-menu-container">
    <AppSubmenu
      :items="menu"
      class="layout-menu"
      :root="true"
      @menuitem-click="onMenuItemClick"
    />
  </div>
</template>

<script>
import AppSubmenu from "./AppSubmenu";

export default {
  props: {
    menu: Array,
  },
  methods: {
    onMenuItemClick(event) {
      this.$emit("menuitem-click", event);
    },
  },
  components: {
    AppSubmenu: AppSubmenu,
  },
};
</script>

<style scoped>
</style>