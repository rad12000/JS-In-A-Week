/**
 * Sets the image in the webpage
 * @param {string} src - A local path to the image. E.g. "assets/my-image.png"
 */
 function setImage(src) {
    setImageSrc(src);
}

function showImageFrame() {
    enableImgFrame();
}

function hideImageFrame() {
    disableImgFrame();
}

const images = [
    'assets/start-photo.jpg',
    'assets/mordor.jpeg',
    'assets/odd-sunset.webp',
    'assets/so-pretty.jpeg',
    'assets/trees-and-lake.jpeg',
    'assets/water-bow.jpeg'
];

setImage(images[0]);
showImageFrame();

const maxIndex = images.length - 1;
let imageIndex = 0;

function checkFrame() {
    if (imageIndex === 0) {
        showImageFrame();
    } else {
        hideImageFrame();
    }
}

/**
 * Function called when the Next button is clicked
 */
function onNextClick() {
    imageIndex++;
    if (imageIndex > maxIndex) {
        imageIndex = 0;
    }

    checkFrame();

    setImage(images[imageIndex]);
}

/**
 * Function called when the Back button is clicked
 */
 function onBackClick() {
    imageIndex--;
    if (imageIndex < 0) {
        imageIndex = maxIndex;
    }

    checkFrame();

    setImage(images[imageIndex]);
}

/*
function autoScroll() {
    imageIndex++;
    if (imageIndex > maxIndex) {
        imageIndex = 0;
    }
    setImage(images[imageIndex]);
    checkFrame();
}

setInterval(autoScroll, 3000);
*/