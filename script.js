function calcularCertificacion() {
    let vistas = document.getElementById("views").value;
    let ventas = vistas / 1300;
    let resultado = "No califica para certificación.";

    if (ventas >= 500000) {
        resultado = "💎 Disco de Diamante";
    } else if (ventas >= 150000) {
        resultado = "💿💿💿 Triple Platino";
    } else if (ventas >= 100000) {
        resultado = "💿💿 Doble Platino";
    } else if (ventas >= 50000) {
        resultado = "💿 Disco de Platino";
    } else if (ventas >= 10000) {
        resultado = "🏅 Disco de Oro";
    }

    document.getElementById("resultado").innerText = "Certificación: " + resultado;
}
