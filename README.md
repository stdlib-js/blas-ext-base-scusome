<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# scusome

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Cumulatively test whether at least `k` elements in a single-precision floating-point strided array are truthy.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-scusome
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var scusome = require( '@stdlib/blas-ext-base-scusome' );
```

#### scusome( N, k, x, strideX, out, strideOut )

Cumulatively tests whether at least `k` elements in a single-precision floating-point strided array are truthy.

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var BooleanArray = require( '@stdlib/array-bool' );

var x = new Float32Array( [ 0.0, 0.0, 1.0, 1.0, 1.0 ] );
var out = new BooleanArray( 5 );

scusome( x.length, 2, x, 1, out, 1 );
// out => <BooleanArray>[ false, false, false, true, true ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **k**: minimum number of truthy elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: stride length for `x`.
-   **out**: output [`BooleanArray`][@stdlib/array/bool].
-   **strideOut**: stride length for `out`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to cumulatively test every other element:

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var BooleanArray = require( '@stdlib/array-bool' );

var x = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0 ] );
var out = new BooleanArray( 4 );

scusome( 4, 2, x, 2, out, 1 );
// out => <BooleanArray>[ false, false, false, true ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var BooleanArray = require( '@stdlib/array-bool' );

// Initial arrays...
var x0 = new Float32Array( [ 0.0, 0.0, 0.0, 1.0, 1.0, 1.0 ] );
var o0 = new BooleanArray( x0.length );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var o1 = new BooleanArray( o0.buffer, o0.BYTES_PER_ELEMENT*3 ); // start at 4th element

scusome( 3, 2, x1, 2, o1, 1 );
// o0 => <BooleanArray>[ false, false, false, false, false, true ]
```

#### scusome.ndarray( N, k, x, strideX, offsetX, out, strideOut, offsetOut )

Cumulatively tests whether at least `k` elements in a single-precision floating-point strided array are truthy using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var BooleanArray = require( '@stdlib/array-bool' );

var x = new Float32Array( [ 0.0, 0.0, 1.0, 1.0, 1.0 ] );
var out = new BooleanArray( 5 );

scusome.ndarray( x.length, 2, x, 1, 0, out, 1, 0 );
// out => <BooleanArray>[ false, false, false, true, true ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetOut**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, offset parameters support indexing semantics based on starting indices. For example, to cumulatively test every other element starting from the third element:

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var BooleanArray = require( '@stdlib/array-bool' );

var x = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0 ] );
var out = new BooleanArray( 3 );

scusome.ndarray( 3, 1, x, 2, 2, out, 1, 0 );
// out => <BooleanArray>[ false, true, true ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `out` unchanged.
-   Both functions explicitly treat `NaN` values as falsy elements.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var bernoulli = require( '@stdlib/random-array-bernoulli' );
var BooleanArray = require( '@stdlib/array-bool' );
var logEach = require( '@stdlib/console-log-each' );
var scusome = require( '@stdlib/blas-ext-base-scusome' );

var x = bernoulli( 10, 0.5, {
    'dtype': 'float32'
});
console.log( x );

var out = new BooleanArray( x.length );
scusome( x.length, 5, x, 1, out, 1 );
logEach( '%s', out );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/scusome.h"
```

#### stdlib_strided_scusome( N, k, \*X, strideX, \*Out, strideOut )

Cumulatively tests whether at least `k` elements in a single-precision floating-point strided array are truthy.

```c
#include <stdbool.h>

const float x[] = { 0.0f, 0.0f, 1.0f, 1.0f, 1.0f };
bool out[] = { false, false, false, false, false };

stdlib_strided_scusome( 5, 2, x, 1, out, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **k**: `[in] CBLAS_INT` minimum number of truthy elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **Out**: `[out] bool*` output array.
-   **strideOut**: `[in] CBLAS_INT` stride length for `Out`.

```c
void stdlib_strided_scusome( const CBLAS_INT N, const CBLAS_INT k, const float *X, const CBLAS_INT strideX, bool *Out, const CBLAS_INT strideOut );
```

<!-- lint disable maximum-heading-length -->

#### stdlib_strided_scusome_ndarray( N, k, \*X, strideX, offsetX, \*Out, strideOut, offsetOut )

<!-- lint enable maximum-heading-length -->

Cumulatively tests whether at least `k` elements in a single-precision floating-point strided array are truthy using alternative indexing semantics.

```c
#include <stdbool.h>

const float x[] = { 0.0f, 0.0f, 1.0f, 1.0f, 1.0f };
bool out[] = { false, false, false, false, false };

stdlib_strided_scusome_ndarray( 5, 2, x, 1, 0, out, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **k**: `[in] CBLAS_INT` minimum number of truthy elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **Out**: `[out] bool*` output array.
-   **strideOut**: `[in] CBLAS_INT` stride length for `Out`.
-   **offsetOut**: `[in] CBLAS_INT` starting index for `Out`.

```c
void stdlib_strided_scusome_ndarray( const CBLAS_INT N, const CBLAS_INT k, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, bool *Out, const CBLAS_INT strideOut, const CBLAS_INT offsetOut );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   The function explicitly treats `NaN` values as falsy.

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/scusome.h"
#include <stdio.h>
#include <stdbool.h>

int main( void ) {
    // Create strided arrays:
    const float x[] = { 0.0f, 0.0f, 1.0f, 1.0f, 0.0f, 0.0f, 0.0f, 0.0f };
    bool out[] = { false, false, false, false, false, false, false, false };

    // Specify the number of indexed elements:
    const int N = 8;

    // Specify the minimum number of truthy elements:
    const int k = 2;

    // Specify strides:
    const int strideX = 1;
    const int strideOut = 1;

    // Cumulatively test whether at least `k` elements are truthy:
    stdlib_strided_scusome( N, k, x, strideX, out, strideOut );

    // Print the results:
    for ( int i = 0; i < 8; i++ ) {
        printf( "Out[ %i ] = %s\n", i, out[ i ] ? "true" : "false" );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-scusome.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-scusome

[test-image]: https://github.com/stdlib-js/blas-ext-base-scusome/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-scusome/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-scusome/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-scusome?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-scusome.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-scusome/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-scusome/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-scusome/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-scusome/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-scusome/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-scusome/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-scusome/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-scusome/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-scusome/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[@stdlib/array/bool]: https://github.com/stdlib-js/array-bool

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
