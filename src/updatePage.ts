import { localStorageKey } from "./constants";
import { storageStructure } from "./types";
import { addChapterTotTile } from "./AddChapterToTitle";

chrome.storage.local.get([localStorageKey], (result) => {
  const storeValues: storageStructure = result[localStorageKey]
    ? JSON.parse(result[localStorageKey])
    : {};

  for (const [literatureName, chapter] of Object.entries(storeValues)) {
    addChapterTotTile(literatureName, chapter);
  }
});
