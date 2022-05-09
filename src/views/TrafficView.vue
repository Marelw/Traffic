<template>
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >Choose Zone </button>
        <div id="dropdown-id" class="dropdown-menu"></div>
    </div>

    <button id="areaButton" type="button" class="btn btn-secondary btn-lg btn-block mx-2" @click="locate()">
        Visa meddelanden
    </button>
    <p id="status"></p>
    <div id="container">
        <div id="location"></div>

    </div>

    <!-- <div class="card" style="width: 18rem">
        <div class="card-body">
            <h5 class="card-title">kategori + ikon</h5>
            <h6 class="card-title2">plats</h5>
            <p class="card-text">Marcus har kört i diket.</p>
        </div>
    </div> -->
</template>

<script>

let srAreas = undefined
const MESSAGE_URL = "http://api.sr.se/api/v2/traffic/messages"
const AREA_URL = "http://api.sr.se/api/v2/traffic/areas"

async function getTrafficAreaTest(latitude, longitude) {
    const response = await fetch(`${AREA_URL}?format=json&latitude=${latitude}&longitude=${longitude}`)
    const data = await response.json()

    // let area = document.getElementById("location")
    // let areainfo = document.createElement("div")
    // areainfo.innerText = data.area.name
    // area.appendChild(areainfo)

    let areaName = data.area.name

    getMessages(areaName)
}
async function getMessages(areaName) {
    const response = await fetch(`${MESSAGE_URL}?format=json&trafficareaname=${areaName}&size=3`)
    const data = await response.json()

        let location = document.getElementById("location")
        while (location.firstChild) {
            location.removeChild(location.firstChild);
        }

        
        let parent = document.getElementById("location")
        data.messages.forEach((message) => printMessage(parent, message))
}
function printMessage(parent, message) {
    // const { id, priority, createdate, title, exactlocation, description, latitude, longitude, category, subcategory } = data
    let messageElement = document.createElement("div")

    messageElement.className = "card"
    

    let prio = "Prio: " + message.priority
    let title = "Plats: " + message.title
    let description = "Beskrivning: " + message.description
    let subcategory = "Kategori: " + message.subcategory

    appendCardTitle(messageElement, subcategory, prio)
    appendMessage(messageElement, description)
    appendCardTitle2(messageElement, title)
    parent.appendChild(messageElement)
}

function appendCardTitle(parent, subcategory, prio) {
    const element = document.createElement("h5")
    element.className = "card-title"
    element.innerText = subcategory + "   " + prio
    parent.appendChild(element)
}
function appendMessage(parent, description) {
    const element = document.createElement("p")
    element.className = "card-text"
    element.innerText = description
    parent.appendChild(element)
}
function appendCardTitle2(parent, title) {
    const element = document.createElement("h6")
    element.className = "card-title"
    element.innerText = title
    parent.appendChild(element)
}
async function dropdownAreas() {
    const response = await fetch(`http://api.sr.se/api/v2/traffic/areas?format=json&pagination=false`)

    if (!response.ok) {
        throw new Error("ooops")
    }

    const data = await response.json()

    srAreas = data.areas

    //console.log(srAreas)

    let parent = document.getElementById("dropdown-id")
    srAreas.forEach((area) => printToDropdown(parent, area))
}

// copierad till metod:
function printToDropdown(parent, area) {
    const areaElement = document.createElement("div")
    areaElement.className = "areaContainer"

    let name = area.name

    appendAreaDiv(areaElement, name)

    parent.appendChild(areaElement)
}

function appendAreaDiv(parent, area) {
    const element = document.createElement("a")
    element.id = area
    element.className = "dropdown-item"
    element.addEventListener("click", () => {
        //checkAreaChosen(element.id) //if area === area.name function(event)
        //testq(element.id)
        //event.target === element
        //checkAreaChosen(element.id)

        // let location = document.getElementById("location")

        // while (location.firstChild) {
        //     location.removeChild(location.firstChild);
        // }
  
         getMessages(element.id)
    })
    element.innerText = area
    parent.appendChild(element)
}

dropdownAreas()

export default {
    name: "trafficview",

    methods: {
        async locate() {
            document.getElementById("areaButton").click = null
            const status = document.querySelector("#status")

            async function findMe(position) {
                const latitude = position.coords.latitude
                const longitude = position.coords.longitude
                status.textContent = ""
                getTrafficAreaTest(latitude, longitude)
            }

            async function error() {
                status.textContent = "Unable to retreave location"
            }
            if (!navigator.geolocation) {
                status.textContent = "Geolocation not suported"
            } else {
                status.textContent = "Loading..."
                navigator.geolocation.getCurrentPosition(findMe, error)
            }
        },
    },
}
</script>