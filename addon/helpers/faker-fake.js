import { helper } from '@ember/component/helper';
import faker from 'faker';

export default helper(function fakerFake([expression] /*, hash*/) {
    return faker.fake(expression);
});
