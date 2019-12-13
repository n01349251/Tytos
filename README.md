<!--Project-->
<!--Title: Environmental Issues-->
# Environmental Issues

https://n01349251.github.io/Tytos

_______________________________________________________________________________________________________

### Created By
* Karan Barot
* Vidhi Modh
* Anupriya Singh
* Zhanghzhi Wang
* Receb Kursun

## Karan Barot
### HTML Pages:
* _Layout.html
* Home.html
* Survey.html
* Ozonelayer.html
### Styles:
* layout.css
### JavaScript Files
* Ideas.js
* Openpage.js
* Survey.js
* ScrollToTop.js
* jquery.js
* jquery-asPieProgress.js
* plugin.js
* aos.js
#### openpage.js
When the mouse hovers on type of pollution cards it scales the card and when the card is clicked it leads to the perticular pollution page
#### Opens a page
Using window.location function
```javascript
$(function() {
    $("#wp").click(function() {
        window.location = "./water_pollution.html";
    });
```
#### Scales the card
Uses the hover toggle function of JQuery
```javascript
$(".col-sm-2").hover(function() {
            $(this).addClass('scale');
        },
        function() {
            $(this).removeClass('scale');
        });
```
#### scrollToTop.js
Scrolls to top when the button is clicked
```javascript
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
```
#### survey.js
Animates the multi page form using JQuery and also loads Progress-bar with the form progress
```javascript
$(function() {
    $('.page-2').hide();
    $('.page-3').hide();
    $('#s1').hide();
    $('#next-btn2').hide();
    $('.progressbar').html("0%");
    /*$('.result-container').hide();*/
    $('#result').hide();
    $('#next-btn1').click(function() {
        $('.page-1').hide();
        $('.page-2').show();
        $('#next-btn1').hide();
        $('#next-btn2').show();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        $('.progressbar').css("width", "33.33%");
        $('.progressbar').html("33.33%");
    });
    $('#next-btn2').click(function() {
        $('.page-1').hide();
        $('.page-2').hide();
        $('.page-3').show();
        $('#next-btn1').hide();
        $('#next-btn2').hide();
        $('#s1').show();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        $('.progressbar').css("width", "66.66%");
        $('.progressbar').html("66.66%");
    });
    $('#s1').click(function() {
        $(".result-container").show();
        $('.page-3').hide();
        $('#s1').hide();
        $('.survey-container').hide();
        $('.progressbar').css("width", "100%");
        $('.progressbar').html("100%");

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        $('#result').show();

    });

    $("#stroke").css({ "stroke-dasharray": 60 });

});
```
![Image of Yaktocat](https://github.com/n01349251/Tytos/tree/master/images/ocean1.jpg)

#### plugin.js,jquery.js,jquery-asPieProgress.js
These are the external jquery plugins which are used to show the result as pie chart which animates the chart on submission of the survey form
#### aos.js
AOS libraries we have used to animate div on scroll. so just to change animating effect for mobile devices we are getting device width using jquery and removing html attributes using removeAttr() method and adding new value for data-aos attribute using attr() method.
```javascript
$(document).ready(function() {

    if ($(document).width() < 768) {
        $('.card3').removeAttr("data-aos", "flip-right");
        $('.card3').attr("data-aos", "fade-right");

    } else if ($(document).width() > 768) {
        $('.card3').removeAttr("data-aos", "fade-right");
        $('.card3').attr("data-aos", "flip-right");
    }

});
```

## Vidhi Modh
### HTML Pages
* usersuggestions.html
* signIn.html
* shareIdeas.html
* water_pollution.html
* water_pollution_solution.html

### CSS 
* water.css
* layout.css
* Validate.css

### JavaScript
* local.js
* validate.js
* scrollToTop.js
* slideShow.js

## Json
* people.json

<!-- George -->
## Zhangzhi Wang(George)
### project phase one
#### documents:
* air-pollution-registration.html
* air-reg.css
* air-pollution-registration.js
#### description：
The purpose of this webpage is to encourage users to register as members of this website. The left half is the description of the page. The right half is the      registration form.
#### javascript: 
* Verify the form's input with regular expression.
* The submit button can be clicked only after the validation has passed.
* Add one to the number of members at random intervals.

### project phase two
#### documents:
* air-pollution-causes.html
* air-causes.css
* air-pollution-causes.js
#### description：
The purpose of this page is to explain the main causes of air pollution. In the side bar, it also shows recent environmental related events and articles that users may be interested in.
#### javascript:
* Generate web page dynamically via javascript dom manipulation.
* Show more and show less of articles.

### project phase three
#### documents:
* air-pollution-main.html
* air-main.css
* air-pollution-main.js
#### description：
The main purpose of this page is to show general information about air pollution.
#### javascript:
* Scroll show effect
* Request json data through ajax
* Read and write data in local storage
* Dynamically generate web pages through jquery

#  Anupriya Singh
### Project phase 1
#### Documents:
* global-warming-Causes.html
* gwcauses.css
* script.js
* slideshow_global.js
* causes.json
* causes1.json

#### Description：
The purpose of this page is to explain the main causes of Global Warming.
#### Javascript: 
In this page,I have used javascript on scroll to top button. It appears when user scroll down the screen.When user clicks on that button,it takes the user to top of the page.Moreover,I created a read more button.When user clicks on that button then it will show/hide the contents inside that element.

### Project phase 2
#### Documents:
* global-warming-Effects.html
* effects.css
* slideshow_global.js

### Project Phase 3
#### Documents:
* form.html
* form.css
* form.js

#### Description：
The page is a review page which consists of a form in which i have put vaidation using javascript.
#### Javascript:
* Scroll to top button
* Verify the form's input with regular expression.
* The submit button can be clicked only after the validation has passed.
