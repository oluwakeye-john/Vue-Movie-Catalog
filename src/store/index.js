import Vue from "vue";
import Vuex from "vuex";
import {
  getMovieDetailRequest,
  getPopularRequest,
  searchRequest,
} from "../api";
import { GET_POPULAR, GET_HERO, GET_SEARCH, SET_IS_SEARCHING } from "./types";

Vue.use(Vuex);

const state = {
  popular: [],
  hero: {},
  search: {
    input: "",
    results: [],
    fetching: false,
  },
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
  [GET_SEARCH](state, payload) {
    state.search = payload;
  },
  [SET_IS_SEARCHING](state, val) {
    state.search.fetching = val;
  },
};

const actions = {
  async getPopularAction({ commit }, page = 1) {
    const response = await getPopularRequest(page);
    const data = response.data.results;
    commit(GET_POPULAR, data);
  },
  async getHero({ commit }, id = "127585") {
    const response = await getMovieDetailRequest(id);
    const data = response.data;
    commit(GET_HERO, data);
  },
  async getSearch({ commit }, input) {
    commit(SET_IS_SEARCHING, true);
    const response = await searchRequest(input);
    const results = response.data.results;
    commit(GET_SEARCH, { input, results });
    commit(SET_IS_SEARCHING, false);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {},
  devtools: true,
});
