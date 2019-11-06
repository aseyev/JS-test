

let sliderFactory = {
  createNewSlider: function() {
    let newSlider = {
      urlList: [],
      currentItem: 0,
      nextButton: null,
      prevButton: null,
      image: null,
      getElement: function(id) {
        return document.querySelector(id);
      },
      initialData: function() {
        this.urlList.push("../img/portfolio/CV-cover.jpg");
        this.urlList.push("../img/portfolio/KACIR-cover.jpg");
        this.urlList.push("../img/portfolio/TECHNOMART-Cover.jpg");
      },
      start: function(param) {
        let that = this;
        let el = this.getElement("#" + param);

        this.nextButton = el.querySelector(".next");
        this.prevButton = el.querySelector(".prev");
        this.image = el.querySelector(".img");

        this.nextButton.addEventListener("click", function(e) {
          that.getNextSlide(e);
        });
        this.prevButton.addEventListener("click", function(e) {
          that.getPrevSlide(e);
        });

        this.initialData();
        this.image.src = this.urlList[this.currentItem];
        this.prevButton.disabled = true;
      },

      getPrevSlide: function(e) {
        this.currentItem--;
        if (this.currentItem === 0) {
          this.prevButton.disabled = true;
        }
        this.image.src = this.urlList[this.currentItem];
        this.nextButton.disabled = false;
      },

      getNextSlide: function(e) {
        this.currentItem++;
        if (this.currentItem === this.urlList.length - 1) {
          this.nextButton.disabled = true;
        }
        this.image.src = this.urlList[this.currentItem];
        this.prevButton.disabled = false;
      }
    };
    return newSlider;
  }
};

let slider1 = sliderFactory.createNewSlider();
let slider2 = sliderFactory.createNewSlider();

slider1.start("slider-one");
slider2.start("slider-two");