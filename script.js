const MESSAGE_URL = "http://api.sr.se/api/v2/traffic/messages"
const AREA_URL = "http://api.sr.se/api/v2/traffic/areas"

//För att få fram json format
"http://api.sr.se/api/v2/traffic/areas?format=json"

//för att få fram json format, sida 2
"http://api.sr.se/api/v2/traffic/areas?format=json&page=2"


let areaButton = document.getElementById('areaButton');
areaButton.addEventListener('click', () => locate())

let srAreas = undefined
let srAreasName = undefined


async function locate() {
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

// function printArea(parent, area) {
//     const areaElement = document.createElement('div')
//     areaElement.className = 'areaTester'
//     areaElement.innerText = JSON.stringify(area)
//     parent.appendChild(areaElement)
// }

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
getMesseges()

async function dropdownAreas() {
    const response = await fetch(`http://api.sr.se/api/v2/traffic/areas?format=json&pagination=false`)

    if (!response.ok) {
        throw new Error("ooops")
    }

    const data = await response.json()

    srAreas = data.areas


    let parent = document.getElementById('dropdown-content')
    srAreas.forEach(area => printToDropdown(parent, area))

    // srAreas.forEach(area => {
    //     //create the div: area.name
    //     console.log(area.name)
    // })



    console.log(srAreas)
}

function printToDropdown(parent, area) {
    const areaElement = document.createElement('div')
    areaElement.className = "areaContainer"

    let name = "Name: " + message.name

    appendAreaDiv(areaElement, name)

    parent.appendChild(areaElement)
}

function appendAreaDiv(parent, area) {
    const element = document.createElement('a')
    element.className = "areaItem"
    element.innerText = area
    parent.appendChild(element)
}

dropdownAreas()