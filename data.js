let questions = [
    ["gím tehén", "szeptember 1 - január 31", 1],
    ["szajkó", "július 1 - február vége", 1],
    ["erdei szalonka", "vadászati idény nélkül", 1],
    ["vaddisznó", "egész évben", 1],
    ["őzsuta", "október 1 - február vége", 1],
    ["vörös fogoly", "egész évben", 1],
    ["dámbika", "október 1 - február vége", 1],
    ["róka", "egész évben", 1],
    ["tőkés réce", "augusztus 15 - január 31", 1],
    ["muflon jerke", "szeptember 1 - január 31", 1],
    ["gímborjú", "szeptember 1 - április 30", 1],
    ["mosómedve", "egész évben", 1],
    ["nyári lúd", "október 1 - január 31", 1],
    ["dámborjú", "október 1 - február vége", 1],
    ["gím golyóérett", "szeptember 1 - október 31", 1],
    ["balkáni gerle", "augusztus 15 - január 31", 1],
    ["muflonkos", "egész évben", 1],
    ["nyestkutya", "egész évben", 1],
    ["vetési lúd", "október 1 - január 31", 1],
    ["fácán", "október 1 - február vége", 1],
    ["dámtehén", "október 1 - január 31", 1],
    ["szikaszarvas", "egész évben", 1],
    ["fogoly", "október 1 - december 31", 1],
    ["mezei nyúl", "október 1 - december 31", 1],
    ["borz", "július 1 - február vége", 1],
    ["szárcsa", "szeptember 1 - február vége", 1],
    ["pézsmapocok", "egész évben", 1],
    ["dám golyóérett", "október 1 - november 30", 1],
    ["őzbak", "április 15 - szeptember 30", 1],
    ["örvös galamb", "augusztus 15 - január 31", 1],
    ["nagy lilik", "október 1 - január 31", 1],
    ["házi görény", "július 1 - február vége", 1],
    ["dám ünő", "október 1 - január 31", 1],
    ["kanadai lúd", "október 1 - január 31", 1],
    ["dolmányos varjú", "július 1 - február vége", 1],
    ["muflon juh", "szeptember 1 - január 31", 1],
    ["szarka", "július 1 - február vége", 1],
    ["gímbika", "szeptember 1 - január 31", 1],
    ["nílusi lúd", "október 1 - január 31", 1],
    ["nyest", "egész évben", 1],
    ["muflon bárány", "szeptember 1 - február vége", 1],
    ["aranysakál", "egész évben", 1],
    ["őzgida", "október 1 - február vége", 1],
    ["gímszarvas ünő", "május 1 - február vége", 1],
    ["üregi nyúl", "egész évben", 1]
]
let answers = () => {
    let answers = []
    for (let animal of questions) {
        answers.push(animal[1])
    }
    return [...new Set(answers)]
}

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

let hunting_seasons = shuffleArray(answers())