var searchTerm = document.querySelector('.search');
var searchForm = document.querySelector('form');
var submitBtn = document.querySelector('.submit');
var section = document.querySelector('section');

var myKey = 'AIzaSyDHntxPvbEFd2nsDOqK35nN00oKmjMtgtQ';
var numOfResults = 3;



	// gapi.client.init({
		// 'apiKey': 'AIzaSyDHntxPvbEFd2nsDOqK35nN00oKmjMtgtQ', //my key
	// });
	
	gapi.client.setApiKey(myKey);
	
	gapi.client.load('youtube','v3', function () {
		console.log("yt api is ready!");
	});

    // Event listener to control functionality
    searchForm.addEventListener('submit', findResults);




function findResults(e) {
  e.preventDefault();
  var request = gapi.client.youtube.search.list({
	  q: searchTerm.value,
	  part: 'snippet',
	  type: 'video',
	  maxResults: numOfResults,
	  order: "videoCount"
  });
  request.execute(function(response) {
	  console.log(response);
	  displayResults(response);
  });
}	

function displayResults(json) {
	while (section.firstChild) {
		section.removeChild(section.firstChild);
	}
	var videos = json['items'];
	
	if(videos.length === 0) {
		var para = document.createElement('p');
		para.textContent = 'No results';
		section.appendChild(para);
		searchTerm.value = "";
		alert(searchTerm.value);
	}
    else {	
	
	  for (var i = 0; i < numOfResults; i++ ) {
		  var current = videos[i];
		  console.log('Result title' + i + ': '+ current.snippet.title);
		  
		  var article = document.createElement('article');
		  var heading = document.createElement('h2');
		  var url = document.createElement('a');
		  var videoIdString;
		  
		  videoIdString = "http://www.youtube.com/watch?v=" + current.id.videoId;
		  url.href = videoIdString;
		  url.textContent = videoIdString;
		  heading.textContent = "Video" + i + ": " + current.snippet.title;
		  article.appendChild(heading);
		  article.appendChild(url);
		  section.appendChild(article);
		  
		  searchTerm.value = ""; 
	  }
	}  
}

	


