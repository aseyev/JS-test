let slider1 = sliderFactory.createNewSlider();
let slider2 = sliderFactory.createNewSlider();

slider1.start('slider-one');
slider2.start('slider-two');


let sliderFactory = {
    createNewSlider:function(){
        let newSlider = {
            urlList: [],
            currentItem: 0,
            nextButton: null,
            prevButton: null,
            image: null,
            getElement: function (id) {
                return document.querySelector(id);
            },
            initialData: function () {
                this.urlList.push('https://www.look.com.ua/large/201210/53782.jpg');
                this.urlList.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ69Mr4vWji47DmESTuyCgbdvFehjOwAJhhKn6jC2vKXfa3NU9h');
                this.urlList.push('https://sebweo.com/wp-content/uploads/2019/06/landshaft-bernskikh-alp-v-yasniy-den_thumb.jpg');
                this.urlList.push('https://focus.ua/storage/pub/images/2017/2615387.jpg');
                this.urlList.push('http://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-various-subjects-01.jpg');
            },
            start: function (param) {
                let that = this;
                let el = this.getElement('#'+ param);

                this.nextButton = el.querySelector('.next');
                this.prevButton = el.querySelector('.prev');
                this.image = el.querySelector('.img');


                this.nextButton.addEventListener('click', function (e) {
                    that.getNextSlide(e);
                });
                this.prevButton.addEventListener('click', function (e) {
                    that.getPrevSlide(e);
                });


                this.initialData();
                this.image.src = this.urlList[this.currentItem];
                this.prevButton.disabled = true;
            },

            getPrevSlide: function (e) {
                this.currentItem--;
                if (this.currentItem === 0) {
                    this.prevButton.disabled = true;
                }
                this.image.src = this.urlList[this.currentItem];
                this.nextButton.disabled = false;
            },

            getNextSlide: function (e) {
                this.currentItem++;
                if (this.currentItem === (this.urlList.length - 1)) {
                    this.nextButton.disabled = true;
                }
                this.image.src = this.urlList[this.currentItem];
                this.prevButton.disabled = false;
            }

        }
        return newSlider;
    }
};