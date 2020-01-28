import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUDService, AlertasService } from 'app/providers';
import { Router, ActivatedRoute } from '@angular/router';
import { Docentes} from 'app/models';
import { config } from 'app/shared/smartadmin.config';
declare var $;
@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {

  @ViewChild('mddOcente') modal: any;
  public cargando: boolean;
  private base = config.APIRest.url;
  public parametros: Docentes[];
  public dOcente: Docentes;

  constructor(private crud: CRUDService, private router: Router, private aroute: ActivatedRoute,
     private msj:AlertasService) { }

  ngOnInit() {
    this.dOcente = new Docentes();
    this.getAplicaciones();
  }
 
  getAplicaciones() {
    this.cargando = true;
    this.crud.obtener(`${this.base}${config.APIRest.docentes.list}`).subscribe(response => {
      this.parametros = response;
      this.cargando = false;
    }, error =>{
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detecto un problema en la respuesta del servicio.</b>", error)
      this.cargando = false;
    })
  }

  
  saveValidar(valid) {
    if (!valid) return;
    let ress = this.parametros.find(dat => dat.documento_doc === this.dOcente.documento_doc);
    // Res es utilizado para el update 
    let res = this.parametros.find(dat => dat.id_docente === this.dOcente.id_docente && dat.documento_doc === this.dOcente.documento_doc);
    if (this.dOcente.id_docente) {
      if (!res) {
        this.save("update", `${config.APIRest.docentes.update}/${this.dOcente.id_docente}`);

      } else {
        this.msj.mostrarAlertaError("<b>Error</b>", "<b>El nombre ya esta en uso.</b>", "")
      }
    } else {
      if (!ress) {
        this.save("insert",config.APIRest.docentes.add);
    } else {
        this.msj.mostrarAlertaError("<b>Error</b>", "<b>El nombre ya esta en uso.</b>", "")
      }

    }
  }
  save(tipo, url) {
    this.cargando = true;
    this.modal.hide();
    console.log(this.dOcente)
    this.crud.save(`${this.base}${url}`, this.dOcente, tipo).subscribe(response => {
      this.getAplicaciones();
      this.cancelar();
      this.msj.mostrarAlertaMessage("<b>Información</b>", "<b>El registro se guardó correctamente.</b>", "")
    }, error => {
      this.msj.mostrarAlertaError("<b>Error</b>", "<b>Se detectó un problema en la respuesta del servicio.</b>", "")
      this.cargando = false;
    })
  }

  getFila(lugar){
    this.dOcente = new Docentes();
    this.dOcente = Object.assign({}, lugar)
    this.modal.show();
  }
  cancelar(){
    this.dOcente = Object.assign({}, new Docentes());
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
      fields: Docentes.getValidators()
    };
  }

}
