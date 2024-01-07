//Testing: console.log('background running');
//TODO: Get Images using the chrome.tabs.captureVisibleTab option
function buttonClicked(tabs) {
    let msg = {
      txt: "hello"
    };
    chrome.tabs.sendMessage(tabs.id, msg);
}

chrome.action.onClicked.addListener(buttonClicked);



