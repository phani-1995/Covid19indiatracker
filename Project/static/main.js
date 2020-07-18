var casesCountry1 = {{ casesCountry1|safe }}
var casesCountry2 = {{ casesCountry2|safe }}
var casesCountry3 = {{ casesCountry3|safe }}

var deathCountry1 = {{ deathCountry1|safe }}
var deathCountry2 = {{ deathCountry2|safe }}
var deathCountry3 = {{ deathCountry3|safe }}

//var casesCountry1 = casesCountry1
//var casesCountry2 = casesCountry2
//var casesCountry3 = casesCountry3
//
//var deathCountry1 = deathCountry1
//var deathCountry2 = deathCountry2
//var deathCountry3 = deathCountry3
//var dataLabels = dataLabels

var dateLabels = {{ dateLabels|safe }}

var casesHtml = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(casesHtml, {
   type: "line",
   data: {
        labels: dataLabels,
        datasets: [{
          label: "{{ Country1 }}",
          borderColor: 'rgb(255,90,132)',
          data: casesCountry1,
          fill: false
          }, {
          label: "{{ Country2 }}",
          borderColor: 'rgb(139,139,0)',
          data: casesCountry2,
          fill: false
          }, {
          label: "{{ Country3 }}",
          borderColor: 'rgb(51,153,255)',
          data: casesCountry3,
          fill: false
        }]
   },
   options: {
        maintainAspectRatio: false
   }
});
var deathsHtml = document.getElementById('myChart1').getContext('2d');
var myChart1 = new Chart(deathsHtml, {
   type: "line",
   data:  {
        labels: dataLabels,
        datasets: [{
          label: "{{ Country1 }}",
          borderColor: 'rgb(255,90,132)',
          data: deathCountry1,
          fill: false
          }, {
          label: "{{ Country2 }}",
          borderColor: 'rgb(139,139,0)',
          data: deathCountry2,
          fill: false
          }, {
          label: "{{ Country3 }}",
          borderColor: 'rgb(51,153,255)',
          data: deathCountry3,
          fill: false
        }]
   },
   options: {
        maintainAspectRatio: false
   }
});