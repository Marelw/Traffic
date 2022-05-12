<template>
  <NavigationBar />
  <router-view></router-view>
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
