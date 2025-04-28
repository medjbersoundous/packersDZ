document.addEventListener('DOMContentLoaded', function() {
    // Data for the first pie chart
    var ctx1 = document.getElementById('pieChart1').getContext('2d');
    var pieChart1 = new Chart(ctx1, {
      type: 'pie',
      data: {
        labels: ['Alger', 'Ouest', 'East', 'Sud'],
        datasets: [{
          label: 'Delivery Rates',
          data: [100, 90, 75, 55],
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Pie Chart 1: Delivery Rates',
            color: '#333',
            font: {
              size: 18
            }
          },
          legend: {
            labels: {
              color: '#333'
            }
          }
        }
      }
    });

    // Data for the second pie chart
    var ctx2 = document.getElementById('pieChart2').getContext('2d');
    var pieChart2 = new Chart(ctx2, {
      type: 'pie',
      data: {
        labels: ['Alger', 'Ouest', 'East', 'Sud'],
        datasets: [{
          label: 'Delivery Rates',
          data: [100, 90, 75, 55],
          backgroundColor: [
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(255, 205, 86, 0.8)'
          ],
          borderColor: [
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 205, 86, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Pie Chart 2: Delivery Rates',
            color: '#333',
            font: {
              size: 18
            }
          },
          legend: {
            labels: {
              color: '#333'
            }
          }
        }
      }
    });
  });