import { assertStrictEquals } from '@std/assert';

import HexCounter from '../../src/HexCounter.ts';

Deno.test('HexCounter', async (t) => {
  let counter: HexCounter;

  await t.step('constructor', () => {
    counter = new HexCounter('ff');

    assertStrictEquals(counter.value, 'ff');
  });

  await t.step('increment', () => {
    counter.increment();

    assertStrictEquals(counter.value, '100');
  });

  await t.step('decrement', () => {
    counter.decrement();

    assertStrictEquals(counter.value, 'ff');
  });
});
