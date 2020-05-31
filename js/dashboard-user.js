var ChartArray1 = [];
var ChartArray2 = [];
var sample = [
  [45,75,20],
  [35,25,90],
  [45,95,30],
  [45,45,10],
  [95,75,30],
  [25,45,90]
]

function loadPieChart (arr, ctx, vmData) {
  var data = {
    datasets: [{
        data: vmData
    }],
    labels: [
        'cpu',
        'memory',
        'disk'
    ]
  };
  arr.push(new Chart(ctx, {
    data: data,
    type: 'polarArea',
    options: {
      scale: {
        ticks: {
          min: 0,
          max: 100,
          callback: function(value){
            return value+'%';
          }
        }
      }
    }
  }));
}

$('#public-cloud .vm').mouseover(function(){
  var i = $(this).index()
  ChartArray1[i].data.datasets[0].backgroundColor = ['#E8A02588', '#AA54E888', '#3de78488'];
  ChartArray1[i].update();
})
$('#public-cloud .vm').mouseout(function(){
  var i = $(this).index()
  ChartArray1[i].data.datasets[0].backgroundColor = [];
  ChartArray1[i].update();
})
$('#private-cloud .vm').mouseover(function(){
  var i = $(this).index()
  ChartArray2[i].data.datasets[0].backgroundColor = ['#E8A02588', '#AA54E888', '#3de78488'];
  ChartArray2[i].update();
})
$('#private-cloud .vm').mouseout(function(){
  var i = $(this).index()
  ChartArray2[i].data.datasets[0].backgroundColor = [];
  ChartArray2[i].update();
})

$('#public-cloud .chart').each(function(i, o) {
  loadPieChart(ChartArray1, o, sample[i]);
});

$('#private-cloud .chart').each(function(i, o) {
  loadPieChart(ChartArray2, o, sample[i]);
});

$(document).on('click', '.item', function(){
  $('.item.on').removeClass('on');
  $(this).addClass('on');

  var i = $(this).index();
  $('.tab.on').removeClass('on');
  $('.tab').eq(i).addClass('on');
})

