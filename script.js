const MESSAGE_URL = "http://api.sr.se/api/v2/traffic/messages"
const AREA_URL = "http://api.sr.se/api/v2/traffic/areas"

//För att få fram json format
"http://api.sr.se/api/v2/traffic/areas?format=json"

//för att få fram json format, sida 2
"http://api.sr.se/api/v2/traffic/areas?format=json&page=2"


let areaButton = document.getElementById('areaButton');
areaButton.addEventListener('click', () => addAreaToElement())


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
            //console.log(data)
            const jsonToString = JSON.stringify(data.areas.map(areas => areas.name))
                //console.log('jsonToString', jsonToString)

        })
    if (!response.ok) {
        throw new Error("response error")
    }
    return console.log(data.areas)
}

// async function fetchMessege() {
//     const response = await fetch('http://api.sr.se/api/v2/traffic/messages?format=json&page=2&size=15')
//         .then(res => res.json())
//         .then(data => {
//             let message = document.getElementById('test')
//             let areaInfo = document.createElement('pre')
//                 console.log(data)
//             let arr = Object.entries(data.messages)
//                 console.log(arr)

//             areaInfo.innerText = JSON.stringify(data)
//             message.appendChild(areaInfo)
//                 console.log(data)
//             const messagesToString = JSON.stringify(data)
//                 console.log(messagesToString)

//         })
//     if (!response.ok) {
//         throw new Error("response error")
//     }
//      return console.log(data.areas)
// }

async function getMesseges() {
    const response = await fetch('http://api.sr.se/api/v2/traffic/messages?format=json&page=2&size=15')
    const data = await response.json()
        //console.log(data)

    let parent = document.getElementById('test')
    data.messages.forEach(message => printMessage(parent, message))

}

function printMessage(parent, message) {
    // const { id, priority, createdate, title, exactlocation, description, latitude, longitude, category, subcategory } = data
    const messageElement = document.createElement('div')
    messageElement.className = "messageItem"
    messageElement.innerText = JSON.stringify(message)
        //messageElement.innerText = message.description

    //console.log(message)
    for (i in message) {
        console.log(i + "-" + (message[i])) //printar till console.log
    }
    //printar till index.html
    parent.appendChild(messageElement)
}
getMesseges()