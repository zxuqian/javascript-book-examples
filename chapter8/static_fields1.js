class Page {
  static viewCount = 0;

  static increase() {
    this.viewCount++; // 或 Page.viewCount++;
  }
}

Page.increase();
Page.increase();
console.log(Page.viewCount);
