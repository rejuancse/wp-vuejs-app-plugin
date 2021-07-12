<template>
    <div>
        <canvas id="planet-chart" height="120"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js'
import axios from 'axios'

export default {
    name: 'PlanetChart',
    data() {
        return {
            info: '',
        }
    },

    mounted() {
        const ctx = document.getElementById('planet-chart');

        axios.get('https://miusage.com/v1/challenge/2/static/')
            .then(response => {

                var hours = 10; // Reset when storage is more than 24hours
                var now = new Date().getTime();
                var setupTime = localStorage.getItem('setupTime');

                console.log('Rose', now);

                if (setupTime == null) {
                    localStorage.setItem('setupTime', now)

                    console.log('rr');

                } else {
                    if(now.setupTime > hours) {
                        localStorage.clear()
                        localStorage.setItem('setupTime', now);
                        console.log('Clean');
                    }
                }

                var date0 = response.data.graph[0].date
                var date1 = response.data.graph[1].date
                var date2 = response.data.graph[2].date
                var date3 = response.data.graph[3].date
                var date4 = response.data.graph[4].date
                var date5 = response.data.graph[5].date
                var date8 = response.data.graph[8].date

                var value0 = response.data.graph[0].value
                var value1 = response.data.graph[1].value
                var value2 = response.data.graph[2].value
                var value3 = response.data.graph[3].value
                var value4 = response.data.graph[4].value
                var value5 = response.data.graph[5].value
                var value8 = response.data.graph[8].value

                var date_value1 = new Date(date0 * 1000).toString().split(" ").slice(1, 4).join(" ");
                var date_value2 = new Date(date1 * 1000).toString().split(" ").slice(1, 4).join(" ");
                var date_value3 = new Date(date2 * 1000).toString().split(" ").slice(1, 4).join(" ");
                var date_value4 = new Date(date3 * 1000).toString().split(" ").slice(1, 4).join(" ");
                var date_value5 = new Date(date4 * 1000).toString().split(" ").slice(1, 4).join(" ");
                var date_value6 = new Date(date5 * 1000).toString().split(" ").slice(1, 4).join(" ");
                var date_value7 = new Date(date8 * 1000).toString().split(" ").slice(1, 4).join(" ");

                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: [date_value1, date_value2, date_value3, date_value4, date_value5, date_value6, date_value7],
                        datasets: [{
                            label: '# Data Value',
                            data: [value0, value1, value2, value3, value4, value5, value8],
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
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)

    },
}
</script>
