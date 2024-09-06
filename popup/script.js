let saveBtn = document.getElementById("saveBtn");

let name = document.getElementById("name");
let statik = document.getElementById("statik");
let reportText = document.getElementById("reportText");
let reportName = document.getElementById("reportName");

saveBtn.addEventListener("click", () => {
  const data = {
    name: name.value,
    statik: statik.value,
    reportText: reportText.value,
    reportName: reportName.value,
  };
  chrome.storage.local.set({ localData: data }, function () {
    console.log("Данные сохранены!");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["localData"], function ({ localData }) {
    name.value = localData.name;
    statik.value = localData.statik;
    reportText.value = localData.reportText;
    reportName.value = localData.reportName;
  });
});
