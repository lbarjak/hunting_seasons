let animals = () => {
    let column1 = document.getElementsByClassName("column1")[0]
    let column2 = document.getElementsByClassName("column2")[0]

    let span
    let br
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