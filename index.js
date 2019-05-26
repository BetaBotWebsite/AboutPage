var ctx1 = document.getElementById('ieltsChart').getContext('2d')
var chart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Listening', 'Reading', 'Writing', 'Speaking'],
        datasets: [{
            backgroundColor: [
                'rgb(40, 167, 69)',
                'rgb(220, 53, 69)',
                'rgb(0, 123, 255)',
                'rgb(255, 193, 7)'

            ],
            data: [6.0, 8.5, 6.0, 6.0]
        }]
    },
    options: {
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem) {
                    return tooltipItem.yLabel;
                }
            }
        },
        scales: {
            xAxes: [{
                barPercentage: 0.6
            }],
            yAxes: [{
                    display: true,
                    ticks: {
                        min: 0.0,
                        max: 9.0
                    }
                }]
        }
    }
})
var ctx2 = document.getElementById('skillsChart').getContext('2d')
var chart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Data Analyse', 'Math', 'Algorithm', 'Programming'],
        datasets: [{
            backgroundColor: [
                'rgb(108, 117, 125)',
                'rgb(23, 162, 184)',
                'rgb(52, 58, 64)',
                'rgb(40, 167, 69)'

            ],
            data: [1.0, 3.0, 3.0, 4.0]
        }]
    },
    options: {
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem) {
                    return tooltipItem.yLabel;
                }
            }
        },
        scales: {
            xAxes: [{
                barPercentage: 0.6
            }],
            yAxes: [{
                    display: true,
                    ticks: {
                        min: 0.0,
                        max: 10.0
                    }
                }]
        }
    }
})