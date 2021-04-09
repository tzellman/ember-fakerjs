import { helper } from '@ember/component/helper';
import faker from 'faker';

export default helper(function fakerSentences([sentenceCount, separator] /*, hash*/) {
    return faker.lorem.sentences(sentenceCount, separator);
});
