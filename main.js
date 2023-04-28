let br
let span
let column1 = document.getElementsByClassName("column1")[0]
let column2 = document.getElementsByClassName("column2")[0]

let column = (column, i) => {
    span = document.createElement("span")
    column.append(span)
    span.setAttribute("id", i)
    br = document.createElement("br")
    column.append(br)
    span.innerHTML = questions[i][0]
}

let half = Math.round(questions.length / 2)
for (let i = 0; i < half; i++) {
    column(column1, i)
}
for (let i = half; i < questions.length; i++) {
    column(column2, i)
}

let query = document.getElementById("query")
let random
let totalScore = questions.length
let randomQuestion = () => {
    random = (Math.floor(Math.random() * questions.length))
    if (questions[random][2] > 0) {
        query.innerHTML = questions[random][0]// + " (" + questions[random][1] + ")"
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

let switchEvent = on => {
    if (on) {
        div.addEventListener('click', handler)
    } else {
        div.removeEventListener('click', handler)
    }
}

let handler = (e) => {
    let index = e.target.id - 100

    let span = document.getElementById(random)

    let setAnswer = (color) => {
        questions[random][2] = 0
        span.innerText = questions[random][0]
        query.style.color = color
        span.style.color = color
        query.innerHTML = questions[random][0]
        switchEvent(false)
    }
    if (hunting_seasons[index] != undefined) {
        if (questions[random][1] == hunting_seasons[index]) {
            setAnswer("green")
        } else {
            setAnswer("red")
        }

        setTimeout(() => {
            query.style.color = "blue"
            switchEvent(true)
            if (totalScore > 0) {
                randomQuestion()
            } else {
                query.innerHTML = "Vége!"
                switchEvent(false)
            }
        }, "1000")
    }
}

let sect = document.getElementById("sect")
let div = document.createElement('div')
div.setAttribute('id', 'answers')
switchEvent(true)
for (let i = 0; i <= hunting_seasons.length - 1; i++) {
    span = document.createElement("span")
    span.setAttribute('id', 100 + i)
    span.textContent = hunting_seasons[i]
    div.append(span)
    div.appendChild(br.cloneNode())
}
sect.append(div)
