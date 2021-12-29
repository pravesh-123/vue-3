// CreatedBy: Pravesh Dwivedi Solace

export default {
  data() {
    return {
      timeOut: "",
    };
  },
  // method for debounce effect in slider
  methods: {
    debounce(func, wait = 1000) {
      clearTimeout(this.timeOut);
      this.timeOut = setTimeout(func, wait);
    },
  },
};
