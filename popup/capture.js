


/**
 * @description 截取当前activeTab 为图片并下载
 */

async function captureOperate () {
  // manifest.json  downloads activeTab
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  const screenshot = await chrome.tabs.captureVisibleTab(tabs[0].windowId, { format: "png" });
  chrome.downloads.download({ url: screenshot });



};




document.getElementById('captureBtn').addEventListener('click',captureOperate);
