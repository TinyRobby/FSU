
setInterval(function(){ 
    //this code runs every second 

let on = true;
while(on = true) {
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    	let daUrl = tabs[0].url;
    	return daUrl;
	});
	if(daUrl.includes('office.com')) {
			alert('If you don\'t know already, Microsoft office is pretty expensive, I\'d reccomend Libreoffice or Openoffice, both free alternataves.')
	}
	if(daUrl.includes('adobe.com/products/premiere.html'))	{
		alert('If you dont know already, Adobe Premiere is pretty expensive. I\'d recommend OpenShot! A free aternative to most video editors.');
	}
}
}, 500);