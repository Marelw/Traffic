<template>

    <div class="container col-md-12 text-center">
        
        <div class="btn-group">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                data-bs-toggle="dropdown" aria-expanded="false">{{ dropdownTitle }}
            </button>
            <div class="dropdown-menu" style="max-height: 11rem; overflow-y: auto">
                <div v-for="area in trafficZones">
                    <a class="dropdown-item" @click="chooseZone">{{ area.name }} </a>
                </div>
            </div>
        </div>
        <!-- Example single danger button -->
        <div class="btn-group">
            <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Sortera
                <svg width="20" height="20" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.80842 10.2278C2.59544 7.73487 4.39152 3.83331 7.75213 3.83331H38.2472C41.6078 3.83331 43.4039 7.73486 41.1909 10.2278L30.8227 21.9078V34.4505C30.8227 35.9109 29.9856 37.2459 28.6605 37.899L20.8374 41.7546C18.2367 43.0364 15.1766 41.1723 15.1766 38.3061L15.1766 21.9078L4.80842 10.2278ZM38.2472 7.6889H7.75213L18.1204 19.3689C18.7443 20.0717 19.0882 20.9739 19.0882 21.9078V38.3061L26.9112 34.4505V21.9078C26.9112 20.9739 27.2551 20.0717 27.879 19.3689L38.2472 7.6889Z" fill="#181818"/>
                    <path d="M7.75213 7.6889H38.2472L27.879 19.3689C27.2551 20.0717 26.9112 20.9739 26.9112 21.9078V34.4505L19.0882 38.3061V21.9078C19.0882 20.9739 18.7443 20.0717 18.1204 19.3689L7.75213 7.6889Z" fill="#181818"/>
                </svg>
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" @click="sortOnSerious">Prioritet</a></li>
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
    <!-- <button type="button" class="btn btn-secondary btn-lg btn-block mx-2" @click="locate">
        Visa Trafikmeddelanden
    </button> -->
    <!-- <div id="container">
        <div>{{ areaZone }}</div>
    </div> -->
    <div class="container">
        <div class="card mx-auto mb-3" style="width: 18rem; border: 1px solid black; rounded" v-for="msg in trafficMessages">
            <div class="card-body ">
                <h5 class="card-title">{{ "Kategori: " + msg.subcategory + " Prio: " + msg.priority }}</h5>
                <h6 class="card-title2">{{ "Plats: " + msg.title }}</h6>
                <p class="card-text">{{ "Beskrivning: " + msg.description }}</p>
            </div>
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
            const response = await fetch(`${ AREA_URL }?format=json&latitude=${ latitude }&longitude=${ longitude }`)
            const data = await response.json()

            this.yourLocation = data.area.name
            this.dropdownTitle = this.yourLocation
            this.getMessages(this.yourLocation)
        },
        async getMessages(areaName) {
            const response = await fetch(`${ MESSAGE_URL }?format=json&trafficareaname=${ areaName }&size=4`)
            const data = await response.json()
            // let prio = data.messages.priority
            this.trafficMessages.length = 0
            this.areaZone = this.yourLocation
            // this.dropdownTitle = this.yourLocation
            
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
            this.dropdownTitle = element
            this.getMessages(element)

                    // while (location.firstChild) {
        //     location.removeChild(location.firstChild);
        // }

        },
        sortOnSerious() {
            let sortedSeriousList = this.trafficMessages

            sortedSeriousList = sortedSeriousList.sort( (a,b) => {
                return b.priority - a.priority

            })

            this.trafficMessages = sortedSeriousList
        },



    },
}
</script>