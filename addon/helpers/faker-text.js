import { helper } from '@ember/component/helper';
import faker from 'faker';

export default helper(function fakerText([times] /*, hash*/) {
    return faker.lorem.text(times);
});
