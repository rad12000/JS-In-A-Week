import $ from "../../../jquery/src/jquery.js";

/**
 * Moves Ken one full step to the right
 * @returns {Promise<number>} The number of pixels from the right that Ken is.
 */
function stepRightAsync(stepDistance) {
    let resolver;
    const promise = new Promise((resolve, _) => {
        resolver = resolve;
    });

    window.ken.removeClass('reverse')
    window.ken.addClass('walk-right');

    const currentLeft = window.ken.position().left;
    const farthestAllowedRight = getRightBarrier();
    let newLeft = currentLeft + (stepDistance ?? 100);

    if (newLeft > farthestAllowedRight) {
        newLeft = farthestAllowedRight;
    }

    window.ken.css("left", `${newLeft}px`)

    setTimeout(() => { 
        window.ken.removeClass('walk-right');
        resolver(newLeft);
    }, 500);

    return promise;
}

/**
 * Moves Ken one full step to the left
 * @returns {Promise<number>} The number of pixels from the left that Ken is.
 */
function stepLeftAsync(stepDistance) {
    let resolver;
    const promise = new Promise((resolve, _) => {
        resolver = resolve;
    });

    window.ken.addClass('walk reverse');

    const currentLeft = window.ken.position().left;
    const farthestAllowedLeft = getLeftBarrier();
    let newLeft = currentLeft - (stepDistance ?? 100);

    if (newLeft < farthestAllowedLeft) {
        newLeft = farthestAllowedLeft;
    }

    window.ken.css("left", `${newLeft}px`)

    setTimeout(() => { 
        window.ken.removeClass('walk');
        resolver(newLeft);
    }, 500);

    return promise;
}

const frameWidth = 1150;

function getLeftBarrier() {
    const body = $("body");
    const bodyWidth = body.innerWidth();

    return (bodyWidth - frameWidth) / 2;
}

function getRightBarrier() {
    const body = $("body");
    const bodyWidth = body.innerWidth();
    const distanceFromLeftEdge = ((bodyWidth - frameWidth) / 2) - 160;

    return distanceFromLeftEdge + frameWidth;
}

/**
 * The width of the game box/frame
 */
 const playAreaWidth = 1150 - 160;

export { stepLeftAsync, stepRightAsync, getLeftBarrier, playAreaWidth }