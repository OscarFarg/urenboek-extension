function injectedFunction() {
  document.body.style.backgroundColor = 'blue';
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id!},
    func: injectedFunction
  });
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  let tab = getCurrentTab()
})

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}