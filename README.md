# jsr-test

A test package publishing to JSR.

## Install

```sh
deno add @akiraohgaki/jsr-test
```

## Usage

```ts
import { HexCounter } from '@akiraohgaki/jsr-test';

const counter = new HexCounter('ff');
counter.increment();
counter.decrement();
console.log(counter.value);
```
