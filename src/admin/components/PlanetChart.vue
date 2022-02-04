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
        let ctx = document.getElementById('planet-chart');

        let users_data = JSON.parse(localStorage.getItem('ctx'));

        axios.get('https://miusage.com/v1/challenge/2/static/')
            .then(response => {

                // store to local
                localStorage.setItem('users_data', JSON.stringify( response.data.graph ));

                let array_date = [];
                let array_value = [];

                for (let index = 0; index <= 8; index++) {

                    if( index === 6 || index === 7 ) {
                        continue;
                    }

                    let date = users_data[index].date;
                    let value = users_data[index].value;

                    let date_value = new Date(date * 1000).toString().split(" ").slice(1, 4).join(" ");

                    array_date.push(date_value);
                    array_value.push(value);
                }

                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: array_date,
                        datasets: [{
                            label: '# Data Value',
                            data: array_value,
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
                this.errored = true
            })
            .finally(() => this.loading = false)
    },

    watch: {
        info(newName) {
            localStorage.info = newName;
        }
    }
}
</script>
