<template>
    <div class="container col-md-12 text-center mt-2 mb-3">
        <div class="card bg-info">
            <div class="row my-9" style="height: 12rem ">
                <div class="col-md-12 text-center mt-2 mb-9">
                    <button class="btn btn-secondary dropdown-toggle mx-2" type="button" style="width: 35%"
                        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {{ dropdownTitle }}
                    </button>
                    <button class="btn btn-secondary mx-2" type="button" style="width: 20%" @Click="startQuiz">
                        Starta
                    </button>
                    <button class="btn btn-secondary mx-2" type="button" style="width: 25%" @Click="endQuiz">
                        Avsluta
                    </button>
                    <div class="dropdown-menu" style="max-height: 11rem; overflow-y: auto">
                        <div v-for="area in trafficZones">
                            <a class="dropdown-item" @click="chooseZone">{{ area.name }} </a>
                        </div>
                    </div>
                </div>
                <p v-if="statusMessage !== ''">{{ statusMessage }}</p>
                <p class="mx-2 my-4" v-if="quizRunning">
                    <span v-if="answerVisible">Nästa fråga ges om:</span>
                    <span v-if="!answerVisible">Svar visas om:</span>
                    {{ countDownTime }} sec
                </p>
                <div v-if="quizRunning">

                    <p>
                        <span v-for="(q, i) in currentQuiz">
                            <span v-if="i < currentQuestion">
                                <svg width="12" height="12" viewBox="0 0 113 113" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M107.09 56.5453L21.1635 56.5453C18.1645 56.5453 15.2328 57.4346 12.7391 59.1008C10.2455 60.767 8.30195 63.1352 7.15426 65.906C6.00657 68.6768 5.70628 71.7256 6.29137 74.6671C6.87646 77.6085 8.32064 80.3104 10.4413 82.431C12.562 84.5517 15.2638 85.9959 18.2053 86.581C21.1467 87.166 24.1956 86.8658 26.9663 85.7181C29.7371 84.5704 32.1053 82.6268 33.7715 80.1332C35.4377 77.6396 36.327 74.7079 36.327 71.7088M102.036 76.7633L66.6541 76.7633C63.655 76.7633 60.7233 77.6526 58.2297 79.3188C55.736 80.985 53.7925 83.3532 52.6448 86.124C51.4971 88.8948 51.1968 91.9436 51.7819 94.8851C52.367 97.8265 53.8112 100.528 55.9318 102.649C58.0525 104.77 60.7544 106.214 63.6958 106.799C66.6372 107.384 69.6861 107.084 72.4569 105.936C75.2277 104.788 77.5959 102.845 79.2621 100.351C80.9282 97.8576 81.8176 94.9259 81.8176 91.9268L102.036 76.7633ZM96.9811 36.3273L41.3815 36.3273C38.3825 36.3273 35.4508 35.438 32.9571 33.7718C30.4635 32.1056 28.52 29.7374 27.3723 26.9666C26.2246 24.1958 25.9243 21.1469 26.5094 18.2055C27.0945 15.2641 28.5386 12.5622 30.6593 10.4415C32.78 8.32089 35.4818 6.87671 38.4233 6.29162C41.3647 5.70653 44.4136 6.00682 47.1844 7.15451C49.9551 8.3022 52.3233 10.2458 53.9895 12.7394C55.6557 15.233 56.545 18.1647 56.545 21.1638L96.9811 36.3273Z"
                                        stroke="black" stroke-width="10.109" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </span>
                            <span v-if="i > currentQuestion">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                    class="bi bi-signpost" viewBox="0 0 16 16">
                                    <path
                                        d="M7 1.414V4H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v6h2v-6h3.532a1 1 0 0 0 .768-.36l1.933-2.32a.5.5 0 0 0 0-.64L13.3 4.36a1 1 0 0 0-.768-.36H9V1.414a1 1 0 0 0-2 0zM12.532 5l1.666 2-1.666 2H2V5h10.532z" />
                                </svg>
                            </span>
                            <span v-if="currentQuestion === i">
                                <svg width="22" height="22" viewBox="0 0 139 99" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M106.514 34.5984L105.189 34.1239L93.9693 13.0881C91.862 9.13489 88.7198 5.82884 84.8788 3.5235C81.0377 1.21815 76.6422 0.00023883 72.1624 2.05914e-08H43.9104C38.7223 -0.000211704 33.6658 1.63232 29.4573 4.66624C25.2488 7.70017 22.1019 11.9816 20.4625 16.9038L15.1146 32.9476C10.6341 34.8361 6.81027 38.0042 4.12174 42.0555C1.43321 46.1068 -0.000530407 50.8611 1.47195e-07 55.7233V66.7256C1.47195e-07 73.7441 4.18147 79.7741 10.1818 82.4926C10.9589 86.9447 13.2378 90.9962 16.639 93.9722C20.0402 96.9482 24.3584 98.6692 28.8742 98.8483C33.3901 99.0275 37.831 97.654 41.4573 94.9568C45.0835 92.2596 47.6763 88.4013 48.8036 84.0248H89.5902C90.7175 88.4013 93.3102 92.2596 96.9365 94.9568C100.563 97.654 105.004 99.0275 109.52 98.8483C114.035 98.6692 118.354 96.9482 121.755 93.9722C125.156 90.9962 127.435 86.9447 128.212 82.4926C131.246 81.1228 133.821 78.9067 135.627 76.1099C137.433 73.3132 138.394 70.0547 138.394 66.7256V63.3745C138.393 58.2729 136.813 53.2966 133.872 49.1284C130.93 44.9603 126.771 41.8047 121.964 40.0946L107.038 34.7863V34.5984H106.514ZM29.8337 20.0276C30.8178 17.0729 32.7072 14.5032 35.2338 12.6827C37.7605 10.8622 40.7962 9.88348 43.9104 9.88527H54.369V34.5984H24.9801L29.8337 20.0276ZM94.2362 34.5984H64.2542V9.88527H72.1624C74.8506 9.88431 77.4884 10.6141 79.7938 11.9967C82.0991 13.3792 83.9853 15.3624 85.2505 17.7342L94.2461 34.5984H94.2362ZM19.7705 79.0821C19.7705 76.4604 20.812 73.946 22.6659 72.0922C24.5197 70.2384 27.0341 69.1969 29.6558 69.1969C32.2775 69.1969 34.7919 70.2384 36.6457 72.0922C38.4996 73.946 39.5411 76.4604 39.5411 79.0821C39.5411 81.7039 38.4996 84.2182 36.6457 86.0721C34.7919 87.9259 32.2775 88.9674 29.6558 88.9674C27.0341 88.9674 24.5197 87.9259 22.6659 86.0721C20.812 84.2182 19.7705 81.7039 19.7705 79.0821ZM108.738 69.1969C111.36 69.1969 113.874 70.2384 115.728 72.0922C117.582 73.946 118.623 76.4604 118.623 79.0821C118.623 81.7039 117.582 84.2182 115.728 86.0721C113.874 87.9259 111.36 88.9674 108.738 88.9674C106.116 88.9674 103.602 87.9259 101.748 86.0721C99.8942 84.2182 98.8527 81.7039 98.8527 79.0821C98.8527 76.4604 99.8942 73.946 101.748 72.0922C103.602 70.2384 106.116 69.1969 108.738 69.1969Z"
                                        fill="black" />
                                </svg>
                            </span>
                        </span>
                    </p>
                </div>
            </div>
            <div class="card-body mx-4 my-4 bg-light" style="height: 14rem ">
                <h5 class="card-title">Fråga</h5>
                <p class="card-text">{{ quizQuestion }}</p>
                <h6 class="card-title">Svar:</h6>
                <p class="card-title" v-if="answerVisible">{{ quizAnswer }}</p>
                <button class="btn btn-secondary btn-sm mx-2" type="button" style="width: 30%" @click="speak(this.quizQuestion)">spela upp igen</button>
            </div>
        </div>
    </div>
</template>

<script>
import { pauseTracking } from '@vue/reactivity'

const AREA_URL = "https://api.sr.se/api/v2/traffic/areas"
export default {
    data() {
        return {
            currentQuiz: [],
            gbgQuizArray: [
                { question: "Hur många heter Glenn i Göteborg?", answer: "454 personer heter Glenn i Göteborg" },
                { question: 'Vad översätter ordet "bamba" till?', answer: "Skolmatsal" },
                {
                    question: 'Göteborg liknas ibland vid en annan europeisk storstad med ett "lilla" framför. Vilken storstad?',
                    answer: "London"
                },
                { question: "Hur många allsvenska mästerskap har IFK Göteborg vunnit?", answer: "18" },
                { question: "Vilken fisk kallas fotbollslaget Gais för?", answer: "Makrillarna" },
                { question: "På vilken Ö växte trubaduren Evert Taube upp på?", answer: "Vinga" }
            ],
            orebroQuizArray: [
                { question: "Vad heter vattentornet i Örebro?", answer: "Svampen" },
                { question: "Vilken arkitekt ritade det nya kulturhuset i Örebro?", answer: "Gert Wingårdh" },
                { question: "Vad heter fotbollsarenan där Örebro SK spelar sina fotbollsmatcher?", answer: "Behrn Arena" },
                { question: "På vilken plats över Sveriges största städer är Örebro på? ", answer: "7:e plats" },
                { question: "I vilket landskap ligger Örebro?", answer: "Närke" },

            ],
            trafficZones: [],
            yourLocation: "",
            dropdownTitle: this.yourLocation,
            quizQuestion: "",
            quizAnswer: "",

            currentQuestion: 0,
            countDownTime: 120,
            timer: null,
            quizRunning: false,
            answerVisible: false,
        }
    },
    mounted() {
        this.dropdownAreas()
        this.locate()
    },

    methods: {
        countDownQuestion() {
            if (this.countDownTime > 0) {
                this.timer = setTimeout(() => {
                    this.countDownTime -= 1
                    this.countDownQuestion()
                }, 1000)
            } else {
                this.showAnswer()
            }
        },
        countDownAnswer() {
            if (this.countDownTime > 0) {
                this.timer = setTimeout(() => {
                    this.countDownTime -= 1
                    this.countDownAnswer()
                }, 1000)
            } else {
                this.answerVisible = false
                this.nextQuestion()
            }
        },
        finishQuiz() {
            this.quizQuestion = "Quizet avslutat! spela igen?"
            this.quizAnswer = ""
            this.quizRunning = false
        },
        showAnswer() {
            this.countDownTime = 120
            this.answerVisible = true
            this.speak(this.quizAnswer)
            this.countDownAnswer()
        },
        async nextQuestion() {
            clearTimeout(this.timer)
            let nextQuestion = this.currentQuestion + 1

            this.answerVisible = false
            if (nextQuestion < this.currentQuiz.length) {
                this.currentQuestion = nextQuestion
                this.countDownTime = 120
                this.quizQuestion = this.currentQuiz[nextQuestion].question
                this.speak(this.quizQuestion)
                this.quizAnswer = this.currentQuiz[nextQuestion].answer
                
                this.countDownQuestion()
            } else {
                this.finishQuiz()
            }
        },
        startQuiz() {
            this.quizRunning = true
            if (this.dropdownTitle === "Göteborg") {
                this.currentQuiz = [...this.gbgQuizArray]
                this.currentQuiz.sort(() => 0.5 - Math.random())
                this.currentQuestion = -1

                this.nextQuestion()
            } else if (this.dropdownTitle === "Örebro") {
                this.currentQuiz = [...this.orebroQuizArray]
                this.currentQuiz.sort(() => 0.5 - Math.random())
                this.currentQuestion = -1

                this.nextQuestion()
            } else {
                this.quizQuestion = this.dropdownTitle + " stöds ej!! Donera till CarPlay"
                this.quizAnswer = ""
                this.quizRunning = false
                this.currentQuiz = []
            }
        },
        endQuiz() {
            this.quizQuestion = "Quizet avslutat! spela igen?"
            this.quizAnswer = ""
            this.quizRunning = false
            this.currentQuiz = []
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
            const response = await fetch(`${ AREA_URL }?format=json&pagination=false`)
            if (!response.ok) {
                throw new Error("Could not load areas")
            }
            const data = await response.json()
            data.areas.forEach((area) => this.trafficZones.push(area))
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
        },
        speak(qna) {
            let lang = SpeechSynthesisUtterance.lang = 'sv-SE'
            let text = qna
            let message = new SpeechSynthesisUtterance(text)
            if (speechSynthesis) {
                if (lang === 'sv-SE') {
                    message.lang = 'sv-SE'
                    speechSynthesis.speak(message)
                    speechSynthesis.pause()
                }
                else {
                    alert('Text till tal språket stödjs ej.')
                }
            }
        }
    },
}
</script>