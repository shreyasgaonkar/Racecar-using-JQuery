$(function(){

//click the go button

$('#go').click(function() {

  $('#raceInfoContainer').slideDown(100);

  //function to see if the car has completed the race
  function checkIfComplete(){

    if(isComplete == false){
      isComplete = true;
    }
    else{
      place = 'second';
    }

  }

  //get the width of the cars
  var carWidth = $('#car1').width();

  //get te width of the racetrack
  var raceTrackWidth = $(window).width() - carWidth;

  //Generate random number between 1 and 5000 msec
  var raceTime1 = Math.floor( (Math.random()* 1000) + 1 );
  var raceTime2 = Math.floor( (Math.random()* 1000) + 1 );
  var difference = Math.abs(raceTime2-raceTime1);
  var maxValue = Math.max(raceTime1,raceTime2);

  //variable for winner which is first initialized with dummy value
  var winner = 'none';

  //set flag variable to false by default
  var isComplete = false;

  //set flag variable to FIRST by default
  var place = 'first';

  //animate car 1
  $('#car1').animate({
    //move the car with of the racetrack
    left: raceTrackWidth
  }, raceTime1, function(){
    //animation is complete

    //run a function to let know if the race has completed the race
    checkIfComplete();

    //text feedback about the race
    $('#raceInfo1 span').text('Finished in ' + place + ' place and clocked in ' + raceTime1 + ' milliseconds');
  });//end car1

  //animate car 12
  $('#car2').animate({
    //move the car with of the racetrack
    left: raceTrackWidth
  }, raceTime2, function(){
    //animation is complete

    //run a function to let know if the race has completed the race
    checkIfComplete();

    //text feedback about the race
    $('#raceInfo2 span').text('Finished in ' + place + ' place and clocked in ' + raceTime2 + ' milliseconds');
  });//end car2

   // Checking who has come first

      if (raceTime1 < raceTime2){
        winner = 'Car 1';
      }
      else{
        winner = 'Car 2';
      }

    $('#result').delay(maxValue + 250).queue(function(){
      $('#result').text('Race won by ' + winner + ' with the time difference of  ' + difference + ' milliseconds');
    });

    //console.log(maxValue);
});//end #go


  $('#reset').click(function(){
    $('.car').css('left','0');
    $('.raceInfo span').text('');
    $('#result').text('');
  });

});//end main function
