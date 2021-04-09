import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | faker-fake', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders bare expression', async function (assert) {
        await render(hbs`{{faker-fake "{{name.lastName}}, {{name.firstName}} {{name.suffix}}"}}`);
        const text = this.element.textContent.trim();
        assert.ok(text, 'rendered');
        assert.ok(/[^,]+,[ ][^ ]+ [^ ]+/.test(text), 'renders as expected');
    });

    test('it renders var expression', async function (assert) {
        this.set('expression', '{{name.lastName}}, {{name.firstName}} {{name.suffix}}');
        await render(hbs`{{faker-fake this.expression}}`);
        const text = this.element.textContent.trim();
        assert.ok(text, 'rendered');
        assert.ok(/[^,]+,[ ][^ ]+ [^ ]+/.test(text), 'renders as expected');
    });
});
