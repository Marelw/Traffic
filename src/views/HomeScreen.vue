<template>
  <div class="top">
    <div id="logo"></div>
  </div>

  <div class="text-pos">
    <div>
      <button class="home-button">Trafikinformation</button>
      <button class="home-button">Quiz</button>
      <button class="home-button">Radio</button>
      <button class="home-button">Radiotablå</button>
    </div>
  </div>
</template>

<style scoped>
.top {
  border: 1px solid black;
  background-color: gray;
  overflow: hidden;
  padding: 2em 2em 2em 2em;
}

.text-pos {
  display: flex;
  justify-content: center;
}

.home-button {
  align-items: center;
  background: gray;
  border: none;
  border-radius: 10vh;
  color: black;
  display: flex;
  flex-direction: column;
  margin: 1vh;
  padding-left: 5em;
  padding-right: 5em;
  padding-top: 2em;
  padding-bottom: 2em;
  width: 20em;
}
</style>
