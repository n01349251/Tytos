//load header
$("#header").load("header.html")
//contents of plastic pollution intro
const causes = [
    {
        heading: ,
        content: [
            
        ],
        imageSrc: "",
        imageAlt: ""
    },
    {
        heading: "",
        content: [
            "",
            ""
        ],
        imageSrc: "",
        imageAlt: ""
    },
    {
        heading: "",
        content: [
            "",
            ""
        ],
        imageSrc: "",
        imageAlt: ""
    },
    {
        heading: "",
        content: [
            "",
            ""
        ],
        imageSrc: "",
        imageAlt: ""
    },
]

const main = document.querySelector("main")

//for each cause, create content dynamically
causes.forEach(cause => {

    //create elements
    const section = document.createElement("section")
    const image = document.createElement("img")
    const heading = document.createElement("h2")
    const container = document.createElement("div")
    const button = document.createElement("a")
    let contents =[]
    //for each element in content array,create a p tag
    cause.content.forEach((element,index) => {
        contents[index]=document.createElement("p")
        contents[index].textContent = cause.content[index]
    });

    //append elements
    main.appendChild(section)
    section.appendChild(image)
    section.appendChild(container)
    container.appendChild(heading)
    //append each p tag
    contents.forEach(element => {
        container.appendChild(element)
    });
    section.appendChild(button)

    //change attributes
    image.src = cause.imageSrc
    image.alt = cause.imageSrc
    heading.textContent = cause.heading
    container.classList.add("show-less")
    button.textContent = "Show More"
    button.style.color = "white"
    //event for click button
    button.addEventListener("click", () => {
        container.classList.toggle("show-less")
        if (button.textContent==="Show More") {
            button.textContent = "Show Less"
        }
        else if (button.textContent==="Show Less") {
            button.textContent = "Show More"
        }
    })
});