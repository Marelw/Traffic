<template>
  <!-- <RouterView /> -->
  <div>
    <router-link to="/quiz">
    <button>Go to quiz</button>
      
    </router-link>
    <router-link to="/trafikinformation">
    <button>Go to trafikinformation</button>
    </router-link>
  </div>
  <div>
    <router-view />
  </div>
</template>

<script setup>
 // import { RouterLink, RouterView } from "vue-router";
 
</script>


<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: gray;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

.messageContainer {
  border: 1px solid black;
  margin: 2px;
  display: grid;
  grid-template-columns: 100px 1fr 1fr 1fr;
}

.messageItem {
  color: black;
  background-color: hotpink;
}

</style>
