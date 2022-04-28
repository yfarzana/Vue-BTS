const app = Vue.createApp({
  data() {
    return {
      yourName: "Yeasmin Farzana",
      yourAge: 21,
      yourImage:
        "https://www.billboard.com/wp-content/uploads/2021/08/do-not-reuse-feature-bts-billboard-2021-bb12-sunhye-shin-group-1-billboard-1548-1629973334.jpg?w=1024",
    };
  },
  methods: {
    ageInFiveYears() {
      return this.yourAge + 5;
    },
    outputRandom() {
      const randomNumber = Math.floor(Math.random() * 2);
      return randomNumber;
    },
  },
});

app.mount("#assignment");
