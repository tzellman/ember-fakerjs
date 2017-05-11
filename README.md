# ember-fakerjs
[![npm Version][npm-badge]][npm]
[![Build Status][travis-badge]][travis]
[![Ember Observer Score](http://emberobserver.com/badges/ember-fakerjs.svg)](http://emberobserver.com/addons/ember-fakerjs)
[![Dependency Status](https://david-dm.org/tzellman/ember-fakerjs.svg)](https://david-dm.org/tzellman/ember-fakerjs)

[Faker.js](https://github.com/marak/Faker.js/) template helpers.

[Live Demo](https://tzellman.github.io/ember-fakerjs/)

## Requirements
* Ember >= 1.13.0
* Ember CLI

## Installing

```bash
ember install ember-fakerjs
```

* `git clone` this repository
* `npm install`
* `bower install`

## Usage

## Helpers

The main helper is `faker-fake`. You can use this to generate content using the entire faker API.

Ships with the following helpers: `faker-fake`, `faker-sentence`, `faker-sentences`, `faker-text`.

Example usage:

```hbs
{{faker-sentence 10}} {{!-- create a 10-word sentence --}}
{{faker-sentences 5}} {{!-- create a 5-sentence string --}}
<img src={{faker-fake "{{image.avatar}}"}}>
<a href='mailto:{{faker-fake "{{internet.email}}"}}'>
{{faker-fake "{{name.lastName}}, {{name.firstName}} {{name.suffix}}"}}
{{faker-text 10}} {{!-- create a random variation of lorem that repeats 10 times --}}
```

## ES6

This addon provides the ability to import faker as an ES6 module.

```js
import faker from 'faker';
```

## Configuration Options

### Global Default Output Format

Faker support is disabled in production environments. You can override this by enabling it.

```js
// config/environment.js
module.exports = function() {
  return {
    faker: {
      enabled: true
    }
  }
};
```

## Development

* `git clone` this repository
* `npm install`
* `bower install`
* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

[npm]: https://www.npmjs.org/package/ember-fakerjs
[npm-badge]: https://img.shields.io/npm/v/ember-fakerjs.svg?style=flat-square
[travis]: https://travis-ci.org/tzellman/ember-fakerjs
[travis-badge]: https://img.shields.io/travis/tzellman/ember-fakerjs.svg?branch=master&style=flat-square
