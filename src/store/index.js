import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations, firestoreAction } from "vuexfire";
import { db } from "../firebase/db";
import firebase from 'firebase/app'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex);

// var messages = db.collection('messages')

export default new Vuex.Store({
  state: {
    messages: [],
    chats: [],
    username: ""
  },

  mutations: {
    setUsername (state, payload) {
      state.username = payload
    },
    ...vuexfireMutations,
  },

  actions: {
    bindRef: firestoreAction(function(context, payload) {
        context.bindFirestoreRef(payload.name, payload.ref, payload.options)
    }),

    init: firestoreAction(function(context) {
        // context.bindFirestoreRef('messages', db.collection("chats"))
        context.bindFirestoreRef('chats', db.collection("chats"))
    }),

    addMessage: firestoreAction(function(context, payload) {
      console.log(payload)
      db.collection('chats')
      .doc(payload.chatId)
      .collection("messages").add({
        ...payload,
        created: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => console.log('yay'))
      .catch((e) => console.error(e));
    }),

    bindToChat: firestoreAction(function(context, payload) {
      // unbindFirestoreRef('messages')
      context.bindFirestoreRef("messages", db.collection("chats").doc(payload.id).collection("messages"));
    }),

    setUsername(context, payload) {
      context.commit("setUsername", payload);
    }
  },

  plugins: [
    createPersistedState({
        storage: window.sessionStorage,
    })
  ]
});
