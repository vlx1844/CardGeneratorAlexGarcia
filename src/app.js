const tipos = ['heart', 'diamond', 'spade', 'club'];
const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function generarCarta() {
    let indicePalo = Math.floor(Math.random() * tipos.length);
    let indiceValor = Math.floor(Math.random() * valores.length);

    let paloElegido = tipos[indicePalo];
    let valorElegido = valores[indiceValor];

    // Mauro, cuando puse los iconos ♦ ♥ ♠ ♣ en la carta me salen simbolos raros y google me sugiere traducirlo del rumano xD
    // asi que mire en el MDN y encontre la movida de los codigos unicode, busque codgos unicode para barajas de cartas y de ahi saque esto:

    let dibujo = "";
      if (paloElegido === 'heart') dibujo = "\u2665";
        else if (paloElegido === 'diamond') dibujo = "\u2666";
          else if (paloElegido === 'spade') dibujo = "\u2660";
            else dibujo = "\u2663";

    const contenedor = document.getElementById('cardContainer');
    const zonaNumero = document.querySelector('.number');
    const zonaArriba = document.querySelector('.top-suit');
    const zonaAbajo = document.querySelector('.bottom-suit');

    contenedor.className = "card " + paloElegido;
    zonaNumero.innerHTML = valorElegido;
    zonaArriba.innerHTML = dibujo;
    zonaAbajo.innerHTML = dibujo;

    const anchoInput = document.getElementById('widthInput').value;
    const altoInput = document.getElementById('heightInput').value;

    if (anchoInput) contenedor.style.width = anchoInput + "px";
    if (altoInput) contenedor.style.height = altoInput + "px";
}

setInterval(generarCarta, 10000);