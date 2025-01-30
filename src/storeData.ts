import { localStorageKey } from "./constants";
import { storageStructure } from "./types";
import { getLiteratureInfos } from "./UrlReading";

function storeLiteratureInfo(url: string) {
  const values = getLiteratureInfos(url);

  chrome.storage.local.get([localStorageKey], (result) => {
    const storeValues: storageStructure = result[localStorageKey]
      ? JSON.parse(result[localStorageKey])
      : {};

    if (values !== undefined) {
      storeValues[values.literatureName] = values.chapter;
      chrome.storage.local.set({
        [localStorageKey]: JSON.stringify(storeValues),
      });
    }
  });
}

chrome.tabs.onUpdated.addListener((_, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    storeLiteratureInfo(tab.url);
  }
});
