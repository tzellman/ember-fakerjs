import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | faker-sentences', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        await render(hbs`{{faker-sentences 1}}`);
        assert.ok(this.element.textContent.trim());

        await render(hbs`{{faker-sentences 2 ' - '}}`);
        assert.ok(this.element.textContent.trim());
    });
});
