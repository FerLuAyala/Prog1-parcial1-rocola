class Rocola {
    constructor() {
        this.discos = [];
        const url = "./rocola.json"

        fetch(url)
            .then(response => response.json())
            .then(discos => {
                for (let disco of discos) {
                    const nuevoDisco = new Disco(
                        disco.nombre,
                        disco.autor,
                        disco.portada,
                        disco.id,

                    );
                    for (let pista of disco.pistas) {
                        nuevoDisco.pistas.push(new Pista(pista.nombre, pista.duracion));
                    }
                    numerosCargado.push(nuevoDisco.id);
                    this.discos.push(nuevoDisco);
                }
            });
    }


    pistaMayorDuracion() {
        //guardamos en la variable la primera pista y su duracion
        let maxPista = this.pistas[0];
      
        for (let pista of this.pistas) {
            //si la duracion de la pista es mas grande que la anterior la guarda
            if (pista.duracion > maxPista.duracion) {
                maxPista = pista;
            }
        }

        return this.convertirADuracionFormateada(maxPista.duracion),
            maxPista.nombre;


    }

    duracionMasAlta(){
        let max=this.discos[0];

        for (let cd of this.discos) {
            if (cd.duracionTotalCd() > max.duracionTotalCd()) {
                max = cd;
            }
        }
        return max;

        }
    

    toHTML() {
        const discoMayorDuracion = this.duracionMasAlta();
        let resp = "";
        resp+= `<div class="container pb-3 mb-2 text-end text-uppercase">
        <h2>Cantidad de Discos en la rocola: ${this.discos.length}</h2>
        <p class="text-warning">Disco de mayor duración: ${discoMayorDuracion.nombre} </p>
        </div>`
        for (let disco of this.discos) {
            resp += `
          
                        <div class="container bg mt-2">
                        
                       
                            
                        <div class="tituloDisco">
                                    <h3><i class="fa-solid fa-music" style="color: #d0062f;"></i> ${disco.nombre}</h3>
                            </div>          
                             <div class="row">

                                    <div class="col-12 col-md-4 p-1">
                                        <img src="${disco.portada}" alt="${disco.nombre} portada">
                                        <div class="texAutor">
                                            <h4>Autor: ${disco.autor}</h4>
                                            <h5>ID: ${disco.id}</h5>

                                            <div class="infoAdicional">
                                            <h5 class="text-center">Info Adicional</h5>
                                            <ul class="list-group list-group-flush p-2">
                                                 <li class="list-group-item">Duracion total disco:<br>${disco.duracionTotalCd()}</li>
                                                 <li class="list-group-item">Cantidad de Pistas:<br> ${disco.cantidadDePistas()}</li>
                                                 <li class="list-group-item">Promedio de duracion:<br> ${disco. promedioDuracionDisco()}</li>
                                                 <li class="list-group-item text-warning">Pista con mayor duracion:<br> ${disco.pistaMayorDuracion()}</li>
                                            </ul>
                                            </div>
                                        </div>
                                    </div>

                                             
                                     <div class="col-12 col-md-8 p-1">

                                        <div class="subTitulo text-center">
                                        <h4>Pistas</h4>
                                        </div>

                            
                                        <table class="table table-dark table-hover">
                                            <thead>
                                                <tr class="h5 border-bottom">
                                                <th>Canción</th>
                                                <th>Duración</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                ${disco.pistas.map(pista => `
                                                    <tr class="p-3">
                                                        <td class="text-uppercase"><i class="fa-solid fa-circle-play" style="color: #d0062f;"></i>  ${pista.nombre}</td>
                                                        <td><i class="fa-solid fa-clock" style="color: #d0062f;"></i>  ${pista.formatearDuracion()}</td>
                                                    </tr>
                                                `).join('')}
                                            </tbody>
                                        </table>
                                    </div>
                

                            </div> 
                        </div>`;
        }
        return resp;
    }

    agregarDisco() {
        const nombre = validarString("Ingrese nombre del disco");
        const autor = validarString("Ingrese nombre del autor / banda");
        const id = validarCodigo("Ingrese Código del disco");
        const portada = validarURL("Ingrese la URL de la imagen");

        const nuevoDisco = new Disco(nombre, autor, portada, id);
        this.discos.push(nuevoDisco);

        // Llamar a la función para agregar las pistas
        this.agregarPistas(nuevoDisco);
        alert(`El disco '${nombre}' fue cargado.`);
    }

    agregarPistas(nuevoDisco) {
        let masPista = true;

        while (masPista) {
            const nombre = validarString("Ingrese nombre de la canción");
            const duracion = validarNumero("Ingrese la duración de la canción en segundos");

            // Crear nueva pista y agregarla al disco
            const nuevaPista = new Pista(nombre, duracion);
            nuevoDisco.pistas.push(nuevaPista);
            masPista = confirm("¿Desea cargar otra canción?");
        }
    }

    pedirNumId(num) {
        return this.discos.some(disco => disco.id === num);
    }
    

    buscarPorId() {
        let num = validarNumero("Ingrese el ID del disco"); // Assuming you have a function for input
        let resultados = this.discos.filter(disco => disco.id === num);
    
        let html = "";
        if (resultados.length !== 0) {
            resultados.forEach(res => {
                html += res.toHTML(); 
            });
        } else {
            html += `<div class="alert alert-danger" role="alert">
            <p class="text-center">No se encontró ningún disco con ese ID.</p>
            </div>`;
        }
    
        document.querySelector(".misDiscos").innerHTML = html;
    }
    
    


    mostrarDiscos() {
        document.querySelector(".misDiscos").innerHTML = this.toHTML();
    }




/////////////////// adicionales //////////////////////

 
    









}



/*
if (this.discos.length === 0) {
    console.log("Esta rocola está vacía");
    document.getElementById('tablaDiscos').innerHTML = "Esta rocola está vacía";
} else {
    let respuesta = ""; // Inicializar respuesta como una cadena vacía
    
    for (const disco of this.discos) {
        respuesta += `<img src="${disco.portada}" width="100px">\n`;
        respuesta += `<h5>${disco.nombre}</h5>`; // Corregido: eliminado el `"` extra
        respuesta += `<p>${disco.autor}</p>`; 
        respuesta += `<p>${disco.id}</p>`;
        // Aquí podrías agregar un recorrido para las pistas si lo deseas
    }

    // Muestra la respuesta en el HTML
    document.getElementById('tablaDiscos').innerHTML = respuesta;
}*/