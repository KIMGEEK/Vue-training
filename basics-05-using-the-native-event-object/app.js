const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullName() {
      console.log('Running again...');
      return this.name === '' ? '' : this.name + ' ' + 'Baek'; 
    },
  },
  methods: {
    outputFullName() {
      console.log('Running again...');
      return this.name === '' ? '' : this.name + ' ' + 'Baek'; 
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
    resetCounter() {
      this.counter = 0;
    }
  }
});

app.mount('#events');
