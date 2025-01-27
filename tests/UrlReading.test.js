const getLiteratureInfos = require("../src/UrlReading")

async function run(input, output) {
    const result = getLiteratureInfos(input);
    expect(result.chapter).toEqual(output.chapter);
    expect(result.literatureName).toEqual(output.literatureName);
}

it('should return correct values if manga is after domain name"', async () => {
    await run(
        'https://x.com/manga/sijin/chapter-10/',
        { chapter: "chapter-10", literatureName: "sijin" })
});

it('should return correct values if manga is directly after domain name', async () => {
    await run(
        'https://x.com/i-will-fall-with-the-emperor/chapter-38-5',
        { chapter: "chapter-38-5", literatureName: "i-will-fall-with-the-emperor" })
});

it('should return correct values if manga name contains numbers', async () => {
    await run(
        'https://x.com/b/i-became-a-level-999-mastermind-demon-king/chapter-123-be-safe-at-night',
        { chapter: "chapter-123-be-safe-at-night", literatureName: "i-became-a-level-999-mastermind-demon-king" })
});
