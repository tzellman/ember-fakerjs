'use strict';

module.exports = {
    extends: 'octane',
    rules: {
        'no-curly-component-invocation': { allow: ['faker-text'] },
        'no-inline-styles': false,
        'no-implicit-this': { allow: ['faker-text'] }
    }
};
