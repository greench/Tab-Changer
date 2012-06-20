var background;

opera.extension.onmessage = function(event){
	background = event.source;
}

window.addEventListener("keypress",function(event){
	console.log(event);
	if(event.ctrlKey==true && (event.keyCode>48 && event.keyCode<58)) {
		event.preventDefault();
		background.postMessage(event.keyCode);
	}
},false);

