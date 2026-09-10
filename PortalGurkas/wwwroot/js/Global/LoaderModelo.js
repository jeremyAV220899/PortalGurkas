function mostrarLoader(texto = "Procesando...") {
    $("#loaderText").text(texto);
    $("#loaderGlobal").fadeIn(200);
}

function ocultarLoader() {
    $("#loaderGlobal").fadeOut(200);
}