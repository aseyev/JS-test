
class Slideshow {
  constructor() {
    this.urlList = [];
    this.currentItem = 0;
    this.nextButton = null;
    this.prevButton = null;
    this.image = null;
  }
  initialData() {
    this.urlList.push("../img/portfolio/CV-cover.jpg");
    this.urlList.push("../img/portfolio/KACIR-cover.jpg");
    this.urlList.push("../img/portfolio/TECHNOMART-Cover.jpg");
  }
  start(param) {
    let that = this;
    let el = document.querySelector("#" + param);
    this.nextButton = el.querySelector(".next1");
    this.prevButton = el.querySelector(".prev1");
    this.image = el.querySelector(".img");
    this.nextButton.addEventListener("click", function (e) {
      that.getNextSlide(e);
    });
    this.prevButton.addEventListener("click", function (e) {
      that.getPrevSlide(e);
    });
    this.initialData();
    this.image.src = this.urlList[this.currentItem];
    this.prevButton.disabled = true;
  }
  getPrevSlide(e) {
    this.currentItem--;
    if (this.currentItem === 0) {
      this.prevButton.disabled = true;
    }
    this.image.src = this.urlList[this.currentItem];
    this.nextButton.disabled = false;
  }
  getNextSlide(e) {
    this.currentItem++;
    if (this.currentItem === this.urlList.length - 1) {
      this.nextButton.disabled = true;
    }
    this.image.src = this.urlList[this.currentItem];
    this.prevButton.disabled = false;
  }
}




let slider1 = new Slideshow();
let slider2 = new Slideshow();

slider1.start("slider-one");
slider2.start("slider-two");