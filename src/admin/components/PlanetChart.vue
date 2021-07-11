<template>
    <div>
        <canvas id="planet-chart" height="120"></canvas>
        <div id="app">
            {{ info }}
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Chart from 'chart.js'
// import planetChartData from './planet-data.js'
import axios from 'axios'

export default {
    name: 'PlanetChart',
    data() {
        return {
            info: '',
            // planetChartData: planetChartData,
        }
    },

    mounted() {
        const ctx = document.getElementById('planet-chart');

        axios.get('https://miusage.com/v1/challenge/2/static/')
            .then(response => {
                this.info = response.data.graph
                console.log('Info: ', this.info );
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)

        // console.log('Planet Chart Data: ', this.planetChartData );
        // new Chart(ctx, this.planetChartData);

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['2021-07-02', '2021-07-05', '2021-07-06', '2021-07-07', '2021-07-08', '2021-07-09', '2021-07-10'],
                datasets: [{
                    label: '# of Votes',
                    data: [21853, 2248, 26174, 21800, 29412, 24088, 1641],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        this.fetchSettings();
    },

    computed: {
        ...mapGetters([ 'GET_GENERAL_SETTINGS', 'GET_LOADING_TEXT' ]),

        formData: {
            get() {
                return this.GET_GENERAL_SETTINGS
            },
        },

        loadingText: {
            get() {
                return this.GET_LOADING_TEXT
            }
        }
    },

    methods: {
        ...mapActions([ 'FETCH_SETTINGS', 'SAVE_SETTINGS'  ]),

        saveSettings(e) {
            e.preventDefault();
            this.SAVE_SETTINGS( this.formData )
        },

        fetchSettings() {
            this.FETCH_SETTINGS()
        },
    }, 
}
</script>