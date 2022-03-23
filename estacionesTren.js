// Un tren va desde terminal hasta terminal con algunas estaciones intermedias, y la empresa necesita saber cuantos pasajeros lleva luego de la parada en cada estación.Para ello nos contrataron a nosotros, quienes somos responsables de generar un programa que lo resuelva.

// Para ayudar a la empresa escribamos una función reporteDePasajeros(), la cual cuando reciba la cantidad de estaciones que avanzó el tren nos devuelva un reporte de la cantidad de cada una de las estaciones y la cantidad de pasajeros que lleva el tren.La empresa nos provee los siguientes datos:

// El tren sale de la estación terminal siempre con 200 pasajeros.
// En cada estación el tren sube 50 pasajeros y se bajan 30.
// En la estación Florida(la estación número 5), como es una estación central es la única donde bajan 80 personas y suben 120.

//SOLUCIÓN

function reporteDePasajeros(estaciones) {
    let resultado = [];
    for (let i = 0; i <= estaciones; i++) {
        i >= 5 ? (pasajeros = 200 + i * 20 + 20) : (pasajeros = 200 + i * 20)
        resultado.push("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren");
    }
    return resultado;
}
reporteDePasajeros(0)
reporteDePasajeros(3)
reporteDePasajeros(5)