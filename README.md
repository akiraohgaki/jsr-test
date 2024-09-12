# jsr-test

[![JSR](https://jsr.io/badges/@akiraohgaki/jsr-test)](https://jsr.io/@akiraohgaki/jsr-test)

A test package publishing to JSR.

## Usage

### Install

```sh
deno add @akiraohgaki/jsr-test
```

### Examples

```ts
import { HexCounter } from '@akiraohgaki/jsr-test';

const counter = new HexCounter('ff');
counter.increment();
counter.decrement();
console.log(counter.value);
```
