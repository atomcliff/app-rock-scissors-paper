import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        myCnt: 0,
        enemyCnt: 0,
    },
    getters: {
        myCnt(state) {
            return state.myCnt;
        },
        enemyCnt(state) {
            return state.enemyCnt;
        },
    },
    mutations: {
        myVictory(state) {
            state.myCnt++;
        },
        enemyVictory(state) {
            state.enemyCnt++;
        },
        draw() {
            return null;
        },
    },
    actions: {
        myVictory(context) {
            context.commit("myVictory");
        },
        enemyVictory(context) {
            context.commit("enemyVictory");
        },
        draw(context) {
            context.commit("draw");
        },
    },
});
