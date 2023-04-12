let query = document.getElementById("query")
let radios = document.getElementsByTagName('input')
let totalScore = questions.length
let random

let randomQuestion = () => {
    random = (Math.floor(Math.random() * questions.length))
    if (questions[random][2] > 0) {
        query.innerHTML = questions[random][0] + " (" + questions[random][1] + ")"
        totalScore--
    } else {
        if (totalScore > 0) {
            randomQuestion()
        } else {
            query.innerHTML = "Vége!"
        }
    }
}
randomQuestion()

form.addEventListener('change', (event) => {
    let span = document.getElementById(random)

    let setAnswer = (color) => {
        questions[random][2] = 0
        span.innerText = 0
        query.style.color = color
        span.style.color = color
        span.nextElementSibling.style.color = color
        query.innerHTML = questions[random][0]
        for (const radio of radios) {
            radio.disabled = true
        }
    }

    if (questions[random][1] == hunting_seasons[event.target.value]) {
        setAnswer("green")
    } else {
        setAnswer("red")
    }

    setTimeout(() => {
        query.style.color = "blue"
        radios[event.target.value].checked = false
        for (const radio of radios) {
            radio.disabled = false
        }
        if (totalScore > 0) {
            randomQuestion()
        } else {
            query.innerHTML = "Vége!"
            for (const radio of radios) {
                radio.disabled = true
            }
        }
    }, "1000")
})