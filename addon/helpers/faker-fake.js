import Ember from 'ember';
import faker from "faker";

export function fakerFake([string]) {
  return faker.fake(string);
}

export default Ember.Helper.helper(fakerFake);
