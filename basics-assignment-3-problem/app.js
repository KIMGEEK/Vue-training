const app = Vue.createApp({
    data() {
        return {
            counter:0,
            threshold: 37,
            checkState: "",
        }
    },
    watch: {
        counter(value) {
            if(value != 0) {
                const that = this;
                setTimeout(function() {
                    that.counter = 0;
                }, 5000)
            }
        }
    },
    computed: {
        checkThreshold() {
            if(this.counter < this.threshold) {
                this.checkState = "Not there yet";
            } else if (this.counter > this.threshold) {
                this.checkState = "Too much";
            } else {
                this.checkState = "Correct!";
            }
            return this.checkState;
        }
    },
    methods: {
        add(value) {
            this.counter = this.counter + value;
        }
    }
});

app.mount("#assignment")