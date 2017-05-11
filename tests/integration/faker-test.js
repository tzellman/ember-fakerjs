import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import faker from 'faker';

moduleForComponent('faker', {
    integration: true,
    beforeEach() {
    }
});

test('faker-sentence with 1 word', function (assert) {
    assert.expect(3);
    this.render(hbs`{{faker-sentence 1}}`);
    let text = this.$().text();
    assert.ok(text, 'sentence rendered');
    assert.ok(text.split(' ').length === 1, 'sentence rendered');
    assert.ok(text[text.length - 1] === '.', 'sentence ends in period');
});

test('faker-sentence - multiple', function (assert) {
    assert.expect(3);
    this.render(hbs`{{faker-sentence 2}}`);
    let text = this.$().text();
    assert.ok(text, 'sentence rendered');
    assert.ok(text.split(' ').length === 2, 'sentence rendered');
    assert.ok(text[text.length - 1] === '.', 'sentence ends in period');
});

test('faker-fake', function (assert) {
    assert.expect(2);
    this.render(hbs`{{faker-fake "{{name.lastName}}, {{name.firstName}} {{name.suffix}}"}}`);
    let text = this.$().text();
    assert.ok(text, 'rendered');
    assert.ok(/[^,]+,[ ][^ ]+ [^ ]+/.test(text), 'renders as expected');
});

test('faker es6', function (assert) {
    assert.expect(1);
    let color = faker.commerce.color();
    assert.ok(color, 'created');
});
