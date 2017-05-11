/* eslint-env node */
'use strict';

module.exports = {
    name: 'ember-fakerjs',

    included: function (app) {

        // see: https://github.com/ember-cli/ember-cli/issues/3718
        while (typeof app.import !== 'function' && app.app) {
            app = app.app;
        }

        this.app = app;
        this.fakerOptions = this.getConfig();
        this.importDeps(app);
        return app;
    },

    importDeps: function (app) {
        if (arguments.length < 1) {
            throw new Error('Application instance must be passed to import');
        }

        var vendor = this.treePaths.vendor;
        var options = this.fakerOptions;

        // TODO update this to handle Faker locale support, and options

        if (app.env !== 'production' || options.enabled) {
            app.import(app.bowerDirectory + '/Faker/build/build/faker.js');
            app.import('vendor/shim.js', {
                type: 'vendor',
                exports: {'faker': ['default']}
            });
        }
    },

    getConfig: function () {
        var projectConfig = ((this.project.config(process.env.EMBER_ENV) || {}).faker || {});
        if (!projectConfig.hasOwnProperty("enabled")) {
            projectConfig.enabled = false;
        }
        return projectConfig;
    }

};
