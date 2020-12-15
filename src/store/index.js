import Vue from "vue";
import Vuex from "vuex";
import { getPopularRequest } from "../api";
import { GET_POPULAR } from "./types";

Vue.use(Vuex);

const state = {
  popular: [],
};

const mutations = {
  [GET_POPULAR](state, payload) {
    state.popular = {
      ...state.popular,
      ...payload,
    };
  },
};

const actions = {
  async getPopularAction({ commit }, page = 1) {
    console.log("getting");
    const response = await getPopularRequest(page);
    const data = response.data.results;
    console.log(data);
    commit(GET_POPULAR, data);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {},
  devtools: true,
});
