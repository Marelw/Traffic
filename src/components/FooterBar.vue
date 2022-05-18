<template>
    <footer class="position-sticky mt-auto py-3 bg-secondary container-fluid" >
    <div class="container" >
        <!-- <div><a class="quizView">Quiz</a></div>
        <div><a class="trafficView">Trafikinfo</a></div>
        <div><a class="aboutView">Om oss</a></div>
        <span class="text-muted">Place sticky footer content here.</span> -->

            <router-link to="/trafficview">
                <a class="trafficView">
                    <div>Trafikinfo</div>
                </a>
            </router-link>

            <router-link to="/quizview">
                <a class="quizView">
                    <div>Quiz</div>
                </a>
            </router-link>

            <router-link to="/aboutview">
                <a class="aboutView">
                    <div>Om oss</div>
                </a>
            </router-link>
    </div>
</footer>
</template>