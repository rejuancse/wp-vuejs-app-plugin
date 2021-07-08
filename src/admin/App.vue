<template>
    <div id="vue-backend-app">
        <h1>WP VueJS App</h1>
        <router-view name="tab"></router-view>
        <router-view></router-view>


        <div class="app">
            <line-chart></line-chart>
            <Bar />
        </div>

        
    </div> 
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import { mapGetters } from 'vuex'
import TabNavigation from './components/tabs/Navigation.vue'
// import axios from 'axios';

import VueCharts from 'vue-chartjs'
// import { Bar, Line } from 'vue-chartjs'
import { Bar } from 'vue-chartjs'


export default {
    name: 'App',

    extends: Bar,

    components: {
        'tab-navigation': TabNavigation
    },

    mounted () {
        // Overwriting base render method with actual data.
        this.renderChart({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
            label: 'GitHub Commits',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
            }
        ]
        })
    }
    // async created() {
    //     const { data } = await axios.get("https://miusage.com/v1/challenge/2/static/");
    //     console.log('Data', data);
    // }
}


// Vue.component('line-chart', {
//     extends: VueChartJs.Line,
//     mounted () {
//         this.renderChart({
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [
//             {
//             label: 'Data One',
//             backgroundColor: '#f87979',
//             data: [40, 39, 10, 40, 39, 80, 40]
//             }
//         ]
//         }, {responsive: true, maintainAspectRatio: false})
//     }
  
// })


</script>


