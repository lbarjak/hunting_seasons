let hunting_seasons = {
    1: "egész évben",
    2: "szeptember 1 - január 31",
    3: "július 1 - február vége",
    4: "vadászati idény nélkül",
    5: "október 1 - február vége",
    6: "augusztus 15 - január 31",
    7: "szeptember 1 - április 30",
    8: "október 1 - január 31",
    9: "szeptember 1 - október 31",
    10: "október 1 - december 31",
    11: "október 1 - november 30",
    12: "április 15 - szeptember 30",
    13: "Szeptember 1 - február vége",
    14: "május 1 - február vége"
}

let questions = {
    "gím tehén": 1,
    "szajko": 3,
    "erdei szalonka": 4,
    "Vaddisznó": 1,
    "őzsuta": 5,
    "vörös fogoly": 1,
    "dámbika": 5,
    "róka": 1,
    "tőkés réce": 6,
    "muflon jerke": 2,
    "gímborjú": 7,
    "mosómedve": 1,
    "Nyári lúd": 8,
    "dámborjú": 5,
    "gím golyóérett": 9,
    "balkáni gerle": 6,
    "muflonkos": 1,
    "nyestkutya": 1,
    "vetési lúd": 8,
    "fácán": 5,
    "dámtehén": 8,
    "szikaszarvas": 1,
    "fogoly": 10,
    "mezei nyúl": 10,
    "borz": 3,
    "szárcsa": 13,
    "pezsmapocok": 1,
    "dám golyóérett": 11,
    "őzbak": 12,
    "örvös galamb": 6,
    "nagy lilik": 8,
    "házi görény": 3,
    "dám ünő": 8,
    "kanadai lúd": 8,
    "dolmányos varjú": 3,
    "muflon juh": 2,
    "szarka": 3,
    "gímbika": 2,
    "nílusi lúd": 8,
    "nyest": 1,
    "muflon bárány": 13,
    "aranysakál": 1,
    "őzgida": 5,
    "gímszarvas ünő": 14,
    "üregi nyúl": 1
}

let question = questions["nyest"]
let query = document.getElementById("query").innerHTML = question

for (const [key, value] of Object.entries(questions)) {
    console.log(`${key}: ${value}`);
}
