import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations, firestoreAction } from "vuexfire";
import { db } from "../firebase/db";
import firebase from 'firebase/app'

Vue.use(Vuex);

/* If you don't know about Vuex, please refer to https://vuex.vuejs.org/ */

var messages = db.collection('messages')

export default new Vuex.Store({
  state: {
    messages: [],
  },

  mutations: {
    ...vuexfireMutations,
  },

  actions: {
    bindRef: firestoreAction(function(context, payload) {
        context.bindFirestoreRef(payload.name, payload.ref, payload.options)
    }),
    init: firestoreAction(function(context) {
        context.bindFirestoreRef('messages', db.collection("messages"))
        // context.bindFirestoreRef('todos', currentTodos)
        // context.bindFirestoreRef('tweets', db.collection('tweets'))
        // context.bindFirestoreRef('moments', db.collection('moments'))
    }),
    addMessage(context, payload) {
        messages.add({
          ...payload,
          created: firebase.firestore.FieldValue.serverTimestamp()
        });
        
    }
    // bindUsers: firestoreAction(({ bindFirestoreRef }) => {
    //   // return the promise returned by `bindFirestoreRef`
    //   return bindFirestoreRef("messages", db.collection("messages"));
    // }),
  },
});
