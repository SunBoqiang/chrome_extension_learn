const periodInMinutes = 1;

chrome.alarms.create("1minute", {periodInMinutes});

chrome.alarms.onAlarm.addListener((alarm) => {
    chrome.tabs.reload();
});


