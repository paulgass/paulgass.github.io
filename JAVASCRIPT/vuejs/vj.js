// Recipe calculator with vuejs
new Vue({
el: '#Vue',
data() {
    return {
    serving: 1
    }
},
methods: {
    decreaseServing() {
    this.serving = this.serving - 1
    },
    increaseServing() {
    this.serving = this.serving + 1
    }
}
})