// Description
	var ok = say( "Expense Description", "com.google.android.tts", "eng-gbr", "media", 5, 7); 
	var result = getVoice ("Expense Description", 'free', 10);
	setGlobal("expDescrip", result.split(",")[0]);

// Attendance requested by
	var ok = say( "Attendance requested by", "com.google.android.tts", "eng-gbr", "media", 5, 7); 
	var result = getVoice ("Attendance requested by", 'free', 10);
	setGlobal("expAttReq", result.split(",")[0]);

// S44 attendees
	var ok = say( "Spark44 attendees", "com.google.android.tts", "eng-gbr", "media", 5, 7); 
	var result = getVoice ("S44 attendees", 'free', 10);
	setGlobal("expS44Attend", result.split(",")[0]);

// Reason for attendance
	var ok = say( "Why did you attend?", "com.google.android.tts", "eng-gbr", "media", 5, 7); 
	var result = getVoice ("Reason for attendance", 'free', 10);
	setGlobal("expAttReason", result.split(",")[0]);

// Amount
	var ok = say( "What is the amount?", "com.google.android.tts", "eng-gbr", "media", 5, 7); 
	var result = getVoice ("Amount", 'free', 10);
	setGlobal("expAmount", result.split(",")[0]);
	
// Posting results
	entry.1549933949=%expDescrip;
	entry.547150530=%expAttReq;
	entry.1662573281=%expS44Attend;
	entry.2141111038=%expAttReason;
	entry.1120484077=%expAmount;