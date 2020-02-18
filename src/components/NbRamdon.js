function NbRandom(min , max) {
    var nb = min + (max - min + 1)*Math.Random();
    return Math.floor(nb);
}

var nbRandom = NbRandom(0, 100);
alert(nbRandom);