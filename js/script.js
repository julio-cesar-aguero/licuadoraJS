console.log("LICUADORAJS 1.0");
let estadoLicuadora = "apagada";
let licuadoraButton = document.getElementById("blender");
let sonidoLicuadora = document.getElementById("blender-sound");
let botonLicuadora = document.getElementById("blender-button-sound");

const licuadora = () =>{
    if(estadoLicuadora =="apagada"){
        estadoLicuadora = "encendido";
        licuar();
        licuadoraButton.classList.add("blender--active")
        console.log("Encendido");
        
    }else{
        estadoLicuadora = "apagada"
        licuar();
        licuadoraButton.classList.remove("blender--active")
        console.log("Apagado");
        
    }
}

const licuar = () =>{
    if (sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}