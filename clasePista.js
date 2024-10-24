class Pista {
    constructor(nombre , duracion){

        this.nombre=nombre;
        this.duracion=duracion;
    }


formatearDuracion() {
    const horas = String(Math.floor(this.duracion / 3600)).padStart(2, '0');
    const minutos = String(Math.floor((this.duracion % 3600) / 60)).padStart(2, '0');
    const segundos = String(this.duracion % 60).padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
}




}