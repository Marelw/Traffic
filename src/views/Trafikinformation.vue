
<template>
  <div class="trafikinformation">
    <h1>Trafikinformation</h1>
    <button id="areaButton" @click.once="locate()" >Areas</button>
    <a id="map-link" target="_blank"></a>

    <div id="test"></div>
    <p id="status"></p>

    <div class="dropdown">
      <button class="dropbtn">Choose Zone</button>
      <div id="dropdown-content-id" class="dropdown-content"></div>
    </div>
  </div>
</template>


<script>
const MESSAGE_URL = "http://api.sr.se/api/v2/traffic/messages"
const AREA_URL = "http://api.sr.se/api/v2/traffic/areas"

//För att få fram json format
"http://api.sr.se/api/v2/traffic/areas?format=json"

//för att få fram json format, sida 2
"http://api.sr.se/api/v2/traffic/areas?format=json&page=2"

let areaButton = undefined
let srAreas = undefined
let srAreasName = undefined

async function getTrafficAreaTest(latitude, longitude) {
    
    const response = await fetch(`${AREA_URL}?format=json&latitude=${latitude}&longitude=${longitude}`)
    const data = await response.json()
        //console.log(data)
    let area = document.getElementById('test')
    let areainfo = document.createElement('div')
    areainfo.innerText = ('Du befinner dig i: ' + data.area.name)
    area.appendChild(areainfo)


    let areaName = data.area.name

    getMesseges(areaName)
        //printArea(parent, area)

}
async function getMesseges(areaName) {
const response = await fetch(`${MESSAGE_URL}?format=json&trafficareaname=${areaName}&size=5`)
const data = await response.json()
    //console.log(data.id)

console.log()
let parent = document.getElementById('test')
data.messages.forEach(message => printMessage(parent, message))

}
function printMessage(parent, message) {
// const { id, priority, createdate, title, exactlocation, description, latitude, longitude, category, subcategory } = data
const messageElement = document.createElement('div')
messageElement.className = "messageContainer"
    //areaElement.className = "areaContiner"

let prio = "Prio: " + message.priority
let title = "Plats: " + message.title
let description = "Beskrivning: " + message.description
let subcategory = "Kategori: " + message.subcategory

//let name = "Name: " + message.name

// appendTextDiv(areaElement, name)

appendTextDiv(messageElement, prio)
appendTextDiv(messageElement, title)
appendTextDiv(messageElement, description)
appendTextDiv(messageElement, subcategory)


//messageElement.innerText = JSON.parse(message)


//messageElement.innerText = message.description

//console.log(message)
// for (i in message) {
//     console.log(i + "-" + (message[i])) //printar till console.log
// }
//printar till index.html
parent.appendChild(messageElement)
    //parent.appendChild(areaElement)
}
function appendTextDiv(parent, text) {
const element = document.createElement('div')
element.className = "messageItem"
element.innerText = text
parent.appendChild(element)
}

async function dropdownAreas() {
    const response = await fetch(`http://api.sr.se/api/v2/traffic/areas?format=json&pagination=false`)

    if (!response.ok) {
        throw new Error("ooops")
    }

    const data = await response.json()

    srAreas = data.areas

    console.log(srAreas)

    let parent = document.getElementById('dropdown-content-id')
    srAreas.forEach(area => printToDropdown(parent, area))

    // srAreas.forEach(area => {
    //     //create the div: area.name
    //     console.log(area.name)
    // })



}

// copierad till metod:
function printToDropdown(parent, area) {
    const areaElement = document.createElement('div')
    areaElement.className = "areaContainer"

    let name = area.name

    appendAreaDiv(areaElement, name)

    parent.appendChild(areaElement)
}


function appendAreaDiv(parent, area) {
    const element = document.createElement('a')
    element.id = area
    element.className = "areaItem"
    element.addEventListener("click", () => {
        console.log(element.id) //if area === area.name function(event)
            //event.target === element
            //checkAreaChosen(element.id)
    });
    element.innerText = area
    parent.appendChild(element)
}

let quizArray = [
    { question: 'Hur många heter Glenn i Göteborg?', answer: '454 heter Glenn i Göteborg' },
    { question: 'Vad översätter ordet "bamba" till?', answer: 'Skolmatsal' },
    { question: 'Göteborg liknas ibland vid en annan europeisk storstad med ett "lilla" framför. Vilken storstad?', answer: 'London' }
]
dropdownAreas()

// checkAreaChosen(areaName) {

//     if (areaName === "Göteborg") {
//         //spotta ut random fråga
//         const randomQuestion = Math.floor(Math.random() * months.length)
//         console.log(randomQuestion, quizArray[randomQuestion])
//     }
// }


export default {
    name: 'trafikinformation',
 
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
                  // maplink.textContent = `Latitude: ${latitude} ° , Longitude: ${longitude} °`
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
    mounted() {
      // areaButton = document.getElementById('areaButton');
      // areaButton.addEventListener('click', () => {{locate()}})
        
    },
    // created() {
    //   this.areaButton.addEventListener('click', () => locate())
    // }
    
}



</script>
  

<style>
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

body {
  background-color: white;
}

.dropbtn {
  background-color: #da1919;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #da1919;
}
</style>
