# jsr-test

Test package for JSR

## Examples

```ts
import { HexCounter } from '@akiraohgaki/jsr-test';

const counter = new HexCounter('ff');
counter.increment();
counter.decrement();
console.log(counter.value);
```
