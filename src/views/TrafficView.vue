<template>
    <div class="container col-md-12 text-center mt-2 mb-3">
        <div class="btn-group">
            <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                {{ dropdownTitle }}
            </button>
            <div class="dropdown-menu" style="max-height: 11rem; overflow-y: auto">
                <div v-for="area in trafficZones">
                    <a class="dropdown-item" @click="chooseZone">{{ area.name }} </a>
                </div>
            </div>
        </div>
        <!-- Example single danger button -->
        <div class="btn-group mx-2">
            <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-filter"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                    />
                </svg>
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" @click="sortOnSerious">Prioritet</a></li>
                <li><a class="dropdown-item" @click="sortOnMedium">Medel påvärkan</a></li>
                <!-- <li><hr class="dropdown-divider"></li> -->
                <!-- <li><a class="dropdown-item" @click="sortOnMedium">Medel påverkan</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" @click="sortOnMild">Mild påverkan</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" @click="sortOnCategory">Vägarbete</a></li> -->
            </ul>
        </div>
    </div>
    <p v-if="statusMessage !== ''">{{ statusMessage }}</p>

    <div class="container">
        <div
            class="card mx-auto mb-3 border border-2 border-dark rounded"
            style="width: 18rem"
            v-for="msg in trafficMessages"
        >
            <div class="card-body">
                <h5 class="card-title">{{ "Kategori: " + msg.subcategory + " Prio: " + msg.priority }}</h5>
                <h6 class="card-title2">{{ "Plats: " + msg.title }}</h6>
                <p class="card-text">{{ "Beskrivning: " + msg.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
// import func from 'vue-editor-bridge'
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
            dropdownTitle: "Örebro",
        }
    },
    mounted() {
        this.dropdownAreas()
        this.locate()
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
            const response = await fetch(`${AREA_URL}?format=json&latitude=${latitude}&longitude=${longitude}`)
            const data = await response.json()
            this.yourLocation = data.area.name

            this.dropdownTitle = this.yourLocation
            this.getMessages(this.yourLocation)
        },
        async getMessages(areaName) {
            const response = await fetch(`${MESSAGE_URL}?format=json&trafficareaname=${areaName}&size=15`)

            const data = await response.json()
            // let prio = data.messages.priority
            this.trafficMessages.length = 0
            this.areaZone = this.yourLocation

            // this.dropdownTitle = this.yourLocation

            data.messages.forEach((message) => this.trafficMessages.push(message))
            // console.log(this.trafficMessages)
        },
        async dropdownAreas() {
            const response = await fetch(`http://api.sr.se/api/v2/traffic/areas?format=json&pagination=false`)
            if (!response.ok) {
                throw new Error("Could not load areas")
            }
            const data = await response.json()

            data.areas.forEach((area) => this.trafficZones.push(area))
        },
        chooseZone(event) {
            let element = event.target.innerText
            this.dropdownTitle = element
            this.getMessages(element)
        },
        sortOnSerious() {
            let sortedSeriousList = this.trafficMessages
            sortedSeriousList = sortedSeriousList.sort((a, b) => {
                return a.priority - b.priority
            })
            this.trafficMessages = sortedSeriousList
        },
        sortOnMedium() {
            let filterOnPrio4 = []
            this.trafficMessages.forEach((msg) => filterOnPrio4.push(msg))
            console.log(filterOnPrio4)

            let prioFour = filterOnPrio4.filter(function(prio) {
                return prio.priority === 4 && prio.priority === 3
            })
            console.log(prioFour)
            this.trafficMessages = prioFour
        },
        sortOnMild() {
            return this.trafficMessages.filter(message.priority >= 0 && message.priority < 3)
        },
    },
}
</script>