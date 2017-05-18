  var presets = window.chartColors;
  var utils = Samples.utils;
  var inputs = {
    min: 8,
    max: 16,
    count: 8,
    decimals: 2,
    continuity: 1
  };
  function generateData() {
    // radar chart doesn't support stacked values, let's do it manually
    var values = utils.numbers(inputs);
    inputs.from = values;
    return values;
  }
  function generateLabels(config) {
    return utils.months({count: inputs.count});
  }
  utils.srand(42);
  var data = {
    labels: generateLabels(),
    datasets: [{
      backgroundColor: utils.transparentize(presets.red),
      borderColor: presets.red,
      data: generateData()
    }, {
      backgroundColor: utils.transparentize(presets.orange),
      borderColor: presets.orange,
      data: generateData(),
      hidden: true,
      fill: '-1'
    }, {
      backgroundColor: utils.transparentize(presets.yellow),
      borderColor: presets.yellow,
      data: generateData(),
      fill: 1
    }, {
      backgroundColor: utils.transparentize(presets.green),
      borderColor: presets.green,
      data: generateData(),
      fill: false
    }, {
      backgroundColor: utils.transparentize(presets.blue),
      borderColor: presets.blue,
      data: generateData(),
      fill: '-1'
    }, {
      backgroundColor: utils.transparentize(presets.purple),
      borderColor: presets.purple,
      data: generateData(),
      fill: '-1'
    }]
  };
  var options = {
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    spanGaps: false,
    elements: {
      line: {
        tension: 0.000001
      }
    }
  };
  var chart = new Chart('chart-0', {
    type: 'radar',
    data: data,
    options: options
  });

  function randomize() {
    inputs.from = [];
    chart.data.datasets.forEach(function(dataset) {
      dataset.data = generateData();
    });
    chart.update();
  }
