import { Validators } from "@angular/forms";

export class Activos {
   public id_activos: number;
   public id_categoria_ac: number;
   public nombre: string;
   public descripcion?: string;
   public serie: string;
   public cod_utn: string;
   public estado: string;
   public cantidad: string;

	public estad: boolean;
   public tipocategoria: any;

   public static getValidators() {

      return {
         id_categoria_ac: {
            validators: {
               notEmpty: {
                  message: 'La Categoria es obligatoria.'
               },
            },
         },
         nombre: {
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
         descripcion: {
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
         serie: {
            validators: {
               regexp: {
                  regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
                  message: '<b>El campo solo permite letras y números.</b>'
               },
               stringLength: {
                  min: 5,
                  max: 30,
                  message: 'La serie debe tener de 5 a 30 carácteres.'
               },
            },
         },
         cod_utn: {
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
         },
         estado: {
            validators: {
               notEmpty: {
                  message: 'El Estado es un campo obligatorio.'
               },
               regexp: {
                  regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
                  message: '<b>El campo solo permite letras y números.</b>'
               },
               stringLength: {
                  min: 5,
                  max: 30,
                  message: 'El Estado debe tener de 5 a 30 carácteres.'
               },
            },
         },
         cantidad: {
            validators: {
               notEmpty: {
                  message: 'El nombre es un campo obligatorio.'
               },
               regexp: {
                  regexp: /^[0-9]*$/i,
                  message: '<b>El campo solo permite números.</b>'
               },

            },
         },
      }
   }
}