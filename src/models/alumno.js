export default class Alumno {
    constructor(username = "", dni = "", edad = 0) {
        this.username = username;
        this.dni = dni;
        this.edad = edad;
    }

    toString() {
        let returnValue = `Alumno: ${this.username}, DNI: ${this.dni}, Edad: ${this.edad}`;
        return returnValue;
    }
}