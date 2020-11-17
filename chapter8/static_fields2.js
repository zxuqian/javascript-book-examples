class Page {
  static viewCount = 0;

  static increase() {
    Page.viewCount++;
  }
}

class SubPage extends Page {}

Page.increase();
Page.increase();
console.log(Page.viewCount);
console.log(SubPage.viewCount);
