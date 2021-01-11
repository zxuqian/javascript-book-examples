// chapter8/static_fields3.js
class Page {
  static #viewCount = 0;

  static increase() {
    this.#viewCount++;
  }
}

class SubPage extends Page {}

SubPage.increase();
