// Start jQuery Area
$(document).ready(function(){
   // Start Header
      // Start Nav Bar
         $(".navbuttons").click(function(){
            $(this).toggleClass("crossxs");
         });
      // End Nav Bar
   // End Header


   // Start Login Box
   $("#open-btn").click(function(){
      document.getElementById("form-popup").style.display = "block";
   });

   $("#formclose-btn").click(function(){
      document.getElementById("form-popup").style.display = "none";
   });
   // End Login Box
});

// End jQuery Area



// Start Javascript Area

   // Start Students Counter Section
   var getcountervalues = document.querySelectorAll('.countervalues');
      // console.log(getcountervalues);

   getcountervalues.forEach(function(getcountervalue){
      getcountervalue.textContent = 0;
         // console.log(getcountervalues);

      const updatecounter = function(){
         // console.log('I am Working');

         const getcttarget = + getcountervalue.getAttribute('data-target');
            // console.log(getcttarget);
            // console.log(typeof getcttarget,getcttarget);

         const getctcontent = + getcountervalue.innerText;
            // console.log(typeof getctcontent,getctcontent);

         const incnumber = getcttarget / 100;
            // console.log(incnumber);

         if(getctcontent < getcttarget){
            getcountervalue.textContent = getctcontent + incnumber;

            setTimeout(updatecounter,50);
         }
      }
      updatecounter();
   });
   // End Students Counter Section



   // Start Rating Section
      // Start Google Code For Chat
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

      var data = google.visualization.arrayToDataTable([
         ['Task', 'Hours per Day'],
         ['Myanmar',     8],
         ['Thailand',      2],
         ['Singapore',  4],
         ['Indonesia', 2],
         ['Srilanka',    8]
      ]);

      var options = {
         title: 'International Students',
         width:550,
         height:550
      };

      var chart = new google.visualization.PieChart(document.getElementById('piechart'));

      chart.draw(data, options);
      }
      // End Google Code For Chat
   // End Rating Section

   

   // Start Footer Section
   const getyear = document.getElementById("getyear");
   const getfullyear = new Date().getUTCFullYear();
      getyear.textContent = getfullyear;
   // End Footer Section

// End Javascript Area