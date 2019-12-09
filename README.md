<!--Project-->
<!--Title: Environmental Issues-->
# Environmental Issues
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
