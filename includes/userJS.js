var background;

opera.extension.onmessage = function(event){
	background = event.source;
}

window.addEventListener("keypress",function(event){
    var mo = { 0: event.ctrlKey, 1: event.altKey, 2: event.metaKey }
    var modifier = mo[parseInt(widget.preferences["option"])];
	console.log(event);
	if(modifier==true && (event.keyCode>48 && event.keyCode<58)) {
		event.preventDefault();
		background.postMessage(event.keyCode);
	}
},false);

