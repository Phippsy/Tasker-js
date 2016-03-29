### Tasker Scripts

A collection of JavaScript snippets written to be run by [Tasker](http://tasker.dinglisch.net).

#### checking-work-rss

Runs an http get request to 2 google alerts RSS feeds, for Jaguar and Land Rover, then reads out the first 5 articles in the feed.

#### expenses.js

Uses the get voice command to capture all necessary data for my work expenses, then pushes the data to a google sheet.

#### rundistance checker.js

Checks my Strava RSS feed, parses out the distance of the latest run (in miles) and saves it to the distanceRun variable, which is published to a google sheet every morning at 2am.
 
#### weather.js

Runs an httpGet request for RSS feed data which contains weather information for Stokenchurch and London. Parses out the forecast for the coming day, then speaks the forecast for either Stokenchurch or London, depending on which have been selected in a preceding Tasker scene.