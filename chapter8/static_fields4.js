class Page {
  static #viewCount = 0;

  static increase() {
    Page.#viewCount++;
  }

  static getViewCount() {
    return Page.#viewCount;
  }
}

class SubPage extends Page {}

SubPage.increase();
console.log(SubPage.getViewCount());
