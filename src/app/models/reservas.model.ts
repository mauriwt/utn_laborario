import { FormControl, Validators } from '@angular/forms';
var moment: any;
var f = new Date();
export class Reservas {
   id_regresv: number;
   id_persona?: number;
   id_ciclo?: number;
   id_ubicacion?: number;
   id_docente_res?: number;
   id_administrativo?:number;
   descripcion?: string;
   tipo_reserva?: string;
   fecha_inicio?: number;
   fecha_fin?: number;
   horas?: number;
   public static getValidators() {

         return {
      
         id_persona: {
            validators: {
               notEmpty: {
                  message: 'La Categoria es obligatormia.'
               },
            },
         },
         id_ubicacion: {
            validators: {
               notEmpty: {
                  message: 'La Categoria es obligatoria.'
               },
            },
         },
         id_docente_res: {
            validators: {
               notEmpty: {
                  message: 'El Docente es obligatoria.'
               },
            },
         },
         descripcion: {
            validators: {
               notEmpty: {
                  message: 'El nombre es un campo obligatorio.'
               },
               regexp: {
                  regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
                  message: '<b>El campo solo permite letras y números.</b>'
               },
               stringLength: {
                  min: 5,
                  max: 30,
                  message: 'El nombre debe tener de 5 a 30 carácteres.'
               },
            },
         },
         tiporeserva: {
            validators: {
               notEmpty: {
                  message: 'La descripción es un campo obligatorio.'
               },
               regexp: {
                  regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
                  message: '<b>El campo solo permite letras y números.</b>'
               },
               stringLength: {
                  min: 10,
                  max: 100,
                  message: 'La descripción debe tener como minimo 10 carácteres y máximo 100.'
               },
            },
         },
         fecha_inicio: {
            validators: {
               value: '17/07/2019',
                            date: {
                  message: 'The date is not valid',
                  format: '17/07/2019',
                  min: f.getDate(),
              },
           
                           
         },},
         fecha_fin: {
            validators: {
               regexp: {
                  regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
                  message: '<b>El campo solo permite letras y números.</b>'
               },
               stringLength: {
                  min: 5,
                  max: 30,
                  message: 'El Codigo Utn debe tener de 5 a 30 carácteres.'
               },
               
              
            },
         }
      }
   }
}