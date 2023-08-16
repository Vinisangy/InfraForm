




function showTipoInfra() {
    var cloud = document.getElementById("cloud");
    var camposOpcao1 = document.getElementById("camposOpcao1");

    if (cloud.checked) {
        camposOpcao1.style.display = "block";
    } else {
        camposOpcao1.style.display = "none";
    }
}
