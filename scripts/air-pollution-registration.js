//load header
$("#header").load("header.html")
//patterns for regular expression
const patterns = {
    name: /^[a-zA-Z]{1,30}$/,
    email: /^([\w\.-]+)@([\w-]+)\.([a-z]{2,6})(\.[a-z]{2,6})?$/
}

//variables
const maxInterval = 8;
const inputs = document.querySelectorAll("form input")
const submitBtn = document.querySelector("[type=submit]")
const memberNum = document.querySelector("#memberNum")
const numOfCheck = document.querySelectorAll("[type=text]").length + document.querySelectorAll("[type=email]").length

//initialization
memberNum.textContent = "82869"
addOneMember()

//event of clicking submit button
submitBtn.addEventListener("click", (event) => {
    event.preventDefault()
    alert("Your form has been successfully submitted!")
})

//add keyup event for iuputs
inputs.forEach(input => {
    input.addEventListener("keyup", () => {

        //test each input with a regular expression
        const testResult = patterns[input.name].test(input.value)

        //change input class to valid or not
        if (testResult) {
            input.classList.add("valid")
            input.classList.remove("invalid")
        } else {
            input.classList.add("invalid")
            input.classList.remove("valid")
        }

        //if all valid, enable submit button
        if (document.querySelectorAll(".valid").length === numOfCheck) {
            submitBtn.disabled = false
        }
        else {
            submitBtn.disabled = true
        }
    })
})

//add one to the number of members at random intervals
function addOneMember() {
    let randomInterval = Math.random() * 1000 * maxInterval
    setTimeout(() => {
        memberNum.textContent = parseInt(memberNum.textContent) + 1
        addOneMember()
    }, randomInterval)
}



