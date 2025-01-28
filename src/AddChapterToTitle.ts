export function unifyLiteratureName(value: string) {
  // We need to use control regex to remove non ascii characters
  // eslint-disable-next-line no-control-regex
  const regex = /[\s/-]|[^\x00-\x7F]/g;
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
