//global variables
let paragraphs
let screenPosition = window.innerHeight

//load header
$("#header").load("header.html")

/**
 * Requires webserver, otherwise it will not be displayed properly
 */
//If already stored in local storage, use the data there, or use ajax to get data
if (localStorage.airPollutionInfo) {
    fillSections(JSON.parse(localStorage.airPollutionInfo))
} else {
    //get json data by ajax
    $.ajax({      
        url: "scripts/air-pollution-info.json",
        success: function (result) {    
            //save info to local storage
            localStorage.airPollutionInfo = JSON.stringify(result)
            //fill all sections
            fillSections(result)
        }
    })
}


function fillSections(fillInfo) {

    //get objects from response
    const { definition, causes, impacts, solutions, contactUs } = fillInfo
    //combine into one array for looping through
    const listItems = [causes, impacts, solutions]

    //fill section1 and section3
    fillArticle("#section1", definition)
    fillArticle("#section3", contactUs)

    //fill section2
    $.each(listItems, function (index, element) {
        $("#section2 ul")
            .append($("<li></li>")
                .append($("<div></div>").addClass("content-wrap")
                    .append($("<a></a>").attr("href", element.link)
                        .append($("<h3></h3>").text(element.title)))
                    .append($("<p></p>").text(element.text)
                    )
                )
                .append($("<a></a>").attr("href", element.link)
                    .append($("<img></img>").attr("src", element.imgUrl).attr("alt", element.imgAlt)
                    )
                )
            )
    })

    //get p and add event listener after fill sections
    paragraphs = document.querySelectorAll("p")
    window.addEventListener("scroll", scrollShow)
}

//fill article into a section
function fillArticle(section, article) {
    $(section)
        .append($("<div></div>").addClass("content-wrap")
            .append($("<a></a>").attr("href", article.link)
                .append($("<h2></h2>").text(article.title)))
            .append($("<p></p>").text(article.text).addClass("content-text")))
}

//scrollShow effect
function scrollShow() {
    const paraAndPos = [...paragraphs].map((paragraph) => {
        return {
            paragraph: paragraph,
            introPosition: paragraph.getBoundingClientRect().top
        }
    })

    paraAndPos.forEach(element => {
        if (element.introPosition < screenPosition / 1.2) {
            element.paragraph.classList.add("scroll-show")
        }
    });
}

