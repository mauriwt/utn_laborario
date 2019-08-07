export class Horario{
    id_horario: number
    id_ciclo: number
    docente: string
    paralelo: string
    matricula: string
    dia  : string
    horario: string
    nivel: string
    aula: string
    dependencia: string
    
    public static getValidators() {
        return {

        }
    }
 }