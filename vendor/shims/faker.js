(function () {
  function vendorModule() {
    'use strict';

    return {
      'default': self['faker'],
      __esModule: true
    };
  }

  define('faker', [], vendorModule);
})();
