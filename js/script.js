console.log("LICUADORAJS 1.0");
let estadoLicuadora = "apagada";
let licuadoraButton = document.getElementById("blender");

const licuadora = () =>{
    if(estadoLicuadora =="apagada"){
        estadoLicuadora = "encendido";
        licuadoraButton.classList.add("blender--active")
        console.log("Encendido");
    }else{
        estadoLicuadora = "apagada"
        licuadoraButton.classList.remove("blender--active")
        console.log("Apagado");
    }
}

