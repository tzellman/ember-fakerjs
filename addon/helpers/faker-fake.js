import {helper} from '@ember/component/helper';
import faker from "faker";

export function fakerFake([string]) {
  return faker.fake(string);
}

export default helper(fakerFake);
