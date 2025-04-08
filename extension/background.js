let currentTab = "";
let startTime = null;
let totalTime = {};

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  await chrome.tabs.get(activeInfo.tabId, (tab) => handleSwitch(tab.url));
});

chrome.webNavigation.onCompleted.addListener((details) => {
  chrome.tabs.get(details.tabId, (tab) => handleSwitch(tab.url));
});

function handleSwitch(url) {
  const domain = new URL(url).hostname;

  if (currentTab && startTime) {
    const diff = Math.floor((Date.now() - startTime) / 1000);
    totalTime[currentTab] = (totalTime[currentTab] || 0) + diff;

    sendToBackend(currentTab, diff);
  }

  currentTab = domain;
  startTime = Date.now();
}

function sendToBackend(domain, seconds) {
  fetch("https://chromeextension-5g64.onrender.com/api/report", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ domain, seconds }),
  });
}
