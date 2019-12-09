//load header
$("#header").load("header.html")
//contents of causes
const causes = [
    {
        heading: "Majority of air pollution are caused by power generation",
        content: [
            "The electric power sector accounted for 32% of U.S. total greenhouse gas emissions in 2012. Greenhouse gas emissions from electricity have increased by about 11% since 1990 as electricity demand has grown and fossil fuels have remained the dominant source for generation.", 
            "Fossil fuel-fired power plants are the largest source of U.S. CO2 emissions. To generate electricity, fossil fuel-fired power plants use natural gas, petroleum, coal or any form of solid, liquid or gaseous fuel derived from such materials.",
            "It releases several airborne toxins and pollutants when coal is burned. They include mercury, lead, dioxide of sulphur, oxides of nitrogen, particulates, and other heavy metals. Health effects can vary from problems with asthma and breathing to brain damage, heart problems, obesity, neurological disorders, and premature death."
        ],
        imageSrc: "images/architecture-buildings-factory-247763.jpg",
        imageAlt: "factory"
    },
    {
        heading: "Transportation causes 25% of air pollution",
        content: [
            "Cars, aircraft, and fossil-fuel-powered buses contribute significantly to air pollution. Transportation currently emits more than half of our air's nitrogen oxides and is a major source of US global warming pollution. Studies have linked vehicle exhaust contaminants to adverse effects on almost every organ system in the body. While this air pollution poses significant risks to human health and the environment, we can significantly reduce emissions from our cars and trucks and help transform transportation through clean vehicle and fuel technologies.",
            "Vehicle exhaust emissions can have more effect than just your lungs. Nonetheless, at every stage of life, tailpipe emissions pose health risks and may even cause premature death. But the impacts of climate change, driven by emissions from global warming, also affect the health of people and the well-being of whole communities. Global warming leads to heat waves that are more frequent and intense, particularly risky."
        ],
        imageSrc: "images/architecture-auto-automobiles-210182.jpg",
        imageAlt: "traffic"
    },
    {
        heading: "Open waste burning releases toxic gases",
        content: [
            "An important source of air pollution is incineration of plastic waste in an open field. The Municipal Solid Waste, which includes about 12 percent of plastics, is most often burned, releasing toxic gases such as dioxins, furans, mercury and polychlorinated biphenyls into the environment. Further, Poly Vinyl Chloride burning releases harmful halogens and pollutes soil, with the impact of climate change.",
            "Smoke and soot can travel long distances. Odors can be bothersome to people. Both odors and smoke residue can enter houses or can impact anything outside of houses, like cars or hanging laundry. The gases released by open burning can also corrode metal siding and damage paint on buildings."
        ],
        imageSrc: "images/disposal-dump-garbage-128421.jpg",
        imageAlt: "garbage"
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