let random = (Math.floor(Math.random() * 46))
let query = document.getElementById("query")
query.innerHTML = questions[random][0]
let randomQuestion = () => {
    random = (Math.floor(Math.random() * 46))
    query.innerHTML = questions[random][0]
}

let sect = document.getElementById("sect")
let br = document.createElement("br")

let column1 = document.getElementsByClassName("column1")[0]
let column2 = document.getElementsByClassName("column2")[0]
let span
for (let i = 0; i < 23; i++) {
    column1.innerHTML += "<span id='" + (i + 1) + "'></span>"
        + " " + questions[i + 1][0] + "</br>"
    span = document.getElementById(i + 1)
    span.innerHTML = questions[i + 1][2]
}
for (let i = 23; i < 45; i++) {
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
        if (questions[random][1] == event.target.value) {
            questions[random][2] = questions[random][2] - 1
            let result = questions[random][2]
            console.log(result)
            span = document.getElementById(random)
            span.innerText = result
            query.style.color = "green"
        } else {
            query.style.color = "red"
            questions[random][2] = 10
            span.innerHTML = 10
        }
        setTimeout(() => {
            query.style.color = "blue"
            randomQuestion()
          }, "2000")
    })
}

insertForm(
    sect,
    'válaszok:',
    'answers',
    1,
    14
)
