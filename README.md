# ember-fakerjs

[![NPM][npm-badge-img]][npm-badge-link]
[![Build Status][build-status-img]][build-status-link]
[![Ember Observer Score][ember-observer-badge]][ember-observer-url]
[![Ember Version][ember-version]][ember-version-url]
[![Download count][npm-downloads-img]][npm-badge-link]
[![Code Climate][climate-badge]][climate-badge-url]
[![Test Coverage][coverage-badge]][coverage-badge-url]

[Faker.js](https://github.com/marak/Faker.js/) template helpers.

This addon provides helpers that can assist with adding fake/fixture data to your applications.
This can be especially useful when scaffolding your application or building demos.

## Installation

```
ember install ember-fakerjs
```

## Demo

[Demo](https://tzellman.github.io/ember-fakerjs/)

## Usage

### Helpers

The list of helpers available are:

-   `faker-fake` use this to generate content by directly using the `faker` API
-   `faker-random` utility that provides parameterized access to the `random` subsection of the `faker` API
-   `faker-text`, `faker-sentence`, `faker-sentences` - generate lorem content

Example usage:

```hbs
{{faker-random "number" max=100}}
{{faker-random "arrayelement" array("Link" "Ganon" "Zelda")}}
{{faker-sentence 10}} {{!-- create a 10-word sentence --}}
{{faker-sentences 5}} {{!-- create a 5-sentence string --}}
<img src={{faker-fake "{{image.avatar}}"}} alt="avatar">
<a href={{concat "mailto:" (faker-fake "{{internet.email}}")}}>Send Email!</a>
{{faker-fake "{{name.lastName}}, {{name.firstName}} {{name.suffix}}"}}
{{faker-text 10}} {{!-- create a random variation of lorem that repeats 10 times --}}
```

## ES6

This addon provides the ability to import faker as an ES6 module.

```js
import faker from "faker";
```

## Compatibility

-   Ember.js v3.20 or above
-   Node.js v12 or above

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).

[npm-badge-img]: https://badge.fury.io/js/ember-fakerjs.svg
[npm-badge-link]: http://badge.fury.io/js/ember-fakerjs
[build-status-img]: https://github.com/tzellman/ember-fakerjs/workflows/CI/badge.svg?branch=master&event=push
[build-status-link]: https://github.com/tzellman/ember-fakerjs/actions?query=workflow%3A%22CI%22
[npm-downloads-img]: https://img.shields.io/npm/dt/ember-fakerjs.svg
[ember-observer-badge]: http://emberobserver.com/badges/ember-fakerjs.svg
[ember-observer-url]: http://emberobserver.com/addons/ember-fakerjs
[ember-version]: https://img.shields.io/badge/Ember-3.12%2B-brightgreen.svg
[ember-version-url]: https://blog.emberjs.com/2019/08/16/ember-3-12-released.html
[coverage-badge]: https://codeclimate.com/github/tzellman/ember-fakerjs/badges/coverage.svg
[coverage-badge-url]: https://codeclimate.com/github/tzellman/ember-fakerjs/test_coverage
[climate-badge]: https://codeclimate.com/github/tzellman/ember-fakerjs/badges/gpa.svg
[climate-badge-url]: https://codeclimate.com/github/tzellman/ember-fakerjs
