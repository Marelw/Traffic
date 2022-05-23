import { defineStore } from "pinia";

export const useCounterStore = defineStore({
    id: "counter",
    state: () => ({
        counter: 10,
        messageList: [],
        intervalList: [],
        trafficArea: "",
        arraysAreEqual: false,
    }),
    getters: {
        doubleCount: (state) => state.counter * 2,
        getList: (state) => state.messageList,
    },
    actions: {
        increment() {
            this.counter++;
        },
        addToList(message) {
            // this.messageList = []
            this.messageList.unshift(message)
        },
        addToIntervalList(message) {
            this.intervalList.unshift(message)
        },
        setTrafficArea(area) {
            this.trafficArea = area
        },
        checkMessageArrays() {
            if (this.counterStore.intervalList[0].id === this.counterStore.messageList[0].id) {
                //show modal
                // alert("test")
                this.arraysAreEqual = true
            }
        }
    },
});