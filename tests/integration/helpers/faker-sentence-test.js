import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | faker-sentence', function (hooks) {
    setupRenderingTest(hooks);

    const expectWords = (assert, element, num) => {
        const text = element.textContent.trim();
        assert.ok(text, 'sentence rendered');
        assert.ok(text.split(/\s+/).length === num, `sentence has ${num} word(s)`);
        assert.ok(text[text.length - 1] === '.', 'sentence ends in period');
    };

    test('1 word', async function (assert) {
        await render(hbs`{{faker-sentence 1}}`);
        expectWords(assert, this.element, 1);
    });

    test('multiple words', async function (assert) {
        await render(hbs`{{faker-sentence 2}}`);
        expectWords(assert, this.element, 2);
    });
});
