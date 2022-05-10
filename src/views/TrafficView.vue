<template>
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Choose Zone</button>
        <div class="dropdown-menu" style="max-height: 11rem; overflow-y: auto" >
            <div v-for="area in trafficZones" ><a class="dropdown-item" @click="chooseZone" >{{ area.name }} </a></div>
        </div>
    </div>

    <button type="button" class="btn btn-secondary btn-lg btn-block mx-2" @click="locate">
        Visa Trafikmeddelanden
    </button>
    <p v-if="statusMessage !== ''">{{ statusMessage }}</p>
    <!-- <div id="container">
        <div>{{ areaZone }}</div>
    </div> -->

    <div class="card" style="width: 18rem" v-for="msg in trafficMessages">
        <div class="card-body">
            <h5 class="card-title">{{ "Kategori: " + msg.subcategory + " Prio: " + msg.priority }}</h5>
            <h6 class="card-title2">{{ "Plats: " + msg.title }}</h6>
            <p class="card-text">{{ "Beskrivning: " + msg.description }}</p>
        </div>
    </div>

    <!-- Example single danger button -->
    <div class="btn-group">
        <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Filter
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" @click="sortOnSerious">Allvarlig påverkan</a></li>
             <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" @click="sortOnMedium">Medel påverkan</a></li>
             <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" @click="sortOnMild">Mild påverkan</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" @click="sortOnCategory">Vägarbete</a></li>
        </ul>
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
            trafficZones: [],
            yourLocation: "",
            statusMessage: "",
            areaZone: "",
        }
    },
    mounted() {
        // this.locate()
        // this.getMessages(this.yourLocation)
        this.dropdownAreas()
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
            this.trafficMessages.length = 0
            const response = await fetch(`${ MESSAGE_URL }?format=json&trafficareaname=${ areaName }&size=3`)
            const data = await response.json()
            // let prio = data.messages.priority
            this.areaZone = this.yourLocation
            
            console.log(data.messages)
            data.messages.forEach(message => this.trafficMessages.push(message))
        },
        async dropdownAreas() {
            const response = await fetch(`http://api.sr.se/api/v2/traffic/areas?format=json&pagination=false`)
            if (!response.ok) {
                throw new Error("Could not load areas")
            }
            const data = await response.json()

            data.areas.forEach(area => this.trafficZones.push(area))
        },
        chooseZone(event) {
            
            let element = event.target.innerText
            this.getMessages(element)

                    // while (location.firstChild) {
        //     location.removeChild(location.firstChild);
        // }

        },
        sortOnSerious() {
            return this.trafficMessages.filter(message.priority === 5)
        },
        sortOnMedium() {
            return this.trafficMessages.filter(message.priority > 3 && message.priority < 5)
        },
        sortOnMild() {
            return this.trafficMessages.filter(message.priority >= 0 && message.priority < 3)
        },
        sortOnCategory() {
            return this.trafficMessages.filter(messages.subcategory === "Vägarbete")
        }


    },
}
</script>