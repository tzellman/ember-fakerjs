import Ember from "ember";
import faker from "faker";

export function fakerSentences([sentenceCount, separator]) {
    return faker.lorem.sentences(sentenceCount, separator);
}

export default Ember.Helper.helper(fakerSentences);
