//Just a test: console.log("Chrome extension to go?");
//Content.js - A js file to edit the content of the webpage (mark the dps) and to scrape the text



chrome.runtime.onMessage.addListener(gotMessage);
//gets the message from background.js and logs it
function gotMessage(msg, sender, sendResponse) {
    console.log(msg.txt);
}
//TODO: Scrape the text