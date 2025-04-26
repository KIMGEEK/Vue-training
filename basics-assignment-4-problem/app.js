const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      switchVisible: true,
      inputBgColor: "",
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.inputClass === "user1",
        user2: this.inputClass === "user2",
        visible: this.switchVisible,
        hidden: !this.switchVisible,
      };
    },
  },
  methods: {
    switchingStyle() {
      this.switchVisible = !this.switchVisible;
    },
  },
});

app.mount("#assignment");
