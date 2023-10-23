// Start jQuery Area

$(document).ready(function(){

   // Start Left Side Bar Section
      // Start Left Sidebar
      $('.sidebarlinks').click(function(){
         $('.sidebarlinks').removeClass('currents');
         $(this).addClass('currents');
      });
      // End Left Sidebar
   // Start Left Side Bar Section


   // Start User Permission
   $('.form-check-input').change(function(){
      if($(this).is(':checked')){
         // console.log('yes');

         // input  div(fs)  div(cf)  i
         $(this).parent().parent().find('i').addClass('fa-lock-open text-success');
         $(this).parent().parent().find('i').removeClass('fa-lock text-danger');
      }else{
         // console.log('no');

         // input  div(fs)  div(cf)  i
         $(this).parent().parent().find('i').removeClass('fa-lock-open text-success');
         $(this).parent().parent().find('i').addClass('fa-lock text-danger');
      }
   });
   // End User Permission


   // Start Quick Sales
   $('#datepicker').datepicker({
      numberOfMonths: 3
   });
   // End Quick Sales
});

// End jQuery Area



// Start Javascript Area

// Start Viewer Report
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawTitleSubtitle);

function drawTitleSubtitle(){
   var data = new google.visualization.DataTable();
   data.addColumn('timeofday', 'Time of Day');
   data.addColumn('number', 'Male');
   data.addColumn('number', 'Female');

   data.addRows([
      [{v: [8, 0, 0], f: '8 am'}, 1, .25],
      [{v: [9, 0, 0], f: '9 am'}, 2, .5],
      [{v: [10, 0, 0], f:'10 am'}, 3, 1],
      [{v: [11, 0, 0], f: '11 am'}, 4, 2.25],
      [{v: [12, 0, 0], f: '12 pm'}, 5, 2.25],
      [{v: [13, 0, 0], f: '1 pm'}, 6, 3],
      [{v: [14, 0, 0], f: '2 pm'}, 7, 4],
      [{v: [15, 0, 0], f: '3 pm'}, 8, 5.25],
      [{v: [16, 0, 0], f: '4 pm'}, 9, 7.5],
      [{v: [17, 0, 0], f: '5 pm'}, 10, 10],
   ]);

   var options = {
      chart: {
         title: 'Viewer Report',
         subtitle: 'Based on a scale of 1 to 10'
      },
      hAxis: {
         title: 'Time of Day',
         format: 'h:mm a',
         viewWindow: {
         min: [7, 30, 0],
         max: [17, 30, 0]
         }
      },
      vAxis: {
         title: 'Rating (scale of 1-10)'
      }
   };

      var materialChart = new google.charts.Bar(document.getElementById('viewerreport'));
      materialChart.draw(data, options);
   }
// End Viewer Report


// Start Sale Analysis
const ctx = document.getElementById('myChart');

new Chart(ctx, {
   type: 'doughnut',      // bar, pie, line, doughnut, radar, polarArea, scatter
   data: {
      labels: ['Cash', 'Visa', 'MPU', 'Mobile Banking'],
      datasets: [{
         data: [40, 10, 20, 30]
      }]
   },
});
// End Sale Analysis

// Start Footer Section
const getyear = document.getElementById('getyear');
const getfullyear = new Date().getFullYear();
   getyear.textContent = getfullyear;
// End Footer Section

// End Javascript Area