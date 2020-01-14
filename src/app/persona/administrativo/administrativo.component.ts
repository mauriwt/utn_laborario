
import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import { Administrativo} from 'app/models';
import { config } from 'app/shared/smartadmin.config';
declare var $;

@Component({
  selector: 'app-administrativo',
  templateUrl: './administrativo.component.html',
  styleUrls: ['./administrativo.component.css']
})
export class AdministrativoComponent implements OnInit {

  @ViewChild('mddOcente') modal: any;


  public cargando: boolean;
  public parametros: Administrativo;
   private base = config.APIRest.url;
   public Admint: Administrativo;
  
   constructor(private crud: CRUDService, private router: Router, private aroute: ActivatedRoute,
    private msj:AlertasService) { }

 ngOnInit() {
   this.Admint = new Administrativo();
   this.getAplicaciones();
 }

 getAplicaciones() {
   this.cargando = true;
   this.crud.obtener(`${this.base}${config.APIRest.admin.list}`).subscribe(response => {
     this.parametros = response;
     this.cargando = false;
   }, error =>{
     this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
     this.cargando = false;
   })
 }

 saveValidar(valid) {
   if (!valid) return;
   if (this.Admint.id_administrativo) {
     this.save("update", `${config.APIRest.admin.update}/${this.Admint.id_administrativo}`);
   } else {
     this.save("insert",config.APIRest.admin.add);
   }
 }

 save(tipo, url) {
   this.cargando = true;
   this.modal.hide();
   console.log(this.Admint)
   this.crud.save(`${this.base}${url}`, this.Admint, tipo).subscribe(response => {
     this.getAplicaciones();
     this.cancelar();
     this.msj.mostrarAlertaMessage("<b>Información</b>", "<b>El registro se guardó correctamente.</b>", "")
   }, error => {
     this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detectó un problema en la respuesta del servicio.</b>", "")
     this.cargando = false;
   })
 }

 getFila(lugar){
   this.Admint = new Administrativo();
   this.Admint = Object.assign({}, lugar)
   this.modal.show();
 }
 cancelar(){
   this.Admint = Object.assign({}, new Administrativo());
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
     fields: Administrativo.getValidators()
   };
 }

}
