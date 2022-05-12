<template>
    <div class="card text-center border-dark border-2">
        <div class="card-header">
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown" aria-expanded="false">{{ dropdownTitle }}</button>
                <div class="dropdown-menu" style="max-height: 11rem; overflow-y: auto">
                    <div v-for="area in trafficZones"><a class="dropdown-item" @click="chooseZone">{{ area.name }} </a>
                    </div>
                </div>
            </div>
            <!-- <button type="button" class="btn btn-secondary btn-sm btn-block mx-2" @click="locate">Min plats</button> -->
            <p v-if="statusMessage !== ''">{{ statusMessage }}</p>
            <div class="">
                <button class="btn btn-secondary btn-sm btn-block mx-2" type="button" style="width: 20%"
                    @Click="play">Start</button>
                <button class="btn btn-secondary btn-sm btn-block mx-2" type="button" style="width: 20%"
                    @Click="pause">Pausa</button>
            </div>
        </div>
        <div class="card-body">
            <h5 class="card-title">fråga</h5>
            <p class="card-text">{{ quizQuestion }}</p>
            <!-- v-if="quizAnswer !== ''" -->
            <h6 class="card-title">Svar:</h6>
            <p class="card-title">{{ quizAnswer }}</p>
            <button class="btn btn-secondary btn-lg my-2 col-12" type="button">spela upp fråga igen</button>
        </div>
        <div>
            <p>Nästa fråga ges om: {{ timerCount }} sec</p>
        </div>
    </div>

</template>

<script>
const AREA_URL = "http://api.sr.se/api/v2/traffic/areas"
export default {
    data() {
        return {
            gbgQuizArray: [
                { question: 'Hur många heter Glenn i Göteborg?', answer: '454 personer heter Glenn i Göteborg' },
                { question: 'Vad översätter ordet "bamba" till?', answer: 'Skolmatsal' },
                { question: 'Göteborg liknas ibland vid en annan europeisk storstad med ett "lilla" framför. Vilken storstad?', answer: 'London' }
            ],
            trafficZones: [],
            yourLocation: "",
            timerCount: 10,
            timerEnabled: false,
            dropdownTitle: "Örebro",
            quizQuestion: "",
            quizAnswer: "",

        }
    },
    watch: {
        timerEnabled(value) {
            if (value) {
                setTimeout(() => {
                    this.timerCount--;
                }, 1000);
            }
        },
        timerCount: {
            handler(value) {
                if (value > 0 && this.timerEnabled) {
                    setTimeout(() => {
                        this.timerCount--;
                    }, 1000);
                }
            },
            immediate: true, // Välj om watch ska triggas när sidan skapas
        }
    },
    mounted() {
        // this.locate()
        // this.getMessages(this.yourLocation)
        this.dropdownAreas()
        this.locate()
    },
    created() {
        //this.countDownTimer()
        //this.pause()
    },

    methods: {
        play() {
            if (this.dropdownTitle === "Göteborg") {
                this.quizGBG()
            } else if (this.dropdownTitle === "Örebro") {
                console.log("Frågor för Örebro kommer inom kort...")
            } else {
                console.log("Detta område stöds ej ännu. Donera till CarPlay på Swish: 0720468084")
            }
            this.timerEnabled = true;
        },
        pause() {
            this.timerEnabled = false;
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
        },
        async getTrafficAreaTest(latitude, longitude) {
            const response = await fetch(`${ AREA_URL }?format=json&latitude=${ latitude }&longitude=${ longitude }`)
            const data = await response.json()
            this.yourLocation = data.area.name
            this.dropdownTitle = this.yourLocation

            // IF statement för örebro och gbg
            //this.quizGBG(this.yourLocation)
        },
        async quizGBG() {
            const delay = ms => new Promise(res => setTimeout(res, ms))
            let shuffledArray = this.gbgQuizArray.sort(() => 0.5 - Math.random())


            for (let i = 0; i <= shuffledArray.length + 1; ++i) {
                if (shuffledArray.length === 0) {
                    console.log("slut")
                } else {
                    let firstElement = shuffledArray.shift()
                    await delay(10000);
                    this.timerCount = 10
                    //console.log(firstElement.question)
                    this.quizQuestion = firstElement.question

                    await delay(5000);
                    this.timerCount = 10
                    //console.log(firstElement.answer);
                    this.quizAnswer = firstElement.answer
                }
            }
        },
    }
}
</script>