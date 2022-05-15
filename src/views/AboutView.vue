<template>
    <div class="container">
        <div class="div-button">
            <button>
                <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.5356 20.7975L5.75731 12L14.5356 3.2025L11.8331 0.5L0.333143 12L11.8331 23.5L14.5356 20.7975Z"
                        fill="black"
                    />
                </svg>
            </button>
        </div>
        <div id="header"><h2>Vilka är vi?</h2></div>
        <div class="devider"></div>
        <div class="paragraphs">
            <p class="para-bold">
                Vi som står bakom CAR PLAY är ett<br />
                härligt gäng UX-designers och JAVA<br />
                utvecklare från yrkeshögskolan YRGO
            </p>

            <p>
                CAR PLAY 1.0 är en mobile first webbapplication där du kan få<br />
                trafikinformation och även spela<br />
                frågespel i form av quiz.<br /><br />
                Quizet är kopplat till zooner du passerar medan du kör bil. CAR PLAY använder<br />
                SR Öppna API för att hämta<br />
                trafikinformation.
            </p>
        </div>
        <div id="group-pic">
            <svg id="pic1" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M24.4688 47.5C30.7262 47.5 36.7274 45.0142 41.1521 40.5896C45.5767 36.1649 48.0625 30.1637 48.0625 23.9062C48.0625 17.6488 45.5767 11.6476 41.1521 7.22295C36.7274 2.79826 30.7262 0.3125 24.4688 0.3125C18.2113 0.3125 12.2101 2.79826 7.78545 7.22295C3.36076 11.6476 0.875 17.6488 0.875 23.9062C0.875 30.1637 3.36076 36.1649 7.78545 40.5896C12.2101 45.0142 18.2113 47.5 24.4688 47.5Z"
                    fill="black"
                />
            </svg>

            <svg id="pic2" width="66" height="49" viewBox="0 0 66 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M49.226 48.1246C47.8269 45.1784 47.1292 41.9482 47.1875 38.6871C47.1875 25.8993 53.605 12.734 65.4585 3.57964C59.542 1.75665 53.378 0.865162 47.1875 0.93714C9.4375 0.93714 0 29.2496 0 38.6871C0 48.1246 9.4375 48.1246 9.4375 48.1246H49.226Z"
                    fill="black"
                />
            </svg>

            <svg id="pic3" width="95" height="115" viewBox="0 0 95 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.0625 114.125C10.0625 114.125 0.625 114.125 0.625 104.688C0.625 95.25 10.0625 66.9375 47.8125 66.9375C85.5625 66.9375 95 95.25 95 104.688C95 114.125 85.5625 114.125 85.5625 114.125H10.0625ZM47.8125 57.5C55.3214 57.5 62.5228 54.5171 67.8325 49.2075C73.1421 43.8978 76.125 36.6964 76.125 29.1875C76.125 21.6786 73.1421 14.4772 67.8325 9.16754C62.5228 3.85792 55.3214 0.875 47.8125 0.875C40.3036 0.875 33.1022 3.85792 27.7925 9.16754C22.4829 14.4772 19.5 21.6786 19.5 29.1875C19.5 36.6964 22.4829 43.8978 27.7925 49.2075C33.1022 54.5171 40.3036 57.5 47.8125 57.5Z"
                    fill="#93B5C6"
                />
            </svg>
        </div>
        <div id="bot-para" class="paragraphs" style="text-align: center; top: 3.25em">
            <p class="para-bold">
                Det härliga gänget som står<br />
                bakom CAR PLAY är;
            </p>
        </div>
        <div class="devider" style="top: 3.5em"></div>
        <div class="project-members">
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
    <div id="space-before-footer"></div>
</template>

<style scoped>
div {
    background: #f8f8f8;
    border-radius: 0.5em;
    display: flex;
    flex-direction: column;
    height: 100%;
    right: 0em;
    position: relative;
    top: 1em;
    width: 93%;
}

div button {
    border-radius: 2em;
    box-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.25);
    background-color: #93b5c6;
    border: none;
    height: 2.875em;
    width: 2.875em;
}

#header {
    text-align: center;
    top: 1.4em;
    width: 100%;
}

h2 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
        "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: 800;
}

.devider {
    border: 0.001em solid #93b5c6;
    width: 100%;
    left: 0em;
    top: 2em;
}

.paragraphs {
    left: 0em;
    top: 3em;
    width: 100%;
}

.para-bold {
    font-size: 1em;
    font-weight: 700;
}

#group-pic {
    align-items: center;
    height: 10em;
    width: 100%;
    top: 3.25em;
}

#pic1 {
    margin-top: 1em;
    margin-left: -4.5em;
}

#pic2 {
    margin-top: 0.5em;
    margin-left: -5.5em;
}

#pic3 {
    margin-top: -7.1em;
    margin-left: 3.5em;
}

/* Not affected by the global (current view) div css, why? */
.project-members {
    flex-direction: row;
    text-align: center;
    top: -1em;
    margin-top: 5em;
    width: 100%;
    left: -0.3em;
    padding-bottom: 4em;
}

.column {
    flex: 50%;
    top: 0em;
}

#space-before-footer {
    margin-top: 2em;
}

@media screen and (min-width: 1440px) {
    div button,
    #bot-para,
    .devider,
    .div-button {
        display: none;
    }

    div {
        box-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.25);
    }

    /* Duplicate <box-shadow: none;> below which needs to be looked into. Reguires adjustments in main sections. */
    #header {
        box-shadow: none;
        text-align: left;
        margin-top: 5.5em;
        margin-left: 5em;
        width: 50%;
    }

    .paragraphs {
        box-shadow: none;
        margin-left: 5em;
        width: 50%;
    }

    #group-pic {
        box-shadow: none;
        top: -25em;
        left: 42.5em;
        height: 100%;
        width: 35%;
    }

    #pic1,
    #pic2,
    #pic3 {
        zoom: 1.75;
    }

    .project-members {
        box-shadow: none;
        width: 25%;
        top: -25em;
        left: 46em;
    }

    .column {
        box-shadow: none;
    }
}
</style>
