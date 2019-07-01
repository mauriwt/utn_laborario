import { Validators } from "@angular/forms";

export class UbOrdenadores{
    id_ubicacion_esp: number;
    id_pc: number;
    
 
    public static getValidators() {

        return {
           id_ubicacion_esp: {
            validators: {
               notEmpty: {
                  message: 'El Espacio es obligatorio.'
               },
            },
         },
         id_pc: {
            validators: {
               notEmpty: {
                  message: 'El Codigo de La Computadora es obligatorio.'
               },
            },
         },
        }
     }
  }