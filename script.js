const MESSAGE_URL = "http://api.sr.se/api/v2/traffic/messages"
const AREA_URL = "http://api.sr.se/api/v2/traffic/areas"

let areaButton = document.getElementById('areaButton');
areaButton.addEventListener('click', () => locate())

function addAreaToElement() {
    const areas = document.getElementsByClassName("area")
    fetchJson()
    fetchMessege()
        .then(area => {
            areas[0].innerText = area
        })
        .catch(error => {
            areas[0].innerText = error
        })
}

async function fetchJson() {
    const response = await fetch('http://api.sr.se/api/v2/traffic/areas?format=json&page=2')
        .then(res => res.json())
        .then(data => {
            const jsonToString = JSON.stringify(data.areas.map(areas => areas.name))
        })
    if (!response.ok) {
        throw new Error("response error")
    }
    return console.log(data.areas)
}

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
    let area = document.getElementById('test')
    let areainfo = document.createElement('div')
    areainfo.innerText = JSON.stringify('Du befinner dig i: ' + data.area.name)
    area.appendChild(areainfo)

    let areaName = data.area.name

    getMessages(areaName)
}

async function getMessages(areaName) {
    const response = await fetch(`${MESSAGE_URL}?format=json&trafficareaname=${areaName}&size=5`)
    const data = await response.json()

    let parent = document.getElementById('test')
    data.messages.forEach(message => printMessage(parent, message))

}

function printMessage(parent, message) {
    // const { id, priority, createdate, title, exactlocation, description, latitude, longitude, category, subcategory } = data
    const messageElement = document.createElement('div')
    messageElement.className = "messageContainer"

    let prio = "Prio: " + message.priority
    let title = "Plats: " + message.title
    let description = "Beskrivning: " + message.description
    let subcategory = "Kategori: " + message.subcategory

    appendTextDiv(messageElement, prio)
    appendTextDiv(messageElement, title)
    appendTextDiv(messageElement, description)
    appendTextDiv(messageElement, subcategory)

    parent.appendChild(messageElement)
}

function appendTextDiv(parent, text) {
    const element = document.createElement('div')
    element.className = "messageItem"
    element.innerText = text
    parent.appendChild(element)
}

function getMessagesThroughDropDownMenu() {
    document.getElementById('locations2').innerHTML =
        ('Valt område:' + formid.locations[formid.locations.selectedIndex].text)
    areaName = formid.locations[formid.locations.selectedIndex].text
    if (areaName === 'Malmö') {
        areaName = 'Malmöhus'
    }
    getMessages(areaName)
}