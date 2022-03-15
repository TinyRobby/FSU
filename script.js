// Chrome extention for reccomending free software over payed

// this for chrome
let url = document.URL; 
if(url.includes('office.com')) {
	alert('If you don\'t know already, Microsoft office is pretty expensive, I\'d reccomend Libreoffice or Openoffice, both free alternataves.')
}
if(url.includes('adobe.com/products/premiere.html')){
	alert('If you dont know already, Adobe Premiere is pretty expensive. I\'d recommend OpenShot! A free aternative to most video editors.');
}