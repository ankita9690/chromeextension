// document.getElementById("view-report").onclick = () => {
//     chrome.tabs.create({ url: "https://chromeextension-5g64.onrender.com/report" });
//   };
document.getElementById("view-report").addEventListener("click", () => {
  chrome.tabs.create({
    url: "https://chromeextension-5g64.onrender.com/report"
  });
});
