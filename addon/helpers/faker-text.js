import Ember from "ember";
import faker from "faker";

export function fakerText([times]) {
    return faker.lorem.text(times);
}

export default Ember.Helper.helper(fakerText);
