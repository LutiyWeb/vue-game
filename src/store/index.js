import { createStore } from "vuex";

// Create a new store instance.
export default createStore({
  state() {
    return {
      currentStep: 0,
      isProgres: false,
    };
  },
  mutations: {
    changeStep(state, step) {
      state.currentStep = step;
    },
  },
});
