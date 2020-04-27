import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations, firestoreAction } from "vuexfire";
import { db } from "../firebase/db";
import firebase from 'firebase/app'

Vue.use(Vuex);

var messages = db.collection('messages')

export default new Vuex.Store({
  state: {
    messages: [],
    chats: []
  },

  mutations: {
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
    addMessage(context, payload) {
      messages.add({
        ...payload,
        created: firebase.firestore.FieldValue.serverTimestamp()
      });
    },
    bindToChat: firestoreAction(function(context, payload) {
      // unbindFirestoreRef('messages')
      context.bindFirestoreRef("messages", db.collection("chats").doc(payload.id).collection("messages"));
    })
  }
});
