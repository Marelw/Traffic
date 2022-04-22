const MESSAGE_URL = "http://api.sr.se/api/v2/traffic/messages"
const AREA_URL = "http://api.sr.se/api/v2/traffic/areas"

/**
 * This function will retrive users location in latitude and longitude.
 */
async function geoFindMe() {

    const status = document.querySelector('#status')
    const maplink = document.querySelector('#map-link')

    maplink.href = ''
    maplink.textContent = ''

    
    function geoLocator(position) {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude

        status.textContent = ''
        // maplink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
        // maplink.textContent = `Latitude: ${latitude} ° , Longitude: ${longitude} °`
        getTrafficArea(latitude, longitude)
        
    }
    
    function error() {
        status.textContent = 'Unable to retrive your location'
    }
    
    if(!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser'
    }else {
        status.textContent = 'Loading. . . . .'
        navigator.geolocation.getCurrentPosition(geoLocator, error)
    }
}

document.querySelector('#find-me').addEventListener('click', geoFindMe)

/* 
* This function will fetch the traffic area that you are in based on the coordinates given by the 
* geoLocator function from the API provided by Swedish Radio.
*/
async function getTrafficArea(latitude, longitude) {
    const response = await fetch(`${AREA_URL}?format=json&latitude=${latitude}&longitude=${longitude}`)
    .then(resp => resp.json())
    .then(data => {
        
        let area = document.getElementById('body')
        let areainfo = document.createElement('pre')
        areainfo.innerText = JSON.stringify('Du befinner dig i: ' + data.area.name)
        area.appendChild(areainfo)
        console.log(data)
        let areaName = data.area.name
        getMesseges(areaName)
    })
}

async function getTrafficAreaTest(latitude, longitude) {
    const response = await fetch(`${AREA_URL}?format=json&latitude=${latitude}&longitude=${longitude}`)
    const data = await response.json()
    let parent = document.getElementById('test')
    let area = 
    data.area.name = area
    printArea(parent, area)
    
}

function printArea(parent, area) {
    const areaElement = document.createElement('div')
    areaElement.className = 'areaTester'
    areaElement.innerText = JSON.stringify(area)
    parent.appendChild(areaElement)
}

/*
 * This function will used the given traffic area provided above to get the correct traffic messages
 * It will then take the messages and put them in the HTML document
 */
async function getMesseges(areaName) {
    const response = await fetch(`${MESSAGE_URL}?format=json&trafficareaname=${areaName}&size=5`)
    const data = await response.json()
    /**
     * for debug purposes this console.log will stay
     */
        //console.log(data)

    let parent = document.getElementById('test')
    data.messages.forEach(message => printMessage(parent, message))
}

function printMessage(parent, message) {
    // const { id, priority, createdate, title, exactlocation, description, latitude, longitude, category, subcategory } = data
    const messageElement = document.createElement('div')
    messageElement.className = "messageItem"
    messageElement.innerText = JSON.stringify(message)
    
    for (i in message) {
        console.log(i + "-" + (message[i])) //printar till console.log
    }
    //printar till index.html
    parent.appendChild(messageElement)
}