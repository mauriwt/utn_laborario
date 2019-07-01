import { Validators } from "@angular/forms";

export class Ordenador {
  id_pc?: number;
  codutnpc?: string;
  tipopc?: string;
  id_marca?: number;
  modelopc?: string;
  colorpc?: string;
  m_marcapc?: string;
  m_nseriepc?: string;
  m_colorpc?: string;
  p_marcpc?: string;
  p_modelopc?: string;
  p_nseriepc?: string;
  p_colorpc?: string;
  p_tampc?: number;
  seriecpu?: string;
  mrprocesador?: string;
  moprocesador?: string;
  capacidaddisco?: string;
  capacidadram?: string;
  public static getValidators() {
    return {
      codutnpc: {
        validators: {
          notEmpty: {
            message: ' es un campo obligatorio.'
          },
          regexp: {
            regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
            message: '<b>El campo solo permite letras y números.</b>'
          },
          stringLength: {
            min: 5,
            max: 30,
            message: ' debe tener de 5 a 30 carácteres.'
          },
        },
      },
      tipopc: {
        validators: {
          notEmpty: {
            message: ' es un campo obligatorio.'
          },
          regexp: {
            regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
            message: '<b>El campo solo permite letras y números.</b>'
          },
          stringLength: {
            min: 5,
            max: 30,
            message: ' debe tener de 5 a 30 carácteres.'
          },
        },
      },
      id_marca: {
        validators: {
          notEmpty: {
            message: ' es un campo obligatorio.'
          },
          regexp: {
            regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
            message: '<b>El campo solo permite letras y números.</b>'
          },
          stringLength: {
            min: 5,
            max: 30,
            message: ' debe tener de 5 a 30 carácteres.'
          },
        },
      },
      modelopc: {
        validators: {
          notEmpty: {
            message: ' es un campo obligatorio.'
          },
          regexp: {
            regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
            message: '<b>El campo solo permite letras y números.</b>'
          },
          stringLength: {
            min: 5,
            max: 30,
            message: ' debe tener de 5 a 30 carácteres.'
          },
        },
      },
      colorpc: {
        validators: {
          notEmpty: {
            message: ' es un campo obligatorio.'
          },
          regexp: {
            regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
            message: '<b>El campo solo permite letras y números.</b>'
          },
          stringLength: {
            min: 5,
            max: 30,
            message: ' debe tener de 5 a 30 carácteres.'
          },
        },
      },
      m_marcapc: {
        validators: {
          notEmpty: {
            message: ' es un campo obligatorio.'
          },
          regexp: {
            regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
            message: '<b>El campo solo permite letras y números.</b>'
          },
          stringLength: {
            min: 5,
            max: 30,
            message: ' debe tener de 5 a 30 carácteres.'
          },
        },
      },
      m_nseriepc: {
        validators: {
          notEmpty: {
            message: ' es un campo obligatorio.'
          },
          regexp: {
            regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
            message: '<b>El campo solo permite letras y números.</b>'
          },
          stringLength: {
            min: 5,
            max: 30,
            message: ' debe tener de 5 a 30 carácteres.'
          },
        },
      },
      m_colorpc: {
        validators: {
          notEmpty: {
            message: ' es un campo obligatorio.'
          },
          regexp: {
            regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
            message: '<b>El campo solo permite letras y números.</b>'
          },
          stringLength: {
            min: 5,
            max: 30,
            message: ' debe tener de 5 a 30 carácteres.'
          },
        },
      },
      p_marcpc: {
        validators: {
          notEmpty: {
            message: ' es un campo obligatorio.'
          },
          regexp: {
            regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
            message: '<b>El campo solo permite letras y números.</b>'
          },
          stringLength: {
            min: 5,
            max: 30,
            message: ' debe tener de 5 a 30 carácteres.'
          },
        },
      },
      p_modelopc: {
        validators: {
          notEmpty: {
            message: ' es un campo obligatorio.'
          },
          regexp: {
            regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
            message: '<b>El campo solo permite letras y números.</b>'
          },
          stringLength: {
            min: 5,
            max: 30,
            message: ' debe tener de 5 a 30 carácteres.'
          },
        },
      },
      p_nseriepc: {
        validators: {
          notEmpty: {
            message: ' es un campo obligatorio.'
          },
          regexp: {
            regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
            message: '<b>El campo solo permite letras y números.</b>'
          },
          stringLength: {
            min: 5,
            max: 30,
            message: ' debe tener de 5 a 30 carácteres.'
          },
        },
      },
      p_colorpc: {
        validators: {
          notEmpty: {
            message: ' es un campo obligatorio.'
          },
          regexp: {
            regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
            message: '<b>El campo solo permite letras y números.</b>'
          },
          stringLength: {
            min: 5,
            max: 30,
            message: ' debe tener de 5 a 30 carácteres.'
          },
        },
      },
      p_tampc: {
        validators: {
          notEmpty: {
            message: ' es un campo obligatorio.'
          },
          regexp: {
            regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
            message: '<b>El campo solo permite letras y números.</b>'
          },
          stringLength: {
            min: 5,
            max: 30,
            message: ' debe tener de 5 a 30 carácteres.'
          },
        },
      },
      seriecpu: {
        validators: {
          notEmpty: {
            message: ' es un campo obligatorio.'
          },
          regexp: {
            regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
            message: '<b>El campo solo permite letras y números.</b>'
          },
          stringLength: {
            min: 5,
            max: 30,
            message: ' debe tener de 5 a 30 carácteres.'
          },
        },
      },
      mrprocesador: {
        validators: {
          notEmpty: {
            message: ' es un campo obligatorio.'
          },
          regexp: {
            regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
            message: '<b>El campo solo permite letras y números.</b>'
          },
          stringLength: {
            min: 5,
            max: 30,
            message: ' debe tener de 5 a 30 carácteres.'
          },
        },
      },
      moprocesador: {
        validators: {
          notEmpty: {
            message: ' es un campo obligatorio.'
          },
          regexp: {
            regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
            message: '<b>El campo solo permite letras y números.</b>'
          },
          stringLength: {
            min: 5,
            max: 30,
            message: ' debe tener de 5 a 30 carácteres.'
          },
        },
      },
      capacidaddisco: {
        validators: {
          notEmpty: {
            message: ' es un campo obligatorio.'
          },
          regexp: {
            regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
            message: '<b>El campo solo permite letras y números.</b>'
          },
          stringLength: {
            min: 5,
            max: 30,
            message: ' debe tener de 5 a 30 carácteres.'
          },
        },
      },
      capacidadram: {
        validators: {
          notEmpty: {
            message: ' es un campo obligatorio.'
          },
          regexp: {
            regexp: /^[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$/i,
            message: '<b>El campo solo permite letras y números.</b>'
          },
          stringLength: {
            min: 5,
            max: 30,
            message: ' debe tener de 5 a 30 carácteres.'
          },
        },
      },
    }
  }
}