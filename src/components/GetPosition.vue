
<template>
  <div>
    <button id="areaButton" @click.once="locate()" >Areas</button>
    <a id="map-link" target="_blank"></a>

    <div id="test"></div>
    <p id="status"></p>

  </div>
</template>


<script>
import { reactive } from 'vue'
const AREA_URL = "http://api.sr.se/api/v2/traffic/areas"

//För att få fram json format
"http://api.sr.se/api/v2/traffic/areas?format=json"

//för att få fram json format, sida 2
"http://api.sr.se/api/v2/traffic/areas?format=json&page=2"
let areaName = undefined

async function getTrafficAreaTest(latitude, longitude) {
    
    const response = await fetch(`${AREA_URL}?format=json&latitude=${latitude}&longitude=${longitude}`)
    const data = await response.json()
        //console.log(data)
    let area = document.getElementById('test')
    let areainfo = document.createElement('div')
    areainfo.innerText = ('Du befinner dig i: ' + data.area.name)
    area.appendChild(areainfo)

    areaName = data.area.name
}

export const exportArea = reactive({
  areaName
}),

export default {
    name: 'GetPosition',
 

    methods: {
          async locate() {
          document.getElementById('areaButton').click = null
          const status = document.querySelector('#status')
          const maplink = document.querySelector('#map-link')
          maplink.href = ''
          maplink.textContent = ''

          async function findMe(position) {
              const latitude = position.coords.latitude
              const longitude = position.coords.longitude
              status.textContent = ''
              maplink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
                  // maplink.textContent = `Latitude: ${latitude} ° , Longitude: ${longitude} °`// to print geolocation
            getTrafficAreaTest(latitude, longitude)
          }

          async function error() {
              status.textContent = 'Unable to retreave location'
          }
          if (!navigator.geolocation) {
              status.textContent = 'Geolocation not suported'
          } else {
              status.textContent = 'Loading...'
              navigator.geolocation.getCurrentPosition(findMe, error)
          }
          
      }

    },
    
}



</script>
  

<style>

</style>
