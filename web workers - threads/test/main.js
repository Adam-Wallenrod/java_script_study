var x;
var error = 0;
var myWorker = new Worker('worker.js');



document.getElementById('btn').onclick = function() {myFunction()};

function myFunction() {
	x =  document.getElementById('name').value;
  try {
	  if (x == "") throw "empty string";
	  
  }
  catch(err) {
	  document.getElementById('error').innerHTML = 'Blad: ' + err;
	  error = 1;
  }
  finally {
	  if(error === 1){
	    alert('error = ' + error);
		document.getElementById('para').textContent = "Here you will see result";
	    error = 0;
	  
	  }
	  else if (error === 0) {
	    alert('we can work!!!');
		  myWorker.postMessage(x);
	      console.log('message posted to worker');
		  error = 0;
		  document.getElementById('error').innerHTML = 'Here you will see errors';
          document.getElementById('name').value = "";
	    
      }		  
  }
    
	   
  
	     

   }  
	  
 
myWorker.onmessage = function(e) {
	document.getElementById('para').textContent = e.data;
	console.log('Message received from worker');
}