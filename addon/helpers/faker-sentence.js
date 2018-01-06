import {helper} from '@ember/component/helper';
import faker from "faker";

export function fakerSentence([wordCount]) {
  return faker.lorem.sentence(wordCount);
}

export default helper(fakerSentence);
