/**
 * Count in hexadecimal
 *
 * @example
 * ```ts
 * const counter = new HexCounter('ff');
 * counter.increment();
 * counter.decrement();
 * console.log(counter.value);
 * ```
 */
export default class HexCounter {
  #value = 0;

  /**
   * Creates a new HexCounter instance.
   *
   * @param value - The initial value of the counter in hexadecimal
   *
   * @remarks
   * If no value is provided, the counter will start at 0.
   *
   * @example
   * ```ts
   * const counter = new HexCounter('ff');
   * ```
   */
  constructor(value?: string) {
    if (value) {
      this.#value = this.#hexToDec(value);
    }
  }

  /**
   * The current value of the counter in hexadecimal.
   *
   * @example
   * ```ts
   * const counter = new HexCounter('ff');
   * console.log(counter.value); // 'ff'
   * ```
   */
  get value(): string {
    return this.#decToHex(this.#value);
  }

  /**
   * Increments the counter by 1 in hexadecimal.
   *
   * @example
   * ```ts
   * const counter = new HexCounter('ff');
   * counter.increment();
   * console.log(counter.value); // '100'
   * ```
   */
  increment(): void {
    this.#value++;
  }

  /**
   * Decrements the counter by 1 in hexadecimal.
   *
   * @example
   * ```ts
   * const counter = new HexCounter('ff');
   * counter.decrement();
   * console.log(counter.value); // 'fe'
   * ```
   */
  decrement(): void {
    this.#value--;
  }

  /**
   * Converts decimal to hexadecimal.
   */
  #decToHex(dec: number): string {
    return dec.toString(16);
  }

  /**
   * Converts hexadecimal to decimal.
   */
  #hexToDec(hex: string): number {
    return parseInt(hex, 16);
  }
}
