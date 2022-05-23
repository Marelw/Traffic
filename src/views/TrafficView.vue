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

    <!-- för att testa counterstore -->
    <!-- <div> {{ counterStore.counter }}</div>
    <button  @click="counterStore.increment" class="btn-lg"></button>
    <div>{{ counterStore.doubleCount }}</div> -->

    <modal-comp ref="ModalComp"></modal-comp>
</template>

<script>
import { useCounterStore } from "@/stores/counter.js"
import ModalComp from "@/components/ModalComp.vue"

const MESSAGE_URL = "http://api.sr.se/api/v2/traffic/messages"
const AREA_URL = "http://api.sr.se/api/v2/traffic/areas"
export default {
    components: { ModalComp },

    setup() {
        const counterStore = useCounterStore()

        return { counterStore }
    },
    data() {
        return {
            checkArray: [],
            trafficMessages: [],
            trafficZones: [],
            yourLocation: "",
            statusMessage: "",
            areaZone: "",
            dropdownTitle: "Örebro",
            dropdownZone: "",
            modalShow: false,
            myInterval: setInterval(this.alertFunction, 2000),
            myTimeOut: setTimeout(this.alertFunction, 2000)
        }
    },
    mounted() {
        this.dropdownAreas()
        this.locate()
    },
    watch: {
        trafficMessages(checkArray, trafficMessages) {
            if(trafficMessages[0].id === checkArray[0].id) {
                this.handleListChange()
            }
        }
    },
    computed: {
        getListObject() {
            return this.counterStore.getList
        },
    },
    methods: {
        handleListChange() {
            if (this.counterStore.intervalList[0].id === this.counterStore.messageList[0].id) {
                //show modal

                alert("test")
            }
        },
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
            const response = await fetch(`${MESSAGE_URL}?format=json&trafficareaname=${areaName}&size=3`)
            this.dropdownZone = areaName
            const data = await response.json()

            this.counterStore.trafficArea = areaName

            this.trafficMessages.length = 0
            this.areaZone = this.yourLocation

            this.counterStore.messageList = []
            data.messages.forEach((message) => {
                this.counterStore.addToList(message)
                this.trafficMessages.push(message)
            })
            clearInterval(this.myInterval)
            this.startToCheckForNewMessages()
            // this.myTimeOut = setTimeout(this.alertFunction, 2000)
            // this.alertFunction()
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

            let prioFour = filterOnPrio4.filter(function (prio) {
                return prio.priority === 4 && prio.priority === 3
            })
            console.log(prioFour)
            this.trafficMessages = prioFour
        },
        sortOnMild() {
            return this.trafficMessages.filter(message.priority >= 0 && message.priority < 3)
        },
        async alertFunction() {
            this.checkArray = []

            let response = await fetch(`${MESSAGE_URL}?format=json&trafficareaname=${this.dropdownZone}&size=3`)
            const data = await response.json()

            this.counterStore.intervalList = []
            // data.messages.forEach((message) => this.counterStore.addToIntervalList(message))
             data.messages.forEach((message) => this.checkArray.push(message))
            
            if(typeof interval !== 'undefined') clearInterval(interval)
            // this.$refs.ModalComp.checkIfWeCouldShowModal()
            let checkNow = this.checkArray
            let checkThis = this.trafficMessages
     

            if (checkNow[0].id === checkThis[0].id) {
                
                let subcategory = checkNow[0].subcategory
                let prio = checkNow[0].priority
                let title = checkNow[0].title
                let description = checkNow[0].description

                alert(
                    "Kategori: " +
                        subcategory +
                        ", Prio: " +
                        prio +
                        ", Plats: " +
                        title +
                        ", Beskrivning: " +
                        description +
                        "."
                )
                // console.log("Kategori: " + subcategory + ", Prio: " + prio + ", Plats: " + title + ", Beskrivning: " + description + ".")
            } else {
                alert("no update")
                this.modalShow = true
            }
            // myTimeOut(this.alertFunction, 2000)
        },
        startToCheckForNewMessages() {
            this.myInterval = setInterval(this.alertFunction, 2000)
            // this.myTimeOut = setTimeout(this.alertFunction, 2000)
            
        },
    },
}
</script>