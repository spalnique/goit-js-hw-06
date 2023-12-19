class Storage {
  #items;

  constructor(productList) {
    this.#items = productList;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items.splice(this.#items.indexOf(itemToRemove), 1);

    // this.#items = this.#items.filter(x => x !== itemToRemove);

    // this.#items = Array.from(this.#items, x => {
    //   if (x !== itemToRemove) {
    //     return x;
    //   }
    // });

    // this.#items = this.#items.reduce((acc, x) => {
    //   if (x !== itemToRemove) {
    //     acc.push(x);
    //   }
    //   return acc;
    // }, []);

    // this.#items = this.#items.reduce(
    //   (acc, x) => (x !== itemToRemove ? acc.concat([x]) : acc),
    //   [],
    // );
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
