import { localStorageKey } from "../constants";
import { storageStructure } from "../types";

const tableBody = document.getElementById('tableBody') as HTMLTableSectionElement;

function loadData() {
  chrome.storage.local.get([localStorageKey], (result) => {
    const storeValues: storageStructure = result[localStorageKey] ?? {};

    tableBody.innerHTML = '';

    for (const [literatureName, chapter] of Object.entries(storeValues)) {
      const row = tableBody.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);

      cell1.textContent = literatureName;
      cell2.textContent = chapter;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'x';
      deleteBtn.className = 'delete-btn';
      deleteBtn.onclick = () => deleteEntry(literatureName);
      cell3.appendChild(deleteBtn);
    }
  });
}

function deleteEntry(literatureName: string) {
  chrome.storage.local.get([localStorageKey], (result) => {
    const storeValues: storageStructure = result[localStorageKey] ?? {};
    delete storeValues[literatureName];
    chrome.storage.local.set({ [localStorageKey]: storeValues }, () => {
      loadData();
    });
  });
}

loadData();
