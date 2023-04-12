let animals = () => {
    let column1 = document.getElementsByClassName("column1")[0]
    let column2 = document.getElementsByClassName("column2")[0]
    let span = document.createElement("span")
    let half = Math.round(questions.length / 2)
    for (let i = 0; i < half; i++) {
        column1.innerHTML += "<span id=" + i + "></span></br>"
        span = document.getElementById(i)
        span.innerHTML = questions[i][0]
    }
    for (let i = half; i < questions.length; i++) {
        column2.innerHTML += "<span id=" + i + "></span></br>"
        span = document.getElementById(i)
        span.innerHTML = questions[i][0]
    }
}
animals()

let sect = document.getElementById("sect")
let form = document.createElement('form')
let br = document.createElement("br")
let insertForm = (sect, title, name, min, max) => {
    sect.innerHTML += '<p><b>' + title + '</b></p>'
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
}
insertForm(
    sect,
    'válaszok:',
    'answers',
    0,
    13
)