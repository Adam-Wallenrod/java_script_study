var player = document.querySelector('.player');
var btn = document.querySelector('.test');
var media = document.querySelector('video');
var controls = document.querySelector('.controls');

var play = document.querySelector('.play');
var stop = document.querySelector('.stop');
var rwd = document.querySelector('.rwd');
var fwd = document.querySelector('.fwd');

var timerWrapper = document.querySelector('.timer');
var timer = document.querySelector('.timer span');
var timerBar = document.querySelector('.timer div');

media.removeAttribute('controls');
controls.style.visibility = 'visible';

play.addEventListener('click', playPauseMedia);

var intervalFwd;
var intervalRwd;
var flag = 0;

media.addEventListener('timeupdate', setTime);

stop.addEventListener('click', stopMedia);
media.addEventListener('ended', stopMedia);

rwd.addEventListener('click', mediaBackward);
fwd.addEventListener('click', mediaForward);

//scrobbler = showRect(timerWrapper); //+ showRect(controls) + showRect(timerWrapper);


function showRect(elem) {
  r = elem.getBoundingClientRect();
 // alert("{top:"+r.top+", left:"+r.left+", right:"+r.right+", bottom:"+ r.bottom + "}");
  return r;
}



//console.log('x: '+ scrobbler.x);
//console.log('y:' + scrobbler.y);
//console.log('width: ' + scrobbler.width);
//console.log('height: ' + scrobbler.height);
//console.log('left: ' + scrobbler.left);
//console.log('top: ' + scrobbler.top);
//console.log('right: ' + scrobbler.right);
//console.log('bottom: ' + scrobbler.bottom);



document.onclick = function(e) {
	if( (e.x >= 271) && (e.x <= 464) && (e.y >= 262) && (e.y <= 299) ) {
		var percentage = (e.x-271)/(193);
		var newTime;
		console.log(Math.floor(percentage*100) + '%');
		//newTime = Math.floor(media.duration * percentage); 
		media.currentTime =  Math.floor(media.duration * percentage); 
		//media.addEventListener('timeupdate', setTime); 
		console.log('Current Time: ' + media.currentTime);
		
	}
}

function playPauseMedia() {
	
	
	if ( (fwd.classList.contains('active')) || (rwd.classList.contains('active')) ) {
		flag = 1;
		console.log('flag = ' + flag);
	}
	
	rwd.classList.remove('active');
	fwd.classList.remove('active');
	clearInterval(intervalRwd);
	clearInterval(intervalFwd);
	
	
		if(flag === 1) {
			play.setAttribute('data-icon', 'P');
		    media.pause();
			flag = 0;
	    } else if ( (flag === 0) && media.paused){
		  play.setAttribute('data-icon', 'u');
		  media.play();
	    } else if (flag === 0) {
		   play.setAttribute('data-icon', 'P');
		   media.pause();
		
        }
};

function stopMedia() {
	rwd.classList.remove('active');
	fwd.classList.remove('active');
	clearInterval(intervalRwd);
	clearInterval(intervalFwd);
	
	media.pause();
	media.currentTime = 0;
	play.setAttribute('data-icon', 'P');
	
};


function mediaBackward() {
	clearInterval(intervalFwd);
	fwd.classList.remove('active');
	play.setAttribute('data-icon', 'u');
	
	if(rwd.classList.contains('active')) {
	  rwd.classList.remove('active');
      clearInterval(intervalRwd);
      media.play();	  
	}
	else {
		rwd.classList.add('active');
		media.pause();
		intervalRwd = setInterval(windBackward, 200);
	}
	
};


function mediaForward() {
	clearInterval(intervalRwd);
	rwd.classList.remove('active');
	play.setAttribute('data-icon', 'u');
	
	if(fwd.classList.contains('active')) {
		fwd.classList.remove('active');
		clearInterval(intervalFwd);
		media.play();
	}
	else {
		fwd.classList.add('active');
		media.pause();
		intervalFwd = setInterval(windForward, 200);
	}
};


function windForward() {
	if(media.currentTime >= media.duration - 3) {
		fwd.classList.remove('active');
		clearInterval(intervalFwd);
		stopMedia();
	} 
	else {
      media.currentTime += 3;
    }	  
}


function windBackward() {
	if(media.currentTime <= 3) {
	    rwd.classList.remove('active');
		clearInterval(intervalRwd);
		stopMedia();
	} 
	else {
		media.currentTime -= 3;
	}
}


function setTime() {
	var hours = Math.floor(media.currentTime / 3600)
	var minutes = Math.floor(media.currentTime / 60 - hours *60);
	var seconds = Math.floor(media.currentTime - hours * 3600 - minutes * 60);
	var hourValue;
	var minuteValue;
	var secondValue;
	
	
	if (hours < 10) {
		hourValue = '0' + hours;
	}
	else {
		hourValue = hours;
	}
	
	if (minutes < 10) {
	  minuteValue = '0' + minutes;
	}
	else {
		minuteValue = minutes;
	}	
	
	if (seconds < 10) {
		secondValue = '0' + seconds;
	}
	else {
		secondValue = seconds;
	}
	
	var mediaTime = hourValue + ':' +  minuteValue + ':' + secondValue;
	timer.textContent = mediaTime;
	
	var barLength = timerWrapper.clientWidth * (media.currentTime/media.duration);
	timerBar.style.width = barLength + 'px';
}

