function generateNumber() {
    const minInput = document.querySelector(".input-min");
    const maxInput = document.querySelector(".input-max");

    const min = Math.ceil(Number(minInput.value));
    const max = Math.floor(Number(maxInput.value));

    if (isNaN(min) || isNaN(max)) {
        alert("Por favor, preencha ambos os campos com números válidos.");
        return;
    }

    if (min >= max) {
        alert("O valor mínimo tem que ser MENOR que o valor máximo.");
        return;
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(`Número sorteado: ${result}`);
}
