import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Chat from "@/views/Chat";
// import Head from "vue-head";
// import Home from "@/views/Home";
// import CheckLogin from "@/views/CheckLogin";
// import { isNil } from "lodash";
// import store from "@/store";

Vue.use(Router);

// /* If you don't know about VueHead, please refer to https://github.com/ktquez/vue-head */

// Vue.use(Head, {
//   complement: process.env.VUE_APP_TITLE
// });

/* If you don't know about VueRouter, please refer to https://router.vuejs.org/ */

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    { 
      path: "/chat/:id",
      name: "chat",
      props: true,
      component: Chat
    },
    // {
    //   path: "/check-login",
    //   name: "check-login",
    //   component: CheckLogin,
    //   meta: {
    //     authNotRequired: true
    //   }
    // },
    // {
    //   path: "/login",
    //   name: "login",
    //   component: () =>
    //     import(/* webpackChunkName: "client-chunk-login" */ "@/views/Login.vue"),
    //   meta: {
    //     authNotRequired: true
    //   }
    // },
    // {
    //   path: "/games",
    //   name: "games",
    //   component: () =>
    //     import(/* webpackChunkName: "client-chunk-products" */ "@/views/Products.vue")
    // },
    // {
    //   path: "/games/:id",
    //   name: "game",
    //   props: true,
    //   component: () =>
    //     import(/* webpackChunkName: "client-chunk-product-details" */ "@/views/Product.vue")
    // },
    { path: "*", redirect: "/" }
  ]
});

export default router;
