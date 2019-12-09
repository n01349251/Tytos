//Section 1 ------------  declare an array of images
var myImagesArray = ["images/gw1.jpg", "images/gw2.jpg", "images/gw4.jpg", "images/gw5.jpg", "images/gw6.jpg", "images/gw7.jpg", "images/gw9.jpg"];
// Section 2 -------------------------------------------------
//make an automatic slide to display the images
var ImageNumber = 0;
var difference = myImagesArray.length - 1;
var delay = 2000; //milliseconds    1sec=1000milliseconds
setInterval("ChangeImages(-1)", delay);
//-1 to show the slide backwards
//1 to show the slide forwards
function ChangeImages(direction) {//begin function

    ImageNumber = ImageNumber + direction;
    if (ImageNumber > difference) {//begin inner first if
        ImageNumber = 0;
    }//end inner first if
    if (ImageNumber < 0) {//begin inner second if
        ImageNumber = difference;
    }//end inner second if
  
    document.getElementById('slideshow').src=myImagesArray[ImageNumber];

}//end function

var myImagesArray1 = ["images/global1.jpg", "images/global2.jpg", "images/global3.jpg", "images/global4.jpg"];
// Section 2 -------------------------------------------------
//make an automatic slide to display the images
var ImageNumber1 = 0;
var difference1 = myImagesArray1.length - 1;
var delay1 = 2000; //milliseconds    1sec=1000milliseconds
setInterval("ChangeImages1(-1)", delay1);
//-1 to show the slide backwards
//1 to show the slide forwards
function ChangeImages1(direction1) {//begin function

    ImageNumber1 = ImageNumber1 + direction1;
    if (ImageNumber1 > difference1) {//begin inner first if
        ImageNumber1 = 0;
    }//end inner first if
    if (ImageNumber1 < 0) {//begin inner second if
        ImageNumber1 = difference1;
    }//end inner second if
   
    document.getElementById('mainslideshow').src = myImagesArray1[ImageNumber1];

}//end function