export class Docentes {
  id_docente: number;
  id_carrera_doc?: number;
  tipo_documento_doc?: number;
  documento_doc?: string;
  nombre_doc?: string;
  apellido_doc?: string;
  correo_doc?: string;
  telefono_doc?: string;
  direccion_doc?: string;

  public static getValidators() {
    return {
      id_carrera_doc: {
        validators: {
          notEmpty: {
            message: 'La Carrera es un campo obligatorio.'
          },
          regexp: {
            regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
            message: '<b>El campo solo permite letras y números.</b>'
          },
        },
      },
      tipo_documento_doc: {
        validators: {
          notEmpty: {
            message: 'La el tipo de cocumento es un campo obligatorio.'
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
      documento_doc: {
        validators: {
          notEmpty: {
            message: 'Documento es un campo obligatorio.'
          },
          regexp: {
            regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
            message: '<b>El campo solo permite letras y números.</b>'
          },
          stringLength: {
            min: 5,
            max: 30,
            message: 'Documento debe tener de 5 a  carácteres.'
          },
        },
      },
      nombre_doc: {
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
      apellido_doc: {
        validators: {
          notEmpty: {
            message: 'El Apellido es un campo obligatorio.'
          },
          regexp: {
            regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
            message: '<b>El campo solo permite letras y números.</b>'
          },
          stringLength: {
            min: 5,
            max: 30,
            message: 'El Apellido debe tener de 5 a 30 carácteres.'
          },
        },
      },
      correo_doc: {
        validators: {
          notEmpty: {
            message: 'El nombre es un campo obligatorio.'
          },
          regexp: {
            regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ]*$/i,
            message: '<b>El campo solo permite letras y números.</b>'
          },
          stringLength: {
            min: 5,
            max: 30,
            message: 'El nombre debe tener de 5 a 30 carácteres.'
          },
        },
      },
      telefono_doc: {
        validators: {
          notEmpty: {
            message: 'Telefono es un campo obligatorio.'
          },
          regexp: {
            regexp: /^[0-9]*$/i,
            message: '<b>El campo solo permite números.</b>'
          },
          stringLength: {
            min: 5,
            max: 30,
            message: 'Telefono debe tener de 5 a 30 carácteres.'
          },
        },
      }, 
      direccion_doc: {
        validators: {
          notEmpty: {
            message: 'Direccion es un campo obligatorio.'
          },
          regexp: {
            regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
            message: '<b>El campo solo permite letras y números.</b>'
          },
          stringLength: {
            min: 10,
            max: 100,
            message: 'Direccion debe tener de 10 a 100 carácteres.'
          },
        },
      },
    }
  }
}