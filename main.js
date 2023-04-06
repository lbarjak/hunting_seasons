let random = (Math.floor(Math.random() * 46))
let query = document.getElementById("query").innerHTML = questions[random][0]
let randomQuestion = () => {
    random = (Math.floor(Math.random() * 46))
    query = document.getElementById("query").innerHTML = questions[random][0]
}

let sect = document.getElementById("sect")
let br = document.createElement("br")
let selectedAnsver
let insertForm = (sect, title, name, min, max) => {
    sect.innerHTML += '<p><b>' + title + '</b></p>'
    let form = document.createElement('form')
    form.setAttribute('id', name)
    for (let i = min; i < max; i++) {
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
        randomQuestion() 
    })
}

insertForm(
    sect,
    'válaszok:',
    'answers',
    1,
    14
)

let column1 = document.getElementsByClassName("column1")[0]
let column2 = document.getElementsByClassName("column2")[0]

for(i = 0; i < 23; i++) {
    column1.innerHTML += questions[i + 1][2] + " " + (i + 1) + ". " + questions[i + 1][0] + "</br>"
}
for(i = 23; i < 45; i++) {
    column2.innerHTML += questions[i + 1][2] + " " + (i + 1) + ". " + questions[i + 1][0] + "</br>"
}

