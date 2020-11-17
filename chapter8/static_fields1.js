class Page {
  static viewCount = 0;

  static increase() {
    Page.viewCount++;
  }
}

Page.increase();
Page.increase();
console.log(Page.viewCount);
