<template>
	<NavigationBar />
	<router-view class="d-flex flex-column min-vh-100 overflow-auto pt-2"></router-view>
	<Footerbar />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import NavigationBar from "@/components/NavigationBar.vue"
import Footerbar from "@/components/FooterBar.vue"
export default {
	components: { NavigationBar, Footerbar },
}
</script>

<style>
</style>
