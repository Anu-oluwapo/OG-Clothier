import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      toasts: [],
    };
  },

  actions: {
    addToast(toast) {
      this.toasts.push(toast);
      setTimeout(() => {
        this.removeToast(toast);
      }, 3100);
    },

    removeToast(toast) {
      this.toasts.splice(this.toasts.indexOf(toast), 1);
    },
  },
});
