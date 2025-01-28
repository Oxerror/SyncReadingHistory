export function unifyLiteratureName(value: string) {
  const regex = /[\s/-]/g;
  return value.replace(regex, "").toLocaleLowerCase();
}

export function addChapterTotTile(literatureName: string, chapter: string) {
  const titles = document.querySelectorAll('h1,a');
  const cleanedString = unifyLiteratureName(literatureName);

  titles.forEach((element) => {
    if (unifyLiteratureName(element.innerHTML) === cleanedString) {
      element.innerHTML = `[${chapter}] ` + element.innerHTML;
    }
  });
}
