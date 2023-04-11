let numberOfRounds = 1
let numberOfItems = 0
for (const value of Object.values(questions)) {
    value[2] = numberOfRounds
    numberOfItems++
}
let random
let query = document.getElementById("query")
let radios = document.getElementsByTagName('input')
let totalScore

let reload = () => {
    fetch('', {
        'Cache-Control': 'no-cache'
    })
        .then(() => location.reload())
        .catch((error) => console.warn(error))
}

let randomQuestion = () => {
    random = (Math.floor(Math.random() * numberOfItems + 1))
    if (questions[random][2] > 0) {
        query.innerHTML = questions[random][0] + " (" + questions[random][2] + ")"
    } else {
        if (totalScoreFunc() > 0) {
            randomQuestion()
        } else {
            query.innerHTML = "Vége!"//alert("Vége!")
            //reload()
        }
    }
}
randomQuestion()

let totalScoreFunc = () => {
    totalScore = 0
    for (const value of Object.values(questions)) {
        totalScore += value[2]
    }
    return totalScore
}

let sect = document.getElementById("sect")
let br = document.createElement("br")

let column1 = document.getElementsByClassName("column1")[0]
let column2 = document.getElementsByClassName("column2")[0]
let span
let half = Math.round(numberOfItems / 2)
for (let i = 0; i < half; i++) {
    column1.innerHTML += "<span id='" + (i + 1) + "'></span>"
        + " " + questions[i + 1][0] + "</br>"
    span = document.getElementById(i + 1)
    span.innerHTML = questions[i + 1][2]
}
for (let i = half; i < numberOfItems; i++) {
    column2.innerHTML += "<span id='" + (i + 1) + "'></span>"
        + " " + questions[i + 1][0] + "</br>"
    span = document.getElementById(i + 1)
    span.innerHTML = questions[i + 1][2]
}

let selectedAnsver
let insertForm = (sect, title, name, min, max) => {
    sect.innerHTML += '<p><b>' + title + '</b></p>'
    let form = document.createElement('form')
    form.setAttribute('id', name)
    for (let i = min; i <= max; i++) {
        let input = document.createElement('input')
        form.append(input)
        input.type = 'radio'
        input.name = name
        input.value = i
        let label = document.createElement('label')
        label.textContent = ' ' + hunting_seasons[i] + ' '
        form.append(label)
        form.appendChild(br.cloneNode())
    }
    sect.append(form)

    form.addEventListener('change', (event) => {
        span = document.getElementById(random)
        if (questions[random][1] == event.target.value) {
            questions[random][2] = 0//questions[random][2] - 1
            let result = questions[random][2]
            span.innerText = result
            query.style.color = "green"
            span.style.color = "green"
            query.innerHTML = questions[random][0] + " (" + questions[random][2] + ")"
            radios[event.target.value - 1].disabled = true
        } else {
            query.style.color = "red"
            span.style.color = "red"
            questions[random][2] = 0//numberOfRounds
            span.innerHTML = questions[random][2]
            query.innerHTML = questions[random][0] + " (" + questions[random][2] + ")"
            radios[event.target.value - 1].disabled = true
        }
        setTimeout(() => {
            query.style.color = "blue"
            radios[event.target.value - 1].checked = false
            radios[event.target.value - 1].disabled = false
            if (totalScoreFunc() > 0) {
                randomQuestion()
            } else {
                query.innerHTML = "Vége!"//alert("vége!")
                //reload()
                for(const radio of radios) {
                    radio.disabled = true
                }
            }
        }, "1000")
    })
}

insertForm(
    sect,
    'válaszok:',
    'answers',
    1,
    14
)
