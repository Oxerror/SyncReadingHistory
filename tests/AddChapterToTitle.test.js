import { unifyLiteratureName } from "../src/AddChapterToTitle";

function runUnifyLiteratureName(input, output) {
  const result = unifyLiteratureName(input);
  expect(result).toEqual(output);
}

it('should remove "-" from the given name', () => {
  runUnifyLiteratureName('i-will-fall-with-the-emperor', 'iwillfallwiththeemperor')
});

it('should remove " " from the given name', () => {
  runUnifyLiteratureName('i will fall with the emperor', 'iwillfallwiththeemperor')
});

it('should remove / from the name', () => {
  runUnifyLiteratureName('i/will/fall/with/the/emperor', 'iwillfallwiththeemperor')
});

it('should transform anything to lowercase', () => {
  runUnifyLiteratureName('IwillfallwiththeEmperor', 'iwillfallwiththeemperor')
});

it('should remove non ascii characters', () => {
    runUnifyLiteratureName('‏iwillfallwiththeemperor', 'iwillfallwiththeemperor')
});
