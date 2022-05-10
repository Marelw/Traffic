<template>
    <div class="card text-center border-dark border-2">
        <div class="card-header">Quiz</div>
        <div class="card-body">
            <h5 class="card-title">fråga</h5>
            <p class="card-text">placeholder för fråga</p>
            <button class="btn btn-secondary btn-lg my-2 col-12" type="button">spela upp fråga igen</button>
        </div>
    </div>
    <div class="">
        <button class="btn btn-secondary btn-lg my-2 col-12 w-50 p-3" type="button" style="width: 20%">
            Starta/Avsluta
        </button>
    </div>

    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Choose Zone</button>
        <div class="dropdown-menu" style="max-height: 11rem; overflow-y: auto" >
            <div v-for="area in trafficZones" ><a class="dropdown-item" @click="chooseZone" >{{ area.name }} </a></div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
                gbgQuizArray: [
                    { question: 'Hur många heter Glenn i Göteborg?', answer: '454 personer heter Glenn i Göteborg' },
                    { question: 'Vad översätter ordet "bamba" till?', answer: 'Skolmatsal' },
                    { question: 'Göteborg liknas ibland vid en annan europeisk storstad med ett "lilla" framför. Vilken storstad?', answer: 'London' }
                ],
                trafficZones: [],
                yourLocation: "",
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
        async dropdownAreas() {
            const response = await fetch(`http://api.sr.se/api/v2/traffic/areas?format=json&pagination=false`)
            if (!response.ok) {
                throw new Error("Could not load areas")
            }
            const data = await response.json()

            data.areas.forEach(area => this.trafficZones.push(area))
        },
        async getTrafficAreaTest(latitude, longitude) {
            const response = await fetch(`${ AREA_URL }?format=json&latitude=${ latitude }&longitude=${ longitude }`)
            const data = await response.json()

            this.yourLocation = data.area.name
            
            // IF statement för örebro och gbg
            this.quizGBG(this.yourLocation)
        },

       async quizGBG(areaName) {
        const delay = ms => new Promise(res => setTimeout(res, ms))

         if (areaName === "Göteborg") {
           let shuffledArray = this.gbgQuizArray.sort(() => 0.5 - Math.random())
           console.log(areaName)
           
            for (let i = 0; i <= shuffledArray.length + 1; ++i) {
              if (shuffledArray.length === 0) {
                console.log("slut")
              } else {
                let firstElement = shuffledArray.shift()
                  await delay(2000);
                  console.log(firstElement.question)
      
                  await delay(2000);
                  console.log(firstElement.answer);
              }
            }
         }
       },

    }

}
</script>