import { localStorageKey } from "./constants";
import { storageStructure } from "./types";
import { getLiteratureInfos } from "./UrlReading"

const values = getLiteratureInfos(window.location.href);

const storeValues: storageStructure = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};

storeValues[values.literatureName] = values.chapter;

localStorage.setItem(localStorageKey, JSON.stringify(storeValues));