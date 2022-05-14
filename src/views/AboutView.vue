<template>
    <div>
        <div id="about-square">
            <button class="go-back">
                <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.5356 20.7975L5.75731 12L14.5356 3.2025L11.8331 0.5L0.333143 12L11.8331 23.5L14.5356 20.7975Z"
                        fill="black"
                    />
                </svg>
            </button>
            <div class="about-desktop">
                <div id="about-header">Vilka är vi?</div>
                <div class="about-devider"></div>
                <div class="main-para">
                    <p>
                        Vi som står bakom CAR PLAY är ett<br />
                        härligt gäng UX-designers och JAVA<br />
                        utvecklare från yrkeshögskolan YRGO
                    </p>
                </div>
                <div id="second-para">
                    <p>
                        CAR PLAY 1.0 är en mobile first webbapplication där du kan få<br />
                        trafikinformation och även spela frågespel i form av quiz.<br /><br />
                        Quizet är kopplat till zooner du passerar medan du kör bil. CAR PLAY använder<br />
                        SR Öppna API för att hämta trafikinformation.
                    </p>
                </div>
                <div id="gang">
                    <svg
                        id="gang1"
                        width="49"
                        height="48"
                        viewBox="0 0 49 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M24.4688 47.5C30.7262 47.5 36.7274 45.0142 41.1521 40.5896C45.5767 36.1649 48.0625 30.1637 48.0625 23.9062C48.0625 17.6488 45.5767 11.6476 41.1521 7.22295C36.7274 2.79826 30.7262 0.3125 24.4688 0.3125C18.2113 0.3125 12.2101 2.79826 7.78545 7.22295C3.36076 11.6476 0.875 17.6488 0.875 23.9062C0.875 30.1637 3.36076 36.1649 7.78545 40.5896C12.2101 45.0142 18.2113 47.5 24.4688 47.5Z"
                            fill="black"
                        />
                    </svg>

                    <svg
                        id="gang2"
                        width="66"
                        height="49"
                        viewBox="0 0 66 49"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M49.226 48.1246C47.8269 45.1784 47.1292 41.9482 47.1875 38.6871C47.1875 25.8993 53.605 12.734 65.4585 3.57964C59.542 1.75665 53.378 0.865162 47.1875 0.93714C9.4375 0.93714 0 29.2496 0 38.6871C0 48.1246 9.4375 48.1246 9.4375 48.1246H49.226Z"
                            fill="black"
                        />
                    </svg>

                    <svg
                        id="gang3"
                        width="95"
                        height="115"
                        viewBox="0 0 95 115"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.0625 114.125C10.0625 114.125 0.625 114.125 0.625 104.688C0.625 95.25 10.0625 66.9375 47.8125 66.9375C85.5625 66.9375 95 95.25 95 104.688C95 114.125 85.5625 114.125 85.5625 114.125H10.0625ZM47.8125 57.5C55.3214 57.5 62.5228 54.5171 67.8325 49.2075C73.1421 43.8978 76.125 36.6964 76.125 29.1875C76.125 21.6786 73.1421 14.4772 67.8325 9.16754C62.5228 3.85792 55.3214 0.875 47.8125 0.875C40.3036 0.875 33.1022 3.85792 27.7925 9.16754C22.4829 14.4772 19.5 21.6786 19.5 29.1875C19.5 36.6964 22.4829 43.8978 27.7925 49.2075C33.1022 54.5171 40.3036 57.5 47.8125 57.5Z"
                            fill="#93B5C6"
                        />
                    </svg>
                </div>
                <div class="main-para">
                    <p id="low-para">
                        Det härliga gänget som står<br />
                        bakom CAR PLAY är;
                    </p>
                </div>
                <div class="about-devider" style="margin-top: 12.5em"></div>
                <div class="row">
                    <div class="column">
                        <strong>UX - Designers</strong><br />
                        Jennifer<br />
                        Teodor<br />
                        Linnea<br />
                        Mathilda<br />
                        Pernilla<br />
                        Oscar<br />
                        Angelica
                    </div>
                    <div class="column">
                        <strong>JAVA - Utvecklare</strong><br />
                        Marcus<br />
                        Hamodi<br />
                        Oscar<br />
                        Patrick
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="space-before-footer"></div>
</template>

<style>

#about-square {
    /* change to f8 at the end, f5 is just for making it more clear */
    background: #f8f8f8;
    border: 1px solid black;
    border-radius: 0.5em;
    height: 64.875em;
    left: 1em;
    position: relative;
    top: 1em;
    bottom: 5em;
    width: 22.5em;
}

.go-back {
    background: #93b5c6;
    border-radius: 2em;
    height: 2.9em;
    left: 1.31em;
    position: relative;
    top: 1.31em;
    width: 2.9em;
}

#about-header {
    color: #000000;
    display: flex;
    font-weight: 700;
    font-size: 2em;
    justify-content: center;
    position: relative;
    top: 0.75em;
}

.about-devider {
    position: relative;
    width: 19.25em;
    left: 1.5em;
    top: 3.56em;
    border: 0.001em solid #93b5c6;
}

.main-para {
    color: #000000;
    font-size: 1em;
    font-weight: 700;
    left: 1em;
    position: relative;
    top: 5em;
    width: 92.5%;
}

#second-para {
    color: #000000;
    font-weight: 400;
    font-size: 1em;
    left: 1em;
    position: relative;
    width: 92.5%;
    top: 5em;
}

#gang {
    margin: auto;
    position: relative;
    width: 100%;
    height: 100%;
    left: 2em;
    top: 5em;
    justify-content: center;
}

#gang1 {
    position: absolute;
    left: 5.5em;
    top: 1.5em;
}

#gang2 {
    position: absolute;
    left: 4.5em;
    top: 5em;
}

#gang3 {
    position: absolute;
    left: 8em;
    top: 0.9em;
}

#low-para {
    text-align: center;
    position: relative;
    right: 0.5em;
    top: 10em;
}

.row {
    display: flex;
    position: relative;
    right: 0.31em;
    text-align: center;
    top: 5em;
}

.column {
    flex: 50%;
}

#space-before-footer {
    position: relative;
    margin-top: 2em;
    bottom: 0;
}

@media screen and (min-width: 992px) {
    #about-square {
        width: 98.75%;
        position: relative;
    }

    #about-square-desktop {
        background: #f8f8f8;
        border: 1px solid black;
        border-radius: 0.5em;
        height: 64.875em;
        left: 1em;
        position: relative;
        bottom: 5em;
        width: 98.75%;
    }

    .about-desktop {
        border: 1px solid black;
        position: relative;
        margin-top: 0em;
        margin-left: 0em;
        height: 50%;
        width: 100%;
    }

    .go-back {
        display: none;
    }

    .about-devider {
        display: none;
    }

    .main-para {
        position: absolute;
        top: 7em;
        left: 2em;
    }

    #second-para {
        left: 2em;
        top: 13em;
    }

    #gang {
        /* border: 1px solid black; */
        position: absolute;
        left: 50em;
        top: 2.5em;
    }

    .row {
        border: 1px solid black;
        text-align: center;
        position: absolute;
        left: 50em;
        top: 12.5em;
        width: 30%;
    }

    #low-para {
        display: none;
    }

    #about-header {
        position: absolute;
        left: 2em;
        top: 2em;
    }
}
</style>
