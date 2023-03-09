// CSV dosyasından verileri yükleme fonksiyonu
function loadCSV(url, callback) {
  fetch(url)
    .then(response => response.text())
    .then(csvData => {
      const data = [];
      const labels = [];
      csvData.split('\n').forEach(function(row) {
        const cols = row.split(',');
        if (cols.length === 2) {
          labels.push(cols[0]);
          data.push(parseFloat(cols[1]));
        }
      });
      callback(data, labels);
    });
}
function createChart(data, labels, canvasId) {
  var a=document.getElementById('test').innerHTML
  const ctx = document.getElementById(canvasId).getContext('2d');
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: a,
        data: data,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
// Sayfa yüklendiğinde çalışacak fonksiyon
function init() {
  // Page 1
  if (document.title === 'Page 1 - CSV to Chart') {
    loadCSV('BasariliBitenJobListesi.csv', function(data, labels) {
      createChart(data, labels, 'myChart');
    });
  }
  // Page 2
  else if (document.title === 'Page 2 - CSV to Chart') {
    loadCSV('data2.csv', function(data, labels) {
      createChart(data, labels, 'myChart');
    });
  }
  // Page 3
  else if (document.title === 'Page 3 - CSV to Chart') {
    loadCSV('data3.csv', function(data, labels) {
      createChart(data, labels, 'myChart');
    });
  }
  // Page 4
  else if (document.title === 'Page 4 - CSV to Chart') {
    loadCSV('data4.csv', function(data, labels) {
      createChart(data, labels, 'myChart');
    });
  }
}
window.addEventListener('load', init);
