var ctx1 = document.getElementById('chart1').getContext('2d');
var ctx2 = document.getElementById('chart2').getContext('2d');
var ctx3 = document.getElementById('chart3').getContext('2d');
var ctx4 = document.getElementById('chart4').getContext('2d');
var ctx5 = document.getElementById('chart5').getContext('2d');
var ctx6 = document.getElementById('chart6').getContext('2d');
var ctx7 = document.getElementById('chart7').getContext('2d');
var ctx8 = document.getElementById('chart8').getContext('2d');
var ctx9 = document.getElementById('chart9').getContext('2d');
var gradient1 = ctx1.createLinearGradient(0, 0, 0, 400)
var gradient2 = ctx2.createLinearGradient(0, 0, 0, 400)
var gradient3 = ctx3.createLinearGradient(0, 0, 0, 400)
var gradient4 = ctx4.createLinearGradient(0, 0, 0, 400)
var gradient5 = ctx5.createLinearGradient(0, 0, 0, 400)
var gradient6 = ctx6.createLinearGradient(0, 0, 0, 400)
gradient1.addColorStop(0, 'rgba(255,0,0,0.34)')
gradient1.addColorStop(1, 'rgba(255,255,255,0.02)')
gradient2.addColorStop(0, 'rgba(255,0,0,0.34)')
gradient2.addColorStop(1, 'rgba(255,255,255,0.02)')
gradient3.addColorStop(0, 'rgba(255,0,0,0.34)')
gradient3.addColorStop(1, 'rgba(255,255,255,0.02)')
gradient4.addColorStop(0, 'rgba(255,0,0,0.34)')
gradient4.addColorStop(1, 'rgba(255,255,255,0.02)')
gradient5.addColorStop(0, 'rgba(255,0,0,0.34)')
gradient5.addColorStop(1, 'rgba(255,255,255,0.02)')
gradient6.addColorStop(0, 'rgba(97,226,36,0.28)')
gradient6.addColorStop(1, 'rgba(255,255,255,0.02)')
new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ["01-01", "02-01", "03-01", "04-01", "05-01", "06-01", "07-01", "08-01", "09-01"],
        datasets: [{
            data: [100, 90, 100, 75, 80, 60, 70, 65, 75, 50, 70, 50, 0],
            borderColor: "#FF0000",
            backgroundColor: gradient1,
            pointRadius: 0,
        },]
    },
    options: {
        title: {
            display: true,
        },
        legend: {
            display: false,
        },
        elements: {
            line:{
                tension: 0
            }
        },
        tooltips: {
            callbacks: {
                label: false
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    display: false
                }
            }],
            yAxes: [{
                ticks: {
                    display: false
                }
            }]
        }
    }
});
new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ["01-01", "02-01", "03-01", "04-01", "05-01", "06-01", "07-01", "08-01", "09-01"],
        datasets: [{
            data: [100, 90, 100, 75, 80, 60, 70, 65, 75, 50, 70, 50, 0],
            borderColor: "#FF0000",
            backgroundColor: gradient2,
            pointRadius: 0,
        },]
    },
    options: {
        title: {
            display: true,
        },
        legend: {
            display: false,
        },
        elements: {
            line:{
                tension: 0
            }
        },
        tooltips: {
            callbacks: {
                label: false
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    display: false
                }
            }],
            yAxes: [{
                ticks: {
                    display: false
                }
            }]
        }
    }
});
new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ["01-01", "02-01", "03-01", "04-01", "05-01", "06-01", "07-01", "08-01", "09-01"],
        datasets: [{
            data: [100, 90, 100, 75, 80, 60, 70, 65, 75, 50, 70, 50, 0],
            borderColor: "#FF0000",
            backgroundColor: gradient3,
            pointRadius: 0,
        },]
    },
    options: {
        title: {
            display: true,
        },
        legend: {
            display: false,
        },
        elements: {
            line:{
                tension: 0
            }
        },
        tooltips: {
            callbacks: {
                label: false
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    display: false
                }
            }],
            yAxes: [{
                ticks: {
                    display: false
                }
            }]
        }
    }
});
new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ["01-01", "02-01", "03-01", "04-01", "05-01", "06-01", "07-01", "08-01", "09-01"],
        datasets: [{
            data: [100, 90, 100, 75, 80, 60, 70, 65, 75, 50, 70, 50, 0],
            borderColor: "#FF0000",
            backgroundColor: gradient4,
            pointRadius: 0,
        },]
    },
    options: {
        title: {
            display: true,
        },
        legend: {
            display: false,
        },
        elements: {
            line:{
                tension: 0
            }
        },
        tooltips: {
            callbacks: {
                label: false
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    display: false
                }
            }],
            yAxes: [{
                ticks: {
                    display: false
                }
            }]
        }
    }
});
new Chart(ctx5, {
    type: 'line',
    data: {
        labels: ["01-01", "02-01", "03-01", "04-01", "05-01", "06-01", "07-01", "08-01", "09-01"],
        datasets: [{
            data: [100, 90, 100, 75, 80, 60, 70, 65, 75, 50, 70, 50, 0],
            borderColor: "#FF0000",
            backgroundColor: gradient5,
            pointRadius: 0,
        },]
    },
    options: {
        title: {
            display: true,
        },
        legend: {
            display: false,
        },
        elements: {
            line:{
                tension: 0
            }
        },
        tooltips: {
            callbacks: {
                label: false
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    display: false
                }
            }],
            yAxes: [{
                ticks: {
                    display: false
                }
            }]
        }
    }
});
new Chart(ctx6, {
    type: 'line',
    data: {
        labels: ["01-01", "02-01", "03-01", "04-01", "05-01", "06-01", "07-01", "08-01", "09-01"],
        datasets: [{
            data: [0, 50, 70, 50, 75, 65, 70, 60, 80, 75, 100, 90, 100],
            borderColor: "#61E224",
            backgroundColor: gradient6,
            pointRadius: 0,
        },]
    },
    options: {
        title: {
            display: true,
        },
        legend: {
            display: false,
        },
        elements: {
            line:{
                tension: 0
            }
        },
        tooltips: {
            callbacks: {
                label: false
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    display: false
                }
            }],
            yAxes: [{
                ticks: {
                    display: false
                }
            }]
        }
    }
});
new Chart(ctx7, {
    type: 'line',
    data: {
        labels: ["01-01", "02-01", "03-01", "04-01", "05-01", "06-01", "07-01", "08-01", "09-01"],
        datasets: [{
            data: [0, 50, 0, 50, 75, 65, 70, 60, 80, 75, 100, 90, 100],
            borderColor: "#61E224",
            backgroundColor: 'transparent',
            pointRadius: 0,
        },]
    },
    options: {
        title: {
            display: true,
        },
        legend: {
            display: false,
        },
        elements: {
            line:{
                tension: 0
            }
        },
        tooltips: {
            callbacks: {
                label: false
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    display: false
                }
            }],
            yAxes: [{
                ticks: {
                    display: false
                }
            }]
        }
    }
});
new Chart(ctx8, {
    type: 'line',
    data: {
        labels: ["01-01", "02-01", "03-01", "04-01", "05-01", "06-01", "07-01", "08-01", "09-01"],
        datasets: [{
            data: [0, 50, 0, 50, 75, 65, 70, 60, 80, 75, 100, 90, 100],
            borderColor: "#61E224",
            backgroundColor: 'transparent',
            pointRadius: 0,
        },]
    },
    options: {
        title: {
            display: true,
        },
        legend: {
            display: false,
        },
        elements: {
            line:{
                tension: 0
            }
        },
        tooltips: {
            callbacks: {
                label: false
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    display: false
                }
            }],
            yAxes: [{
                ticks: {
                    display: false
                }
            }]
        }
    }
});
new Chart(ctx9, {
    type: 'line',
    data: {
        labels: ["01-01", "02-01", "03-01", "04-01", "05-01", "06-01", "07-01", "08-01", "09-01"],
        datasets: [{
            data: [0, 50, 0, 50, 75, 65, 70, 60, 80, 75, 100, 90, 100],
            borderColor: "#61E224",
            backgroundColor: 'transparent',
            pointRadius: 0,
        },]
    },
    options: {
        title: {
            display: true,
        },
        legend: {
            display: false,
        },
        elements: {
            line:{
                tension: 0
            }
        },
        tooltips: {
            callbacks: {
                label: false
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    display: false
                }
            }],
            yAxes: [{
                ticks: {
                    display: false
                }
            }]
        }
    }
});
