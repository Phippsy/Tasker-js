// Download article titles from google alerts, split into titles then speak the first 5 article titles

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function getTitle(xmlIn) {
	var parsed = xmlIn.split("</title>");
	return parsed[0];
}

var jaguarArray = httpGet("https://www.google.co.uk/alerts/feeds/03224144126252947346/3670379549436257167")
	.replace(/\&lt\;b\&gt\;/g,"")
	.replace(/\&lt\;\/b\&gt\;/g,"")
	.replace(/\&\#39\;/g,"'")
	.replace(/\&amp\;/g,"&")
	.replace("&nbsp;","")
	.replace("&#39","'")
	.split('<title type="html">');

var landyArray = httpGet("https://www.google.co.uk/alerts/feeds/03224144126252947346/9249761414703217042")
	.replace(/\&lt\;b\&gt\;/g,"")
	.replace(/\&lt\;\/b\&gt\;/g,"")
	.replace(/\&\#39\;/g,"'")
	.replace(/\&amp\;/g,"&")
	.replace("&nbsp;","")
	.replace("&#39","'")
	.split('<title type="html">');

// Speaking the results
var talktext = "";

for ( var i=1; i<6; i++) {
	talktext += getTitle(landyArray[i]);
	talktext += " . . . . .";
}

var ok = say( "Here are the latest Land Rover headlines:", "com.google.android.tts", "eng-gbr", "media", 5, 7);
var ok = say( talktext, "com.google.android.tts", "eng-gbr", "media", 5, 7);


for ( var i=1; i<6; i++) {
	talktext += getTitle(jaguarArray[i]);
	talktext += " . . . . .";
}

var ok = say( "Here are the latest Jaguar headlines:", "com.google.android.tts", "eng-gbr", "media", 5, 7);
var ok = say( talktext, "com.google.android.tts", "eng-gbr", "media", 5, 7);