(function () {
    const header=document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
            }else {
            header.classList.remove('header_active')
            }
        };
}());


let offset = 0;//переменная смещения от левого края
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.right').addEventListener('click', function(){
    offset = offset+1000;
    if (offset > 8000){
        offset=0;
    }
    sliderLine.style.left = -offset+ 'px';
})


document.querySelector('.left').addEventListener('click', function(){
    offset = offset-1000;
    if (offset < 0){
        offset=8000;
    }
    sliderLine.style.left = -offset+ 'px';
})

