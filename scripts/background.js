if (window.location.href.includes("post-thread")) {
  let reportName = document.querySelector('textarea[name="title"]');
  let name = document.querySelector('input[name="custom_fields[1]"]');
  let statik = document.querySelector('input[name="custom_fields[2]"]');
  let time = document.querySelector('input[name="custom_fields[4]"]');

  let div = document.querySelector(
    "div.fr-element.fr-view.fr-element-scroll-visible"
  );
  let reportText = div.querySelectorAll("p");

  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const formattedDate = `${day}.${month}`;

  if (window.location.href.includes("zhaloby-na-igrokov")) {
    let whoReport = prompt("На кого оставляете жалобу ?");
    let whoReportedInput = document.querySelector(
      'textarea[name="custom_fields[8]"]'
    );
    whoReportedInput.value = whoReport;
    chrome.storage.local.get(["localData"], function ({ localData }) {
      reportName.value = localData.reportName;
      name.value = localData.name;
      statik.value = localData.statik;
      time.value = formattedDate;
      reportText[0].textContent = localData.reportText;
    });
  } else {
    let whoReport = prompt("На кого оставляете жалобу ?");

    chrome.storage.local.get(["localData"], function ({ localData }) {
      reportName.value = "ЖБ на " + whoReport;
      if (window.location.href.includes("zhaloby-na-administraciju")) {
        let whoReportedInput = document.querySelector(
          'input[name="custom_fields[3]"]'
        );
        whoReportedInput.value = whoReport;
      } else {
        let whoReportedInput = document.querySelector(
          'textarea[name="custom_fields[7]"]'
        );
        whoReportedInput.value = whoReport;
      }
      name.value = localData.name;
      statik.value = localData.statik;
      time.value = formattedDate;
      reportText[0].textContent = localData.reportText;
    });
  }
}
