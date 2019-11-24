Highcharts.chart('dynamicsChart', {    

  title: {
      text: ''
  },

  xAxis: {    
    categories: ['May 1', 'May 2', 'May 3', 'May 4', 'May 6', 'May 6', 'May 7', 'May 8', 'May 9', 'May 10', 'May 11', 'May 12', 'May 13', 'May 14', 'May 15', 'May 16', 'May 17', 'May 18', 'May 19', 'May 20', 'May 21', 'May 22', 'May 23', 'May 24', 'May 25', 'May 26', 'May 27', 'May 28', 'May 29', 'May 30', 'May 31'] 
  },

  yAxis: {
      title: {
          text: 'Number of keywords'
      }
  },

  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
  },

  /*plotOptions: {
      series: {
          label: {
              connectorAllowed: false
          },
          pointStart: 01
      }
  },*/

  series: [{
      name: 'Top 1',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }, {
      name: 'Top 3',
      data: [500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500]
  }, {
      name: 'Top 10',
      data: [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]
  }, {
      name: 'Top 30',
      data: [1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500]
  },{
      name: 'Top 50',
      data: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000]
  }, {
      name: 'Top 100',
      data: [2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500]
  }],

  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom'
              }
          }
      }]
  }

});
