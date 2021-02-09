import Vue from "vue";
import Vuex from "vuex";
import json from "@/assets/books.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { books: json.books },
  mutations: {},
  actions: {},
  modules: {},
});
