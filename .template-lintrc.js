'use strict';

module.exports = {
    extends: 'recommended',
    rules: {
        'no-curly-component-invocation': { allow: ['faker-text'] },
        'no-inline-styles': false,
        'no-implicit-this': { allow: ['faker-text'] }
    }
};
