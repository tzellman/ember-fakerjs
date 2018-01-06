/* eslint-env node */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-fakerjs',

  included: function (app) {
    // see: https://github.com/ember-cli/ember-cli/issues/3718
    while (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.app = app;
    var opts = this.getConfig();
    if (opts.enabled) {
      app.import('vendor/faker/faker.js');
      app.import('vendor/shims/faker.js');
    }
  },

  treeForVendor: function (tree) {
    var Funnel = require('broccoli-funnel');
    var MergeTrees = require('broccoli-merge-trees');

    this._findFaker();

    let fakerTree = new Funnel(path.join(path.dirname(this._fakerPath), 'build/build'), {
      files: ['faker.js'],
      destDir: '/faker'
    });

    return new MergeTrees([tree, fakerTree].filter(Boolean), {
      annotation: 'ember-fakerjs: treeForVendor'
    });
  },

  _findFaker: function () {
    if (!this._fakerPath) {
      var resolve = require('resolve');
      this._fakerPath = resolve.sync('faker');
    }
  },

  getConfig: function () {
    var projectConfig = ((this.project.config(process.env.EMBER_ENV) || {}).faker || {});
    if (!Object.prototype.hasOwnProperty.call(projectConfig, "enabled")) {
      projectConfig.enabled = false;
    }
    return projectConfig;
  }

};
