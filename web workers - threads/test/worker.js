onmessage = function(e) {
	console.log('Message received from main script');
	var workerResult = e.data;
	
	if(workerResult == "Pawel") {
		workerResult += " jest mistrzem swiata";
	}
	else {
		workerResult += " jest do dupy";
	}
	console.log('Positing result to main script');
	postMessage(workerResult);
}