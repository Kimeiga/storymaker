import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations } from 'vuexfire'


Vue.use(Vuex);

/* If you don't know about Vuex, please refer to https://vuex.vuejs.org/ */

export default new Vuex.Store({
    mutations: {
        // other mutations
        ...vuexfireMutations,
      },
});

