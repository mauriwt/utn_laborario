import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import {Activos ,CatActivos} from 'app/models';
import { config } from 'app/shared/smartadmin.config';

declare var $;
@Component({
  selector: 'app-activos',
  templateUrl: './activos.component.html',
  styleUrls: ['./activos.component.css']
})
export class ActivosComponent implements OnInit {

  @ViewChild('mdPactivos') modal: any;
  public cargando: boolean;
  private base = config.APIRest.url;
  public parametros: Activos;
  public Pactivos: Activos;
  //categoria
  public catprt: CatActivos[];
  public tipoSelected: number;

  constructor(private crud: CRUDService, private router: Router, private aroute: ActivatedRoute,
     private msj:AlertasService) { }
  ngOnInit() {
    this.getAplicaciones();
    this.getAplicacionesCat();
    this.Pactivos = new Activos();
  }

  getAplicaciones() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.activos.list}`).subscribe(response => {
      (this.parametros = response,
      this.cargando = false);
       }, error =>{
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
  })
   }

  getAplicacionesCat() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.catactivos.list}`).subscribe(response => {
      this.catprt = response;
      this.cargando = false;
    }, error =>{
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }

  getNombre(idCategoria): string{
    let categoria = this.catprt.find(cat => cat.id_categoria = idCategoria);
    if(categoria)
      return categoria.nombre;
    else return "No aplica";
  }

  saveValidar(valid) {
    if (!valid) return;
    if (this.Pactivos.id_activos) {
      this.save("update", `${config.APIRest.activos.update}/${this.Pactivos.id_activos}`);
    } else {
      this.save("insert",config.APIRest.activos.add);
    }
  }

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

  setAtributos() {
    this.Pactivos.estad = true;
    this.Pactivos.tipocategoria = this.tipoSelected;
  }

   getFila(lugar){
    this.Pactivos = new Activos();
    this.Pactivos = Object.assign({}, lugar)
    this.modal.show();
  }
  
  cancelar(){
    this.Pactivos = Object.assign({}, new Activos());
    $('#frmLugar').bootstrapValidator('resetForm', true);
    this.modal.hide();
  }

  open(){
    this.modal.show();
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

