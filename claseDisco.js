class Disco {
    constructor(nombre, autor, portada, id) {

        //propiedades 
        this.nombre = nombre;
        this.autor = autor;
        this.portada = portada;
        this.id = id;
        this.pistas = [];

    }


    duracionTotalCd() {
        let total = 0;
        for (let pista of this.pistas) {
            //recorro y sumo la duracion de las pistas
            total += pista.duracion;

        }
        return this.convertirADuracionFormateada(total);
    }



    cantidadDePistas() {
        return this.pistas.length;
    }

    promedioDuracionDisco() {
        let prom = 0;
        let total = 0;
        for (let pista of this.pistas) {
            //recorro y sumo la duracion de las pistas
            total += pista.duracion;

        }
        //duracion total del disco lo divido por la cantidad de pistas 
        prom = total / this.pistas.length;
        const promedioRedondeado = Math.round(prom);
        return this.convertirADuracionFormateada(promedioRedondeado);

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

    convertirADuracionFormateada(duracion) {
        const horas = Math.floor(duracion / 3600);
        const minutos = Math.floor((duracion % 3600) / 60);
        const secs = duracion % 60;

        return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    

    toHTML() {


        return `
                    <div class="container bg mt-2">
                         <div class="tituloDisco">
                                <h3><i class="fa-solid fa-music" style="color: #d0062f;"></i> ${this.nombre}</h3>
                            </div>          
                             <div class="row">

                                    <div class="col-12 col-md-4 p-1">
                                        <img src="${this.portada}" alt="${this.nombre} portada">
                                        <div class="texAutor">
                                            <h4>Autor: ${this.autor}</h4>
                                            <h5>ID: ${this.id}</h5>

                                            <div class="infoAdicional">
                                            <h5 class="text-center">Info Adicional</h5>
                                            <ul class="list-group list-group-flush p-2">
                                                 <li class="list-group-item">Duracion total disco:<br>${this.duracionTotalCd()}</li>
                                                 <li class="list-group-item">Cantidad de Pistas:<br> ${this.cantidadDePistas()}</li>
                                                 <li class="list-group-item">Promedio de duracion:<br> ${this.promedioDuracionDisco()}</li>
                                                 <li class="list-group-item">Pista con mayor duracion:<br> ${this.pistaMayorDuracion()}</li>
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
                                                ${this.pistas.map(pista => `
                                                    <tr class="p-3">
                                                        <td class="text-uppercase"><i class="fa-solid fa-circle-play" style="color: #d0062f;"></i>  ${pista.nombre}</td>
                                                        <td><i class="fa-solid fa-clock" style="color: #d0062f;"></i>  ${pista.formatearDuracion()}</td>
                                                    </tr>
                                                `).join('')}
                                            </tbody>
                                        </table>
                                    </div>
                

                            </div> 
                        </div>
                `;
    }


}














