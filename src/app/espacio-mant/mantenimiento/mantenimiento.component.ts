import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import { Mantenimiento, TipoMant, Ordenador, Activos, Eqelectricos } from 'app/models';
import { config } from 'app/shared/smartadmin.config';

declare var $;
declare var moment;
@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent implements OnInit {


  @ViewChild('mdmAnten') modal: any;
  @ViewChild('mdfinMantenimiento') finmodal: any;
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
  fechas: string;
  horas: string;
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
    this.crud.obtener(`${this.base}${config.APIRest.activos.list}`).subscribe(response => {
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

  getElectricos() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.eqelectricos.list}`).subscribe(response => {
      this.parametros = response;
      this.cargando = false;
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }

  getdatosElectrico(id): string {
    let ordenador = this.ordenador.find(cat => cat.codutnpc == id);
    if (ordenador)
      return "Nombre: " + ordenador.modelopc;
    else return " ";
  }
  /**
   * @memberof Get_ordenador
   * metodos gen del ordenador
   */
  getOrdenador() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.ordenador.list}`).subscribe(response => {
      this.parametros = response;
      this.cargando = false;
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }

  noResult = false;
  selectedOption: any;

  typeaheadNoResults(event: boolean): void {
    this.noResult = event;
  }











  
  /**
   * @param valid. Tabla manteniemto no necesita validacion de una clave unica devido a que el ID
   *  es auto incrementable  y valores como problema  mantenimiento correctivo y preventivo pueden repetirnse.
   */

  saveValidar(valid) {
    if (!valid) return;
    let dateDay = new Date();
    if (this.mAnten.id_mantenimiento) {
      this.save("update", `${config.APIRest.mantenimiento.update}/${this.mAnten.id_mantenimiento}`);
    } else {
      this.mAnten.fecha_ingreso = dateDay.getTime();
      this.save("insert", config.APIRest.mantenimiento.add);
    }
  }

  save(tipo, url) {
    this.cargando = true;
    this.modal.hide();
    this.crud.save(`${this.base}${url}`, this.mAnten, tipo).subscribe(response => {
      this.getAplicaciones();
      this.cancelar();
      this.msj.mostrarAlertaMessage("<b>Información</b>", "<b>El registro se guardó correctamente.</b>", "")
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detectó un problema en la respuesta del servicio.</b>", "")
      this.cargando = false;
    })
  }
  mantenimentoValidar(valid) {
    if (!valid) return;
    if (this.mAnten.id_mantenimiento) {
      this.saves("update", `${config.APIRest.mantenimiento.update}/${this.mAnten.id_mantenimiento}`);
    } this.finmodal.hide();
  }
  saves(tipo, url) {
    this.cargando = true;
    this.finmodal.hide();
    let dateDate = new Date();
    this.mAnten.fecha_entrega = dateDate.getTime();
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
  open() {
    this.modal.show();
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
  getFilaSa(mantenimiento) {
    this.mAnten = new Mantenimiento();
    this.mAnten = Object.assign({}, mantenimiento)
    this.finmodal.show();
  }
  cancelarSa() {
    this.mAnten = Object.assign({}, new Mantenimiento());
    $('#frmMantenimiento').bootstrapValidator('resetForm', true);
    this.finmodal.hide();
  }
  getCast(id) {
    if (id) {
      return new Date(+id);
    }

  }

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


  public lista: string[] = [
    'computadores',
    'Equipos Electricos',
    'Activos'];

}

