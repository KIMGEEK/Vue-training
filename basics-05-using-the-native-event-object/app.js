const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      //fullName: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function() {
          that.counter = 0;
        }, 2000);
      }
    }
    // name(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = this.name + ' ' + value;
    //   }
    // }
  },
  computed: {
    fullName() {
      console.log('Running again...');
      return this.name === '' || this.lastName === '' ? '' : this.name + ' ' + this.lastName; 
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
