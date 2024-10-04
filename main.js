function playSonido(idElementoAudio) {   //Utilizamos un parametro id
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla'); //Referencias, Se asigna la lista de teclas y lo hace como una constante ya que estas nunca cambiaran



for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];   //Trae la informacion del boton que esta siendo pulsado, en este caso se guardara en una contante llamada instrumento

    const idAudio = `#sonido_${instrumento}`;   //se genera una constante que guarda los sonidos por medio de una cadena definida por las comillas invertidas, el dolar define que se agrega un elemento el cual esta entre corchetes a nuestra cadena
    console.log(idAudio);

    tecla.onclick = function () {
        //la funcion definida dentro del while me ayuda a no generar el error que me da llamar a la funcion playSonido con ()
        playSonido(idAudio);
    }; //Se accede a la lista y se agrega la funcionalidad de al dar un click se genere el sonido, esto por medio del llamado de la función playSonido
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            //Se trabaja con 3 igualdades porque verifica no solo el valor sino tambien el tipo de dato, || operador logico 'or'
            tecla.classList.add('activa');   //Me agraga la funcion activa segun la tecla que esta presionada
        }

    } //Cuando la tecla esta presionada
    tecla.onkeyup = function () {
        tecla.classList.remove('activa');
    }
}

//document.querySelector('.tecla_pom').onclick = playSonido;

//La funcion anterior me genera la reproducion del sonido, se agrega # para decir que es un recurso, no como buscando la clase del boton con un . 
