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

    const CreateCards = {
        data() {
            return {
                trafficMessages: [],
                yourLocation: ""
            }
        },
        // async created (){
        //     document.getElementById("areaButton")
        //     const status = document.querySelector("#status")

        //         async function findMe(position) {
        //             const latitude = position.coords.latitude
        //             const longitude = position.coords.longitude
        //             status.textContent = ""
        //             getTrafficAreaTest(latitude, longitude)
        //         }

        //         async function error() {
        //             status.textContent = "Unable to retreave location"
        //         }
        //         if (!navigator.geolocation) {
        //             status.textContent = "Geolocation not suported"
        //         } else {
        //             status.textContent = "Loading..."
        //             navigator.geolocation.getCurrentPosition(findMe, error)
        //         }
        //},
        mounted (){
            getMessages(yourLocation)
        },
        methods: {
            fillCards() {
                const msg = {
                    title: data.messages.title,
                    prio: data.messages.priority,
                    desc: data.messages.description,
                    subcat: data.messages.subcategory
                }
                this.trafficMessages.push(msg)
            },

            async locate() {
            document.getElementById("areaButton")
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
        template: `
            <div class="card" style="width: 18rem" v-for="msg in trafficMessages">
                <div class="card-body">
                    <h5 class="card-title">{{ subcat + prio }}</h5>
                    <h6 class="card-title2">{{ title }}</h6>
                    <p class="card-text">{{ desc }}</p>
                </div>
            </div>`
    }

    async function getTrafficAreaTest(latitude, longitude) {
    const response = await fetch(`${AREA_URL}?format=json&latitude=${latitude}&longitude=${longitude}`)
    const data = await response.json()

    this.yourLocation = data.area.name

    getMessages(areaName)
    }
    async function getMessages(areaName) {
    const response = await fetch(`${MESSAGE_URL}?format=json&trafficareaname=${areaName}&size=3`)
    const data = await response.json()
    data.messages.title = this.title
        let location = document.getElementById("location")
        while (location.firstChild) {
            location.removeChild(location.firstChild);
        }

        
        let parent = document.getElementById("location")
        data.messages.forEach((message) => printMessage(parent, message))
}
</script>