export class Semestre {
    constructor(ID_SEMESTRE = null, NOMBRE = '', ESTADO = "1"){
        this.ID_SEMESTRE = ID_SEMESTRE;
        this.NOMBRE = NOMBRE;
        this.ESTADO = ESTADO;
    }




    ID_SEMESTRE: number;
    NOMBRE: string;
    ESTADO: string;
}
