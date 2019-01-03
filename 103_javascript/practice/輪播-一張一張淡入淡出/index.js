const imgArr = [
    'images/suzy1.jpg',
    'images/suzy2.jpg',
    'images/suzy3.jpg',
    'images/suzy4.jpg',
    'images/suzy5.jpg',
    'images/suzy6.jpg',
    'images/suzy7.jpg'
];


const getImgBox = document.getElementById('show_img');

const imageCarousel = {
    imgOpacity: 0,
    index: 0,

    imgFadeIn: function(duration = 1000) {
        getImgBox.src = imgArr[this.index];
        this.index == 6 ? this.index = 0 : this.index++;
        imgStart = setInterval(()=> {
            getImgBox.style.opacity = this.imgOpacity;
            this.imgOpacity += 0.01
            if (this.imgOpacity >= 1) {
                clearInterval(imgStart);
                this.imgShow(duration);
            }
        }, duration/50)
    },
    imgShow: function(duration) {
        console.log('show', duration);
        setTimeout(() => {
            console.log('startout');
            this.imgFadeOut(duration);
        }, 1000)
    },
    imgFadeOut: function(duration) {
        console.log('fadeout', duration);
        imgEnd = setInterval(()=> {
            getImgBox.style.opacity = this.imgOpacity;
            this.imgOpacity -= 0.02;
            if (this.imgOpacity <= 0.1) {
                clearInterval(imgEnd);
                this.imgFadeIn(duration);
            }
        }, duration/50)
    }
}

function runCarousel(param1) {
    imageCarousel.imgFadeIn(param1)
}

runCarousel(1000)
