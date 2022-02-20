import { setImage, showImageFrame, hideImageFrame } from "./js/helpers.js";

const images = [
    'assets/start-photo.jpg'
];

setImage(images[0]);
showImageFrame();

function onNextClick() {
    alert('Next button was clicked!');
}

function onBackClick() {
    alert('Back button was clicked!');
}

export { onBackClick, onNextClick };