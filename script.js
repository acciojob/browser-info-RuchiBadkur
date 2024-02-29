//your JS code here. If required.
//  Browser Information Program:
// This program uses the navigator object to detect the user's browser name and version, displaying the information on the webpage.

// navigator.userAgent: Represents the user agent string of the browser.
// navigator.appName: Provides the name of the browser.
// navigator.appVersion: Provides the version of the browser.

const body = document.querySelector("body");
const div = document.createElement("div");
const browserName = navigator.appName;
const version = navigator.appVersion;
const text = document.createTextNode("You are using " + browserName + " version " + version);
div.appendChild(text);
body.appendChild(div);