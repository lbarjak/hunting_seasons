let random = (Math.floor(Math.random() * 46))
let query = document.getElementById("query").innerHTML = questions[random][0]

let sect = document.getElementById("sect")
let br = document.createElement("br")
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
let names = []

for (const [key, value] of Object.entries(questions)) {
    names.push(value[0])
}
for(i = 0; i < 23; i++) {
    column1.innerHTML += (i + 1) + ". " + names[i] + "</br>"
}
for(i = 23; i < names.length; i++) {
    column2.innerHTML += (i + 1) + ". " + names[i] + "</br>"
}

