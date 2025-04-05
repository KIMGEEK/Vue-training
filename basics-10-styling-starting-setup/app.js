const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.boxASelected = true;
                console.log('A')
            } else if (box === 'B') {
                this.boxBSelected = true;
                console.log('B')
            } else if (box === 'C') {
                this.boxCSelected = true;
                console.log('C')
            }
        },
    }
});

app.mount("#styling");