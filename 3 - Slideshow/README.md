# Slideshow
 
## THE OBJECTIVE
You have a starter project containing a few helper functions, an `array`, and two `event handlers`. The event handlers are called when a user presses the "next" and "back" buttons. The goal is to give the user the ability to look though an array of photos!

You will accomplish this task by meeting the following requirements and taking into account the following considerations:
* Add some more images, of your choice to the `assets` folder in your project.
* Add the `path` to those images in the `images` array.
* When a user presses the next button, show them the next image in the array.
* When a user presses the back button, show them the previous image in the array.
* `if` the index is greater than the top of the array's "bounds", set the index back to 0.
* `if` the index is less than the bottom of the array's "bounds", set the index to the top index!
* `if` the image being shown is the first image then `showImageFrame()`, otherwise `hideImageFrame()`
-----
## Optionally
So you successfully did the above? How about setting it up to automatically `iterate` through the image array? DO IT! Use the `setInterval(myFunctionToCall, 3000)` function to do this. Remember, `setInterval` accepts the time in milliseconds, so 3000 equates to 3 seconds!