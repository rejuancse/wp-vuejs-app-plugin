import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import store from '../store/index'
import App from './App.vue'

import TabNavigation from './components/tabs/Navigation.vue'
import GraphTab from './components/tabs/GraphTab.vue'
import TableTab from './components/tabs/TableTab.vue'
import Settings from './components/tabs/Settings.vue'
import VueRouter from 'vue-router'

Vue.use( Vuex )
Vue.use( Router )

const routes = [
    {
        path: '/', components: { default: GraphTab, tab: TabNavigation },
    },
    {
        path: '/table', components: { default: TableTab, tab: TabNavigation },
    },
    {
        path: '/settings', components: { default: Settings, tab: TabNavigation },
    },
]

const router = new VueRouter({
    routes,
})

new Vue({
    el: '#wpvapp-admin-app',
    store,
    router,
    render: h => h( App )
})
