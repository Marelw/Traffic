<template>
    <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-light p-4">
            <router-link to="/">
                <button type="button" class="btn btn-secondary btn-lg btn-block mx-2">Hem</button>
            </router-link>

            <router-link to="/quizview">
                <button type="button" class="btn btn-secondary btn-lg btn-block mx-2">Quiz</button>
            </router-link>

            <router-link to="/trafficview">
                <button type="button" class="btn btn-secondary btn-lg btn-block mx-2">Trafikinformation</button>
            </router-link>
        </div>
    </div>
    <nav class="navbar navbar-light" style="background-color: $orange-200">
        <div class="container-fluid">
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>



</template>