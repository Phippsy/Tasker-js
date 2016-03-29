// Retrieving RSS

// XMLHttpRequest function
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

// Get Jag and LR feed
var jaguarArray = httpGet("https://www.google.co.uk/alerts/feeds/03224144126252947346/3670379549436257167").split('<title type="html">');
var landyArray = httpGet("https://www.google.co.uk/alerts/feeds/03224144126252947346/9249761414703217042").split('<title type="html">');
