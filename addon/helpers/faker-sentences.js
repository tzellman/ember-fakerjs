import {helper} from '@ember/component/helper';
import faker from "faker";

export function fakerSentences([sentenceCount, separator]) {
  return faker.lorem.sentences(sentenceCount, separator);
}

export default helper(fakerSentences);
