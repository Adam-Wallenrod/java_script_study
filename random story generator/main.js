//document.querySelector('html').style.backgroundColor = 'red';
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');
var weight = 300.0 ; 
var temperature = 94.0;

function randomValueFromArray(array) {
  return array[Math.floor(Math.random()*array.length)];
}

var storyText = 'It was ' + temperature + ' farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs hhh ' + weight + ' pounds, and it was a hot day.';

var insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];

var insertY = ['the soup kitchen','Disneyland','the White House'];

var insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];


//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);



   
  
 
  
  if(customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);

    
  }

  if(document.getElementById("uk").checked) {
     weight = Math.round(300);
     temperature =  Math.round(94);
    
  } else if (document.getElementById("us").checked) {
   //pounds to stones
    var stones = 300.0+50.714286;
    
weight = Math.round(6);

   //farenheit to celcius
   var celcius = (94.0-32.0)*5.0/9.0;
   temperature = Math.round(celcius);

   newStory = newStory.replace('farenheit','celcius');
   newStory = newStory.replace('300', 'stones');

  }

  story.textContent = newStory ;
  story.style.visibility = 'visible';
}

