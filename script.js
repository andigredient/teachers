/*const arrowLeft = document.querySelector('.arrowLeft');
const arrowRight = document.querySelector('.arrowRight');
const imgSlider = document.querySelector('.img_slider');
const imgWindow = document.querySelector('.popup_image');
const popup = document.querySelector('.popup');
const popupCross = document.querySelector('.popup_cross');


countPhoto = 3;

function clickLeft() {
    if (countPhoto == 1) {
        countPhoto = 6
    } else {
        countPhoto = countPhoto - 1;        
    }
    const root = 'src/photo'+countPhoto+'.jpg'
    //console.log(root);
    imgSlider.setAttribute("src",root)

}

function clickRight() {
    if (countPhoto == 6) {
        countPhoto = 1
    } else {
        countPhoto = countPhoto + 1;
    }
    const root = '/src/photo'+countPhoto+'.jpg'
    //console.log(root);
    imgSlider.setAttribute("src",root)
}

function clickCross() {
    popup.classList.add("popup__image_close");
    popup.classList.remove("popup__image_opened");
    imgSlider.setAttribute("src",root);
}

function popupOpen(evn) {
    popup.classList.remove("popup__image_close");
    popup.classList.add("popup__image_opened");

    const pop = evn.target.src;
    console.log(pop);
    imgWindow.setAttribute("src",pop);

    popupCross.addEventListener('click', clickCross)
}


arrowLeft.addEventListener('click', clickLeft);
arrowRight.addEventListener('click', clickRight);
imgSlider.addEventListener('click', popupOpen)
*/

const sliderSmallPhoto = document.querySelector('.slider__content_menu');
sliderSmallPhoto.addEventListener('click', clickSmallPhoto);
const sliderBigPhoto = document.querySelector('.slider__content_img');



function clickSmallPhoto(evn) {
    const enterPhoto = evn.target.src;
    console.log(enterPhoto);
    if (enterPhoto == undefined) {
        return
    } else
    sliderBigPhoto.setAttribute("src",enterPhoto);
}



