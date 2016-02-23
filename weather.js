London weather
// To find a weather location: http://www.weather.com/weather/extended/UKXX0085? within the location page.

// Getting weather for Stokenchurch & London
	function httpGet(theUrl)
	{
	    var xmlHttp = new XMLHttpRequest();
	    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
	    xmlHttp.send( null );
	    return xmlHttp.responseText;
	}

	var stokenWeather = httpGet("http://weather.yahooapis.com/forecastrss?p=UKXX4263&u=c")
	var londonWeather = httpGet("http://weather.yahooapis.com/forecastrss?p=UKXX0085&u=c")

	var lowSplitter = new RegExp("low=\"");
	var highSplitter = new RegExp("high=\"");
	var medSplitter = new RegExp("code=\"")
	var fcSplitter = new RegExp("text=\"")

	var stokenLowC = parseInt(stokenWeather.split(lowSplitter)[2].split("\"")[0]);
	var stokenHighC = parseInt(stokenWeather.split(highSplitter)[2].split("\"")[0]);
	var stokenFC = stokenWeather.split(fcSplitter)[3].split("\"")[0];

	var londonLowC = parseInt(londonWeather.split(lowSplitter)[2].split("\"")[0]);
	var londonHighC = parseInt(londonWeather.split(highSplitter)[2].split("\"")[0]);
	var londonFC = londonWeather.split(fcSplitter)[3].split("\"")[0];

	var OK = setGlobal("stokenForecast", "Weather forecast for Stokenchurch: \nHigh of " + stokenHighC + " Celsius. \nLow of " + stokenLowC + " Celsius. \nForecast is " + stokenFC);
	var OK = setGlobal("londonForecast", "Weather forecast for London: \nHigh of " + londonHighC + " Celsius. \nLow of " + londonLowC + " Celsius. \nForecast is " + londonFC);

// Speak stokenchurch weather
	var forecast = global("stokenForecast");
	var ok = say( forecast, "com.google.android.tts", "eng-gbr", "media", 5, 7); 

// Speak London weather
	var forecast = global("londonForecast");
	var ok = say( forecast, "com.google.android.tts", "eng-gbr", "media", 5, 7); 

// Speak weather from scene options

	var LDN = global("LDfc");
	var SC = global("SCfc");
	var ldnFC = global("londonForecast");
	var scFC = global("stokenForecast");

	var forecast = "";

	if ( LDN == "on" ) {
	 forecast += ldnFC;
	 var OK = say(ldnFC, "com.google.android.tts", "eng-gbr", "media", 5, 7); 
	}

	if ( SC == "on" ) {
	 forecast += scFC;
	 var OK = say(scFC, "com.google.android.tts", "eng-gbr", "media", 5, 7); 
	}

	var OK = flashLong(forecast)


