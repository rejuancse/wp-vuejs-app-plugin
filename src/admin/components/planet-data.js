import { mapActions, mapGetters } from 'vuex'

export default {
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
            borderWidth: .5
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};
