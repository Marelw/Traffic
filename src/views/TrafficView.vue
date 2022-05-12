<template>
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
            data-bs-toggle="dropdown" aria-expanded="false">Choose Zone </button>
        <div id="dropdown-id" class="dropdown-menu"></div>
    </div>

    <button type="button" class="btn btn-secondary btn-lg btn-block mx-2" @click="locate">
        Visa Trafikmeddelanden
    </button>
    <p v-if="statusMessage !== '' ">{{ statusMessage }}</p>
    <div id="container">
        <div >{{ areaZone }}</div>

    </div>

    <div class="card" style="width: 18rem" v-for="msg in trafficMessages">
        <div class="card-body">
            <h5 class="card-title">{{ "Kategori: " + msg.subcategory + " Prio: " + msg.priority }}</h5>
            <h6 class="card-title2">{{ "Plats: " +  msg.title }}</h6>
            <p class="card-text">{{ "Beskrivning: " +  msg.description }}</p>
        </div>
    </div>

    
</template>

<script>

let srAreas = undefined
const MESSAGE_URL = "http://api.sr.se/api/v2/traffic/messages"
const AREA_URL = "http://api.sr.se/api/v2/traffic/areas"

export default {
    data() {
        return {
            trafficMessages: [],
            yourLocation: "",
            statusMessage: "",
            areaZone: "",
        }
    },
    methods: {
        

        async locate() {

            const findMe = async (position) => {
                const latitude = position.coords.latitude
                const longitude = position.coords.longitude
                this.statusMessage = ""
                this.getTrafficAreaTest(latitude, longitude)
            }

            const error = async () => {
                this.statusMessage = "Unable to retreave location"
            }
            if (!navigator.geolocation) {
                this.statusMessage = "Geolocation not suported"
            } else {
                this.statusMessage = "Loading..."
                navigator.geolocation.getCurrentPosition(findMe, error)
            }
        },
        async getTrafficAreaTest(latitude, longitude) {
            const response = await fetch(`${ AREA_URL }?format=json&latitude=${ latitude }&longitude=${ longitude }`)
            const data = await response.json()

            this.yourLocation = data.area.name

            this.getMessages(this.yourLocation)
        },
        async getMessages(areaName) {
            const response = await fetch(`${ MESSAGE_URL }?format=json&trafficareaname=${ areaName }&size=3`)
            const data = await response.json()
            
            this.areaZone = this.yourLocation
            
            
            data.messages.forEach(message => this.trafficMessages.push(message))
        },

    },
}
</script>