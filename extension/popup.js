document.getElementById("view-report").onclick = () => {
    chrome.tabs.create({ url: "https://your-render-api.onrender.com/report" });
  };
  