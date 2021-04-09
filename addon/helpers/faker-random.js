import { helper } from '@ember/component/helper';
import faker from 'faker';

export default helper(function fakerRandom(params, hash) {
    const method = params.length > 0 ? params[0].toLowerCase() : undefined;
    const options = { ...(hash ?? {}) };
    switch (method) {
        case 'number':
            return faker.datatype.number(options);
        case 'float':
            return faker.datatype.float(options);
        case 'arrayelement':
            return faker.random.arrayElement(params.length > 1 ? params[1] : undefined);
        case 'arrayelements':
            return faker.random.arrayElements(params.length > 1 ? params[1] : undefined, options?.count);
        case 'objectelement':
            return faker.random.objectElement(params.length > 1 ? params[1] : undefined, options?.field);
        case 'uuid':
            return faker.datatype.uuid();
        case 'boolean':
            return faker.datatype.boolean();
        case 'word':
            return faker.random.word(options?.type);
        case 'words':
            return faker.random.words(options?.count);
        case 'image':
            return faker.random.image();
        case 'locale':
            return faker.random.locale();
        case 'alpha':
            return faker.random.alpha(options);
        case 'alphanumeric':
            return faker.random.alphaNumeric(options?.count, { bannedChars: options?.bannedChars });
        case 'hexadecimal':
            return faker.datatype.hexaDecimal(options);
    }
    return undefined;
});
