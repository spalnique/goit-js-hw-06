class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padStart(str) {
    this.#value = this.#value.padStart(this.#value.length + str.length, str);
    // this.#value = str + this.#value;
  }

  padEnd(str) {
    this.#value = this.#value.padEnd(this.#value.length + str.length, str);
    // this.#value = this.#value + str;
  }

  padBoth(str) {
    this.#value = this.#value
      .padStart(this.#value.length + str.length, str)
      .padEnd(this.#value.length + str.length * 2, str);
    // this.#value = str + this.#value + str;
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
