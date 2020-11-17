class Page {
  static #viewCount = 0;

  static increase() {
    this.#viewCount++;
  }
}

class SubPage extends Page {}

SubPage.increase();
