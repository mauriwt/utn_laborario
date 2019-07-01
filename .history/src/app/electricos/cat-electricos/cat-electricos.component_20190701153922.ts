import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import {CatEqelectricos } from 'app/models';
import { config } from 'app/shared/smartadmin.config';

declare var $;
@Component({
  selector: 'app-cat-electricos',
  templateUrl: './cat-electricos.component.html',
  styleUrls: ['./cat-electricos.component.css']
})
export class CatElectricosComponent implements OnInit {
  
  @ViewChild('mdcatEqelectricos') modal: any;
  public cargando: boolean;
  private base = config.APIRest.url;
  public parametros: CatEqelectricos;
  public catEqelectricos: CatEqelectricos;

  constructor(private crud: CRUDService, private router: Router, private aroute: ActivatedRoute,
     private msj:AlertasService) { }

  ngOnInit() {
    this.catEqelectricos = new CatEqelectricos();
    this.getAplicaciones();
  }
 
  getAplicaciones() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.cateqelectricos.list}`).subscribe(response => {
      this.parametros = response;
      this.cargando = false;
    }, error =>{
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }

  saveValidar(valid) {
    if (!valid) return;
    if (this.catEqelectricos.id_cat_eq_electricos) {
      this.save("update", `${config.APIRest.cateqelectricos.update}/${this.catEqelectricos.id_cat_eq_electricos}`);
    } else {
      this.save("insert",config.APIRest.cateqelectricos.add);
    }
  }

  save(tipo, url) {
    this.cargando = true;
    this.modal.hide();
    console.log(this.catEqelectricos)
    this.crud.save(`${this.base}${url}`, this.catEqelectricos, tipo).subscribe(response => {
      this.getAplicaciones();
      this.cancelar();
      this.msj.mostrarAlertaMessage("<b>Información</b>", "<b>El registro se guardó correctamente.</b>", "")
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detectó un problema en la respuesta del servicio.</b>", "")
      this.cargando = false;
    })
  }

  getFila(categoria){
    this.catEqelectricos = new CatEqelectricos();
    this.catEqelectricos = Object.assign({}, categoria)
    this.modal.show();
  }
  cancelar(){
    this.catEqelectricos = Object.assign({}, new CatEqelectricos());
    $('#frmCate').bootstrapValidator('resetForm', true);
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
      fields: CatEqelectricos.getValidators()
    };
  }

}
