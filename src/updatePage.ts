import { localStorageKey } from "./constants";
import { storageStructure } from "./types";
import {addChapterTotTile} from "./AddChapterToTitle"

const storeValues: storageStructure = JSON.parse(localStorage.getItem(localStorageKey) ?? "{}");

for (const [literatureName, chapter] of Object.entries(storeValues)) {
  addChapterTotTile(literatureName, chapter);
}
