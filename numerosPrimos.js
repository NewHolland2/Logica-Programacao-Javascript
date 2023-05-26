function isPrimos(numero) {
    if (numero === 1 || numero < 1) {
        return false;
    }
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

for (var i = 1; i <= 100; i++) {
    if (isPrimos(i)) {
        console.log(i)
    }
}