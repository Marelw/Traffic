<template>
    <div>
        <div class="d-grid gap-2 justify-content-md-center">
            <div>
            </div>
            <div >
            </div>

            <div class="d-grid gap-2">
                <router-link to="/quizview">
                    <button class="btn btn-secondary btn-lg my-2" type="button" style="width: 100%">Quiz</button>
                </router-link>
                <router-link to="/trafficview">
                    <button class="btn btn-secondary btn-lg my-2" type="button" style="width: 100%">Trafikinformation</button>
                </router-link>
                <router-link to="/aboutview">
                    <button class="btn btn-secondary btn-lg my-2" type="button" style="width: 100%">Om oss</button>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>