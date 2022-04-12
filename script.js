chrome.tabs.query({currentWindow: true, active: true}, 	function(tabs){
    let tabUrl = tabs[0].url;
	if(tabUrl.includes('office.com')) {
	alert('If you don\'t know already, Microsoft office is pretty expensive, I\'d reccomend Libreoffice or Openoffice, both free alternataves.')
	}
	if(tabUrl.includes('adobe.com/products/premiere.html')){
		alert('If you dont know already, Adobe Premiere is pretty expensive. I\'d recommend OpenShot! A free aternative to most video editors.');
	}
});
