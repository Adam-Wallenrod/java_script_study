var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */


    for(var i = 1; i < 6; i++) {
      var newImage = document.createElement('img');
      var nazwa = 'images/pic';
      
      newImage.setAttribute('src', nazwa + i +'.jpg');
      newImage.onclick = currentSrc;
     
      thumbBar.appendChild(newImage);
  } 

function currentSrc(e){
 var currentPath;

 currentPath = e.target.getAttribute('src');
 displayedImage.setAttribute('src', currentPath);
 console.log(currentPath);

 return currentPath;
}



//thumb-bar.onclick =



btn.onclick = darkLight;
/* Wiring up the Darken/Lighten button */

/*function darkLight() {
  if (btn.className === 'dark' ){
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'; 
  }
  else if(btn.className === 'light')
  {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
} */
