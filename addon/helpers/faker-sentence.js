import { helper } from '@ember/component/helper';
import faker from 'faker';

export default helper(function fakerSentence([wordCount] /*, hash*/) {
    return faker.lorem.sentence(wordCount);
});
