<template>
    <footer class="position-sticky mt-auto py-3 bg-secondary container-fluid">
        <div class="container">
            <router-link to="/">
                <a id="footer-header">
                    <div>CAR PLAY</div>
                </a>
            </router-link>

            <router-link to="/trafficview">
                <a>
                    <div>Trafikinformation</div>
                </a>
            </router-link>

            <router-link to="/quizview">
                <a>
                    <div>Quiz</div>
                </a>
            </router-link>

            <router-link to="/aboutview">
                <a>
                    <div>Om oss</div>
                </a>
            </router-link>
        </div>
    </footer>
</template>

<style scoped>
a {
    color: black;
    text-decoration: none;
}

#footer-header {
    font-weight: 650;
    font-size: 1em;
}

@media screen and (min-width: 1400px) {
    .container {
        padding-top: 2em;
        padding-bottom: 2em;
    }

    .container div {
        margin-top: 0.25em;
    }
}
</style>
