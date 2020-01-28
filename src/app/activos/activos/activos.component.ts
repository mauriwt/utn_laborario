import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import { Activos, CatActivos } from 'app/models';
import { config } from 'app/shared/smartadmin.config';

declare var $;
declare let element;
declare let options;

@Component({
  selector: 'app-activos',
  templateUrl: './activos.component.html',
  styleUrls: ['./activos.component.css']
})
export class ActivosComponent implements OnInit {

  @ViewChild('mdPactivos') modal: any;
  @ViewChild('mdDeletactivos') deletedmodal: any;
  @ViewChild('mdDetalleactivo') detallemodal: any;

  public cargando: boolean;
  public cargandoCat: boolean;
  private base = config.APIRest.url;
  public parametros: Activos[];
  public Pactivos: Activos;
  //categoria
  public catprt: CatActivos[];

  constructor(private crud: CRUDService, private router: Router, private aroute: ActivatedRoute,
    private msj: AlertasService, private el: ElementRef) { }
  ngOnInit() {
    this.catprt = new Array<CatActivos>();
    this.parametros = new Array<Activos>();
    this.getAplicaciones();
    this.getAplicacionesCat();
    this.Pactivos = new Activos();
  }

  getAplicaciones() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.activos.list}`).subscribe(response => {
      (this.parametros = response,
        this.cargando = false);
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }

  getAplicacionesCat() {
    this.cargandoCat = true;
    this.crud.obtener(`${this.base}${config.APIRest.catactivos.list}`).subscribe(response => {
      this.catprt = response;
      console.log(response)
      this.cargandoCat = false;
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargandoCat = false;
    })
  }


  getNombre(idCategoria): string {
    let categoria = this.catprt.find(cat => cat.id_categoria == idCategoria);
    if (categoria)
      return categoria.nombre;
    else return "No aplica";
  }
  

  getEstado(estado): string{
    let activos = this.parametros.find(act=>act.estado == estado);
   if(activos){
    if(Boolean(activos.estado)==true){
     return "Sujeto a prestamo";
   }
    else 
    return "No sujeto a prestamo";
  }}


  /*
   *  SaveValidar es el metodo para la realizacion de 
  * Validaciones las cuales seran cumplidas acorde al orde establecido.
*/
  saveValidar(valid) {
    if (!valid) return;
    let rescu= this.parametros.find(dat => dat.cod_utn === this.Pactivos.cod_utn);
    let ress= this.parametros.find(dat => dat.serie === this.Pactivos.serie);
   let id= this.parametros.find(dat => dat.id_activos === this.Pactivos.id_activos)

    if (this.Pactivos.id_activos) {
          this.save("update", `${config.APIRest.activos.update}/${this.Pactivos.id_activos}`); 
        } else {
      if(!rescu){
        if(!ress){
      this.save("insert", config.APIRest.activos.add);
    
  }
  else { this.msj.mostrarAlertaError("<b>Error</b>", "<b>El numero de serie ya esta en Uso</b>", "")
  }
  }
    else { this.msj.mostrarAlertaError("<b>Error</b>", "<b>El Codigo Utn ya esta en Uso</b>", "")
  }
  }}

  save(tipo, url) {
    this.cargando = true;
    this.modal.hide();
    console.log(this.Pactivos)
    this.crud.save(`${this.base}${url}`, this.Pactivos, tipo).subscribe(response => {
      this.getAplicaciones();
      this.cancelar();
      this.msj.mostrarAlertaMessage("<b>Información</b>", "<b>El registro se guardó correctamente.</b>", "")
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detectó un problema en la respuesta del servicio.</b>", "")
      this.cargando = false;
    })
  }
  getFila(activo) {
    this.Pactivos = new Activos();
    this.Pactivos = Object.assign({}, activo)
    this.modal.show();
  }
  cancelar() {
    this.Pactivos = Object.assign({}, new Activos());
    $('#frmactivo').bootstrapValidator('resetForm', true);
    this.modal.hide();
  }
  open() {
    this.modal.show();
  }
  getDetalle(activo) {
    this.Pactivos= new Activos();
    this.Pactivos = Object.assign({}, activo)
    this.detallemodal.show();
  }
  deletValidar(valid) {
    if (!valid) return;
    if (this.Pactivos.id_activos) {
      this.save("delete", `${config.APIRest.activos.delete}/${this.Pactivos.id_activos}`)
    }
    this.deletedmodal.hide();
  }

  deletedFila(activo) {this.Pactivos = new Activos();
    this.Pactivos = Object.assign({}, activo)
    this.deletedmodal.show();
  }
  decancelar() {
    this.Pactivos = Object.assign({}, new Activos());
    $('#defrmActivo').bootstrapValidator('resetForm', true);
    this.deletedmodal.hide();
  }
    detacancelar() {
      this.Pactivos = Object.assign({}, new Activos());
      $('#defrmActivo').bootstrapValidator('resetForm', true);
      this.detallemodal.hide();
    }
  getValidators() {
    return {
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: Activos.getValidators()
    };
  }

}

