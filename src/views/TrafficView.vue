<template>
    <div class="container col-md-12 text-center mt-2 mb-3">
        <div class="btn-group">
            <button
                class="btn btn-secondary"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <svg
                    id="pin-pic"
                    width="31"
                    height="38"
                    viewBox="0 0 31 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15.5 1.90277e-08C11.4159 -0.00020024 7.49668 1.58034 4.59428 4.39809C1.69188 7.21584 0.0408414 11.0431 0 15.048C0 25.4599 13.6594 37.0499 14.2406 37.5439C14.5916 37.8382 15.0382 38 15.5 38C15.9618 38 16.4084 37.8382 16.7594 37.5439C17.4375 37.0499 31 25.4599 31 15.048C30.9592 11.0431 29.3081 7.21584 26.4057 4.39809C23.5033 1.58034 19.5841 -0.00020024 15.5 1.90277e-08ZM15.5 20.8999C14.1588 20.8999 12.8477 20.5099 11.7325 19.7792C10.6174 19.0485 9.7482 18.0099 9.23494 16.7948C8.72168 15.5797 8.58739 14.2426 8.84905 12.9526C9.11071 11.6626 9.75656 10.4777 10.7049 9.54771C11.6533 8.61769 12.8616 7.98434 14.177 7.72775C15.4925 7.47116 16.856 7.60285 18.0951 8.10618C19.3342 8.6095 20.3933 9.46184 21.1384 10.5554C21.8835 11.649 22.2812 12.9347 22.2812 14.25C22.2812 16.0136 21.5668 17.7051 20.2951 18.9522C19.0233 20.1993 17.2985 20.8999 15.5 20.8999Z"
                        fill="black"
                    />
                </svg>

                <span class="make-bold"> {{ dropdownTitle }} </span>
                <svg
                    id="arrow-pic"
                    width="24"
                    height="15"
                    viewBox="0 0 24 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20.7975 0.464478L12 9.24281L3.2025 0.464478L0.5 3.16698L12 14.667L23.5 3.16698L20.7975 0.464478Z"
                        fill="black"
                    />
                </svg>
            </button>
            <div class="dropdown-menu dropdown-menu-end" style="max-height: 11rem; overflow-y: auto">
                <div v-for="area in trafficZones">
                    <a class="dropdown-item" @click="chooseZone">{{ area.name }}</a>
                </div>
            </div>
        </div>
        <div class="btn-group mx-2">
            <button
                type="button"
                class="btn btn-secondary"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <span class="make-bold" id="filter-text">Filter</span>
                <svg
                    id="filter-pic"
                    width="38"
                    height="38"
                    viewBox="0 0 38 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M36.5238 6.14292H12.4286M8.04762 6.14292H1.4762M36.5238 28.0477H12.4286M8.04762 28.0477H1.4762M25.5714 17.0953H1.4762M36.5238 17.0953H29.9524M10.2381 1.76196C10.8191 1.76196 11.3762 1.99274 11.787 2.40354C12.1978 2.81433 12.4286 3.37149 12.4286 3.95244V8.33339C12.4286 8.91434 12.1978 9.4715 11.787 9.88229C11.3762 10.2931 10.8191 10.5239 10.2381 10.5239C9.65715 10.5239 9.09999 10.2931 8.6892 9.88229C8.27841 9.4715 8.04762 8.91434 8.04762 8.33339V3.95244C8.04762 3.37149 8.27841 2.81433 8.6892 2.40354C9.09999 1.99274 9.65715 1.76196 10.2381 1.76196ZM10.2381 23.6667C10.8191 23.6667 11.3762 23.8975 11.787 24.3083C12.1978 24.7191 12.4286 25.2763 12.4286 25.8572V30.2382C12.4286 30.8191 12.1978 31.3763 11.787 31.7871C11.3762 32.1979 10.8191 32.4286 10.2381 32.4286C9.65715 32.4286 9.09999 32.1979 8.6892 31.7871C8.27841 31.3763 8.04762 30.8191 8.04762 30.2382V25.8572C8.04762 25.2763 8.27841 24.7191 8.6892 24.3083C9.09999 23.8975 9.65715 23.6667 10.2381 23.6667ZM27.7619 12.7143C28.3429 12.7143 28.9 12.9451 29.3108 13.3559C29.7216 13.7667 29.9524 14.3239 29.9524 14.9048V19.2858C29.9524 19.8667 29.7216 20.4239 29.3108 20.8347C28.9 21.2455 28.3429 21.4762 27.7619 21.4762C27.181 21.4762 26.6238 21.2455 26.213 20.8347C25.8022 20.4239 25.5714 19.8667 25.5714 19.2858V14.9048C25.5714 14.3239 25.8022 13.7667 26.213 13.3559C26.6238 12.9451 27.181 12.7143 27.7619 12.7143Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" @click="sortOnSerious">Sorterad Prioritet</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" @click="sortOnMild">Mild påverkan</a></li>
                <li><a class="dropdown-item" @click="sortOnDisturbance">Störningar</a></li>
                <li><a class="dropdown-item" @click="sortOnBigEvents">Stora påverkningar</a></li>
            </ul>
        </div>
    </div>
    <p v-if="statusMessage !== ''">{{ statusMessage }}</p>

    <div class="container d-flex flex-column min-vh-100">
        <div class="card mx-auto mb-3" v-for="msg in trafficMessages">
            <div class="card-body">
                <h5 class="card-title">{{ msg.subcategory }}</h5>
                <h6 class="card-title2">{{ "Plats: " + msg.title }}</h6>
                <p class="card-text">{{ msg.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
const MESSAGE_URL = "https://api.sr.se/api/v2/traffic/messages"
const AREA_URL = "https://api.sr.se/api/v2/traffic/areas"
export default {
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
            myInterval: setInterval(this.alertFunction, 120000),
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
            this.dropdownZone = areaName
            const data = await response.json()

            this.trafficMessages.length = 0
            this.areaZone = this.yourLocation

            data.messages.forEach((message) => this.trafficMessages.push(message))

            clearInterval(this.myInterval)
            this.startToCheckForNewMessages()
        },
        async dropdownAreas() {
            const response = await fetch(`${AREA_URL}?format=json&pagination=false`)
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
        sortOnDisturbance() {
            let filterOnPrio4 = []
            this.trafficMessages.forEach((msg) => filterOnPrio4.push(msg))

            let prioFour = filterOnPrio4.filter(function (prio) {
                return prio.priority === 3 || prio.priority === 4
            })
            this.trafficMessages = prioFour
        },
        sortOnBigEvents() {
            let filterOnBigPrio = []
            this.trafficMessages.forEach((msg) => filterOnBigPrio.push(msg))

            let BigPrio = filterOnBigPrio.filter(function (prio) {
                return prio.priority === 1 || prio.priority === 2
            })
            this.trafficMessages = BigPrio
        },
        sortOnMild() {
            let filterOnSmallPrio = []
            this.trafficMessages.forEach((msg) => filterOnSmallPrio.push(msg))

            let SmallPrio = filterOnSmallPrio.filter(function (prio) {
                return prio.priority === 5
            })
            this.trafficMessages = SmallPrio
        },
        async alertFunction() {
            this.checkArray = []

            let response = await fetch(`${MESSAGE_URL}?format=json&trafficareaname=${this.dropdownZone}&size=3`)
            const data = await response.json()

            data.messages.forEach((message) => this.checkArray.push(message))

            let checkNow = this.checkArray
            let checkThis = this.trafficMessages

            if (checkNow[0].id !== checkThis[0].id) {
                this.getMessages(this.dropdownZone)
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
            }
        },
        startToCheckForNewMessages() {
            this.myInterval = setInterval(this.alertFunction, 120000)
        },
    },
}
</script>
<style scoped>
.btn-group {
    margin-top: 0.5em;
    margin-bottom: 1em;
}
.card {
    border-radius: 0.75em;
    border: 1px solid black;
    height: 12.25em;
    width: 21.4em;
    overflow: auto;
}

#dropdownMenuButton1 {
    border: none;
    border-radius: 0.75em;
    width: 15em;
    height: 3em;
    left: -0.65em;
    position: relative;
    background-color: #ededed;
}

#pin-pic {
    position: absolute;
    left: 1em;
    top: 0.25em;
}

#arrow-pic {
    position: absolute;
    right: 1em;
    top: 1em;
}

#dropdownMenuButton2 {
    border-radius: 0.75em;
    width: 4em;
    height: 3em;
    border: none;
    margin-left: 0em;
    right: -1em;
    background-color: white;
}

#filter-pic {
    position: absolute;
    right: 0.75em;
    top: 0.25em;
}

#filter-text {
    visibility: hidden;
}

/* makes bold _and_ sets margin... ToFix, if not, change the name */
.make-bold {
    position: absolute;
    font-weight: 600;
    left: 4em;
    top: 0.55em;
}

@media screen and (min-width: 1400px) {
    .card {
        border: none;
        box-shadow: 0em 0.25em 0.25em 0.25em rgba(0, 0, 0, 0.25);
        width: 75%;
    }

    #dropdownMenuButton1 {
        border-radius: 0.75em;
        width: 30em;
        height: 3em;
        left: -0.65em;
        position: relative;
    }

    #dropdownMenuButton2 {
        border-radius: 0.75em;
        width: 20em;
        height: 3em;
        border: none;
        margin-left: 8.5em;
        background-color: #ededed;
    }

    #filter-pic {
        right: 1.5em;
    }

    #filter-text {
        visibility: visible;
    }
}
</style>
