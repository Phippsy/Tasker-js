// Check if distanceRun already has a value and if so, add the new run value.
var rundist = global("distanceRun");
if (rundist > 0 ) {
	setGlobal("distanceRun", parseFloat(rundist) + parseFloat(global("HTTPD2221")));
} else {
	setGlobal("distanceRun", global("HTTPD2221"));
}


// Checking for empty quantified self variables, setting to 0
function checkEmpty(varIn) {
	var localVar = global(varIn);
	if ( !localVar >= 0 ) {
		setGlobal(varIn, "NA");
	}
}

var selfVariables = [ "happyScore", "happyReasons", "ranToday" ];

for ( i = 0; i < selfVariables.length; i++) {
	checkEmpty(selfVariables[i]);
}

// Get location and set to global vars
var ok = getLocation( 'net' );
setGlobal("Lat", global("LOCN").split(",")[0] );
setGlobal("Long", global("LOCN").split(",")[1] );
flash(global("LOCN"));
flash(global("Lat"));
flash(global("Long"));