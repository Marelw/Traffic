<template>
  <NavigationBar />
  <router-view></router-view>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import NavigationBar from "@/components/NavigationBar.vue"
export default {
    components: { NavigationBar },
}
</script>

<style>

</style>
