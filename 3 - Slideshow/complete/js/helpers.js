const imgEl = document.getElementById('image');

/**
 * Sets the image in the webpage
 * @param {string} src - A local path to the image. E.g. "assets/my-image.png"
 */
function setImage(src) {
    imgEl.style.backgroundImage = `url(${src})`;
}

function showImageFrame() {
    imgEl.classList.add('frame');
}

function hideImageFrame() {
    imgEl.classList.remove('frame');
}

export { setImage, showImageFrame, hideImageFrame };