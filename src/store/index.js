import Vue from "vue";
import Vuex from "vuex";
import { getMovieDetailRequest, getPopularRequest } from "../api";
import { GET_POPULAR, GET_HERO } from "./types";

Vue.use(Vuex);

const state = {
  popular: [],
  hero: {},
};

const mutations = {
  [GET_POPULAR](state, payload) {
    state.popular = {
      ...state.popular,
      ...payload,
    };
  },
  [GET_HERO](state, payload) {
    state.hero = payload;
  },
};

const actions = {
  async getPopularAction({ commit }, page = 1) {
    const response = await getPopularRequest(page);
    const data = response.data.results;
    commit(GET_POPULAR, data);
  },
  async getHero({ commit }, id = "127585") {
    // 127585
    const response = await getMovieDetailRequest(id);
    const data = response.data;
    commit(GET_HERO, data);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {},
  devtools: true,
});
