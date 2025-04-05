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
                this.boxASelected = !this.boxASelected;
                console.log('A')
            } else if (box === 'B') {
                this.boxBSelected = !this.boxBSelected;
                console.log('B')
            } else if (box === 'C') {
                this.boxCSelected = !this.boxCSelected;
                console.log('C')
            }
        },
    }
});

app.mount("#styling");