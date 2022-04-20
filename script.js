const MESSAGE_URL = "http://api.sr.se/api/v2/traffic/messages"
const AREA_URL = "http://api.sr.se/api/v2/traffic/areas"

//För att få fram json format
"http://api.sr.se/api/v2/traffic/areas?format=json"

//för att få fram json format, sida 2
"http://api.sr.se/api/v2/traffic/areas?format=json&page=2"


//funkar ej
async function getArea() {
    const endpoint = `${AREA_URL}?format=json`
    const response = await fetch(endpoint)
    const results = response.json()
    let resultpage = document.getElementById('areas')
    resultpage.innerText = results.resultpage
    resultpage.style.visibility = 'visible'
}
    //Button funkar
    let areaButton = document.getElementById('areaButton');
    areaButton.addEventListener('click', () => getArea())