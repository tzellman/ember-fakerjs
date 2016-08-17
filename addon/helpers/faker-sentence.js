import Ember from "ember";
import faker from "faker";

export function fakerSentence([wordCount]) {
    return faker.lorem.sentence(wordCount);
}

export default Ember.Helper.helper(fakerSentence);
