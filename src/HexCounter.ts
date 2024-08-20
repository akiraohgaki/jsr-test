export default class HexCounter {
  #value = 0;

  constructor(value?: string) {
    if (value) {
      this.#value = this.#hexToDec(value);
    }
  }

  get value(): string {
    return this.#decToHex(this.#value);
  }

  increment(): void {
    this.#value++;
  }

  decrement(): void {
    this.#value--;
  }

  #decToHex(dec: number): string {
    return dec.toString(16);
  }

  #hexToDec(hex: string): number {
    return parseInt(hex, 16);
  }
}
