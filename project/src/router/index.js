import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import seomoon from "../views/SeomoonView.vue";
import wouldyou from "../views/WouldyouView.vue";
import bfoc from "../views/WouldyouView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/seomoon",
        name: "seomoon",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "seomoon" */ "../views/SeomoonView.vue"),
    },
    {
        path: "/wouldyou",
        name: "wouldyou",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "seomoon" */ "../views/WouldyouView.vue"),
    },
    {
        path: "/bfoc",
        name: "bfoc",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "seomoon" */ "../views/BfocView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
