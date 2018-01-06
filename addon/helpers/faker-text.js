import {helper} from '@ember/component/helper';
import faker from "faker";

export function fakerText([times]) {
  return faker.lorem.text(times);
}

export default helper(fakerText);
