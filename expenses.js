str result = getVoice( str prompt, str languageModel, int timeout )

str result = getVoice( str prompt, str languageModel, int timeout )


// Description


wait(500);

setGlobal( 'VOICE', 'none' );
getVoice ("Testing Voice", free, 10);
while ( global( 'VOICE' ) == 'none' )
{
wait(500);
}

var results = global('VOICE');
var OK = flash(results[0]);

// Attendance requested by


// S44 attendees

// Reason for attendance

// Amount
