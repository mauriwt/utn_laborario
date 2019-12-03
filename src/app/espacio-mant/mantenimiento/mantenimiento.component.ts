import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import { Mantenimiento, TipoMant, Ordenador, Activos, Eqelectricos } from 'app/models';
import { config } from 'app/shared/smartadmin.config';
import { FormControl } from '@angular/forms';


import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';


declare var $;
declare var moment;
@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent implements OnInit {


  @ViewChild('mdmAnten') modal: any;
  @ViewChild('mdfinManteniento') mfinmodal: any;
  @ViewChild('mdDeletactivos') deletedmodal: any;
  @ViewChild('mdDetalleactivo') detallemodal: any;
  @ViewChild('mdUpdateactivo') updatemodal: any;
  public cargando: boolean;
  private base = config.APIRest.url;
  public parametros: Mantenimiento[];
  public mAnten: Mantenimiento;
  public tmantenimienro: TipoMant[];
  public ordenador: Ordenador[];
  public activos: Activos[];
  public eqelectricos: Eqelectricos[];

  fecha: string;
  hora: string;
  constructor(private crud: CRUDService, private router: Router, private aroute: ActivatedRoute,
    private msj: AlertasService) { }

  ngOnInit() {
    this.mAnten = new Mantenimiento();
    this.parametros = new Array<Mantenimiento>();
    this.ordenador = new Array<Ordenador>();
    this.activos = new Array<Activos>();
    this.eqelectricos = new Array<Eqelectricos>();

    this.getAplicaciones();
  }

  /**
   * Metodos Get de la aplicacion
  */
  getAplicaciones() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.mantenimiento.list}`).subscribe(response => {
      this.parametros = response;
      this.cargando = false;
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }

  getActivos() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.activoss.list}`).subscribe(response => {
      this.parametros = response;
      this.cargando = false;
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }

  getdatosActivo(id): string {
    let categoriap = this.activos.find(cat => cat.cod_utn == id);
    if (categoriap)
      return "Nombre: " + categoriap.nombre + "\n " + "tipo " + categoriap.tipocategoria + "\n " + "Categoria" + categoriap.serie;
    else return " ";
  }
  getDetalle(mante) {
    this.mAnten = new Mantenimiento();
    this.mAnten = Object.assign({}, mante)
    this.detallemodal.show();
  }
  detallecancelar() {
    this.mAnten = Object.assign({}, new Mantenimiento());
    $('#defrmActivo').bootstrapValidator('resetForm', true);
    this.detallemodal.hide();
  }

  getFila(mantenimiento) {
    this.mAnten = new Mantenimiento();
    this.mAnten = Object.assign({}, mantenimiento)
    this.modal.show();
  }
  cancelar() {
    this.mAnten = Object.assign({}, new Mantenimiento());
    $('#frmMantenimiento').bootstrapValidator('resetForm', true);
    this.modal.hide();
  }

  getFilaFin(mantenimiento) {
    this.mAnten = new Mantenimiento();
    this.mAnten = Object.assign({}, mantenimiento)
    this.mfinmodal.show();
  }
  cancelarFin() {
    this.mAnten = Object.assign({}, new Mantenimiento());
    $('#frmMantenimiento').bootstrapValidator('resetForm', true);
    this.mfinmodal.hide();
  }



  open() {
    this.modal.show();
  }

  /**
   *  Metodo del  Typehead
   */
  noResult = false;
  selectedOption: any;

  typeaheadNoResults(event: boolean): void {
    this.noResult = event;
  }
  /**
   * Metodos de Guardado y editado
   */


  save(tipo, url) {
    this.cargando = true;
    this.modal.hide();
    let fe = new Date(this.convertirFecha(this.fecha, this.hora))
    this.mAnten.fecha_ingreso = fe.getTime();
    console.log(this.mAnten)
    this.crud.save(`${this.base}${url}`, this.mAnten, tipo).subscribe(response => {
      this.getAplicaciones();
      this.cancelar();
      this.msj.mostrarAlertaMessage("<b>Información</b>", "<b>El registro se guardó correctamente.</b>", "")
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detectó un problema en la respuesta del servicio.</b>", "")
      this.cargando = false;
    })
  }
  savemto(tipo, url) {
    this.cargando = true;
    this.modal.hide();
    let fe = new Date(this.convertirFecha(this.fecha, this.hora))
    this.mAnten.fecha_entrega = fe.getTime();
    console.log(this.mAnten)
    this.crud.save(`${this.base}${url}`, this.mAnten, tipo).subscribe(response => {
      this.getAplicaciones();
      this.cancelar();
      this.msj.mostrarAlertaMessage("<b>Información</b>", "<b> El mantenimiento se guardó correctamente.</b>", "")
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detectó un problema en la respuesta del servicio.</b>", "")
      this.cargando = false;
    })
  }

  savemtoValidar(valid) {
    if (!valid) return;
    if (this.mAnten.id_mantenimiento) {
      this.save("update", `${config.APIRest.mantenimiento.update}/${this.mAnten.id_mantenimiento}`);
    }
    this.updatemodal.hide();
  }

  saveValidar(valid) {
    if (!valid) return;
    if (this.mAnten.id_mantenimiento) {
      this.save("insert", config.APIRest.mantenimiento.add);
    }
  }

  updateValidar(valid) {
    if (!valid) return;
    if (this.mAnten.id_mantenimiento) {
      this.save("update", `${config.APIRest.mantenimiento.update}/${this.mAnten.id_mantenimiento}`);
    }
    this.updatemodal.hide();
  }

  
  /**
   * Metodos de Eliminar
   */

  deletValidar(valid) {
    if (!valid) return;
    if (this.mAnten.id_mantenimiento) {
      this.save("delete", `${config.APIRest.mantenimiento.delete}/${this.mAnten.id_mantenimiento}`)
    }
    this.deletedmodal.hide();
  }


  deletedFila(mante) {
    this.mAnten = new Mantenimiento();
    this.mAnten = Object.assign({}, mante)
    this.deletedmodal.show();
  }
  deletcancelar() {
    this.mAnten = Object.assign({}, new Mantenimiento());
    $('#defrmActivo').bootstrapValidator('resetForm', true);
    this.deletedmodal.hide();
  }





  /**
   * metodos de fecha
   */
  ctrl = new FormControl('', (control: FormControl) => {
    const value = control.value;
    if (!value) { return null; }
    if (value.hour <= 7) { return { tooEarly: true }; }
    if (value.hour >= 0) {
      if (value.minute >= 1) {
        return { tooLate: true };
      }
    }
    return null;
  });

  getCast(id) {
    if (id) {
      console.log(new Date(+id));
      return new Date(+id);
    }

  }
  public setFecha(e) {
    $("#fecha").val(e).trigger('input');
    this.fecha = e;
  }
  public setHora(e) {
    $("#hora").val(e).trigger('input');
    this.hora = e;
  }

  public convertirFecha(fecha: string, hora: string) {
    if (fecha && hora)
      return moment(`${fecha} ${hora}`, 'DD/MM/yyyy HH:mm').toDate();
    else if (fecha)
      return moment(fecha, 'DD/MM/yyyy').toDate();
    return null;
  }
  public lista: string[] = [
    'computadores',
    'Equipos Electricos',
    'Activos'];


  getValidators() {
    return {
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: Mantenimiento.getValidators()
    };
  }

}