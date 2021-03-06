import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | random', function (hooks) {
    setupRenderingTest(hooks);

    test('all options render with defaults', async function (assert) {
        assert.expect(14);
        const methods = [
            'number',
            'float',
            'arrayElement',
            'arrayElements',
            'objectElement',
            'uuid',
            'boolean',
            'word',
            'words',
            'image',
            'locale',
            'alpha',
            'alphaNumeric',
            'hexaDecimal'
        ];
        for (const method of methods) {
            this.set('method', method);
            await render(hbs`{{faker-random this.method}}`);
            assert.ok(this.element.textContent.trim(), 'renders content');
        }
    });

    test('it renders specific values', async function (assert) {
        assert.expect(2);
        await render(hbs`{{faker-random "arrayelement" (array 1 2 3)}}`);
        assert.ok(/[1-3]/.test(this.element.textContent.trim()), 'arrayelement');
        await render(hbs`{{faker-random "notsupported"}}`);
        assert.notOk(this.element.textContent.trim(), 'should be empty');
    });
});
