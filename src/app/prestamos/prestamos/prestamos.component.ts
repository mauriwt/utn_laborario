import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import { RegPrestamo, Activos, Personas,Espacios,Docentes  } from 'app/models';
import { config } from 'app/shared/smartadmin.config';
import { FormControl } from '@angular/forms';

import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { isNgTemplate } from '@angular/compiler';

declare var $;
declare var moment;
@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent implements OnInit {

  @ViewChild('mdregPrestamoeEstudiante') modale: any;
  @ViewChild('mdregPrestamoDocente') modald: any;
  public cargando: boolean;
  private base = config.APIRest.url;
  public parametros: RegPrestamo[];
  public regPrestamo: RegPrestamo;
  public activo: Activos[];
  public personas: Personas[];
  
  public personas_p: Personas;
  public espacios: Espacios[];
  public docente: Docentes[];
  
  fecha: string;
  hora: string;

  constructor(private crud: CRUDService, private router: Router, private aroute: ActivatedRoute,
    private msj: AlertasService) { }

  ngOnInit() {
    this.activo = new Array<Activos>();
    this.personas = new Array<Personas>();
    this.espacios = new Array<Espacios>();
    this.docente = new Array<Docentes>();
    this.regPrestamo = new RegPrestamo();
    this.parametros = new Array<RegPrestamo>();
    this.getAplicaciones();
    this.getActivos();
    this.getPersonas();
    this.getDocentes();
    this.getEspacios();
  }
  
  getActivos() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.activos.list}`).subscribe(response => {
      this.activo = response;
      this.cargando = false;
    }, error =>{
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }
  getPersonas() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.personas.list}`).subscribe(response => {
      this.personas = response;
      this.cargando = false;
    }, error =>{
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }
  getEspacios() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.espacios.list}`).subscribe(response => {
      this.espacios = response;
      this.cargando = false;
    }, error =>{
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }
  getDocentes() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.docentes.list}`).subscribe(response => {
      this.docente = response;
      this.cargando = false;
    }, error =>{
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }
 
  getNactivos(id): string{
    let catactivo = this.activo.find(cat => cat.id_activos == id);
     if(catactivo)
      return catactivo.nombre;
    else return " ";
  }

  getNpersona(idPerona): string{
    let categoriap = this.personas.find(cat => cat.id_persona == idPerona);
    if(categoriap)
      return "Est: "+ categoriap.nombre;
    else return " ";
  }

   /** Metodos para realizar el Type head*/
  datospersona(idPerona): string{
    let categoriap = this.personas.find(cat => cat.documento == idPerona);
    if(categoriap)
      return "Nombre: "+ categoriap.nombre + "\n " + "Telefono "+ categoriap.telefono +"\n "+"Correo "+ categoriap.correo;
    else return " ";
  }
  datosdocente(idPerona): string{
    let categoriap = this.docente.find(cat => cat.documento_doc == idPerona);
    if(categoriap)
      return "Nombre: "+ categoriap.apellido_doc +" "+ categoriap.nombre_doc + "\n "+"Telefono "+ categoriap.telefono_doc + "\n "+"Correo"+ categoriap.correo_doc;
    else return " ";
  }
  enviarid(idPerona): string{
    let categoriap = this.personas.find(cat => cat.documento == idPerona);
    if(categoriap)
      return categoriap.id_persona + "";
    else return " ";
  }
  enviariddocente(idPerona): string{
    let categoriap = this.docente.find(cat => cat.documento_doc == idPerona);
    if(categoriap)
      return categoriap.id_docente + "";
    else return " ";
  }
  noResult = false;
  selectedOption: any;

      typeaheadNoResults(event: boolean): void {
        this.noResult = event;
      }
       
      /*** Cierrre de metodos de typeahead */


    getNespacios(idEspacio): string{
    let categoriae = this.espacios.find(cat => cat.id_ubicacion_esp == idEspacio);
    if(categoriae)
      return categoriae.nombre;
    else return " ";
  }
  
  getNdocentes(idDocente): string{
    let categoriad = this.docente.find(cat => cat.id_docente == idDocente);
    if(categoriad)
      return categoriad.nombre_doc;
    else return " ";
      }

   getAplicaciones() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.registroprestamo.list}`).subscribe(response => {
      this.parametros = response;
      this.cargando = false;
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }

  saveValidar(valid) {
    let auxced
    if (!valid) return;
 

    if (this.regPrestamo.id_regpres) {
      this.save("update", `${config.APIRest.registroprestamo.update}/${this.regPrestamo.id_regpres}`);
    } else {
      this.save("insert", config.APIRest.registroprestamo.add);
    }
  }
  save(tipo, url) {
    this.cargando = true;
    this.modale.hide();
    let fe = new Date(this.convertirFecha(this.fecha, this.hora))
    this.regPrestamo.hora_inicio_hrapr = fe.getTime();
     console.log(this.regPrestamo)
      this.crud.save(`${this.base}${url}`, this.regPrestamo, tipo).subscribe(response => {
        this.getAplicaciones();
        this.cancelar();
        this.msj.mostrarAlertaMessage("<b>Información</b>", "<b>El registro se guardó correctamente.</b>", "")
      }, error => {
        this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detectó un problema en la respuesta del servicio.</b>", "")
        this.cargando = false;
      })
     }
  getCast(id) {
    if (id) {
     // console.log(new Date(+id));
      return new Date(+id);
    }

  }

  getFila(prestamo) {
    this.regPrestamo = new RegPrestamo();
    this.regPrestamo = Object.assign({}, prestamo)
    this.modale.show();
    this.modald.show()
  }

  cancelar() {
    this.regPrestamo = Object.assign({}, new RegPrestamo());
    $('#frmLugar').bootstrapValidator('resetForm', true);
    this.modale.hide();
  }
  cancelard() {
    this.regPrestamo = Object.assign({}, new RegPrestamo());
    $('#frmLugard').bootstrapValidator('resetForm', true);
    this.modald.hide();
  }

  opene() {
    this.modale.show();
  }
  opend() {
    this.modald.show();
  }


  getValidators() {
    return {
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: RegPrestamo.getValidators()
    };
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
  
  
 

}












