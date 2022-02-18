/**
 * Sets the image in the webpage
 * @param {string} src - A local path to the image. E.g. "assets/my-image.png"
 */
function setImage(src) {
    setImageSrc(src);
}

/**
 * Adds the gold frame around the current image
 */
function showImageFrame() {
    enableImgFrame();
}

/**
 * hides the gold frame that's around the image
 */
function hideImageFrame() {
    disableImgFrame();
}

/*******************************************************\
|                      Start here!                      |
\*******************************************************/
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