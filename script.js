//Se declaran las constantes que se utilizaran para erecibir el texto y mostrar el texto
const textEntrada = document.querySelector(".texto_entrada");
const mensajeSalida = document.querySelector(".texto_salida");


//Creamos la funcion para mandar el texto encriptado al text area de salida
function botonEncriptar(){
    const textoEncriptado = encriptar(textEntrada.value)
    mensajeSalida.value = textoEncriptado;
    textEntrada.value = "";
    document.getElementById("btn").style.display = "show";
    document.getElementById("btn").style.display = "inherit";
}

//Creamos la funcion para mandar el texto desencriptado al text area de salida
function botonDesencriptar(){
    const textoDesencriptado = desencriptar(textEntrada.value)
    mensajeSalida.value = textoDesencriptado;
}


//Creamos la funcion para encriptar el texto, remplazando las vocales con cada una de sus keys
function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a", "ai"],["o","ober"],["u","ufat"]];
    //convertimos el string en minusculas
    stringEncriptado = stringEncriptado.toLowerCase()
    //eliminamos los caracteres que no nos interesan y que podrian crear un error
    stringEncriptado = stringEncriptado
                                        .normalize('NFD')
                                        .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
                                        .normalize();

    for(let i = 0; i <matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])

        }

    }
    return stringEncriptado
}

//Creamo la funcion para desencriptar, invirtiendo la logia que ya teniamos anteriormente, sustituimos las keys por las vocales
function desencriptar(stringDescencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a", "ai"],["o","ober"],["u","ufat"]];
    stringDescencriptado = stringDescencriptado.toLowerCase()

    for(let i = 0; i <matrizCodigo.length; i++){
        if(stringDescencriptado.includes(matrizCodigo[i][0])){
            stringDescencriptado = stringDescencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDescencriptado

}


//copiamos el contenido del text area de salida (el reultado) en el portapapeles
const $content = document.getElementById('textArea'),
      $btn = document.getElementById('btn'),
      $title = document.getElementById('title');

$btn.addEventListener('click', e => {
    $content.select();
    document.execCommand('copy');

    $title.innerHTML = '📗 Copiado!!!'
})

/*function limpiarSalida(){
    mensajeSalida.value = ""
}*/
