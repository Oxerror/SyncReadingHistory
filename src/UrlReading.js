console.log("loading plugin");

function getChapterLocation(url) {
  var hasNumber = /\d/;
  const urlParts = url.pathname.split("/");

  // use for to loop through the url form the back
  for (let i = urlParts.length; i > 0; --i) {
    const item = urlParts[i];

    if (hasNumber.test(item)) return i;
  }
}

export function getLiteratureInfos() {

  const url = new URL(window.location.href);
  const pathname = url.pathname.split("/");
  const chapterLocation = getChapterLocation(url);

  if (typeof chapterLocation === "number") {
    const chapter = pathname[chapterLocation];
    const literatureName = pathname[chapterLocation - 1];

    console.log("chapter", chapter);
    console.log("literatureName", literatureName);
  }

}