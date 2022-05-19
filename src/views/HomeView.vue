<template>
    <div class="container">
        <div class="card">
            <div class="pics-square">
                <svg width="300" height="214" viewBox="0 0 300 214" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M230.427 74.8488L227.562 73.8223L203.289 28.3142C198.73 19.762 191.933 12.6099 183.623 7.62258C175.313 2.6353 165.805 0.000516675 156.113 4.45466e-08H94.9938C83.7702 -0.000457991 72.8311 3.53129 63.7267 10.0948C54.6223 16.6582 47.8144 25.9205 44.2677 36.569L32.6982 71.2774C23.0054 75.3629 14.733 82.2168 8.9168 90.9811C3.10055 99.7454 -0.00114746 110.031 3.18435e-07 120.549V144.351C3.18435e-07 159.535 9.04601 172.58 22.0269 178.461C23.7079 188.092 28.6381 196.857 35.9961 203.295C43.3541 209.734 52.6958 213.457 62.4652 213.844C72.2346 214.232 81.8419 211.261 89.6869 205.425C97.5318 199.59 103.141 191.244 105.58 181.776H193.816C196.254 191.244 201.863 199.59 209.708 205.425C217.553 211.261 227.16 214.232 236.93 213.844C246.699 213.457 256.041 209.734 263.399 203.295C270.757 196.857 275.687 188.092 277.368 178.461C283.933 175.498 289.502 170.703 293.41 164.653C297.317 158.603 299.395 151.553 299.395 144.351V137.102C299.393 126.065 295.976 115.299 289.613 106.282C283.249 97.2652 274.251 90.4385 263.853 86.739L231.561 75.2551V74.8488H230.427ZM64.541 43.3267C66.6699 36.9349 70.7573 31.3755 76.2234 27.4372C81.6894 23.4989 88.2567 21.3815 94.9938 21.3854H117.619V74.8488H54.0408L64.541 43.3267ZM203.867 74.8488H139.005V21.3854H156.113C161.929 21.3833 167.635 22.9622 172.622 25.953C177.61 28.9439 181.69 33.2344 184.427 38.3653L203.888 74.8488H203.867ZM42.7707 171.083C42.7707 165.411 45.0238 159.972 49.0344 155.961C53.0449 151.951 58.4843 149.698 64.1561 149.698C69.8278 149.698 75.2673 151.951 79.2778 155.961C83.2884 159.972 85.5415 165.411 85.5415 171.083C85.5415 176.755 83.2884 182.194 79.2778 186.205C75.2673 190.215 69.8278 192.468 64.1561 192.468C58.4843 192.468 53.0449 190.215 49.0344 186.205C45.0238 182.194 42.7707 176.755 42.7707 171.083ZM235.239 149.698C240.911 149.698 246.35 151.951 250.361 155.961C254.371 159.972 256.624 165.411 256.624 171.083C256.624 176.755 254.371 182.194 250.361 186.205C246.35 190.215 240.911 192.468 235.239 192.468C229.567 192.468 224.128 190.215 220.117 186.205C216.107 182.194 213.854 176.755 213.854 171.083C213.854 165.411 216.107 159.972 220.117 155.961C224.128 151.951 229.567 149.698 235.239 149.698Z"
                        fill="#93B5C6"
                    />
                </svg>
            </div>
            <div class="para-home">
                <h1>Get your <span class="word-color">CAR PLAY</span> on</h1>
                <h2>
                    Din trafikinformations-sida som låter din inre<br />
                    quizare köra ut bland regional allmänkunskap
                </h2>
            </div>
            <p id="mobile-para">
                På CAR PLAY kan du få<br />
                trafikinformation, utmana dina<br />
                kunskaper trafiksäkert.
            </p>
            <span class="border"></span>
            <router-link to="/trafficview">
                <button class="btn btn-secondary btn-lg my-4" type="button" style="width: 100%">
                    Trafikinformation
                </button>
            </router-link>
            <router-link to="/quizview">
                <button class="btn btn-secondary btn-lg my-4" type="button" style="width: 100%">Quiz</button>
            </router-link>
            <router-link to="/aboutview">
                <button class="btn btn-secondary btn-lg my-4" type="button" style="width: 100%">Om oss</button>
            </router-link>
        </div>

        <div class="card" id="home-desktop">
            <div class="para-home">
                <h1>Vilka är vi?</h1>
                <h2>
                    Vi som står bakom <span class="word-color">CAR PLAY</span> är ett<br />
                    härligt gäng UX-designers och JAVA<br />
                    utvecklare från yrkeshögskolan YRGO
                </h2>
                <p>
                    CAR PLAY 1.0 är en mobile first webbapplication där du kan få<br />
                    trafikinformation och även spela frågespel i form av quiz. Quizet är<br />
                    kopplat till zooner du passerar medan du kör bil. CAR PLAY använder<br />
                    SR Öppna API för att hämta trafikinformation.
                </p>
            </div>
            <div class="pics-square2">
                <div id="pic1">
                    <svg width="100" height="99" viewBox="0 0 100 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M49.875 99C62.9701 99 75.5288 93.798 84.7884 84.5384C94.048 75.2788 99.25 62.7201 99.25 49.625C99.25 36.5299 94.048 23.9712 84.7884 14.7116C75.5288 5.45199 62.9701 0.25 49.875 0.25C36.7799 0.25 24.2212 5.45199 14.9616 14.7116C5.70199 23.9712 0.5 36.5299 0.5 49.625C0.5 62.7201 5.70199 75.2788 14.9616 84.5384C24.2212 93.798 36.7799 99 49.875 99Z"
                            fill="black"
                        />
                    </svg>
                </div>
                <div id="pic2">
                    <svg width="137" height="100" viewBox="0 0 137 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M103.016 99.4988C100.088 93.3332 98.628 86.5732 98.75 79.7488C98.75 52.9876 112.18 25.4363 136.986 6.27879C124.605 2.4638 111.705 0.59817 98.75 0.7488C19.75 0.7488 0 59.9988 0 79.7488C0 99.4988 19.75 99.4988 19.75 99.4988H103.016Z"
                            fill="black"
                        />
                    </svg>
                </div>
                <div id="pic3">
                    <svg width="198" height="238" viewBox="0 0 198 238" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.25 237.5C20.25 237.5 0.5 237.5 0.5 217.75C0.5 198 20.25 138.75 99.25 138.75C178.25 138.75 198 198 198 217.75C198 237.5 178.25 237.5 178.25 237.5H20.25ZM99.25 119C114.964 119 130.035 112.758 141.146 101.646C152.258 90.5345 158.5 75.4641 158.5 59.75C158.5 44.0359 152.258 28.9655 141.146 17.8539C130.035 6.74239 114.964 0.5 99.25 0.5C83.5359 0.5 68.4654 6.74239 57.3539 17.8539C46.2424 28.9655 40 44.0359 40 59.75C40 75.4641 46.2424 90.5345 57.3539 101.646C68.4654 112.758 83.5359 119 99.25 119Z"
                            fill="#93B5C6"
                        />
                    </svg>
                </div>
            </div>
            <div class="project-members">
                <div class="column">
                    <p class="para-bold">UX - Designers</p>
                    <span class="word-color"
                        >Jennifer<br />
                        Teodor<br />
                        Linnéa<br />
                        Mathilda<br />
                        Pernilla<br />
                        Oscar<br />
                        Angelica</span
                    >
                </div>
                <div class="column">
                    <p class="para-bold">JAVA - Utvecklare</p>
                    <span class="word-color"
                        >Marcus<br />
                        Hamodi<br />
                        Oscar<br />
                        Patrick</span
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
@media screen and (max-width: 1200px) {
    #home-desktop,
    svg,
    .para-home,
    .project-members,
    .column,
    .pics-square2 {
        display: none;
    }
}

.card {
    border: 1px solid black;
    border: none;
    background-color: #f8f8f8;
    border-radius: 0.75em;
    top: 0.5em;
    height: 40.1em;
    left: 0.25em;
    width: 97.75%;
    padding-top: 5em;
    padding-bottom: 40em;
    padding-inline: 0.75em 0.75em;
}

p {
    font-weight: 600;
    text-align: center;
}

.btn-secondary {
    box-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.25);
    border-radius: 0.75em;
    height: 4.25em;
    font-weight: 600;
    font-size: 1.25em;
    position: relative;
    top: 1em;
}

.word-color {
    color: #93b5c6;
}

#mobile-para {
    margin-top: -2.5em;
    margin-bottom: 2em;
}

@media screen and (min-width: 1200px) {
    button,
    .border,
    #mobile-para {
        display: none;
    }
    .card {
        box-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.25);
        left: 0;
        top: 0em;
        height: 46.5em;
        margin-top: 0;
        margin-bottom: 1em;
    }

    #home-desktop {
        margin-top: 2em;
        flex-direction: column;
    }

    .pics-square {
        margin: 0;
        padding: 0;
        margin-left: 7.5em;
        margin-top: 5em;
    }

    .pics-square2 {
        display: flex;
        margin-top: -27.5em;
        margin-left: 43.1em;
        width: 40%;
        padding-bottom: 1em;
        position: relative;
    }

    #pic1 {
        position: relative;
        margin-top: 1.25em;
        margin-left: 5em;
        left: 9.75em;
    }

    #pic2 {
        position: relative;
        left: 1em;
        margin-top: 8.6em;
        margin-left: 0em;
    }

    .para-home {
        margin-left: 7.5em;
    }

    h1 {
        font-weight: 700;
        font-size: 3.5em;
        margin-top: 1.5em;
    }

    h2 {
        font-weight: 700;
        margin-top: 1em;
    }

    p {
        text-align: left;
        margin-top: 2em;
    }

    .project-members {
        display: flex;
        margin-left: 55.5em;
        width: 30%;
        text-align: left;
    }

    .column {
        flex: 50%;
    }

    .para-bold {
        font-weight: 700;
    }
}
</style>
