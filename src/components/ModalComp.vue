<template>

    <!-- <button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button> -->

    <div class="container">
        <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
            <div id="liveToast" class="toast" :class="{hide: !alertShown, show: alertShown}" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <!-- <img src="..." class="rounded me-2" alt="..." /> -->
                    <span>💃</span>
                    <strong class="me-auto">{{ subcategory }}</strong>
                    <small> {{ "Prio: "+ priority }}</small>
                    <button type="button" class="btn-close"  aria-label="Close" @click="alertShown = false"></button>
                </div>
                <div class="toast-body"> {{ "Plats: " + title + ". " + description }}</div>
            </div>
        </div>
    </div>

    <!-- <modal name="example" v-if="show">This is an example</modal> -->
</template>

<script>
import { useCounterStore } from "@/stores/counter.js"

export default {
    name: "ModalComp",
    setup() {
        const counterStore = useCounterStore()

        return { counterStore }
    },
    data() {
        return {
            
            alertShown: false,
            subcategory: "",
            priority: "",
            title: "",
            description: "",
        }
    },
    // watch: {
    //     checkIfWeCouldShowModal() {
    //         if (this.counterStore.intervalList[0].id === this.counterStore.messageList[0].id) {
    //             //show modal
    //             alert("test")
    //         }
    //     },
    // },
    computed: {},
    methods: {
        checkIfWeCouldShowModal() {
            if (this.counterStore.intervalList[0].id === this.counterStore.messageList[0].id) {

                let message = this.counterStore.intervalList[0]
                this.subcategory = message.subcategory
                this.priority = message.priority
                this.title = message.title
                this.description = message.description
                alert("test")
                this.alertShown = true
                // console.log(this.description)
            }
        },
    },
}
</script>

<style scoped>
</style>