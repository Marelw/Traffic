<template>
  <div>
    <button @click="handleClick" class="areaButton">Trafikinformation</button>

    <div id="test"></div>
    <a id="map-link" target="_blank"></a>
    <p id="status"></p>
  </div>
</template>


<script>
export default {
  name: "getLoc",

  methods: {
    handleClick() {
      console.log("hello");
      const MESSAGE_URL = "http://api.sr.se/api/v2/traffic/messages";
      const AREA_URL = "http://api.sr.se/api/v2/traffic/areas";
      async function locate() {
        const status = document.querySelector("#status");
        const maplink = document.querySelector("#map-link");
        maplink.href = "";
        maplink.textContent = "";

        async function findMe(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          status.textContent = "";
          maplink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
          //maplink.textContent = `Latitude: ${latitude} ° , Longitude: ${longitude} °`
          getTrafficAreaTest(latitude, longitude);
        }

        async function error() {
          status.textContent = "Unable to retreave location";
        }
        if (!navigator.geolocation) {
          status.textContent = "Geolocation not suported";
        } else {
          status.textContent = "Loading...";
          navigator.geolocation.getCurrentPosition(findMe, error);
        }
      }

      async function getTrafficAreaTest(latitude, longitude) {
        const response = await fetch(
          `${AREA_URL}?format=json&latitude=${latitude}&longitude=${longitude}`
        );
        const data = await response.json();
        //console.log(data)
        let area = document.getElementById("test");
        let areainfo = document.createElement("div");
        areainfo.innerText = "Du befinner dig i: " + data.area.name;
        area.appendChild(areainfo);

        let areaName = data.area.name;

        getMesseges(areaName);
        //printArea(parent, area)
      }
      locate();

      async function getMesseges(areaName) {
        const response = await fetch(
          `${MESSAGE_URL}?format=json&trafficareaname=${areaName}&size=5`
        );
        const data = await response.json();
        //console.log(data.id)

        console.log();
        let parent = document.getElementById("test");
        data.messages.forEach((message) => printMessage(parent, message));
      }

      function printMessage(parent, message) {
        // const { id, priority, createdate, title, exactlocation, description, latitude, longitude, category, subcategory } = data
        const messageElement = document.createElement("div");
        messageElement.className = "messageContainer";
        //areaElement.className = "areaContiner"

        let prio = "Prio: " + message.priority;
        let title = "Plats: " + message.title;
        let description = "Beskrivning: " + message.description;
        let subcategory = "Kategori: " + message.subcategory;

        //let name = "Name: " + message.name

        // appendTextDiv(areaElement, name)

        appendTextDiv(messageElement, prio);
        appendTextDiv(messageElement, title);
        appendTextDiv(messageElement, description);
        appendTextDiv(messageElement, subcategory);

        //messageElement.innerText = JSON.parse(message)

        //messageElement.innerText = message.description

        //console.log(message)
        // for (i in message) {
        //     console.log(i + "-" + (message[i])) //printar till console.log
        // }
        //printar till index.html
        parent.appendChild(messageElement);
        //parent.appendChild(areaElement)
      }

      function appendTextDiv(parent, text) {
        const element = document.createElement("div");
        element.className = "messageItem";
        element.innerText = text;
        parent.appendChild(element);
      }
      getMesseges();
    },
  },
};
</script>

<style scoped>
.areaButton {
  background: gray;
  color: black;
  padding-right: 60px;
  padding-left: 60px;
  padding-top: 30px;
  padding-bottom: 30px;
  border: none;
  border-radius: 4px;
}


</style>
